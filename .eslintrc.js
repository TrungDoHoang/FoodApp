module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Off rules
    // 'no-irregular-whitespace': 'off',
    // 'no-unused-vars': 'off',
    // 'react-hooks/exhaustive-deps': 'off',
    // 'react/jsx-key': 'off',

    // Error
    eqeqeq: 'error',
    'no-eq-null': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',

    // Warn
    'no-unsafe-optional-chaining': 'warn',
    'no-empty': 'warn',
    'no-empty-function': 'warn'
  }
};
