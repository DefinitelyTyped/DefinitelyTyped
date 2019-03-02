/// <reference types="node" />

import pEvent = require('p-event');
import { EventEmitter } from 'events';
import * as fs from 'fs';

class NodeEmitter extends EventEmitter {
    on(event: 'finish', listener: (num: number, str: string) => void) {
        return this;
    }
    addListener(event: 'finish', listener: (num: number, str: string) => void) {
        return this;
    }
    addEventListener(event: 'finish', listener: (num: number, str: string) => void) {
        return this;
    }
    off(event: 'finish', listener: (num: number, str: string) => void) {
        return this;
    }
    removeListener(event: 'finish', listener: (num: number, str: string) => void) {
        return this;
    }
    removeEventListener(event: 'finish', listener: (num: number, str: string) => void) {
        return this;
    }
}

class DomEmitter implements EventTarget {
    addEventListener(
        type: 'foo',
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void {}

    dispatchEvent(event: Event): boolean {
        return false;
    }

    removeEventListener(
        type: 'foo',
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void {}
}

pEvent(new NodeEmitter(), 'finish'); // $ExpectType PCancelable<number>
pEvent(new NodeEmitter(), '🦄', value => value > 3); // $ExpectType PCancelable<number>
pEvent(new DomEmitter(), 'finish'); // $ExpectType PCancelable<Event>
pEvent(document, 'DOMContentLoaded'); // $ExpectType PCancelable<Event>

pEvent(new NodeEmitter(), 'finish', { rejectionEvents: ['error'] }); // $ExpectType PCancelable<number>
pEvent(new NodeEmitter(), 'finish', { timeout: 1 }); // $ExpectType PCancelable<number>
pEvent(new NodeEmitter(), 'finish', { filter: value => value > 3 }); // $ExpectType PCancelable<number>
pEvent(new NodeEmitter(), 'finish', { multiArgs: true }); // $ExpectType PCancelable<(string | number)[]>

pEvent(new NodeEmitter(), 'finish').cancel();

// $ExpectType PCancelable<number[]>
pEvent.multiple(new NodeEmitter(), 'hello', {
    count: Infinity,
});
// $ExpectType PCancelable<number[]>
pEvent.multiple(new NodeEmitter(), 'hello', {
    resolveImmediately: true,
    count: Infinity,
});
// $ExpectType PCancelable<(string | number)[][]>
pEvent.multiple(new NodeEmitter(), 'hello', {
    count: Infinity,
    multiArgs: true,
});
// $ExpectError
pEvent.multiple(new NodeEmitter(), 'hello', {});
// $ExpectError
pEvent.multiple(new NodeEmitter(), 'hello');

pEvent.iterator(new NodeEmitter(), 'finish'); // $ExpectType AsyncIterableIterator<number>
pEvent.iterator(new NodeEmitter(), '🦄', value => value > 3); // $ExpectType AsyncIterableIterator<number>

pEvent.iterator(new NodeEmitter(), 'finish', { limit: 1 }); // $ExpectType AsyncIterableIterator<number>
pEvent.iterator(new NodeEmitter(), 'finish', { resolutionEvents: ['finish'] }); // $ExpectType AsyncIterableIterator<number>
pEvent.iterator(new NodeEmitter(), 'finish', { multiArgs: true }); // $ExpectType AsyncIterableIterator<(string | number)[]>

async function getOpenReadStream(file: string) {
    const stream = fs.createReadStream(file);
    await pEvent(stream, 'open');
    return stream;
}

(async () => {
    const stream = await getOpenReadStream('unicorn.txt');
    stream.pipe(process.stdout);
})().catch(console.error);

(async () => {
    try {
        const result = await pEvent(new NodeEmitter(), 'finish');

        if (result === 1) {
            throw new Error('Emitter finished with an error');
        }

        // `emitter` emitted a `finish` event with an acceptable value
        console.log(result);
    } catch (error) {
        // `emitter` emitted an `error` event or
        // emitted a `finish` with 'unwanted result'
        console.error(error);
    }
})();
