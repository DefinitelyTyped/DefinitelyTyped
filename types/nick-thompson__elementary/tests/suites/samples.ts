import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testSamples: ElementaryCallback =
    (core: el.Core, el: el.Elementary) =>
    {
        const isNode = core.Node.isNode;
    };
