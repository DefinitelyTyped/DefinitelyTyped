import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testNative: ElementaryCallback =
    (core: el.Core, el: el.Elementary) =>
    {
        const isNode = core.Node.isNode;

        const randNode = el.rand();
        expect(randNode).passes(isNode);

        return core.render(randNode, randNode);
    };
