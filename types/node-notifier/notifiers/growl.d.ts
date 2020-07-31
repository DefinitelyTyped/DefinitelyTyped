import notifier = require('../');

declare class Growl {
    constructor(option?: Growl.Option);
    notify(notification?: Growl.Notification, callback?: notifier.NotificationCallback): Growl;
}

declare namespace Growl {
    interface Option {
        name?: string;
        host?: string;
        port?: number;
    }

    interface Notification extends notifier.Notification {
        /** whether or not to sticky the notification (defaults to false) */
        sticky?: boolean;
        /** type of notification to use (defaults to the first registered type) */
        label?: string;
        /** the priority of the notification from lowest (-2) to highest (2) */
        priority?: number;
    }
}

export = Growl;
