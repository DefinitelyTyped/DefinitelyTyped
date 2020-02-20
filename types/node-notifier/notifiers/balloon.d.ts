import notifier = require('../');

declare class WindowsBalloon {
    constructor(option?: notifier.Option);
    notify(notification?: WindowsBalloon.Notification, callback?: notifier.NotificationCallback): WindowsBalloon;
}

declare namespace WindowsBalloon {
    interface Notification {
        title?: string;
        message?: string;
        sound?: boolean;
        /** How long to show balloons in ms */
        time?: number;
        /** Wait with callback until user action is taken on notification */
        wait?: boolean;
        /** The notification type */
        type?: 'info' | 'warn' | 'error';
    }
}

export = WindowsBalloon;
