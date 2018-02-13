/// <reference types="node" />

import pEvent = require('p-event');
import * as events from 'events';
import * as fs from 'fs';

class MyEmitter extends events.EventEmitter {
}

class MyDomEmitter implements EventTarget {
    addEventListener(type: 'foo', listener?: (event: Event) => void): void {
    }

    dispatchEvent(event: Event): boolean {
        return false;
    }

    removeEventListener(type: 'foo', listener?: (event: Event) => void): void {
    }
}

pEvent(new MyEmitter(), 'finish')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

pEvent<string>(new MyEmitter(), 'finish').then(result => {
    const str: string = result;
});

pEvent(new MyDomEmitter(), 'finish').then(result => {
    const e: Event | undefined = result;
});

pEvent(document, 'DOMContentLoaded').then(() => {
    console.log('😎');
});

pEvent<string>(new MyEmitter(), 'finish', {multiArgs: true}).then(result => {
    const strArr: string[] = result;
});

pEvent<number>(new MyEmitter(), '🦄', value => value > 3).then(result => {
    const num: number = result;
});

async function getOpenReadStream(file: string) {
    const stream = fs.createReadStream(file);
    await pEvent(stream, 'open');
    return stream;
}

getOpenReadStream('unicorn.txt')
    .then(stream => {
        console.log('Is readable:', stream.readable);
        stream.pipe(process.stdout);
    })
    .catch(console.error);
