const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.common.js')
      }
    }
  }
};
