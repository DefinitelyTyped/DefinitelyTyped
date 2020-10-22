import { StateMachine, StateMachineEvent, create } from 'javascript-state-machine';

interface StateMachineTest extends StateMachine {
    warn?: StateMachineEvent;
    panic?: StateMachineEvent;
    calm?: StateMachineEvent;
    clear?: StateMachineEvent;
}

const fsm: StateMachineTest = StateMachine.create({
    initial: 'green',
    events: [
        { name: 'warn', from: 'green', to: 'yellow' },
        { name: 'panic', from: 'yellow', to: 'red' },
        { name: 'calm', from: 'red', to: 'yellow' },
        { name: 'clear', from: 'yellow', to: 'green' }
    ],
    callbacks: {
        onpanic(event?, from?, to?, msg?) { alert('panic! ' + msg); },
        onclear(event?, from?, to?, msg?) { alert('thanks to ' + msg); },
        ongreen(event?, from?, to?) { document.body.className = 'green'; },
        onyellow(event?, from?, to?) { document.body.className = 'yellow'; },
        onred(event?, from?, to?) { document.body.className = 'red'; },
    }
});

// fsm.warn();                    // transition from green to yellow
// fsm.panic("ERROR ALERT");    // transition from yellow to red
// fsm.calm();                    // transition from red to yellow
// fsm.clear("All clear");        // transition from yellow to green

const transitions = fsm.transitions();
