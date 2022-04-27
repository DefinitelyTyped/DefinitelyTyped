import * as tree from 'flat-tree';

// START: Documentation example
const list: string[] = [];

const i = tree.index(0, 0); // get array index for depth: 0, offset: 0
const j = tree.index(1, 0); // get array index for depth: 1, offset: 0

// use these indexes to store some data

list[i] = 'a';
list[j] = 'b';
list[tree.parent(i)] = 'parent of a and b';

// END: Documentation example

tree.index(0, 0); // $ExpectType number

tree.parent(0); // $ExpectType number
tree.parent(0, 0); // $ExpectType number

tree.sibling(0); // $ExpectType number
tree.sibling(0, 0); // $ExpectType number

tree.children(0); // $ExpectType [number, number] | null
tree.children(0, 1); // $ExpectType [number, number] | null

tree.spans(0); // $ExpectType number
tree.spans(0, 0); // $ExpectType number

tree.leftSpan(0); // $ExpectType number
tree.leftSpan(0, 0); // $ExpectType number

tree.rightSpan(0); // $ExpectType number
tree.rightSpan(0, 0); // $ExpectType number

tree.count(0); // $ExpectType number
tree.count(0, 0); // $ExpectType number

tree.countLeaves(0); // $ExpectType number

tree.fullRoots(0); // $ExpectType number[]
tree.fullRoots(0, []); // $ExpectType number[]

const iterator: tree.FlatTreeIterator = tree.iterator(0);
iterator.index; // $ExpectType number
iterator.offset; // $ExpectType number
iterator.factor; // $ExpectType number
iterator.seek(0); // $ExpectType void
iterator.parent(); // $ExpectType number
iterator.leftChild(); // $ExpectType number
iterator.rightChild(); // $ExpectType number
iterator.leftSpan(); // $ExpectType number
iterator.rightSpan(); // $ExpectType number
iterator.isLeft(); // $ExpectType boolean
iterator.isRight(); // $ExpectType boolean
iterator.sibling(); // $ExpectType number
iterator.count(); // $ExpectType number
iterator.countLeaves(); // $ExpectType number
iterator.contains(0); // $ExpectType boolean
iterator.prev(); // $ExpectType number
iterator.next(); // $ExpectType number
iterator.prevTree(); // $ExpectType number
iterator.nextTree(); // $ExpectType number
iterator.fullRoot(0); // $ExpectType boolean

tree.depth(0); // $ExpectType number

tree.leftChild(0); // $ExpectType number
tree.leftChild(0, 0); // $ExpectType number

tree.rightChild(0); // $ExpectType number
tree.rightChild(0, 0); // $ExpectType number

tree.offset(0); // $ExpectType number
tree.offset(0, 0); // $ExpectType number
