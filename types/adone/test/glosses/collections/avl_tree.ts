namespace adoneTests.collection.AVLTree {
    const {
        collection: {
            AVLTree
        }
    } = adone;

    type AVLTree<K = any, V = any> = adone.collection.AVLTree<K, V>;

    new AVLTree();
    new AVLTree<string, number>({ checkValueEquality: (a: number, b: number) => a === b });
    new AVLTree<string, number>({ compareKeys: (a: string, b: string) => a.length - b.length });
    new AVLTree<string, number>({ parent: new AVLTree() });
    new AVLTree<string, number>({ unique: false });
    new AVLTree<string, number>({ value: 123 });
    new AVLTree<string, number>().checkIsAVLT();
    new AVLTree<string, number>().insert("123", 123);
    new AVLTree<string, number>().delete("123");
    new AVLTree<string, number>().delete("123", 123);
    { const a: number = new AVLTree<string, number>().getNumberOFKeys(); }
    { const a: number[] = new AVLTree<string, number>().search("key"); }
    { const a: number[] = new AVLTree<string, number>().betweenBounds({}); }
    { const a: number[] = new AVLTree<string, number>().betweenBounds({ $gt: "ads" }); }
    { const a: number[] = new AVLTree<string, number>().betweenBounds({ $lt: "ads" }); }
    { const a: number[] = new AVLTree<string, number>().betweenBounds({ $gte: "ads" }); }
    { const a: number[] = new AVLTree<string, number>().betweenBounds({ $lte: "ads" }); }
    new AVLTree<string, number>().executeOnEveryNode((tree: AVLTree<string, number>) => null);
}
