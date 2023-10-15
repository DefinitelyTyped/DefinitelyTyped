import notifier = require("../");

declare class Growl {
    constructor(option?: Growl.Option);
    notify(notification?: Growl.Notification, callback?: notifier.NotificationCallback): Growl;
}

declare namespace Growl {
    interface Option {
        name?: string | undefined;
        host?: string | undefined;
        port?: number | undefined;
    }

    interface Notification extends notifier.Notification {
        /** whether or not to sticky the notification (defaults to false) */
        sticky?: boolean | undefined;
        /** type of notification to use (defaults to the first registered type) */
        label?: string | undefined;
        /** the priority of the notification from lowest (-2) to highest (2) */
        priority?: number | undefined;
    }
}

export = Growl;
