namespace adoneTests.collection.BinarySearchTree {
    const {
        collection: {
            BinarySearchTree
        }
    } = adone;

    type BinarySearchTree<K = any, V = any> = adone.collection.BinarySearchTree<K, V>;

    new BinarySearchTree();
    new BinarySearchTree({});
    new BinarySearchTree<string, number>({ checkValueEquality: (a: number, b: number) => a === b });
    new BinarySearchTree<string, number>({ compareKeys: (a: string, b: string) => a.length - b.length });
    new BinarySearchTree<string, number>({ parent: new BinarySearchTree<string, number>() });
    new BinarySearchTree<string, number>({ unique: true });
    new BinarySearchTree<string, number>({ value: 123 });
    { const a: BinarySearchTree<string, number> = new BinarySearchTree<string, number>().getMaxKeyDescendant(); }
    { const a: string = new BinarySearchTree<string, number>().getMaxKey(); }
    { const a: BinarySearchTree<string, number> = new BinarySearchTree<string, number>().getMinKeyDescendant(); }
    { const a: string = new BinarySearchTree<string, number>().getMinKey(); }
    new BinarySearchTree<string, number>().checkAllNodesFullfillCondition((key: string, value: number) => null);
    new BinarySearchTree<string, number>().checkIsBST();
    { const a: number = new BinarySearchTree<string, number>().getNumberOfKeys(); }
    new BinarySearchTree<string, number>().insert("asd", 123);
    { const a: number[] = new BinarySearchTree<string, number>().search("asd"); }
    { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $gt: "" }); }
    { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $lt: "" }); }
    { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $lte: "" }); }
    { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $gte: "" }); }
    new BinarySearchTree<string, number>().delete("key");
    new BinarySearchTree<string, number>().delete("key", 123);
    new BinarySearchTree<string, number>().executeOnEveryNode((tree: BinarySearchTree<string, number>) => null);
    new BinarySearchTree<string, number>().prettyPrint();
    new BinarySearchTree<string, number>().prettyPrint(true);
    new BinarySearchTree<string, number>().prettyPrint(true, " ");
}
