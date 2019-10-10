// Copied from https://github.com/davidmarkclements/events.once/blob/master/readme.md

import once from 'events.once';
import { EventEmitter } from 'events';

async function run() {
    const ee = new EventEmitter();
    process.nextTick(() => {
        ee.emit('myevent', 42);
    });

    const [value] = await once(ee, 'myevent');
    console.log(value);

    const err = new Error('kaboom');
    process.nextTick(() => {
        ee.emit('error', err);
    });

    try {
        await once(ee, 'myevent');
    } catch (err) {
        console.log('error happened', err);
    }
}

run();
