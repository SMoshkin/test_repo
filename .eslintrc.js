module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-eny': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/jsx-pascal-case': 0,
    'prettier/prettier': 0
  }
};
