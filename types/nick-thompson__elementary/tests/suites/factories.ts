import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testFactories: ElementaryCallback =
    (core: el.Core, el: el.Elementary) =>
    {
        const isNode = core.Node.isNode;

        const createAdd = el.createNodeFactory('add');

        let add = el.createNode('add', { key: 'add' });
        expect(add).passes(isNode);
        add = createAdd({});
        expect(add).passes(isNode);

        core.render(add);
    };
