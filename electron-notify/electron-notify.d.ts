// Type definitions for electron-notify v0.1.0
// Project: https://github.com/hankbao/electron-notify
// Definitions by: Daniel Pereira <https://github.com/djpereira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../github-electron/github-electron.d.ts" />

declare namespace ElectronNotify {
}

/** Nice and simple notifications for electron apps */
declare module 'electron-notifications' {

  /** Change some config options. Can be run multiple times, also between notify()-calls to change electron-notifys behaviour. */
  export function setConfig(configObj);

  /** Displays new notification. */
  export function notify(notificationObj);

  /** Clears the animation queue and closes all windows opened by electron-notify. Call this to clean up before quiting your app. */
  export function closeAll();

  export function setTemplatePath(path);

  /** Returns the maximum amount of notifications that fit onto the users screen. */
  export function calcMaxVisibleNotification(): number;
}