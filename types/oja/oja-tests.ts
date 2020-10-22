import { Action, Flow, StageContext } from "oja";

new Action().activate();

class MyAction extends Action {
    execute() {
        this.define('foo', 'bar');
    }
}

new MyAction()
    .activate()
    .consume('foo', data => console.log(data));

class Greet extends Action {
    execute() {
        this.define('greet', 'Hello');
    }
}

// demonstrate generic function instead of action object
function who(flow: Flow) {
    // demonstrate re-mapping
    flow.consume('name', name => {
        flow.define('who', name);
    });
}

class Greeting extends Action {
    execute() {
        this.consume(['greet', 'who'], data => {
            this.define('greeting', `${data.greet} ${data.who}`);
        });
    }
}

const helloAction = new Greeting();
helloAction
    .add(new Greet())
    .add(who)
    .activate()
    .define('name', 'World')
    .consume('greeting', console.log); // prints Hello World

// create consumer component
const flow = new Flow();
const consumer = flow.consume('foo');
consumer.then(foo => {
    console.log(foo); // prints 'bar'
});

// define producer component
const producer = flow.define('foo');
// publish
producer.pub('bar');

flow
    .consume('foo', foo => {
        console.log(foo); // prints 'bar'
    })
    .define('foo', 'bar');

// Consuming multiple events for the given topic
// create consumer component
flow
    .consume('foo', foo => {
        console.log(foo); // prints 'bar1' and 'bar2'
    })
    // generate events
    .define('foo', 'bar1')
    .define('foo', 'bar2');

// Consuming events as a stream
const buffer: any[] = [];
// create consumer stream
const stream = flow.consumeStream('foo');
stream.on('data', data => buffer.push(data));
stream.on('end', () => {
    console.log(buffer); // prints one, two, three
});
// generate some data
flow.define('foo', 'one');
flow.define('foo', 'two');
flow.define('foo', 'three');
flow.define('foo', null);

// create consumer stream
const reader = flow.getReader('foo');
// generate some data
flow.define('foo', 'one');
flow.define('foo', 'two');
flow.define('foo', 'three');
flow.define('foo', null);

async function read() {
    while (true) {
        const data = await reader.next();
        if (data === undefined) {
            break;
        }
        console.log(data);
    }
}

read();

// Consuming multiple topics in one short
// consume multiple topics
flow.consume(['foo', 'qoo'], input => {
    console.log(input.foo);     // prints faa
    console.log(input.qoo);     // prints qaa
});
flow.define('foo', 'faa');
flow.define('qoo', 'qaa');

// Using promise
// create consumer component
flow
    .consume('foo', foo => {
        console.log(foo); // prints 'bar'
    })
    .define('foo', new Promise(resolve => {
        resolve('bar');
    }));

// Multiple consumers, single producer
// create consumer component
flow
    .consume('foo', foo => {
        console.log(foo); // prints 'bar'
    })
    .consume('foo', foo => {
        console.log(foo); // prints 'bar'
    })
    .define('foo', 'bar');

// NOTE: the order of consume/define does not matter
// create consumer component
flow
    .consume('foo', (foo, runtime) => {
        console.log(foo); // prints 'faa'
        runtime.define('qoo', 'qaa'); // can consume and produce new data
    })
    .consume('qoo', (qoo, runtime) => {
        console.log(qoo); // prints 'qaa'
        runtime.define('woo', Promise.resolve('waa')); // can use async promise
    })
    // start chain reaction here
    .define('foo', 'faa')
    // lets produce multiple events via event emitter
    .consume('woo', (woo, runtime) => {
        console.log(woo); // prints waa
        // define as event emitter
        const roo = runtime.define('roo');
        // simulate async flow with two event emitted
        setImmediate(() => {
            // generate multiple events
            roo.pub('raa1');
            roo.pub('raa2');
        });
    })
    // validate
    .consume('roo', roo => {
        console.log(roo);   // prints raa1 and raa2
    })
    // consume multiple topics
    .consume(['foo', 'qoo'], input => {
        console.log(input.foo);     // prints faa
        console.log(input.qoo);     // prints qaa
    })
    // can consume inside consume
    .consume('foo', (foo, runtime) => {
        console.log(foo);     // prints faa
        runtime.consume('qoo', qoo => {
            console.log(qoo);     // prints qaa
        });
        // or
        flow.consume('qoo', qoo => {
            console.log(qoo);     // prints qaa
        });
    })
    // can generate multiple events using pub
    .define('doo', (publisher: StageContext) => {
        publisher.pub('daa1');
        publisher.pub('daa2');
        publisher.pub('daa3');
        publisher.pub(null);
    })
    .consume('doo', doo => {
        console.log(doo); // prints daa1, daa2, daa3, null
    })
    .consumeStream('doo', stream => {
        stream.on('data', console.log); // prints daa1, daa2, daa3
        stream.on('end', () => console.log('end of "doo"'));
    })
    // NOTE: we can consume first event via promise if we are not interested in the rest
    .consume('doo').then(doo => {
    console.log(doo); // prints daa1
});

// for debug you can listen to all events
flow.consume('*', evt => {
    console.log(`Event type: ${evt.name}, data: ${evt.data}`);
});

// Join flows together
const base = new Flow();
base.define('foo', 'bar');
let subFlow = new Flow(base);
subFlow.consume('foo', foo => {
    console.log(foo); // prints bar
});

base.consume('shared', (_, rt) => {
    rt.define('foo', 'bar');
});
subFlow = new Flow(base);
flow.consume('foo', foo => {
    console.log(foo); // prints bar
});
flow.define('shared', ''); // trigger the chain

// Timeouts
flow
    .timeout(['foo', 'bar'], 300)   // 300 ms
    .define('bar', 'boo')
    .catch(err => {
        console.log(err.message); // prints "Topic/s (foo) timed out, pending topics (too)"
    });

// Querying for state
console.log(flow.state()); // prints [foo, too]

// Throwing error
flow.define('error', new Error('Boom'));
// or
flow.define('error', Promise.reject(new Error('Boom')));
// or
flow.define('data', () => {
    return new Error('Boom');
});
// or
flow.define('data', (runtime: StageContext) => {
    runtime.pub(new Error('Boom'));
});

// Catching error
flow.catch(err => {
    console.log(err);   // prints Boom if linked to the above flow
});
// Or
flow.consume('error', err => {
    console.log(err);   // prints Boom if linked to the above flow
});

// Error stops flow
flow
    .define('foo', 'faa')
    .define('boo', 'baa')
    .define('error', new Error('Boom'))
    .define('too', 'taa')
    .consume('foo', foo => {
        console.log(foo); // prints faa
    })
    .consume('boo', foo => {
        console.log(foo); // prints baa
    })
    .consume('too', too => {
        // will never happen
        throw new Error('Should never happen');
    })
    .catch(err => { // catch error
        console.log(err);   // print Boom
    });

// Composing complex flows
const baseFlow = new Flow();
new Flow(baseFlow);
