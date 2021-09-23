import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testNative: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // $ExpectType NativeNode<"rand">
        const randNode = el.rand();
        expect(randNode).isANode();

        // $ExpectType void
        core.render(randNode, randNode);
    };
