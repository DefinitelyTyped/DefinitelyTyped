import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testDelays: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        const isNode = core.Node.isNode;

        const z = el.z();
        expect(z).passes(isNode);

        let delay = el.delay({size: 1}, z, z, z);
        expect(delay).passes(isNode);
        delay = el.delay({size: 1}, 1, 1, 1);
        expect(delay).passes(isNode);

        core.render(delay, delay);
    };
