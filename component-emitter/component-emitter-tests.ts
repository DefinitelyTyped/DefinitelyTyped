// These are all of the examples from https://www.npmjs.com/package/component-emitter as of June 18, 2016


// These are all of the examples from https://www.npmjs.com/package/component-emitter as of June 18, 2016

import Emitter = require('component-emitter');
var emitter = new Emitter;
emitter.emit('something');




var user = { name: 'tobi' };
Emitter(user);

//(<Emitter>user).emit('im a user');



// this example modified from the one on https://www.npmjs.com/package/component-emitter
var User = Object.create({
    someUserFunction: () => {console.log('someUserFunction called!')}
})
var another_user = Emitter(User);
//another_user.someUserFunction()
another_user.on('hi', () => {console.log('Hi called')})
another_user.emit('hi')


// Additional sample code for this test
function handleSomeRecurringEvent(event_data: any) {
    console.log('handle some-recurring-event')
}
emitter.on('some-recurring-event', handleSomeRecurringEvent)


emitter.once('some-single-shot-event', (event_data: any) => {console.log('handle some-single-shot-event')})


emitter.off()
emitter.off('some-recurring-event')
emitter.off('some-recurring-event', handleSomeRecurringEvent)

var event_data = {some: 'data'}
emitter.emit('some-recurring-event')
emitter.emit('some-recurring-event', event_data)

emitter.listeners('some-recurring-event')

emitter.hasListeners('some-recurring-event')
