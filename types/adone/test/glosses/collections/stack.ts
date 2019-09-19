namespace adoneTests.collection.Stack {
    const {
        collection: {
            Stack
        }
    } = adone;

    type Stack<T = any> = adone.collection.Stack<T>;

    { const a: boolean = new Stack().empty; }
    { const a: number = new Stack<number>().top; }
    { const a: Stack<number> = new Stack<number>().push(123); }
    { const a: number | undefined = new Stack<number>().pop(); }
    { const a: number[] = [...new Stack<number>()]; }
    { const a: Stack<number> = Stack.from([1, 2, 3]); }
}
