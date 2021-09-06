import { expect } from './expect';
import * as el from '@nick-thompson/elementary';

const core: Core = (global as any).elementary.core;

export type Core = typeof el.core;
export type Elementary = typeof el;
export type ElementaryCallback = (core: Core, el: Elementary) => void;

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
                        callback(core, el);
                    },
                    index * 100)));
}

export function testCore(core: Core, el: Elementary)
{
    const isNode = core.Node.isNode;

    const inputCount = core.getNumInputChannels();
    const outputCount = core.getNumOutputChannels();
    const blockSize = core.getBlockSize();

    const leftPhasor =
        new core.Node(
            'phasor',
            {},
            [
                el.const({ value: 90 }),
            ]);

    const rightPhasor =
        new core.Node(
            'phasor',
            {},
            [
                el.const({ value: 92 }),
            ]);


    // Tests

    expect(inputCount).isEqualTo(0);
    expect(outputCount).isEqualTo(2);
    expect(blockSize).isANumber();

    expect(leftPhasor).passes(isNode);
    expect(rightPhasor).passes(isNode);

    return core.render(leftPhasor, rightPhasor);
}
