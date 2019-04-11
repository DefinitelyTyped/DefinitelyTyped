// Type definitions for angular-desktop-notification 1.1
// Project: https://github.com/jmsanpascual/angular-desktop-notification#readme
// Definitions by: Davide Donadello <https://github.com/Dona278>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

declare var _: string;
export = _;

declare module 'angular' {
    namespace desktopNotification {
        /**
         * All options available during show notification according to https://developer.mozilla.org/en-US/docs/Web/API/notification
         */
        interface AugmentedNotificationOptions extends NotificationOptions {
            /**
             * The badge property of the Notification interface returns the URL of the image used to represent the notification
             * when there is not enough space to display the notification itself.
             *
             * This is an experimental technology
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/badge
             */
            badge?: string;

            /**
             * The data read-only property of the Notification interface returns a structured clone of the notification's data,
             * as specified in the data option of the Notification() constructor
             *
             * Note: This feature is available in Web Workers.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/data
             */
            data?: any;

            /**
             * The image read-only property of the Notification interface contains the URL of an image to be displayed as part of
             * the notification, as specified in the image option of the Notification() constructor.
             *
             * Note: This feature is available in Web Workers.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/image
             */
            image?: string;

            /**
             * The renotify read-only property of the Notification interface specifies whether the user should be notified after a
             * new notification replaces an old one, as specified in the renotify option of the Notification() constructor
             *
             * Note: This property is not currently supported in any browser.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/renotify
             */
            renotify?: boolean;

            /**
             * The requireInteraction read-only property of the Notification interface returns a Boolean indicating that a notification
             * should remain active until the user clicks or dismisses it, rather than closing automatically.
             *
             * Note: This can be set when the notification is first created by setting the requireInteraction option to true in the
             *       options object of the Notification.Notification() constructor.
             * Note: This feature is available in Web Workers.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/requireInteraction
             */
            requireInteraction?: boolean;

            /**
             * The silent read-only property of the Notification interface specifies whether the notification should be silent, i.e. no
             * sounds or vibrations should be issued, regardless of the device settings. This is specified in the renotify option of the
             * Notification() constructor.
             *
             * Note: This feature is available in Web Workers.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/silent
             */
            silent?: boolean;

            /**
             * The timestamp read-only property of the Notification interface returns a DOMTimeStamp, as specified in the timestamp option of the
             * Notification() constructor.
             *
             * The notification's timestamp can represent the time, in milliseconds since 00:00:00 UTC on 1 January 1970, of the event for which
             * the notification was created, or it can be an arbitrary timestamp that you want associated with the notification. For example, a
             * timestamp for an upcoming meeting could be set in the future, whereas a timestamp for a missed message could be set in the past.
             *
             * Note: This feature is available in Web Workers
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/timestamp
             */
            timestamp?: number;

            /**
             * The title read-only property of the Notification interface indicates the title of the notification, as specified in the title parameter
             * of the Notification() constructor.
             *
             * Note: This feature is available in Web Workers.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/title
             */
            title?: string;

            /**
             * The vibrate read-only property of the Notification interface specifies a a vibration pattern for the device's vibration hardware to emit
             * when the notification fires. This is specified in the vibrate option of the Notification() constructor.
             *
             * Note: This property is not currently supported in any browser.
             * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Notification/vibrate
             */
            vibrate?: any;

            /**
             * The onclick property of the Notification interface specifies an event listener to receive click events.
             * These events occur when the user clicks on a displayed Notification.
             *
             * The default behavior is to move the focus to the viewport of the notification's related browsing context.
             * If you don't want that behaviour, call preventDefault() on the event object.
             */
            onClick?: (event: MouseEvent) => void;

            /**
             * The onerror property of the Notification interface specifies an event listener to receive error events.
             * These events occur when something goes wrong with a Notification (in many cases an error preventing the notification from being displayed.)
             *
             * A function which serves as the event handler for the error event. When an error occurs, the specified function will be called.
             * If null, no error handler is in effect.
             */
            onError?: EventListener;
        }

        // tslint:disable-next-line interface-name
        interface IDesktopNotificationOptions {
            autoClose?: boolean;
            duration?: number;
            showOnPageHidden?: boolean;
        }

        // tslint:disable-next-line interface-name
        interface IDesktopNotificationProvider {
            /**
             * Set the default app-wide configuration for desktopNotification
             */
            config(options: IDesktopNotificationOptions): void;
        }

        // tslint:disable-next-line interface-name
        interface IDesktopNotificationService {
            permissions: {
                default: 'default',
                denied: 'denied',
                granted: 'granted',
            };

            /**
             * This method returns true if the browser supports the Notification API, false otherwise
             */
            isSupported(): boolean;

            /**
             * This method will get the current permission set in the browser which could be one of the ff.
             * - desktopNotification.permissions.default
             * - desktopNotification.permissions.denied
             * - desktopNotification.permissions.granted
             */
            currentPermission(): NotificationPermission;

            /**
             * This method returns a $q promise, if the user allowed the notification the successCallback will be executed,
             * errorCallback will be executed otherwise
             */
            requestPermission(): IPromise<NotificationPermission>;

            /**
             * This method will display the notification using the parameter values.
             * See all available options here at https://developer.mozilla.org/en-US/docs/Web/API/notification#Instance_properties
             */
            show(title: string, options?: NotificationOptions | AugmentedNotificationOptions): void;
        }
    }
}
