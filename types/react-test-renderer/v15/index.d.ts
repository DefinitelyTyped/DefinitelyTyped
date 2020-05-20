// Type definitions for react-test-renderer 15.5
// Project: https://facebook.github.io/react/
// Definitions by: Arvitaly <https://github.com/arvitaly>, Lochbrunner <https://github.com/lochbrunner>, Lochbrunner <https://github.com/lochbrunner>, John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactElement } from "react";

export interface ReactTestInstance {
    toJSON(): ReactTestRendererJSON;
    unmount(nextElement?: ReactElement): void;
    update(nextElement: ReactElement): void;
    getInstance(): any;
}
export interface ReactTestRendererJSON {
    type: string;
    props: { [propName: string]: any };
    children: null | Array<string | ReactTestRendererJSON>;
    $$typeof?: any;
}
export interface TestRendererOptions {
    createNodeMock(element: ReactElement): any;
}
// https://github.com/facebook/react/blob/master/src/renderers/testing/ReactTestMount.js#L155
export function create(nextElement: ReactElement, options?: TestRendererOptions): ReactTestInstance;
