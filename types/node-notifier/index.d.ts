// Type definitions for node-notifier 6.0
// Project: https://github.com/mikaelbr/node-notifier
// Definitions by: Qubo <https://github.com/tkQubo>
//                 Lorenzo Rapetti <https://github.com/loryman>
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
            title?: string;
            message?: string;
            /** Absolute path (not balloons) */
            icon?: string;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean;
        }

        interface NotificationMetadata {
            activationType?: string;
            activationAt?: string;
            deliveredAt?: string;
            activationValue?: string;
            activationValueIndex?: string;
          }

          interface NotificationCallback {
            (
              err: Error | null,
              response: string,
              metadata?: NotificationMetadata,
            ): void;
          }

        interface Option {
            withFallback?: boolean;
            customPath?: string;
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
            sound?: boolean | string;
            subtitle?: string;
            /** Attach image? (Absolute path) */
            contentImage?: string;
            /** URL to open on click */
            open?: string;
            /**
             * The amount of seconds before the notification closes.
             * Takes precedence over wait if both are defined.
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
}

declare module "node-notifier/notifiers/notifysend" {
    import notifier = require('node-notifier');

    class NotifySend {
        constructor(option?: notifier.Option);
        notify(notification?: NotifySend.Notification, callback?: notifier.NotificationCallback): NotifySend;
    }

    namespace NotifySend {
        interface Notification {
            title?: string;
            message?: string;
            icon?: string;
            /** Specifies the urgency level  (low,  normal,  critical). */
            urgency?: string;
            /** Specifies  the  timeout  in  milliseconds at which to expire the notification */
            time?: number;
            /** Specifies the notification category */
            category?: string;
            /** Specifies basic extra data to pass. Valid types are int, double, string and byte. */
            hint?: string;
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
            sound?: boolean | string;
            /** ID to use for closing notification. */
            id?: number;
            /** App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible. */
            appID?: string;
            /** Refer to previously created notification to close. */
            remove?: number;
            /**
             * Creates a shortcut <path> in the start menu which point to the
             * executable <application>, appID used for the notifications.
            */
            install?: string;
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
}

declare module "node-notifier/notifiers/balloon" {
    import notifier = require('node-notifier');

    class WindowsBalloon {
        constructor(option?: notifier.Option);
        notify(notification?: WindowsBalloon.Notification, callback?: notifier.NotificationCallback): WindowsBalloon;
    }

    namespace WindowsBalloon {
        interface Notification {
            title?: string;
            message?: string;
            /** How long to show balloons in ms */
            time?: number;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean;
            /** The notification type */
            type?: 'info' | 'warn' | 'error';
        }
    }

    export = WindowsBalloon;
}
