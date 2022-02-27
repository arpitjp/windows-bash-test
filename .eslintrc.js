module.exports = {
  ignorePatterns: ['dist/**'],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended-module'
  ],
  globals: {
    module: true,
    require: true,
    __dirname: true
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    'jest/globals': true,
    browser: true
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-plusplus': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  }
};
