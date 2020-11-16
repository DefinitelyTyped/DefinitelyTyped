import notifier = require('../');

declare class WindowsToaster {
    constructor(option?: notifier.Option);
    notify(notification?: WindowsToaster.Notification, callback?: notifier.NotificationCallback): WindowsToaster;
}

declare namespace WindowsToaster {
    interface Notification extends notifier.Notification {
        /**
         * Defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx
         */
        sound?: boolean | string;
        /** ID to use for closing notification. */
        id?: number;
        /** App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible. */
        appID?: string;
        /** Refer to previously created notification to close. */
        remove?: number;
        /**
         * Creates a shortcut <path> in the start menu which point to the
         * executable <application>, appID used for the notifications.
         */
        install?: string;
    }
}

export = WindowsToaster;
