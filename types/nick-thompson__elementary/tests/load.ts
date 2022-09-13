import * as el from '@nick-thompson/elementary';
import { padEnd, print } from './tester';

declare const global: any;
const core: el.Core = global.elementary.core;

export type ElementaryCallback = (core: el.Core, el: el.Elementary) => void;

function printCallback(name: string, index: number) {
    print(`
Running: ${name}
Number: ${index}
`);
}

export function onCoreLoad(...callbacks: ElementaryCallback[]) {
    core.on('load', () =>
        callbacks.forEach(
            (callback, index) => {
                const callbackName =
                    padEnd(
                        callback.name.slice(0, 20),
                        20,
                        ' ');

                printCallback(callbackName, index);
                callback(core, el);
            }));
}

export { el, core };
