import { el, ElementaryCallback } from "../load";
import { expect } from "../tester";

export const testNative: ElementaryCallback = (core: el.Core, el: el.Elementary) => {
    // $ExpectType NativeNode<"rand">
    const randNode = el.rand();
    expect(randNode).isANode();

    // $ExpectType void
    core.render(randNode, randNode);
};
