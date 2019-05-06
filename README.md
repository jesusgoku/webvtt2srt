# WebVTT to SRT

Convert subtitle files in **WebVTT** format to **SRT** format.

## Install

```
# With npm
npm install -g webvtt2srt

# With yarn
yarn global add webvtt2srt
```

## Usage

```sh
# With input and output file
webvtt2srt ./subtitle.vtt ./subtitle.srt

# With input file and output to stdout
webvtt2srt ./subtitle.vtt

# With input from stdin and output to file
cat ./subtitle.vtt | webvtt2srt - ./subtitle.srt

# With input from stdin and output to stdout
cat ./subtitle.vtt | webvtt2srt
```

## Code

```
# Install dependencies
yarn install

# Build CommonJS package
yarn run build
```
