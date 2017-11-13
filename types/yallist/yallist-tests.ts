import Yallist = require('yallist');

const forEachIterable = {
    forEach(fn: (item: string, idx: number) => void, thisArg?: any) {},
};
const thisArg: {someProp?: number} = {};
const node = new Yallist.Node('foo');

Yallist.create<string | number>([1, 2, 3]); // $ExpectType Yallist<string | number>
Yallist.create<string | number>(1, 2, 3); // $ExpectType Yallist<string | number>
const myList = Yallist.create(forEachIterable);
myList; // $ExpectType Yallist<string>

new Yallist<string | number>([1, 2, 3]); // $ExpectType Yallist<string | number>
new Yallist<string | number>(1, 2, 3); // $ExpectType Yallist<string | number>
new Yallist(forEachIterable); // $ExpectType Yallist<string>

myList.forEach(function(v, i, l) {
    v; // $ExpectType string
    i; // $ExpectType number
    l; // $ExpectType Yallist<string>
    this; // $ExpectType Yallist<string>
});
myList.forEach(function(v, i, l) {
    this; // $ExpectType { someProp?: number | undefined; }
}, thisArg);
myList.forEachReverse(function(v, i, l) {
    v; // $ExpectType string
    i; // $ExpectType number
    l; // $ExpectType Yallist<string>
    this; // $ExpectType Yallist<string>
});
myList.forEachReverse(function(v, i, l) {
    this; // $ExpectType { someProp?: number | undefined; }
}, thisArg);

myList.get(2); // $ExpectType string | undefined
myList.getReverse(2); // $ExpectType string | undefined

myList.map(function(v, l) {
    v; // $ExpectType string
    l; // $ExpectType Yallist<string>
    this; // $ExpectType Yallist<string>
});
myList.map(function(v, l) {
    this; // $ExpectType { someProp?: number | undefined; }
}, thisArg);
myList.mapReverse(function(v, l) {
    v; // $ExpectType string
    l; // $ExpectType Yallist<string>
    this; // $ExpectType Yallist<string>
});
myList.mapReverse(function(v, l) {
    this; // $ExpectType { someProp?: number | undefined; }
}, thisArg);

myList.pop(); // $ExpectType string | undefined

myList.push(); // $ExpectType number
myList.push('foo'); // $ExpectType number
myList.push('foo', 'bar'); // $ExpectType number

myList.reduce((acc, v, i) => { // $ExpectType string
    acc; // $ExpectType string
    v; // $ExpectType string
    i; // $ExpectType number
    return acc;
});
myList.reduce((acc, v) => { // $ExpectType boolean
    acc; // $ExpectType boolean
    return acc;
}, true);
myList.reduceReverse((acc, v, i) => { // $ExpectType string
    acc; // $ExpectType string
    v; // $ExpectType string
    i; // $ExpectType number
    return acc;
});
myList.reduceReverse((acc, v) => { // $ExpectType boolean
    acc; // $ExpectType boolean
    return acc;
}, true);

myList.reverse(); // $ExpectType Yallist<string>

myList.shift(); // $ExpectType string | undefined

myList.slice(); // $ExpectType Yallist<string>
myList.slice(0); // $ExpectType Yallist<string>
myList.slice(1, -2); // $ExpectType Yallist<string>
myList.sliceReverse(); // $ExpectType Yallist<string>
myList.sliceReverse(0); // $ExpectType Yallist<string>
myList.sliceReverse(1, -2); // $ExpectType Yallist<string>

myList.toArray(); // $ExpectType string[]
myList.toArrayReverse(); // $ExpectType string[]

myList.unshift('bar'); // $ExpectType number
myList.unshift('bar', 'baz'); // $ExpectType number

myList.pushNode(myList.head || node);
myList.removeNode(myList.tail || node);
myList.unshiftNode(myList.tail || node);

Yallist.Node('foo'); // $ExpectType Node<string>
Yallist.Node('foo', node);
Yallist.Node('foo', node, node);
Yallist.Node('foo', node, node, myList);

new Yallist.Node('foo'); // $ExpectType Node<string>
new Yallist.Node('foo', node);
new Yallist.Node('foo', node, node);
new Yallist.Node('foo', node, node, myList);

node.list; // $ExpectType Yallist<string> | undefined
node.next; // $ExpectType Node<string> | null
node.prev; // $ExpectType Node<string> | null
