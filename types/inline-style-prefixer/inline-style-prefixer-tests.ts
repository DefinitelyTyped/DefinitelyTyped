import Prefixer = require('inline-style-prefixer');

const prefixer = new Prefixer();

const prefixed = prefixer.prefix({
    fontSize: '16',
    flexDirection: 'column'
});
