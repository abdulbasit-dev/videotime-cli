# 📼 VideoTime CLI

**VideoTime CLI** is a simple command-line tool that calculates the total duration of all video files in a given folder. It supports
multiple video formats and does not require FFmpeg to be installed system-wide.

## 🚀 Features

- Automatically detects and calculates the duration of all videos in a folder
- Supports common video formats: `.mp4`, `.mkv`, `.avi`, `.mov`, `.flv`, `.wmv`
- No system dependencies—bundled with **FFmpeg and FFprobe**
- User-friendly console output with **Chalk** for styling

## 📌 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/videotime-cli.git
   cd videotime-cli
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Make the CLI globally accessible:
   ```sh
   npm link
   ```

## 🔥 Usage

Run the CLI tool with the path to a folder containing videos:

```sh
videotime "/path/to/video/folder"
```

📌 **Example Output**

```
📂 Found 3 video(s). Calculating total duration...
✔ Processed: "video1.mp4" → 120.50 seconds
✔ Processed: "video2.mkv" → 300.75 seconds
✔ Processed: "video3.avi" → 180.00 seconds

⏳ Total Duration: 10m 1s
```

## 🛠️ Dependencies

This project uses:

- [Fluent-FFmpeg](https://www.npmjs.com/package/fluent-ffmpeg) for processing video metadata
- [@ffmpeg-installer/ffmpeg](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg) for bundled FFmpeg
- [@ffprobe-installer/ffprobe](https://www.npmjs.com/package/@ffprobe-installer/ffprobe) for bundled FFprobe
- [Chalk](https://www.npmjs.com/package/chalk) for styling console output

## 📝 License

This project is licensed under the **MIT License**.

---

Made with ❤️ by **Abdulbasit Salah**.
