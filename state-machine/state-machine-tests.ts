/// <reference path="state-machine-2.2.d.ts" />

var fsm = StateMachine.create({
    initial: 'green',
    events: [
      { name: 'warn', from: 'green', to: 'yellow' },
      { name: 'panic', from: 'yellow', to: 'red' },
      { name: 'calm', from: 'red', to: 'yellow' },
      { name: 'clear', from: 'yellow', to: 'green' }
    ],
    callbacks: {
        onpanic: function (event, from, to, msg) { alert('panic! ' + msg); },
        onclear: function (event, from, to, msg) { alert('thanks to ' + msg); },
        ongreen: function (event, from, to) { document.body.className = 'green'; },
        onyellow: function (event, from, to) { document.body.className = 'yellow'; },
        onred: function (event, from, to) { document.body.className = 'red'; },
    }
});