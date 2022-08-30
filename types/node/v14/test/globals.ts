//////////////////////////////////////////////////////////////////////////
/// `globalThis` Tests: https://node.green/#ES2020-features-globalThis ///
//////////////////////////////////////////////////////////////////////////

{
    const isGlobal: NodeJS.Global = global;
    const isGlobalThis: typeof globalThis = global;

    const accessibleToGlobalThisMembers: true = global.RANDOM_GLOBAL_VARIABLE;
}

declare var RANDOM_GLOBAL_VARIABLE: true;

const abortController = new global.AbortController();
abortController.signal; // $ExpectType AbortSignal
