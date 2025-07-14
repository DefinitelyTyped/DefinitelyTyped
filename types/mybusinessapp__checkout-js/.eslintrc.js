module.exports = {
    env: {
      browser: true,
      es6: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      lib: ['es6', 'dom']
    },
    rules: {
      indent: [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      quotes: [
        'error',
        'single',
        { 'avoidEscape': true }
      ],
      semi: [
        'error',
        'always'
      ],
      'space-before-function-paren': [
        'error',
        'always'
      ],
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'eol-last': [
        'error',
        'always'
      ],
      'no-unused-vars': 0
    }
  };
  