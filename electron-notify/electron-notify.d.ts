// Type definitions for electron-notify v0.1.0
// Project: https://github.com/hankbao/electron-notify
// Definitions by: Daniel Pereira <https://github.com/djpereira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../github-electron/github-electron.d.ts" />

declare namespace ElectronNotify {

  interface INotification {
    title: string,
    text?: string,
    image?: string,
    url?: string,
    sound?: string,
    onClickFunc?: (event: string, id: number, closeNotification) => void,
    onShowFunc?: (event: string, id: number, closeNotification) => void,
    onCloseFunc?: (event: string, id: number) => void
  }

  interface IConfiguration {
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
    defaultWindow?: Electron.BrowserWindowOptions,
    defaultStyleContainer?: any,
    defaultStyleAppIcon?: any,
    defaultStyleImage?: any,
    defaultStyleClose?: any,
    defaultStyleText?: any
  }

}

/** Nice and simple notifications for electron apps */
declare module 'electron-notify' {

  /** Change some config options. Can be run multiple times, also between notify()-calls to change electron-notifys behaviour. */
  export function setConfig(customConfig: ElectronNotify.IConfiguration);

  /** Displays new notification. */
  export function notify(notification: ElectronNotify.INotification);

  /** Clears the animation queue and closes all windows opened by electron-notify. Call this to clean up before quiting your app. */
  export function closeAll();

  export function getTemplatePath(): string;

  export function setTemplatePath(path: string);

}