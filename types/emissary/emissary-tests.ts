

import emissary = require("emissary");

var Emitter = emissary.Emitter;

var emitter = new Emitter();

emitter.on('foo', ()=>{});
emitter.emit('a');
emitter.getSubscriptionCount('b');
emitter.on('b-subscription-added', (handler:any) =>{});
emitter.emit('b', 'b2');
emitter.off('foo', ()=>{});
emitter.signal('a');

var Subscriber = emissary.Subscriber;

var subscriber = new Subscriber();
subscriber.subscribe(emitter, 'event1', ()=>{});
subscriber.unsubscribe();
subscriber.unsubscribe(emitter);
