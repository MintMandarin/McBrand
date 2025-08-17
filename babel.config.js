module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // your source folder
        alias: {
          '@components': './src/component',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
