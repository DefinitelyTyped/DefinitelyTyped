import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testCore: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        const isNode = core.Node.isNode;

        // $ExpectType number
        const inputCount = core.getNumInputChannels();
        // $ExpectType number
        const outputCount = core.getNumOutputChannels();
        // $ExpectType number
        const blockSize = core.getBlockSize();

        // $ExpectType NativeNode<"phasor">
        const leftPhasor =
            new core.Node(
                'phasor',
                {},
                [el.const({value: 90})]);

        // $ExpectType NativeNode<"phasor">
        const rightPhasor =
            new core.Node(
                'phasor',
                {},
                [92]);

        expect(inputCount).isEqualTo(0);
        expect(outputCount).isEqualTo(2);
        expect(blockSize).isANumber();

        expect(leftPhasor).passes(isNode);
        expect(rightPhasor).passes(isNode);

        // $ExpectType void
        core.render(1, 2);
        // $ExpectType void
        core.render(leftPhasor, rightPhasor);
    };
