/// <reference types="node" />

import NotificationCenter = require("node-notifier/notifiers/notificationcenter");
import NotifySend = require("node-notifier/notifiers/notifysend");
import WindowsToaster = require("node-notifier/notifiers/toaster");
import WindowsBalloon = require("node-notifier/notifiers/balloon");
import Growl = require("node-notifier/notifiers/growl");

declare namespace nodeNotifier {
    interface NodeNotifier extends NodeJS.EventEmitter {
        notify(
            notification?: NotificationCenter.Notification,
            callback?: NotificationCallback,
        ): NotificationCenter;
        notify(
            notification?: WindowsToaster.Notification,
            callback?: NotificationCallback,
        ): WindowsToaster;
        notify(
            notification?: WindowsBalloon.Notification,
            callback?: NotificationCallback,
        ): WindowsBalloon;
        notify(
            notification?: NotifySend.Notification,
            callback?: NotificationCallback,
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

declare var nodeNotifier: nodeNotifier.NodeNotifier;

export = nodeNotifier;

