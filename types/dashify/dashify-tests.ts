import dashify = require('dashify');

const output: string = dashify('Foo----Bar');
// => 'foo----bar'

const output2: string = dashify('Foo----Bar', {condense: true});
// => 'foo-bar'
