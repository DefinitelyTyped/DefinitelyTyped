import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testOscillators: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // $ExpectType NativeNode<"phasor">
        const phasor = el.phasor({}, 10);
        expect(phasor).isANode();

        const train = el.train({key: 'myTrain'}, 10);
        expect(train).isANode();

        const cycle = el.cycle(train);
        expect(cycle).isANode();

        const saw = el.saw({}, 10);
        expect(saw).isANode();

        const square = el.square(10);
        expect(square).isANode();

        const triangle = el.triangle({}, 1);
        expect(triangle).isANode();

        const blepsaw = el.blepsaw({key: 'myBlepsaw'}, 10);
        expect(blepsaw).isANode();

        const blepsquare = el.blepsquare(blepsaw);
        expect(blepsquare).isANode();

        const bleptriangle = el.bleptriangle({}, 10);
        expect(bleptriangle).isANode();

        core.render(bleptriangle, saw);
    };
