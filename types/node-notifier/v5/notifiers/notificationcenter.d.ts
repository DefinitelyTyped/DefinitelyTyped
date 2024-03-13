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
         */
        timeout?: number | undefined;
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
