declare var console: { log(...args: any[]): void };

import Podium = require('@hapi/podium');
const podiumObject = new Podium(); // new emitter

const podiumObject2 = new Podium('event1');// creates new event and calls registerEvent()

podiumObject.registerEvent('event1');

//with optional parameters
podiumObject.registerEvent({
    name: 'event1',
    shared: true
});

podiumObject.registerEvent('event1');

podiumObject.on('event1',function(update){ // Way 1
    console.log('inside autonomous listener without name! data:', update);
});

const listener1 = function() { // normal function object
    console.log('listener1 called');
}
podiumObject.on('event1',listener1); // Way 2

// podium.addListener(criteria, listener) Same as podium.on().

podiumObject.addListener('event1',listener1);

// podium.once(criteria, listener) Same as calling podium.on() with the count option set to 1. Whenever we call emit(), listener1 will get fired but also get removed, so that it won't get fired on call to emit().

podiumObject.once('event1',listener1);
