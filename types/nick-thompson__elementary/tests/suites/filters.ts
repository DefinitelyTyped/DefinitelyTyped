import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testFilters: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // TODO: test convolve somehow

        // $ExpectType NativeNode<"const">
        const c = el.const({value: 5});
        expect(c).hasNodeProps({value: 5});

        // $ExpectType NativeNode<"pole">
        let pole = el.pole(c, c);
        expect(pole).isANodeOfType('pole');
        // $ExpectType NativeNode<"pole">
        pole = el.pole(1, 1);
        expect(pole).isANodeOfType('pole');
        expect(pole).hasNodeChildren(1, 1);

        // $ExpectType NativeNode<"biquad">
        const biquad = el.biquad(1, 2, 3, 4, c, 6);
        expect(biquad).isANodeOfType('biquad');
        expect(biquad).hasNodeChildren(1, 2, 3, 4, c, 6);

        const zero = el.zero({key: 'myZero'}, 1, c, 3);
        expect(zero).hasNodeChildren(1, c, 3);
        expect(zero).hasNodeProps({key: 'myZero'});

        const dcblock = el.dcblock(1);
        expect(dcblock).hasNodeChildren(1);

        const df11 = el.df11(1, 2, 3, 4);
        expect(df11).hasNodeChildren(1, 2, 3, 4);

        const smooth = el.smooth(1, 2);
        expect(smooth).hasNodeChildren(1, 2);

        const sm = el.sm({key: 'mySm'}, 1);
        expect(sm).hasNodeProps({key: 'mySm'});
        expect(sm).hasNodeChildren(1);

        const lowpass = el.lowpass(sm, smooth, 2);
        expect(lowpass).isANode();

        const highpass = el.highpass(sm, smooth, 2);
        expect(highpass).isANode();

        const bandpass = el.bandpass(sm, smooth, 2);
        expect(bandpass).isANode();

        const allpass = el.allpass(sm, smooth, 2);
        expect(allpass).isANode();

        const notch = el.notch(sm, smooth, 2);
        expect(notch).isANode();

        const peak = el.peak(sm, smooth, 2, highpass);
        expect(peak).isANode();

        const lowshelf = el.lowshelf(sm, smooth, 2, highpass);
        expect(lowshelf).isANode();

        const highshelf = el.highshelf(sm, smooth, 2, highpass);
        expect(highshelf).isANode();

        const pink = el.pink(smooth);
        expect(pink).isANode();

        const add = el.add(pole, biquad, zero, dcblock, df11, smooth, sm);
        core.render(add, add);
    };
