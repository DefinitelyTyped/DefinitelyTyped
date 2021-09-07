import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testFilters: ElementaryCallback =
    (core: el.Core, el: el.Elementary) =>
    {
        const isNode = core.Node.isNode;
    };
