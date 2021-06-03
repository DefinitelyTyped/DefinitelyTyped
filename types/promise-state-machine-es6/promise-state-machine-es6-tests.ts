import PromiseStateMachine = require("promise-state-machine-es6");

enum State {
    stopped,
    running
}

const fsm = new PromiseStateMachine({
   initial: State.stopped,
   events: {
       start: { from: State.stopped, to: State.running },
       stop: { from: [State.running], to: State.stopped }
   }
});

// $ExpectType State
fsm.state;

// $ExpectType () => Promise<void>
fsm.stop;

// $ExpectType Promise<void>
fsm.start();
