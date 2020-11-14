import notifier = require('../');

declare class NotificationCenter {
    constructor(option?: notifier.Option);
    notify(
        notification?: NotificationCenter.Notification,
        callback?: notifier.NotificationCallback,
    ): NotificationCenter;
}

declare namespace NotificationCenter {
    interface Notification extends notifier.Notification {
        /**
         * Case Sensitive string for location of sound file, or use one of macOS' native sounds.
         */
        sound?: boolean | string;
        subtitle?: string;
        /** Attach image? (Absolute path) */
        contentImage?: string;
        /** URL to open on click */
        open?: string;
        /**
         * The amount of seconds before the notification closes.
         * Takes precedence over wait if both are defined.
         * As of Version 6.0 there is a default `timeout` set of 10 to ensure that the application closes properly.
         * In order to remove the `timeout` and have an instantly closing notification (does not support actions),
         * set `timeout` to `false`.
         * If you are using action it is recommended to set `timeout` to a high value to ensure the user has time to respond.
         */
        timeout?: number | false;
        /** Label for cancel button */
        closeLabel?: string;
        /** Action label or list of labels in case of dropdown. */
        actions?: string | string[];
        /** Label to be used if there are multiple actions */
        dropdownLabel?: string;
        /**
         * If notification should take input.
         * Value passed as third argument in callback and event emitter.
         */
        reply?: boolean;
    }
}

export = NotificationCenter;
