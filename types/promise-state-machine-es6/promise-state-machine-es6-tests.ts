import PromiseStateMachine = require("promise-state-machine-es6");
import { Events } from "promise-state-machine-es6";

enum State {
    stopped,
    running,
}

enum Transitions {
    start = "start",
    stop = "stop",
}

class MyFsm extends PromiseStateMachine<State, Transitions> {
    constructor(props: {
        initial: State;
        events: Events<State, Transitions>;
    }) {
        super(props);
    }
}

const fsm = new MyFsm({
    initial: State.stopped,
    events: {
        [Transitions.start]: { from: State.stopped, to: State.running },
        [Transitions.stop]: { from: [State.running], to: State.stopped },
    },
});

// $ExpectType State
fsm.state;

// $ExpectType () => Promise<any>
fsm.stop;

// $ExpectType Promise<any>
fsm.start();

fsm.on("start", (from, to) => {
    return Promise.resolve("Started");
});

// $ExpectType boolean
fsm.is(State.stopped);

// $ExpectType boolean
fsm.is(State.stopped, State.running);

// $ExpectType boolean
fsm.can(Transitions.start);

// $ExpectType boolean
fsm.can(Transitions.start, Transitions.stop);

// $ExpectType string
fsm.toDOTsync();

// $ExpectType string
fsm.toDOTsync({
    replacer: (data) => {
        return {
            from: "From: " + String(data.from),
            to: "To: " + String(data.to),
            transition: "Transition: " + String(data.transition),
        };
    },
});
