// Type definitions for promise-state-machine-es6 2.1
// Project: https://github.com/faleij/promise-state-machine
// Definitions by: Dmitry Zakablukov <https://github.com/dmitry-zakablukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const PromiseStateMachine: {
    new <State, Transitions>(payload: {
        initial: State;
        events: {
            [name in keyof Transitions]: { from: State | State[]; to: State };
        };
    }): {
        state: State;
    } & {
        [name in keyof Transitions]: () => Promise<void>;
    };
};

export = PromiseStateMachine;
