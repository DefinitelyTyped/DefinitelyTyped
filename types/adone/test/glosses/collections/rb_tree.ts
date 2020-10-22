namespace adoneTests.collection.RedBlackTree {
    const {
        collection: {
            RedBlackTree
        }
    } = adone;

    type RedBlackTree<K = any, V = any> = adone.collection.RedBlackTree<K, V>;
    type RedBlackTreeIterator<K = any, V = any> = adone.collection.I.RedBlackTree.Iterator<K, V>;
    type RedBlackTreeNode<K = any, V = any> = adone.collection.I.RedBlackTree.Node<K, V>;

    new RedBlackTree();
    new RedBlackTree<string, number>((a: string, b: string) => a.length - b.length);
    new RedBlackTree<string, number>(undefined, new RedBlackTree());
    { const a: string[] = new RedBlackTree<string, number>().keys; }
    { const a: number[] = new RedBlackTree<string, number>().values; }
    { const a: number = new RedBlackTree<string, number>().length; }
    {
        const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().begin;
        { const b: boolean = a.valid; }
        { const b: RedBlackTreeNode<string, number> | null = a.node; }
        { const b: string | undefined = a.key; }
        { const b: number | undefined = a.value; }
        { const b: number = a.index; }
        { const b: boolean = a.hasNext; }
        { const b: boolean = a.hasPrev; }
        { const b: RedBlackTree<string, number> = a.tree; }
        { const b: RedBlackTreeIterator<string, number> = a.clone(); }
        { const b: RedBlackTree<string, number> = a.remove(); }
        a.next();
        { const b: RedBlackTree<string, number> = a.update(333); }
        a.prev();
    }
    { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().end; }
    { const a: RedBlackTree<string, number> = new RedBlackTree<string, number>().insert("123", 456); }
    { const a: number = new RedBlackTree<string, number>().forEach((key: string, value: number) => value); }
    { const a: number = new RedBlackTree<string, number>().forEach((key: string, value: number) => value, "1"); }
    { const a: number = new RedBlackTree<string, number>().forEach((key: string, value: number) => value, "1", "2"); }
    { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().at(1); }
    { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().ge("1"); }
    { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().gt("1"); }
    { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().lt("1"); }
    { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().le("1"); }
    { const a: RedBlackTreeIterator<string, number> | null = new RedBlackTree<string, number>().find("1"); }
    { const a: RedBlackTree<string, number> = new RedBlackTree<string, number>().remove("1"); }
    { const a: RedBlackTree<string, number> = new RedBlackTree<string, number>().remove("1"); }
    { const a: number | undefined = new RedBlackTree<string, number>().get("1"); }
}
