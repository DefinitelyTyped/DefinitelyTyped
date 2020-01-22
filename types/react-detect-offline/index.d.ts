// Type definitions for react-detect-offline 2.4
// Project: https://github.com/chrisbolin/react-detect-offline#readme
// Definitions by: Navneet Lal Gupta <https://github.com/navneetlal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ReactChild } from 'react';
export interface IPooling {
    enabled?: boolean;
    url?: string;
    timeout?: number;
    interval?: number;
}
export interface IBaseProps {
    onChange: (online: boolean) => void;
    polling: IPooling | boolean;
    wrapperType: string;
}
export interface IOnlineOfflineProps extends Partial<IBaseProps> {
    children: ReactChild;
}
export interface IDetectorProps extends Partial<IBaseProps> {
    render: (state: IBaseState) => JSX.Element;
}
export interface IBaseState {
    online: boolean;
}
declare class Base<T extends Partial<IBaseProps>> extends Component<T, IBaseState> {
    pollingId?: number;
    constructor(props: T);
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderChildren(): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)> | null;
    getPollingConfig(): {
        enabled: boolean;
        url: string;
        timeout: number;
        interval: number;
    };
    goOnline(): void;
    goOffline(): void;
    callOnChangeHandler(online: boolean): void;
    startPolling(): void;
    stopPolling(): void;
}
export declare class Online extends Base<IOnlineOfflineProps> {
    render(): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)> | null;
}
export declare class Offline extends Base<IOnlineOfflineProps> {
    render(): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)> | null;
}
export declare class Detector extends Base<IDetectorProps> {
    render(): JSX.Element;
}
export {};
