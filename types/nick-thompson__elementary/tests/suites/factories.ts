import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testFactories: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        const isNode = core.Node.isNode;

        const createAdd = el.createNodeFactory('mod');
        const createAdd2 =
            el.createNodeFactory(
                (
                    props: { a?: number },
                    child: el.core.Node) => el.add(child, 2));

        let mod = el.createNode('mod', {key: 'mod'}, 1, 2);
        expect(mod).passes(isNode);
        mod = createAdd({}, 2, 3);
        expect(mod).passes(isNode);

        const add2 = createAdd2({key: 'b'}, 2);
        expect(add2).passes(isNode);

        core.render(mod);
    };
