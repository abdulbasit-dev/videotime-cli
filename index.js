#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeInstaller from '@ffprobe-installer/ffprobe';
import chalk from 'chalk';

// Set fluent-ffmpeg to use the installed FFmpeg and FFprobe binaries
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

// Supported video extensions
const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.flv', '.wmv'];

// Check if a file is a video
const isVideoFile = file => videoExtensions.includes(path.extname(file).toLowerCase());

// Get the duration of a single video file
const getVideoDuration = filePath => {
  return new Promise(resolve => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        console.error(chalk.red(`Error processing: "${filePath}" → ${err.message}`));
        resolve(0); // Skip file if an error occurs
      } else {
        resolve(metadata.format.duration || 0);
      }
    });
  });
};

// Calculate total duration of all videos in a folder
const calculateTotalDuration = async folderPath => {
  if (!fs.existsSync(folderPath)) {
    console.log(chalk.red('❌ Error: Folder does not exist.'));
    process.exit(1);
  }

  const files = fs.readdirSync(folderPath);
  const videoFiles = files.filter(isVideoFile);

  if (videoFiles.length === 0) {
    console.log(chalk.yellow('⚠️ No video files found in the folder.'));
    return;
  }

  console.log(chalk.blue(`📂 Found ${videoFiles.length} video(s). Calculating total duration...\n`));

  let totalDuration = 0;

  for (const file of videoFiles) {
    const filePath = path.join(folderPath, file);
    const duration = await getVideoDuration(filePath);
    console.log(chalk.green(`✔ Processed: "${file}" → ${duration.toFixed(2)} seconds`));
    totalDuration += duration;
  }

  // Convert total duration to HH:MM:SS format
  const hours = Math.floor(totalDuration / 3600);
  const minutes = Math.floor((totalDuration % 3600) / 60);
  const seconds = Math.floor(totalDuration % 60);
  console.log(chalk.cyan.bold(`\n⏳ Total Duration: ${hours}h ${minutes}m ${seconds}s`));
};

// Get folder path from command line argument
const folderPath = process.argv.slice(2).join(' ');

if (!folderPath) {
  console.log(chalk.red('Usage: node index.js "<folder_path>"'));
  process.exit(1);
}

// Run the tool
calculateTotalDuration(folderPath);
