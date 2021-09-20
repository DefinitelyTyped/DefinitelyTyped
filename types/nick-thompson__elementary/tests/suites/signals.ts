import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testSignals: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // $ExpectType NativeNode<"latch">
        const latch = el.latch({key: 'myLatch'}, 1, 2);
        expect(latch).isANode();
        expect(latch).hasNodeProps({key: 'myLatch'});
        expect(latch).hasNodeChildren(1, 2);

        // $ExpectType NativeNode<"seq">
        let seq = el.seq({seq: []}, 1, 2);
        expect(seq).isANode();
        seq = el.seq({seq: []}, 2);
        expect(seq).isANode();

        const adsr = el.adsr(seq, 2, 3, 4, 5);
        expect(adsr).isANode();

        const hann = el.hann(2);
        expect(hann).isANode();
    };
