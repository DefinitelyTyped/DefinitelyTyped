// Type definitions for electron-notify v0.1.0
// Project: https://github.com/hankbao/electron-notify
// Definitions by: Daniel Pereira <https://github.com/djpereira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="electron" />

/** Nice and simple notifications for electron apps */
export interface ICustomConfig {
    width?: number,
    height?: number,
    padding?: number,
    borderRadius?: number,
    displayTime?: number,
    animationSteps?: number,
    animationStepMs?: number,
    animateInParallel?: boolean,
    appIcon?: string,
    pathToModule?: string,
    logging?: boolean,
    defaultWindow?: Electron.BrowserWindowConstructorOptions,
    defaultStyleContainer?: any,
    defaultStyleAppIcon?: any,
    defaultStyleImage?: any,
    defaultStyleClose?: any,
    defaultStyleText?: any
}

export interface ICloseNotificationEvent {
    event: 'close' | 'show' | 'click',
    id: number
}

export interface INotificationEvent extends ICloseNotificationEvent {
    closeNotification: (reason: any) => void,
}

export interface INotification {
    title: string,
    text?: string,
    image?: string,
    url?: string,
    sound?: string,
    onClickFunc?: (event: INotificationEvent) => void,
    onShowFunc?: (event: INotificationEvent) => void,
    onCloseFunc?: (event: ICloseNotificationEvent) => void
}

/** Change some config options. Can be run multiple times, also between notify()-calls to change electron-notifys behaviour. */
export function setConfig(customConfig: ICustomConfig): void;

/** Displays new notification. */
export function notify(notification: INotification): void;

/** Clears the animation queue and closes all windows opened by electron-notify. Call this to clean up before quiting your app. */
export function closeAll(): void;

export function getTemplatePath(): string;

export function setTemplatePath(path: string): void;
