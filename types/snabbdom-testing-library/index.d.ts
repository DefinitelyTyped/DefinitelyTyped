// Type definitions for snabbdom-testing-library 0.0
// Project: https://github.com/lukaszmakuch/snabbdom-testing-library/
// Definitions by: Joel Louzado <jlouzado@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { VNode } from "snabbdom/vnode";

type Params = {
    patch: (oldVnode: Element | VNode, vnode: VNode) => VNode;
};

/**
 * Wrapper around dom-testing-library's `render` method.
 * The returned *render* function is created based on the supplied *patch* function.
 * That way we may use any modules we want.
 *
 * @returns: Renderer to render your Virtual-DOM
 */
export function makeRender(params: Params): (vnode: VNode) => any;

export namespace makeRender {
    const prototype: {};
}
