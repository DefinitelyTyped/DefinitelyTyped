import { BinTree, RBTree } from 'bintrees';

let treeA = new RBTree((a:number, b:number) => a - b);

treeA.insert(5);
treeA.insert(3);
treeA.remove(3);

let treeB = new BinTree((a:string, b:string) => a.length - b.length);

treeB.insert('hi');
treeB.insert('there');
treeB.insert('how');
treeB.insert('are');
