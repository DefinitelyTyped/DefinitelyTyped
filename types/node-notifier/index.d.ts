// Type definitions for node-notifier 8.0
// Project: https://github.com/mikaelbr/node-notifier
// Definitions by: Qubo <https://github.com/tkQubo>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import NotificationCenter = require('./notifiers/notificationcenter');
import NotifySend = require('./notifiers/notifysend');
import WindowsToaster = require('./notifiers/toaster');
import WindowsBalloon = require('./notifiers/balloon');
import Growl = require('./notifiers/growl');

declare namespace nodeNotifier {
    interface NodeNotifier extends NodeJS.EventEmitter {
        notify(notification?: NotificationCenter.Notification, callback?: NotificationCallback): NotificationCenter;
        notify(notification?: WindowsToaster.Notification, callback?: NotificationCallback): WindowsToaster;
        notify(notification?: WindowsBalloon.Notification, callback?: NotificationCallback): WindowsBalloon;
        notify(notification?: NotifySend.Notification, callback?: NotificationCallback): NotifySend;
        notify(notification?: Growl.Notification, callback?: NotificationCallback): Growl;
        notify(notification?: Notification | string, callback?: NotificationCallback): NodeNotifier;
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
        (err: Error | null, response: string, metadata?: NotificationMetadata): void;
    }

    interface Option {
        withFallback?: boolean | undefined;
        customPath?: string | undefined;
    }
}

declare var nodeNotifier: nodeNotifier.NodeNotifier;

export = nodeNotifier;
