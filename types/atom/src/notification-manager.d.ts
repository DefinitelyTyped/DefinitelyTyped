import { Disposable, ErrorNotificationOptions, Notification, NotificationOptions } from '../index';

/** A notification manager used to create Notifications to be shown to the user. */
export interface NotificationManager {
    // Events
    /** Invoke the given callback after a notification has been added. */
    onDidAddNotification(callback: (notification: Notification) => void): Disposable;

    /** Invoke the given callback after the notifications have been cleared. */
    onDidClearNotifications(callback: () => void): Disposable;

    // Adding Notifications
    /** Add a success notification. */
    addSuccess(message: string, options?: NotificationOptions): Notification;

    /** Add an informational notification. */
    addInfo(message: string, options?: NotificationOptions): Notification;

    /** Add a warning notification. */
    addWarning(message: string, options?: NotificationOptions): Notification;

    /** Add an error notification. */
    addError(message: string, options?: ErrorNotificationOptions): Notification;

    /** Add a fatal error notification. */
    addFatalError(message: string, options?: ErrorNotificationOptions): Notification;

    // Getting Notifications
    /** Get all the notifications. */
    getNotifications(): ReadonlyArray<Notification>;

    // Managing Notifications
    /** Clear all the notifications. */
    clear(): void;
}
