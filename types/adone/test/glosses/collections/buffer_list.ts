namespace adoneTests.collection.BufferList {
    const {
        collection: {
            BufferList
        }
    } = adone;

    type BufferList = adone.collection.BufferList;

    new BufferList();
    new BufferList(Buffer.from("123"));
    new BufferList("123");
    new BufferList(123);
    new BufferList([Buffer.from("123"), "123", 123]);
    new BufferList((err: any, data: Buffer) => null);
    new BufferList().append(Buffer.from("123"));
    new BufferList().append("123");
    new BufferList().append(123);
    new BufferList().append([Buffer.from("123"), "123", 123]);
    new BufferList().end(Buffer.from("123"));
    new BufferList().end();
    { const a: number = new BufferList().get(123); }
    { const a: Buffer = new BufferList().slice(); }
    { const a: Buffer = new BufferList().slice(1); }
    { const a: Buffer = new BufferList().slice(1, 2); }
    { const a: Buffer = new BufferList().copy(Buffer.alloc(100)); }
    { const a: Buffer = new BufferList().copy(Buffer.alloc(100), 0); }
    { const a: Buffer = new BufferList().copy(Buffer.alloc(100), 0, 1); }
    { const a: Buffer = new BufferList().copy(Buffer.alloc(100), 0, 1, 2); }
    { const a: BufferList = new BufferList().shallowSlice(); }
    { const a: BufferList = new BufferList().shallowSlice(1); }
    { const a: BufferList = new BufferList().shallowSlice(1, 2); }
    { const a: string = new BufferList().toString(); }
    { const a: string = new BufferList().toString("utf8"); }
    { const a: string = new BufferList().toString("utf8", 1); }
    { const a: string = new BufferList().toString("utf8", 1, 2); }
    { const a: BufferList = new BufferList().consume(10); }
    { const a: BufferList = new BufferList().duplicate(); }
    new BufferList().destroy();
    new BufferList().then((x: Buffer) => null);
    new BufferList().catch((err: any) => null);
}
