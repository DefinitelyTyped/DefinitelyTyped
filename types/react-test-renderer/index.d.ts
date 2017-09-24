// Type definitions for react-test-renderer 15.5
// Project: https://facebook.github.io/react/
// Definitions by: Arvitaly <https://github.com/arvitaly>, Lochbrunner <https://github.com/lochbrunner>, Lochbrunner <https://github.com/lochbrunner>, John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ReactElement } from "react";

export interface ReactTestInstance {
    toJSON(): ReactTestRendererJSON;
    unmount(nextElement?: ReactElement<any>): void;
    update(nextElement: ReactElement<any>): void;
    getInstance(): any;
}
export interface ReactTestRendererJSON {
    type: string;
    props: { [propName: string]: any };
    children: null | Array<string | ReactTestRendererJSON>;
    $$typeof?: any;
}
export interface TestRendererOptions {
    createNodeMock(element: ReactElement<any>): any;
}
// https://github.com/facebook/react/blob/master/src/renderers/testing/ReactTestMount.js#L155
export function create(nextElement: ReactElement<any>, options?: TestRendererOptions): ReactTestInstance;
