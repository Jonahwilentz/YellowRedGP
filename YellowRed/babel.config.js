module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@components': './src/components',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@utils': './src/utils',
        },
      },
    ]
  ],
};
