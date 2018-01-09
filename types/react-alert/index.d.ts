// Type definitions for react-alert 2.4
// Project: https://github.com/schiehll/react-alert
// Definitions by: Steve Syrell <https://github.com/ssyrell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface AlertContainerProps {
    /**
     * The offset of the alert from the page border, can be any number.
     *
     * Default: 14.
     */
    offset: number;

    /**
     * The position of the alert. Can be [bottom left, bottom right, top left, top right].
     *
     * Default: 'bottom left'
     */
    position: string;

    /**
     * The color theme of the alert. Can be [dark, light].
     *
     * Default: 'dark'
     */
    theme: string;

    /**
     * The time in milliseconds the alert is displayed. After this
     * time ellapses, the alert will close itself. Use 0 to prevent self-closure
     * (applies to all alerts).
     *
     * Default: 5000
     */
    time: number;

    /**
     * The transition animation. Can be [scale, fade].
     *
     * Default: 'scale'
     */
    transition: string;
}

export interface AlertShowOptions {
    /**
     * The time in milliseconds the alert is displayed. After this
     * time ellapses, the alert will close itself. Use 0 to prevent self-closure.
     */
    time?: number;

    /**
     * The icon to show in the alert.
     *
     * Default: the icon which matches the type of alert to be shown.
     */
    icon?: React.ReactNode;

    /**
     * A callback function that will be called when the alert is closed.
     */
    onClose?: () => void;

    /**
     * The type of alert to show. This will only be used when calling show().
     * Can be [info, success, error].
     *
     * Default: 'info'
     */
    type?: string;
}

export default class AlertContainer extends React.Component<AlertContainerProps> {
    /**
     * Show a success alert.
     * @returns The id of the created alert.
     */
    success(message: string, options?: AlertShowOptions): string;

    /**
     * Show an error alert.
     * @returns The id of the created alert.
     */
    error(message: string, options?: AlertShowOptions): string;

    /**
     * Show an info alert.
     * @returns The id of the created alert.
     */
    info(message: string, options?: AlertShowOptions): string;

    /**
     * Show an alert.
     * @returns The id of the created alert.
     */
    show(message: string, options?: AlertShowOptions): string;

    /**
     * Remove all alerts from the page.
     */
    removeAll(): void;

    /**
     * Removes the alert with the specified id from the page.
     */
    remove(id: string): void;
}
