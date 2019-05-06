module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/webvtt2srt.cjs.js',
      format: 'cjs',
    },
  ],
  external: ['get-stdin', 'subtitle', 'fs', 'path', 'util'],
};
