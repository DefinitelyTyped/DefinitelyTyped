import notifier = require("../");

declare class NotifySend {
    constructor(option?: notifier.Option);
    notify(notification?: NotifySend.Notification, callback?: notifier.NotificationCallback): NotifySend;
}

declare namespace NotifySend {
    interface Notification {
        title?: string | undefined;
        message?: string | undefined;
        icon?: string | undefined;
        /** Shorthand for timeout 5 seconds if true. Timeout option overrides wait */
        wait?: boolean | undefined;
        /** Specifies the urgency level  (low,  normal,  critical). */
        urgency?: string | undefined;
        /** Specifies  the  timeout  in  seconds at which to expire the notification. Defaults to 10 seconds */
        timeout?: number | false | undefined;
        /** Specifies the notification category */
        category?: string | undefined;
        /** Specifies basic extra data to pass. Valid types are int, double, string and byte. */
        hint?: string | undefined;
    }
}

export = NotifySend;
