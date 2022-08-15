module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'global-require': 0,
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
