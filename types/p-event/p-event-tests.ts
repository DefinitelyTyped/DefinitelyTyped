/// <reference types="node" />

import pEvent = require('p-event');
import * as events from 'events';

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
