import notifier = require("../");

declare class WindowsBalloon {
    constructor(option?: notifier.Option);
    notify(notification?: WindowsBalloon.Notification, callback?: notifier.NotificationCallback): WindowsBalloon;
}

declare namespace WindowsBalloon {
    interface Notification {
        title?: string | undefined;
        message?: string | undefined;
        sound?: boolean | undefined;
        /** How long to show balloons in ms */
        time?: number | undefined;
        /** Wait with callback until user action is taken on notification */
        wait?: boolean | undefined;
        /** The notification type */
        type?: "info" | "warn" | "error" | undefined;
    }
}

export = WindowsBalloon;
