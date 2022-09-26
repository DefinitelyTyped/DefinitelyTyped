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

// AbortController & AbortSignal
{
    const controller = new AbortController();
    let bool: boolean;
    bool = controller.signal.aborted;
    controller.signal.reason;
    const listener = (event: Event) => {};
    controller.signal.addEventListener("abort", listener);
    controller.signal.removeEventListener("abort", listener);
    controller.signal.onabort = listener;
    controller.abort();
}
