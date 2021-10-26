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

// ArrayLike.at() tests
const arr = [1, 2, 3];

arr.at(); // $ExpectType number | undefined
arr.at(0); // $ExpectType number | undefined
arr.at(-1); // $ExpectType number | undefined
arr.at(3); // $ExpectType number | undefined

const str = 'hello world';

str.at(); // $ExpectType string | undefined
str.at(0); // $ExpectType string | undefined
str.at(-1); // $ExpectType string | undefined
str.at(11); // $ExpectType string | undefined
