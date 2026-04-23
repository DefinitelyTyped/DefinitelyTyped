import events = require("events");
import notifier = require("../");

declare class NotifySend extends events.EventEmitter {
    constructor(option?: NotifySend.Option);
    notify(notification?: NotifySend.Notification, callback?: notifier.NotificationCallback): NotifySend;
}

declare namespace NotifySend {
    interface Option extends notifier.Option {
        suppressOsdCheck?: boolean | undefined;
    }

    interface Notification extends notifier.Notification {
        /** Specifies the urgency level  (low,  normal,  critical). */
        urgency?: string | undefined;
        /** Specifies  the  timeout  in  seconds at which to expire the notification. Defaults to 10 seconds */
        timeout?: number | false | undefined;
        /** Specifies the notification category */
        category?: string | undefined;
        /** Specifies basic extra data to pass. Valid types are int, double, string and byte. */
        hint?: string | undefined;
        /** Specifies the application name to show in the notification. */
        "app-name"?: string | undefined;
    }
}

export = NotifySend;
