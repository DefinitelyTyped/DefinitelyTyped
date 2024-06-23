import { Store } from "redux";
import wepy from "wepy";

export interface MapStateToProps {
    [propName: string]: ((state: any) => any) | string;
}
export interface MapDispatchToProps {
    [propName: string]: ((store: any, ...args: any[]) => void) | string;
}

export function connect(
    mapStateToProps: MapStateToProps,
    mapDispatchToProps: MapDispatchToProps,
): <T extends wepy.Component>(original: T) => T;

export function setStore(store: Store<any, any>): void;

export function getStore(): Store;
