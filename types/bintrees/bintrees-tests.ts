/// <reference types="mocha" />
/// <reference types="node" />
import assert = require('assert');
import { BinTree, RBTree } from 'bintrees';

describe('bintrees', () => {
    it('builds a simple tree', () => {
        let treeA = new RBTree((a: number, b: number) => a - b);

        treeA.insert(5);
        treeA.insert(3);
        treeA.remove(3);

        assert.equal(treeA.size, 1);
    });

    it('builds a tree of strings', () => {
        let treeB = new BinTree((a:string, b:string) => a.length - b.length);

        treeB.insert('hi');
        treeB.insert('there');
        treeB.insert('how');
        treeB.insert('are'); // ignored
        treeB.remove('how');

        assert.equal(treeB.size, 2);
        assert.equal(treeB.min(), 'hi');
    });

    it('maintains a tree of objects', () => {

        interface C {
            id: number
        }

        let treeC = new BinTree<C>((a: C, b: C) => a.id - b.id);

        treeC.insert({ id: 100 });
        treeC.insert({ id: 110 });
        treeC.insert({ id: 105 });

        let ids: number[] = [];
        treeC.each((val: C) => {
            ids.push(val.id);
        });

        assert.deepEqual(ids, [100, 105, 110]);
    });
});

