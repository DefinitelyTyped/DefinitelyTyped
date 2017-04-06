// Type definitions for node-notifier
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
            notify(notification?: Notification, callback?: NotificationCallback): NodeNotifier;
            NotificationCenter: NotificationCenter;
            NotifySend: NotifySend;
            WindowsToaster: WindowsToaster;
            WindowsBalloon: WindowsBalloon;
            Growl: Growl;
        }

        interface Notification {
            title?: string;
            message?: string;
            /** Absolute path (not balloons) */
            icon?: string;
            /** Only Notification Center or Windows Toasters */
            sound?: boolean;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean;
        }

        interface NotificationCallback {
            (err: any, response: any): any;
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
            subtitle?: string;
            /** Attach image? (Absolute path) */
            contentImage?: string;
            /** URL to open on click */
            open?: string;
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
        notify(notification?: notifier.Notification, callback?: notifier.NotificationCallback): WindowsToaster;
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

        interface Notification {
            title?: string;
            message?: string;
            /** Absolute path (not balloons) */
            icon?: string;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean;
            /** whether or not to sticky the notification (defaults to false) */
             sticky?: boolean;
            /** type of notification to use (defaults to the first registered type) */
            label: string;
            /** the priority of the notification from lowest (-2) to highest (2) */
            priority: number;
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
            /** Only Notification Center or Windows Toasters */
            sound?: boolean;
            /** How long to show balloons in ms */
            time?: number;
            /** Wait with callback until user action is taken on notification */
            wait?: boolean;
        }
    }

    export = WindowsBalloon;
}
