// Type definitions for react-test-renderer 15.4
// Project: https://facebook.github.io/react/
// Definitions by: Arvitaly <https://github.com/arvitaly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { ReactElement } from "react";

interface Renderer {
    toJSON(): ReactTestRendererJSON;
}
interface ReactTestRendererJSON {
    type: string;
    props: { [propName: string]: string };
    children: null | Array<string | ReactTestRendererJSON>;
    $$typeof?: any;
}
interface TestRendererOptions {
    createNodeMock: (element: ReactElement<any>) => any;
}
// https://github.com/facebook/react/blob/master/src/renderers/testing/ReactTestMount.js#L155
export function create(nextElement: ReactElement<any>, options?: TestRendererOptions): Renderer;
