import * as events from "events";

interface DotNode<State, Transitions> {
    from: State;
    to: State;
    transition: Transitions;
}

interface DotNodeStringified {
    from: string;
    to: string;
    transition: string;
}

interface FsmBase<State, Transitions> {
    state: State;

    is(state: State): boolean;
    is(...args: State[]): boolean;

    can(state: Transitions): boolean;
    can(...args: Transitions[]): boolean;

    toDOTsync(options?: { replacer: (data: DotNode<State, Transitions>) => DotNodeStringified }): string;
}

declare const PromiseStateMachine: {
    new<State, Transitions extends string>(payload: {
        initial: State;
        events: PromiseStateMachine.Events<State, Transitions>;
    }):
        & events.EventEmitter
        & FsmBase<State, Transitions>
        & {
            [name in Transitions]: () => Promise<any>;
        };
};

declare namespace PromiseStateMachine {
    type Events<State, Transitions extends string> = {
        [name in Transitions]: { from: State | State[]; to: State };
    };
}

export = PromiseStateMachine;
