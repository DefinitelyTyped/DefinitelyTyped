// Type definitions for wepy-redux 1.7
// Project: https://github.com/Tencent/wepy/tree/1.7.x/packages/wepy-redux
// Definitions by: Jiayu Liu <https://github.com/Jimexist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import wepy from "wepy";
import { Store } from "redux";

export interface MapStateToProps {
    [propName: string]: ((state: any) => any) | string;
}
export interface MapDispatchToProps {
    [propName: string]: ((store: any, ...args: any[]) => void) | string;
}

export function connect(
    mapStateToProps: MapStateToProps,
    mapDispatchToProps: MapDispatchToProps
): (<T extends wepy.Component>(original: T) => T);

export function setStore(store: Store<any, any>): void;

export function getStore(): Store;
