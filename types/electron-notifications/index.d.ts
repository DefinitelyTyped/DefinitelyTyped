// Type definitions for electron-notifications v0.0.3
// Project: https://github.com/blainesch/electron-notifications
// Definitions by: Daniel Pereira <https://github.com/djpereira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Electron from 'electron';

declare namespace ElectronNotifications {

  interface NotifierOptions {

    /** A message to display under the title. */
    message?: string,

    /** The absolute URL of a icon displayed to the left of the text. */
    icon?: string,

    /** One or two buttons to display on the right of the notification. */
    buttons?: string[]
  }

  class NotificationWindow extends Electron.BrowserWindow {

    /** When the notification was clicked, but not dragged. This usually does the default action, or closes the notification. */
    on(event: 'clicked', listener: Function): this;

    /** When the notification has been swiped to the right. This usually indiciated the user wants to dismiss the notification. */
    on(event: 'swipedRight', listener: Function): this;

    /** When any one of the buttons are clicked, it will trigger a buttonClicked event, and pass the text that was clicked to the handler. */
    on(event: 'buttonClicked', listener: (text: string) => void): this;

    on(event: string, listener: Function): this;
  }

  /** A node module for sending notifications in electron applications */
  export function notify(title: string, data?: ElectronNotifications.NotifierOptions): ElectronNotifications.NotificationWindow;
}


export = ElectronNotifications;