import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testDelays: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // $ExpectType NativeNode<"z">
        const z = el.z();
        expect(z).isANode();

        // $ExpectType NativeNode<"delay">
        let delay = el.delay({size: 1}, z, z, z);
        expect(delay).isANode();
        // $ExpectType NativeNode<"delay">
        delay = el.delay({size: 1}, 1, 1, 1);
        expect(delay).isANode();

        // $ExpectType void
        core.render(delay, delay);
    };
