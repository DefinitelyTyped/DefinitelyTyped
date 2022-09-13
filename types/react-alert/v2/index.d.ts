// Type definitions for react-alert 2.4
// Project: https://github.com/schiehll/react-alert
// Definitions by: Steve Syrell <https://github.com/ssyrell>
//                 Yue Yang <https://github.com/g1eny0ung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactElement, Component, ReactNode } from 'react';

export interface AlertContainerProps {
    /**
     * The offset of the alert from the page border. Can be any number.
     *
     * Default: 14
     */
    offset?: number | undefined;

    /**
     * The position of the alert. Can be [bottom left, bottom right, top left, top right].
     *
     * Default: 'bottom left'
     */
    position?: 'bottom left' | 'bottom right' | 'top left' | 'top right' | undefined;

    /**
     * The color theme of the alert. Can be [dark, light].
     *
     * Default: 'dark'
     */
    theme?: 'dark' | 'light' | undefined;

    /**
     * The time in miliseconds to the alert close itself. Use 0 to prevent auto close (apply to all alerts).
     *
     * Default: 5000
     */
    time?: number | undefined;

    /**
     * The transition animation. Can be [scale, fade].
     *
     * Default: 'scale'
     */
    transition?: 'scale' | 'fade' | undefined;
}

export interface AlertShowOptions {
    /**
     * The alert type. Can be [info, success, error]. Only used in `show` method.
     *
     * Default: info
     */
    type?: 'info' | 'success' | 'error' | undefined;

    /**
     * The time in miliseconds to the alert close itself. Use 0 to prevent auto close (apply to this alert only).
     *
     * Default: 5000
     */
    time?: number | undefined;

    /**
     * The icon to show in the alert.
     *
     * Default: the icon which matches the type of alert to be shown.
     */
    icon?: ReactElement | undefined;

    /**
     * The function called when message is closed.
     */
    onClose?: () => void | undefined;
}

export default class AlertContainer extends Component<AlertContainerProps> {
    /**
     * Show an alert.
     *
     * @returns The id of the created alert.
     */
    show(message: ReactNode, options?: AlertShowOptions): string;

    /**
     * Show an info alert.
     *
     * @returns The id of the created alert.
     */
    info(message: ReactNode, options?: AlertShowOptions): string;

    /**
     * Show an success alert.
     *
     * @returns The id of the created alert.
     */
    success(message: ReactNode, options?: AlertShowOptions): string;

    /**
     * Show an error alert.
     *
     * @returns The id of the created alert.
     */
    error(message: ReactNode, options?: AlertShowOptions): string;

    /**
     * Remove all alerts from the page.
     */
    removeAll(): void;

    /**
     * Removes the alert with the specified id from the page.
     */
    removeAlert(id: string): void;
}
