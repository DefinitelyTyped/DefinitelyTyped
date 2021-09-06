import { expect } from './tester';
import { Core, Elementary, ElementaryCallback } from './core';

export const testSamples: ElementaryCallback =
    (core: Core, el: Elementary) =>
    {
        const isNode = core.Node.isNode;
    };
