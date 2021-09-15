import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testCore: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        const isNode = core.Node.isNode;

        const inputCount = core.getNumInputChannels();
        const outputCount = core.getNumOutputChannels();
        const blockSize = core.getBlockSize();

        const leftPhasor =
            new core.Node(
                'phasor',
                {},
                [el.const({value: 90})]);

        const rightPhasor =
            new core.Node(
                'phasor',
                {},
                [92]);

        // Tests

        expect(inputCount).isEqualTo(0);
        expect(outputCount).isEqualTo(2);
        expect(blockSize).isANumber();

        expect(leftPhasor).passes(isNode);
        expect(rightPhasor).passes(isNode);

        core.render(1, 2);
        core.render(leftPhasor, rightPhasor);
    };
