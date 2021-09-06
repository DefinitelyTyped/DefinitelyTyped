import { expect } from './expect';
import { Core, Elementary, ElementaryCallback } from './core';

export const testNative: ElementaryCallback =
    (core: Core, el: Elementary) =>
    {
        const randNode = el.rand();

        expect(randNode).passes(core.Node.isNode);

        return core.render(randNode, randNode);
    };
