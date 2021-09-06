import { expect } from './tester';
import { Core, Elementary, ElementaryCallback } from './core';

export const testNative: ElementaryCallback =
    (core: Core, el: Elementary) =>
    {
        const isNode = core.Node.isNode;

        const randNode = el.rand();
        expect(randNode).passes(isNode);

        return core.render(randNode, randNode);
    };
