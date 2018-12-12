import is = require('unist-util-is');

const node = {type: 'strong'};
const parent = {type: 'paragraph', children: [node]};

function test(node: unknown, n?: number) {
  return n === 5;
}

is(null, {children: []});
is(null, node);
is('strong', node);
is('emphasis', node);

is(node, node);
is({type: 'paragraph'}, parent);
is({type: 'strong'}, parent);

is(test, node);
is(test, node, 4, parent);
is(test, node, 5, parent);

function testFunc(node: unknown) {}
is(testFunc, node);

const wrongTestFunc: is.TestFunction = (node: unknown, n: string) => {}; // $ExpectError
