import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testFactories: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        const createMod = el.createNodeFactory('mod');
        const createAdd2 =
            el.createNodeFactory(
                (
                    props: { a?: number },
                    child: el.core.Node) => el.add(child, 2));

        // $ExpectType NativeNode<"mod">
        let mod = el.createNode('mod', {key: 'mod'}, 1, 2);
        expect(mod).isANode();
        // $ExpectType NativeNode<"mod">
        mod = createMod({}, 2, 3);
        expect(mod).isANode();

        const add2 = createAdd2({key: 'b'}, 2);
        expect(add2).isANode();

        // $ExpectType void
        core.render(mod);
    };
