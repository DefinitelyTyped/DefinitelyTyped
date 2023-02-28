//////////////////////////////////////////////////////////////////////////
/// `globalThis` Tests: https://node.green/#ES2020-features-globalThis ///
//////////////////////////////////////////////////////////////////////////

{
    const isGlobalThis: typeof globalThis = global;

    const accessibleToGlobalThisMembers: true = global.RANDOM_GLOBAL_VARIABLE;
}

declare var RANDOM_GLOBAL_VARIABLE: true;

// global aliases for compatibility
{
    const x: NodeModule = {} as any;
    const y: NodeModule = {} as any;
    x.children.push(y);
    x.parent = require.main!;
    require.main = y;
    x.path; // $ExpectType string
}

// exposed gc
{
    if (gc) {
        gc();
    }
}

// structuredClone
{
    structuredClone(123); // $ExpectType 123
    structuredClone('hello'); // $ExpectType "hello"
    structuredClone({ test: 123 }); // $ExpectType { test: number; }
    structuredClone([{ test: 123 }]); // $ExpectType { test: number; }[]

    const arrayBuffer = new ArrayBuffer(0);
    structuredClone({ test: arrayBuffer }, { transfer: [arrayBuffer] }); // $ExpectType { test: ArrayBuffer; }
}

// Array.prototype.at()
{
    const mutableArray = ['a'];
    mutableArray.at(-1);
    const readonlyArray: ReadonlyArray<string> = ['b'];
    readonlyArray.at(-1);
}
