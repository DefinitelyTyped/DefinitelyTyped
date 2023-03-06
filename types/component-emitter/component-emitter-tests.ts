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



emitter.removeAllListeners('some-recurring-event')
emitter.removeAllListeners()

emitter.removeEventListener('some-recurring-event', handleSomeRecurringEvent)
emitter.removeEventListener('some-recurring-event')
emitter.removeEventListener()


emitter.removeListener('some-recurring-event', handleSomeRecurringEvent)
emitter.removeListener('some-recurring-event')
emitter.removeListener()




var event_data = {some: 'data'}
emitter.emit('some-recurring-event')
emitter.emit('some-recurring-event', event_data)

emitter.listeners('some-recurring-event')

emitter.hasListeners('some-recurring-event')

emitter.emit('some-event').emit("I can use chaining!")

let recurlyEmitter: Emitter<'change' | 'field:submit'> = new Emitter();

recurlyEmitter.on('change', handleSomeRecurringEvent);
// @ts-expect-error
recurlyEmitter.on('some-recurring-event', handleSomeRecurringEvent);

recurlyEmitter.once('field:submit', (event_data: any) => {console.log('handle some-single-shot-event')})
// @ts-expect-error
recurlyEmitter.once('some-single-shot-event', (event_data: any) => {console.log('handle some-single-shot-event')})

recurlyEmitter.off()
recurlyEmitter.off('change')
// @ts-expect-error
recurlyEmitter.off('some-recurring-event')

recurlyEmitter.emit('field:submit', event_data)
// @ts-expect-error
recurlyEmitter.emit('some-recurring-event', event_data)

recurlyEmitter.listeners('change')
// @ts-expect-error
recurlyEmitter.listeners('some-recurring-event')

recurlyEmitter.hasListeners("field:submit");
// @ts-expect-error
recurlyEmitter.hasListeners('some-recurring-event')
