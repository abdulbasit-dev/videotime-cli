# 📼 VideoTime CLI

**VideoTime CLI** is a simple command-line tool that calculates the total duration of all video files in a given folder. It supports
multiple video formats and comes bundled with **FFmpeg** and **FFprobe**, so you don't need to install them system-wide.

## 🚀 Features

- 🎥 **Automatic Video Detection**: Detects and calculates the duration of all videos in a folder.
- 📂 **Supports Common Formats**: Works with `.mp4`, `.mkv`, `.avi`, `.mov`, `.flv`, and `.wmv`.
- ⚙️ **No System Dependencies**: Bundled with **FFmpeg** and **FFprobe** for hassle-free usage.
- 🎨 **User-Friendly Output**: Uses **Chalk** for styled and readable console output.

## 📌 Installation

### Install Globally (Recommended)

To install VideoTime CLI globally, run:

```sh
npm install -g videotime-cli
```

Then, run:

```sh
videotime "/path/to/video/folder"
```

### Clone the Repository (Alternative)

If you prefer to clone the repository and install manually:

```sh
git clone https://github.com/abdulbasit-dev/videotime-cli.git
cd videotime-cli
```

Then, install dependencies:

```sh
npm install
```

Alternatively, you can link the package globally if you've cloned the repository:

```sh
npm link
```

After linking, you can use the `videotime` command from anywhere:

```sh
videotime "/path/to/video/folder"
```

### Run Without Global Installation

You can run the CLI tool directly using `npm run` without installing it globally. Add the following script to your `package.json`:

```json
"scripts": {
  "videotime": "node index.js"
}
```

Then, run the tool with:

```sh
npm run videotime -- "/path/to/video/folder"
```

## 🔥 Usage

Run the CLI tool with the path to a folder containing videos:

```sh
videotime "/path/to/video/folder"
```

If you’re already inside the folder containing the videos, you can simply run:

```sh
videotime .
```

Or, if using the `npm run` method:

```sh
npm run videotime -- "/path/to/video/folder"
```

### 📌 Example Output

```
📂 Found 3 video(s). Calculating total duration...

✔ Processed: "video1.mp4" → 2:30 minutes
✔ Processed: "video2.mp4" → 5:45 minutes
✔ Processed: "video3.mp4" → 1:15 minutes

⏳ Total Duration: 0h 9m 30s
```

## 🛠️ Dependencies

This project uses the following dependencies:

- [Fluent-FFmpeg](https://www.npmjs.com/package/fluent-ffmpeg): For processing video metadata.
- [@ffmpeg-installer/ffmpeg](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg): Bundled FFmpeg binaries.
- [@ffprobe-installer/ffprobe](https://www.npmjs.com/package/@ffprobe-installer/ffprobe): Bundled FFprobe binaries.
- [Chalk](https://www.npmjs.com/package/chalk): For styled console output.

## 🤝 Contributing

We welcome contributions! Please read the [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **[Abdulbasit Salah](https://github.com/abdulbasit-dev)**.
