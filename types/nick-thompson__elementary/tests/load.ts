import * as el from '@nick-thompson/elementary';

const core: el.Core = (global as any).elementary.core;

export type ElementaryCallback = (core: el.Core, el: el.Elementary) => void;

export function onCoreLoad(...callbacks: ElementaryCallback[])
{
    core.on('load', () =>
        callbacks.forEach(
            (callback, index) =>
                setTimeout(() =>
                    {
                        core.render(
                            el.const({ value: 0 }),
                            el.const({ value: 0 }));

                        console.log(
                            '\n ' +
                            'Running: ' + callback.name +
                            ' \n');
                        callback(core, el);
                    },
                    index * 100)));
}

export { el, core };
