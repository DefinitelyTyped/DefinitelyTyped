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

// AbortController & AbortSignal
{
    const controller = new AbortController();
    let bool: boolean;
    bool = controller.signal.aborted;
    const listener = (event: Event) => {};
    controller.signal.addEventListener("abort", listener);
    controller.signal.removeEventListener("abort", listener);
    controller.signal.onabort = listener;
    controller.abort();
}
