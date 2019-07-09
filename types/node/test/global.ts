import { Readable } from 'stream';

{
    const x: NodeModule = {} as any;
    const y: NodeModule = {} as any;
    x.children.push(y);
    x.parent = require.main!;
    require.main = y;
}

{
    // const a = new TextEncoder();
}

{
    queueMicrotask(() => {
        // cool
    });
}

{
    const a = new Readable();
    a.unshift('something', 'utf8');
}

{
    const a = Readable.from(['test'], {
        objectMode: true,
    });
}
