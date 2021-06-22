import SortedSet = require("collections/sorted-set");
import { Iterator, Node } from "collections/sorted-set";

interface Person {
    name: string;
}

const DATA = [{ name: "John" }, { name: "Jack" }, { name: "Linda" }];
let bool: boolean;
let num: number;
let str: string;
let person: Person;
let array: Person[];
let iterator: Iterator<Person>;
let node: Node<Person>;
let set: SortedSet.SortedSet<Person>;

set = new SortedSet<Person>(
    DATA,
    (a, b) => a.name === b.name,
    (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    },
);
num = set.length;
set = set.constructClone();
bool = set.add(DATA[0]);
set.clear();
bool = set.delete(DATA[0]);
node = set.find(DATA[1])!;
node = set.findGreatest()!;
node = set.findGreatestLessThan(DATA[1])!;
node = set.findGreatestLessThanOrEqual(DATA[1])!;
node = set.findLeast()!;
node = set.findLeastGreaterThan(DATA[1])!;
node = set.findLeastGreaterThanOrEqual(DATA[1])!;
person = set.get(DATA[2])!;
bool = set.has(DATA[2]);
num = set.indexOf(DATA[2]);
person = set.max()!;
person = set.min()!;
person = set.one()!;
person = set.pop()!;
set.push(...DATA);
person = set.shift()!;
set.unshift(...DATA);
array = set.slice(1, 4);
array = set.splice(1, 4, ...DATA);
array = set.swap(1, 4, ...DATA);
set.splay(DATA[0]);
bool = set.splayIndex(1);
set.reduce((acc, v) => [...acc, v], [] as Person[]);
set.reduceRight(acc => acc + 1, 0);
iterator = set.iterate();

bool = iterator.next().done;
person = iterator.next().value!;

person = node.value;
node = node.left!;
node = node.right!;
num = node.length;
num = node.checkIntegrity();
node = node.getNext()!;
node = node.getPrevious()!;
node.log(
    {
        branchUp: "",
        branchDown: "",
        fromAbove: "",
        fromBelow: "",
        fromBoth: "",
        intersection: "",
        strafe: "",
        through: "",
    },
    () => {},
    () => {},
    () => {},
);
node.reduce((acc, v) => [...acc, v], [] as Person[], 3, {}, set);
node.reduceRight(acc => acc + 1, 0, 3, {}, set);
str = node.summary();
node.touch();
