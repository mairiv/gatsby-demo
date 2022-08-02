module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint/eslint-plugin'],
  rules: {
    'prettier/prettier': 'warn',
    'react/forbid-prop-types': [0],
    'react/prop-types': [0]
  },
  ignorePatterns: ['src/**/*.test.ts'],
  globals: {
    fetch: false,
    module: false
  }
};
