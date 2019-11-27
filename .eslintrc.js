module.exports = {
  root: true,
  env: {
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 2017
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [
      'error',
      'never'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ]
  }
}
