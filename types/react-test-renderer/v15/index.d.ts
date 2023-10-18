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
