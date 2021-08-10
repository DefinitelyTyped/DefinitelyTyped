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

// Node.js ESNEXT Support
{
    const lastCharacter = 'string'.at(-1);
    const lastArrayItem = [1, 2, 3].at(-1);

    const typedArray: NodeJS.TypedArray = new Int8Array([0, 10, 20, 30, 40, 50]);
    const lastItem = typedArray.at(-1);
}
