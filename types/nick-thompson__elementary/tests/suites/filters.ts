import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testFilters: ElementaryCallback =
    (core: el.Core, el: el.Elementary) =>
    {
        // TODO: test convolve somehow

        const c = el.const({ value: 5 });
        expect(c).hasNodeProps({ value: 5 });

        let pole = el.pole(c, c);
        expect(pole).isANodeOfType('pole');
        pole = el.pole(1, 1);
        expect(pole).isANodeOfType('pole');
        expect(pole).hasNodeChildren(1, 1);

        const biquad = el.biquad(1, 2, 3, 4, c, 6);
        expect(biquad).isANodeOfType('biquad');
        expect(biquad).hasNodeChildren(1, 2, 3, 4, c, 6);

        const zero = el.zero({ key: 'myZero' }, 1, c, 3);
        expect(zero).hasNodeChildren(1, c, 3);
        expect(zero).hasNodeProps({ key: 'myZero' });

        const dcblock = el.dcblock(1);
        expect(dcblock).hasNodeChildren(1);

        const df11 = el.df11(1, 2, 3, 4);
        expect(df11).hasNodeChildren(1, 2, 3, 4);

        const smooth = el.smooth(1, 2);
        expect(smooth).hasNodeChildren(1, 2);

        const add = el.add(pole, biquad, zero, dcblock, df11, smooth);
        core.render(add, add);
    };
