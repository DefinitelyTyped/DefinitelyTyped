// Type definitions for react-test-renderer 16.0
// Project: https://facebook.github.io/react/
// Definitions by: Arvitaly <https://github.com/arvitaly>
//                 Lochbrunner <https://github.com/lochbrunner>
//                 John Reilly <https://github.com/johnnyreilly>
//                 John Gozde <https://github.com/jgoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ReactElement, ReactType } from "react";

// extracted from:
// - https://github.com/facebook/react/blob/v16.0.0/src/renderers/testing/ReactTestRendererFiberEntry.js
// - https://reactjs.org/docs/test-renderer.html

export interface ReactTestRendererJSON {
    type: string;
    props: { [propName: string]: any };
    children: null | ReactTestRendererJSON[];
}
export interface ReactTestRendererTree extends ReactTestRendererJSON {
    nodeType: "component" | "host";
    instance: any;
    rendered: null | ReactTestRendererTree;
}
export interface ReactTestInstance {
    instance: any;
    type: string;
    props: { [propName: string]: any };
    parent: null | ReactTestInstance;
    children: Array<ReactTestInstance | string>;

    find(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance;
    findByType(type: ReactType): ReactTestInstance;
    findByProps(props: { [propName: string]: any }): ReactTestInstance;

    findAll(predicate: (node: ReactTestInstance) => boolean, options?: { deep: boolean }): ReactTestInstance[];
    findAllByType(type: ReactType, options?: { deep: boolean }): ReactTestInstance[];
    findAllByProps(props: { [propName: string]: any }, options?: { deep: boolean }): ReactTestInstance[];
}
export interface ReactTestRenderer {
    toJSON(): null | ReactTestRendererJSON;
    toTree(): null | ReactTestRendererTree;
    unmount(nextElement?: ReactElement<any>): void;
    update(nextElement: ReactElement<any>): void;
    getInstance(): null | ReactTestInstance;
    root: ReactTestInstance;
}
export interface TestRendererOptions {
    createNodeMock(element: ReactElement<any>): any;
}
export function create(nextElement: ReactElement<any>, options?: TestRendererOptions): ReactTestRenderer;
