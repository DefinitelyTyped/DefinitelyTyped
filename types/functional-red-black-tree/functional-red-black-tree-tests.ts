import createTree = require('functional-red-black-tree');

// Comparator is optional:
createTree();

// Comparator must return a number:
createTree(() => {}); // $ExpectError

const tree = createTree<number, string>(); // $ExpectType Tree<number, string>

tree.root; // $ExpectType Node<number, string>
tree.keys; // $ExpectType number[]
tree.values; // $ExpectType string[]
tree.length; // $ExpectType number

// Check that operations that search the tree return an iterator with the same key/value types.
tree.begin; // $ExpectType Iterator<number, string>
tree.end; // $ExpectType Iterator<number, string>
tree.at(1); // $ExpectType Iterator<number, string>
tree.ge(1); // $ExpectType Iterator<number, string>
tree.gt(1); // $ExpectType Iterator<number, string>
tree.lt(1); // $ExpectType Iterator<number, string>
tree.le(1); // $ExpectType Iterator<number, string>
tree.find(1); // $ExpectType Iterator<number, string>

tree.at(''); // $ExpectError
tree.ge(''); // $ExpectError
tree.gt(''); // $ExpectError
tree.lt(''); // $ExpectError
tree.le(''); // $ExpectError
tree.find(''); // $ExpectError

// Check that only keys and values of the correct type are passed:
tree.insert('foo', 1); // $ExpectError
tree.remove('foo'); // $ExpectError

// Check that operations that modify the tree return a tree of the same type.
tree.insert(1, 'foo'); // $ExpectType Tree<number, string>
tree.remove(1); // $ExpectType Tree<number, string>

tree.forEach((key, value) => {
    // Check that ke/value types are correctly passed. Should be: (number, string).
    key.trim(); // $ExpectError
    value / 2; // $ExpectError
});

// forEach accepts:
// Just a visitor:
tree.forEach(() => {}); // $ExpectType void
// A visitor and lower bound:
tree.forEach(() => {}, 1); // $ExpectType void
// A visitor, lower bound, and upper bound.
tree.forEach(() => {}, 1, 1); // $ExpectType void
// It does NOT accept:
// A visitor and upper bound, but no lower bound.
tree.forEach(() => {}, undefined, 1); // $ExpectError
// More than 3 parameters:
tree.forEach(() => {}, 1, 1, 1); // $ExpectError
// Bounds that are not the same type as the keys:
tree.forEach(() => {}, 1, ''); // $ExpectError

// tree.forEach should return void or the result of executing the callback on the last item of iteration.
tree.forEach(() => {}); // $ExpectType void
tree.forEach(() => new Date()); // $ExpectType Date
tree.forEach(() => 'foo') / 2; // $ExpectError

tree.get(''); // $ExpectError
// Ensure that types reflect that tree.get() can return undefined.
tree.get(1); // $ExpectType string | void

const iterator = tree.ge(1); // $ExpectType Iterator<number, string>

iterator.tree; // $ExpectType Tree<number, string>
iterator.valid; // $ExpectType boolean
iterator.node; // $ExpectType Node<number, string> | null

iterator.clone(); // $ExpectType Iterator<number, string>

iterator.remove(); // $ExpectType Tree<number, string>

iterator.key; // $ExpectType number | undefined
iterator.value; // $ExpectType string | undefined
iterator.index; // $ExpectType number

iterator.next(); // $ExpectType void

iterator.hasNext; // $ExpectType boolean
iterator.hasPrev; // $ExpectType boolean

iterator.update(''); // $ExpectType Tree<number, string>

iterator.prev(); // $ExpectType void

// Cast from "Node | undefined" to "Node" for test simplicity.
const node = iterator.node as createTree.Node<number, string>;

node.key; // $ExpectType number
node.value; // $ExpectType string
node.left; // $ExpectType Tree<number, string>
node.right; // $ExpectType Tree<number, string>
