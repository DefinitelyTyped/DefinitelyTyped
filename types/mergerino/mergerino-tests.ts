import merge from 'mergerino';

function deletingWorks() {
    interface State {
        deep: {
            prop?: string;
        };
        fake?: any;
        other: boolean | null;
        prop: boolean;
    }

    const state: State = {
        prop: true,
        other: true,
        deep: { prop: 'foo' },
    };

    const newState = merge(state, {
        deep: { prop: undefined },
        fake: undefined, // deleting non existent key
        other: null,
        prop: undefined,
    });
}

function functionSubWorks() {
    interface State {
        age: number;
        name: string;
        obj: {
            prop?: boolean;
            replaced?: boolean;
        };
    }

    const state: State = {
        age: 10,
        name: 'bob',
        obj: { prop: true }
    };

    const newState = merge(state, {
        age: x => x * 10,
        name: (x, m) => {
            return x;
        },
        obj: () => ({ replaced: true }),
    });
}

function deepFunctionSubToUncreatedObjectPath() {
    interface State {
        add?: {
            stats: {
                count: number;
            };
        };
        orig: boolean;
    }

    const state: State = {
        orig: true
    };

    const newState = merge(
        state,
        {
            add: {
                stats: {
                    count: x => x + 1
                },
            }
        }
    );
}

function addNestedObject() {
    interface State {
        age: number;
        add?: {
            sub: boolean;
        };
    }
    const state: State = { age: 10 };
    const add = { sub: true };
    const newState = merge(state, { add });
}

function deepMergeObjects() {
    interface State {
        age: number;
        sub: {
            sub: {
                prop: boolean;
                newProp?: boolean;
            };
        };
    }

    const state: State = {
        age: 10, sub: {
            sub: { prop: true },
        },
    };

    const newState = merge(
        state,
        {
            sub: {
                sub:
                {
                    newProp: true,
                }
            },
        },
    );
}

function functionPatch() {
    interface State {
        age: number;
        foo: string;
        prop?: boolean;
    }
    const state: State = { age: 10, foo: 'bar' };
    const newState = merge(state, (s, m) => {
        return merge(s, { prop: true });
    });
}

function multiArrayFalsyPatches() {
    interface State {
        age?: number;
        foo: string;
        baz?: number;
        hello?: boolean;
        arr?: number[];
        prop?: boolean;
    }
    const state: State = { foo: 'bar' };
    const newState = merge(
        state,
        { baz: 5 },
        { hello: false },
        [{ arr: [1, 2, 3] }, [[{ prop: true }]], false, null],
        undefined,
        '',
        0,
        null,
        (s, m) => m(s, { age: 10 }),
        [[[[{ age: (x?: number) => (x || 0) * 3 }]]]],
    );
}

function arrayPatches() {
    const arr = [1, 2, 3];
    const newArr = merge(arr, { 2: 100 }, { 0: undefined }, { 0: 200 });
}

function deepMergeWithArr() {
    interface State {
        foo: string;
        deep: {
            arr: number[];
            prop: boolean;
        };
    }
    const state: State = { foo: 'bar', deep: { arr: [1, 2, 3], prop: false } };
    const newState = merge(state, { deep: { arr: { 1: 20 } } });
}

// Excess property checking for this example only works in TypeScript 3.8 and later
// function arrayObjectPatchNonExisitngProperty() {
//     interface State {
//         arr: Array<{
//             prop: boolean;
//         }>;
//     }
//     const state: State = { arr: [{ prop: true }] };
//     const newState = merge(state, { arr: { 0: { prop: false, nonExists: 42 } } });  // $ExpectError
// }

function topLevelFunctionPatch() {
    type State =
        | {
            age: number;
            foo: string;
        }
        | { replaced: boolean };
    const state = { age: 20, foo: 'bar' };
    const replacement = { replaced: true };
    const newState = merge<State>(state, () => replacement);
}

function reuseObjectIfSameRefWhenPatching() {
    const state = { deep: { prop: true } };
    const newState = merge(state, { deep: state.deep });
}

function replacePrimitiveWithObjectAndViceVersa() {
    interface State {
        count:
        | number
        | {
            prop: boolean;
        };
        foo:
        | number
        | {
            prop: boolean;
        };
    }
    const state: State = { count: 10, foo: { prop: true } };
    const newState = merge(state, { count: { prop: true }, foo: 10 });
}
