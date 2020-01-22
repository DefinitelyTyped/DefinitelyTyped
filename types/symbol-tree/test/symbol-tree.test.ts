import SymbolTree = require('symbol-tree');
import TreePosition = require('symbol-tree/lib/TreePosition');

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

TreePosition.DISCONNECTED; // $ExpectType 1
TreePosition.PRECEDING; // $ExpectType 2
TreePosition.FOLLOWING; // $ExpectType 4
TreePosition.CONTAINS; // $ExpectType 8
TreePosition.CONTAINED_BY; // $ExpectType 16

expectType<typeof TreePosition>(SymbolTree.TreePosition);

interface Foo {
	doStuff(): void;
}

interface Bar extends Foo {
	bar: boolean;
}

interface Baz extends Foo {
	baz: number;
}

declare const foo: Foo;
declare const bar: Bar;
declare const baz: Baz;

// $ExpectType SymbolTree<Foo>
const tree = new SymbolTree<Foo>();

tree.appendChild(foo, bar); // $ExpectType Bar
tree.appendChild(foo, baz); // $ExpectType Baz

tree.compareTreePosition(foo, bar); // $ExpectType number
tree.compareTreePosition(foo, baz); // $ExpectType number
tree.compareTreePosition(bar, baz); // $ExpectType number

tree.treeIterator(foo); // $ExpectType TreeIterator<Foo>
