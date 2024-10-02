module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
    // Note: Avoid using 'react-native-dotenv' due to compatibility issues with expo-router. Use `process.env` instead.
  };
};
