# git-init
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Initialize a new git repository.

## Installation
```bash
$ npm install git-init
```

## Usage
```js
const init = require('git-init')

init('./', (err) => {
  if (err) throw err
})
```

## API
### init([path], cb(err))
Create a new git repository at `path`.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/git-init.svg?style=flat-square
[npm-url]: https://npmjs.org/package/git-init
[downloads-image]: http://img.shields.io/npm/dm/git-init.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/git-init
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
