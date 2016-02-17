/// <reference path="state-machine.d.ts" />

interface StateMachineTest extends StateMachine {
	warn?: StateMachineEvent;
	panic?: StateMachineEvent;
	calm?: StateMachineEvent;
	clear?: StateMachineEvent;
}

var fsm: StateMachineTest = StateMachine.create({
    initial: 'green',
    events: [
      { name: 'warn', from: 'green', to: 'yellow' },
      { name: 'panic', from: 'yellow', to: 'red' },
      { name: 'calm', from: 'red', to: 'yellow' },
      { name: 'clear', from: 'yellow', to: 'green' }
    ],
    callbacks: {
        onpanic: function (event?, from?, to?, msg?) { alert('panic! ' + msg); },
        onclear: function (event?, from?, to?, msg?) { alert('thanks to ' + msg); },
        ongreen: function (event?, from?, to?) { document.body.className = 'green'; },
        onyellow: function (event?, from?, to?) { document.body.className = 'yellow'; },
        onred: function (event?, from?, to?) { document.body.className = 'red'; },
    }
});

//fsm.warn();					// transition from green to yellow
//fsm.panic("ERROR ALERT");	// transition from yellow to red
//fsm.calm();					// transition from red to yellow
//fsm.clear("All clear");		// transition from yellow to green
