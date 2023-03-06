// Type definitions for node-notifier 5.4.0
// Project: https://github.com/mikaelbr/node-notifier
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "node-notifier" {
    import NotificationCenter = require('node-notifier/notifiers/notificationcenter');
    import NotifySend = require("node-notifier/notifiers/notifysend");
    import WindowsToaster = require("node-notifier/notifiers/toaster");
    import WindowsBalloon = require("node-notifier/notifiers/balloon");
    import Growl = require("node-notifier/notifiers/growl");

    namespace nodeNotifier {
        interface NodeNotifier extends NodeJS.EventEmitter {
            notify(
                notification?: NotificationCenter.Notification,
                callback?: NotificationCallback
            ): NotificationCenter;
            notify(
                notification?: WindowsToaster.Notification,
                callback?: NotificationCallback
            ): WindowsToaster;
            notify(
                notification?: WindowsBalloon.Notification,
                callback?: NotificationCallback
            ): WindowsBalloon;
            notify(
                notification?: NotifySend.Notification,
                callback?: NotificationCallback
            ): NotifySend;
            notify(notification?: Growl.Notification, callback?: NotificationCallback): Growl;
            notify(notification?: Notification, callback?: NotificationCallback): NodeNotifier;
            notify(notification?: string, callback?: NotificationCallback): NodeNotifier;
            NotificationCenter: typeof NotificationCenter;
            NotifySend: typeof NotifySend;
            WindowsToaster: typeof WindowsToaster;
            WindowsBalloon: typeof WindowsBalloon;
            Growl: typeof Growl;
        }

        interface Notification {
            title?: string | undefined;
            message?: string | undefined;
            /** Absolute path (not balloons) */
            icon?: string | undefined;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean | undefined;
        }

        interface NotificationMetadata {
            activationType?: string | undefined;
            activationAt?: string | undefined;
            deliveredAt?: string | undefined;
            activationValue?: string | undefined;
            activationValueIndex?: string | undefined;
          }

          interface NotificationCallback {
            (
              err: Error | null,
              response: string,
              metadata?: NotificationMetadata,
            ): void;
          }

        interface Option {
            withFallback?: boolean | undefined;
            customPath?: string | undefined;
        }
    }

    var nodeNotifier: nodeNotifier.NodeNotifier;

    export = nodeNotifier;
}

declare module "node-notifier/notifiers/notificationcenter" {
    import notifier = require('node-notifier');

    class NotificationCenter {
        constructor(option?: notifier.Option);
        notify(notification?: NotificationCenter.Notification, callback?: notifier.NotificationCallback): NotificationCenter;
    }

    namespace NotificationCenter {
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
}

declare module "node-notifier/notifiers/notifysend" {
    import notifier = require('node-notifier');

    class NotifySend {
        constructor(option?: notifier.Option);
        notify(notification?: NotifySend.Notification, callback?: notifier.NotificationCallback): NotifySend;
    }

    namespace NotifySend {
        interface Notification {
            title?: string | undefined;
            message?: string | undefined;
            icon?: string | undefined;
            /** Specifies the urgency level  (low,  normal,  critical). */
            urgency?: string | undefined;
            /** Specifies  the  timeout  in  milliseconds at which to expire the notification */
            time?: number | undefined;
            /** Specifies the notification category */
            category?: string | undefined;
            /** Specifies basic extra data to pass. Valid types are int, double, string and byte. */
            hint?: string | undefined;
        }
    }

    export = NotifySend;
}

declare module "node-notifier/notifiers/toaster" {
    import notifier = require('node-notifier');

    class WindowsToaster {
        constructor(option?: notifier.Option);
        notify(notification?: WindowsToaster.Notification, callback?: notifier.NotificationCallback): WindowsToaster;
    }

    namespace WindowsToaster {
        interface Notification extends notifier.Notification {
            /**
             * Defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx
             */
            sound?: boolean | string | undefined;
            /** ID to use for closing notification. */
            id?: number | undefined;
            /** App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible. */
            appID?: string | undefined;
            /** Refer to previously created notification to close. */
            remove?: number | undefined;
            /**
             * Creates a shortcut <path> in the start menu which point to the
             * executable <application>, appID used for the notifications.
            */
            install?: string | undefined;
        }
    }

    export = WindowsToaster;
}

declare module "node-notifier/notifiers/growl" {
    import notifier = require('node-notifier');

    class Growl {
        constructor(option?: Growl.Option);
        notify(notification?: Growl.Notification, callback?: notifier.NotificationCallback): Growl;
    }

    namespace Growl {
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
}

declare module "node-notifier/notifiers/balloon" {
    import notifier = require('node-notifier');

    class WindowsBalloon {
        constructor(option?: notifier.Option);
        notify(notification?: WindowsBalloon.Notification, callback?: notifier.NotificationCallback): WindowsBalloon;
    }

    namespace WindowsBalloon {
        interface Notification {
            title?: string | undefined;
            message?: string | undefined;
            /** How long to show balloons in ms */
            time?: number | undefined;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean | undefined;
            /** The notification type */
            type?: 'info' | 'warn' | 'error' | undefined;
        }
    }

    export = WindowsBalloon;
}
