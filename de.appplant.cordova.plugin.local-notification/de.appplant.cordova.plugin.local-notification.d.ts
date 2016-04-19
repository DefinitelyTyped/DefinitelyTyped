// Type definitions for Apache Local Push Notification plugin
// Project: https://github.com/katzer/cordova-plugin-local-notifications
// Definitions by: Paul Thiel <https://github.com/Lordnoname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The plugin provides executing local push notifications on the device
 */

declare module CordovaPluginLocalNotification {
  interface LocalNotification {

    /**
     * Schedule a single push notification
     */
    schedule(notificationData: NotificationData): void;
    /**
     * Schedule multiple push notifications
     */
    schedule(notificationData: Array<NotificationData>): void;
    /**
     * Events to get informed:
     * - when a local notification has been scheduled (eventType: schedule)
     * - when a local notification has been updated (eventType: update)
     * - when a local notification has been triggered (eventType: trigger)
     * - what local notification the user has taped (eventType: click)
     * - when a triggered local notification has been cleared (eventType: clear)
     * - when all triggered local notifications have been cleared (eventType: clearall)
     * - when a scheduled local notification has been cancelled (eventType: cancel)
     * - when all scheduled local notifications have been cancelled (eventType: cancelall)
     */
    on(eventType: string, callback?: (notification?: NotificationData) => void): void;
    /**
     * Update a single scheduled local notification
     */
    update(notificationData: NotificationData): void;
    /**
     * Update multiple scheduled local notifications
     */
    update(notificationData: Array<NotificationData>): void;
    /**
     * Clear a single triggered local notification
     */
    clear(id: number, callback?: () => void): void;
    /**
     * Clear multiple triggered local notifications
     */
    clear(ids: Array<number>, callback?: () => void): void;
    /**
     * Clear all triggered local notifications
     */
    clearAll(callback?: () => void, scope?: NotificationData) : void;
    /**
     * Cancel a single scheduled local notification
     */
    cancel(id: number, callback?: () => void): void;
    /**
     * Cancel multiple scheduled local notifications
     */
    cancel(ids: Array<number>, callback?: () => void): void;
    /**
     * Cancel all scheduled local notifications
     */
    cancelAll(callback?: () => void, scope?: NotificationData): void;
    /**
     * Check the local notification's presence
     */
    isPresent(id: number, callback: (present: boolean) => void): void;
    /**
     * Check if the local notification is scheduled
     */
    isScheduled(id: number, callback: (present: boolean) => void): void;
    /**
     * Check if the local notification is triggered
     */
    isTriggered(id: number, callback: (present: boolean) => void): void;
    /**
     * Get the ids of all local notifications
     */
    getAllIds(callback: (ids: Array<number>) => void): void;
    /**
     * Get the ids of all scheduled local notifications
     */
    getScheduledIds(callback: (ids: Array<number>) => void): void;
    /**
     * Get the ids of all triggered local notifications
     */
    getTriggeredIds(callback: (ids: Array<number>) => void): void;
    /**
     * Get a single local notification
     */
    get(id: number, callback: (notification: NotificationData) => void): void;
    /**
     * Get multiple local notifications
     */
    get(id: Array<number>, callback: (notification: Array<NotificationData>) => void): void;
    /**
     * Get a single scheduled local notification
     */
    getScheduled(id: number, callback: (notification: NotificationData) => void): void;
    /**
     * Get a single triggered local notification
     */
    getTriggered(id: number, callback: (notification: NotificationData) => void): void;
    /**
     * Get all local notifications
     */
    getAll(callback: (notifications: Array<NotificationData>) => void): void;
      /**
     * Register permission to show notifications if not already granted.
     */
    registerPermission(callback: ((granted: boolean) => void), scope?: NotificationData): void;
    /**
     * Informs if the app has the permission to show notifications.
     */
    hasPermission(callback: ((granted: boolean) => void), scope?: NotificationData): void;
  }

  interface NotificationData {

    /**
     * A unique identifier required to clear, cancel, update or retrieve the local notification in the future
     */
    id?: number,
    /**
     * First row of the notification
     */
    title?: string,
    /**
     * Second row of the notification
     */
    text?: string,
    /**
     * The interval at which to reschedule the local notification
     */
    every?: string,
    /**
     * The date and time when the system should deliver the local notification.
     */
    at?: Date,
    /**
     * The date and time when the system should deliver the local notification.
     */
    firstAt?: number,
    /**
     * The number currently set as the badge of the app icon in Springboard (ios)
     * or at the right-hand side of the local notification (android)
     */
    badge?: number,
    /**
     * URL of the file containing the sound to play when an alert is displayed
     */
    sound?: URL,
    /**
     * Arbitrary data, objects will be encoded to JSON string
     */
    data?: string,
    /**
     * Uri of the icon that is shown in the ticker and notification (android-only)
     */
    icon?: URL,
    /**
     * Uri of the resource to use in the notification layouts (android-only)
     */
    smallIcon?: URL,
    /**
     * Ongoing notifications differ from regular notifications in the following ways (android-only):
     * - They are sorted above the regular notifications in the notification panel
     * - They do not have an 'X' close button, and are not affected by the "Clear all" button
     */
    ongoing?: boolean,
    /**
     * ARGB value that you would like the LED on the device to blink (android-only)
     */
    led?: boolean
  }
}

interface CordovaPlugins {

  notification: CordovaPluginNotification;
}

interface CordovaPluginNotification {

  local: CordovaPluginLocalNotification.LocalNotification;
}