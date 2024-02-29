import notifier = require("../");

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
        sound?: boolean | string | undefined;
        subtitle?: string | undefined;
        /** Attach image? (Absolute path) */
        contentImage?: string | undefined;
        /** URL to open on click */
        open?: string | undefined;
        /**
         * The amount of seconds before the notification closes.
         * Takes precedence over wait if both are defined.
         * As of Version 6.0 there is a default `timeout` set of 10 to ensure that the application closes properly.
         * In order to remove the `timeout` and have an instantly closing notification (does not support actions),
         * set `timeout` to `false`.
         * If you are using action it is recommended to set `timeout` to a high value to ensure the user has time to respond.
         */
        timeout?: number | false | undefined;
        /** Label for cancel button */
        closeLabel?: string | undefined;
        /** Action label or list of labels in case of dropdown. */
        actions?: string | string[] | undefined;
        /** Label to be used if there are multiple actions */
        dropdownLabel?: string | undefined;
        /**
         * If notification should take input.
         * Value passed as third argument in callback and event emitter.
         */
        reply?: boolean | undefined;
    }
}

export = NotificationCenter;
