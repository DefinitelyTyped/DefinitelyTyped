/// <reference types="react" />

export interface PollingConfig {
    url: string;
    enabled: boolean;
    interval: number;
    timeout: number;
}
export interface BaseProps {
    children?: React.ReactNode;
    onChange?: (online: boolean) => void | undefined;
    wrapperType?: string;
    polling?: boolean | PollingConfig;
}
export interface BaseState {
    online: boolean;
}
export const defaultProps: BaseProps;
export const defaultPollingConfig: PollingConfig;
export const Base: React.ComponentClass<BaseProps, BaseState>;
export interface DetectorProps extends BaseProps {
    render: ({ online }: { online: boolean }) => JSX.Element | null;
}
// tslint:disable-next-line
export interface DetectorState extends BaseState {}
export const Detector: React.ComponentClass<DetectorProps, DetectorState>;
// tslint:disable-next-line
export interface OnlineProps extends BaseProps {}
// tslint:disable-next-line
export interface OnlineState extends BaseState {}
export const Online: React.ComponentClass<OnlineProps, OnlineState>;
// tslint:disable-next-line
export interface OfflineProps extends BaseProps {}
// tslint:disable-next-line
export interface OfflineState extends BaseState {}
export const Offline: React.ComponentClass<OfflineProps, OfflineState>;
