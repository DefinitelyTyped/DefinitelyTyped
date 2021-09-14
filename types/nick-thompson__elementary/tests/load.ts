import * as el from '@nick-thompson/elementary';

declare const global: any;
const core: el.Core = global.elementary.core;

export type ElementaryCallback = (core: el.Core, el: el.Elementary) => void;

export function onCoreLoad(...callbacks: ElementaryCallback[])
{
    core.on('load', () =>
        callbacks.forEach(
            (callback, index) =>
            {
                const timeoutTime = index * 100;
                setTimeout(
                    () =>
                    {
                        core.render(
                            el.const({ value: 0 }),
                            el.const({ value: 0 }));

                        const callbackName =
                            callback
                                .name
                                .slice(0, 20)
                                .padEnd(20, ' ');

                        console.log(
                            '\n ' +
                            `Running: ${callbackName} ` +
                            `Number: ${index} ` +
                            `At: ${timeoutTime} ms` +
                            ' \n');
                        callback(core, el);
                    },
                    timeoutTime);
            }));
}

export { el, core };
