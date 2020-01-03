import createContent = require('ungap__create-content');

createContent('<div>foo</div>'); // $ExpectType DocumentFragment
createContent('<div>foo</div>', 'html'); // $ExpectType DocumentFragment
createContent('<text>foo</text>', 'svg'); // $ExpectType DocumentFragment
