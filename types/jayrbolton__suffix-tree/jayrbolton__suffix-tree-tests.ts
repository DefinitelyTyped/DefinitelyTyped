import { add, addSingle, allSuffixes, create, findSuffix, format, getStringByIndex } from "@jayrbolton/suffix-tree";

create(); // $ExpectType STree
const tree = create("abcd"); // $ExpectType STree

tree.activeNode; // $ExpectType SNode

add("abc", tree); // $ExpectType STree
addSingle("a", tree); // $ExpectType STree
addSingle(1, tree); // $ExpectType STree

allSuffixes(tree); // $ExpectType string[]
findSuffix("c", tree); // $ExpectType number[]
getStringByIndex(4, tree); // $ExpectType string

format(tree); // $ExpectType string
