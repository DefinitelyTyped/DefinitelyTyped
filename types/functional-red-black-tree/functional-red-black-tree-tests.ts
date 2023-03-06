import createTree = require('functional-red-black-tree');

// Comparator is optional:
createTree();

// Comparator must return a number:
// @ts-expect-error
createTree(() => {});

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

// @ts-expect-error
tree.at('');
// @ts-expect-error
tree.ge('');
// @ts-expect-error
tree.gt('');
// @ts-expect-error
tree.lt('');
// @ts-expect-error
tree.le('');
// @ts-expect-error
tree.find('');

// Check that only keys and values of the correct type are passed:
// @ts-expect-error
tree.insert('foo', 1);
// @ts-expect-error
tree.remove('foo');

// Check that operations that modify the tree return a tree of the same type.
tree.insert(1, 'foo'); // $ExpectType Tree<number, string>
tree.remove(1); // $ExpectType Tree<number, string>

tree.forEach((key, value) => {
    // Check that ke/value types are correctly passed. Should be: (number, string).
    // @ts-expect-error
    key.trim();
    // @ts-expect-error
    value / 2;
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
// @ts-expect-error
tree.forEach(() => {}, undefined, 1);
// More than 3 parameters:
// @ts-expect-error
tree.forEach(() => {}, 1, 1, 1);
// Bounds that are not the same type as the keys:
// @ts-expect-error
tree.forEach(() => {}, 1, '');

// tree.forEach should return void or the result of executing the callback on the last item of iteration.
tree.forEach(() => {}); // $ExpectType void
tree.forEach(() => new Date()); // $ExpectType Date
// @ts-expect-error
tree.forEach(() => 'foo') / 2;

// @ts-expect-error
tree.get('');
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
