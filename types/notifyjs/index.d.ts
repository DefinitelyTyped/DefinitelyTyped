// Type definitions for notifyjs 3.0.0
// Project: https://github.com/alexgibson/notify.js
// Definitions by: soundTricker <https://github.com/soundTricker>
//                 NateScarlet <https://github.com/NateScarlet>
//                 eikendev <https://github.com/eikendev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Notify {
    constructor(title: string, options?: INotifyOption);

    /**
     * Check is permission is needed for the user to receive notifications.
     * @return true : needs permission, false : does not need
     */
    static needsPermission: boolean;

    /**
     * Asks the user for permission to display notifications
     * @param onPermissionGrantedCallback A callback for permission is granted.
     * @param onPermissionDeniedCallback  A callback for permission is denied.
     */
    static requestPermission(onPermissionGrantedCallback?: () => any, onPermissionDeniedCallback?: () => any): void;

    /**
     * return true if the browser supports HTML5 Notification
     * @param true : the browser supports HTML5 Notification, false ; the browser does not supports HTML5 Notification.
     */
    static isSupported(): boolean;

    /**
     * shows the user's current permission level (granted, denied or default), returns null if notifications are not supported.
     * @return 'granted' : permission has been given, 'denied' : permission has been denied, 'default' : permission has not yet been set, null : notifications are not supported
     */
    static permissionLevel: string;

    /**
     * Show the notification.
     */
    show(): void;

    /**
     * Remove all event listener.
     */
    destroy(): void;

    /**
     * Close the notification.
     */
    close(): void;
    onShowNotification(e: Event): void;
    onCloseNotification(): void;
    onClickNotification(): void;
    onErrorNotification(): void;
    handleEvent(e: Event): void;
}

/**
 * Interface for the Notify's optional parameter.
 */
interface INotifyOption {

    /**
     * notification message body
     */
    body?: string;

    /**
     * path for icon to display in notification
     */
    icon?: string;

    /**
     * unique identifier to stop duplicate notifications
     */
    tag?: string;

    /**
    * number of seconds to close the notification automatically
    */
    timeout?: number;

    /**
    * whether this notification should be silent or not
    */
    silent?: boolean;

    /**
     * callback when notification is shown
     */
    notifyShow?(e: Event): any;
    /**
     * callback when notification is closed
     */
    notifyClose?: Function;
    /**
     * callback when notification is clicked
     */
    notifyClick?: Function;
    /**
     * callback when notification throws an error
     */
    notifyError?: Function;
    /**
     *  callback when user has granted permission
     */
    permissionGranted?: Function;
    /**
     * callback when user has denied permission
     */
    permissionDenied?: Function;

    /**
     * whether we expect for user interaction or not
     * in case value is true the timeout for closing the notification won't be set
     */
    requireInteraction?: boolean;
}
export = Notify
