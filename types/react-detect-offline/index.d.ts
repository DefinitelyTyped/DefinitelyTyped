import { JSX } from "react";

export interface PollingConfig {
    /**
     * URL to pool for connection status
     */
    url: string;
    /**
     * Force polling on or off.
     * Polling is only used as a fallback for browsers that don't support the `"online"` event.
     * Currently these are Chrome on Windows, Firefox on Windows, and Chrome on Linux.
     */
    enabled: boolean;
    /**
     * How often (in ms) to poll
     */
    interval: number;
    /**
     * How long (in ms) before timeout
     */
    timeout: number;
}
export interface BaseProps {
    children?: React.ReactNode | undefined;
    /**
     * Called when connection changes
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onChange?: ((online: boolean) => void | undefined) | undefined;
    wrapperType?: string | undefined;
    /**
     * Config for polling fallback
     */
    polling?: boolean | Partial<Omit<PollingConfig, "enabled">> | undefined;
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
export interface DetectorState extends BaseState {}
export const Detector: React.ComponentClass<DetectorProps, DetectorState>;
export interface OnlineProps extends BaseProps {}
export interface OnlineState extends BaseState {}
export const Online: React.ComponentClass<OnlineProps, OnlineState>;
export interface OfflineProps extends BaseProps {}
export interface OfflineState extends BaseState {}
export const Offline: React.ComponentClass<OfflineProps, OfflineState>;
