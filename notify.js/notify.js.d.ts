// Type definitions for notify.js 1.2.0
// Project: https://github.com/alexgibson/notify.js
// Definitions by: soundTricker <https://github.com/soundTricker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var Notify: {
    new (title : string , options? : notify.INotifyOption): notify.INotify;

    /**
     * Check is permission is needed for the user to receive notifications.
     * @return true : needs permission, false : does not need
     */
    needsPermission() : boolean;

    /**
     * Asks the user for permission to display notifications
     * @param onPermissionGrantedCallback A callback for permmision is granted.
     * @param onPermissionDeniedCallback  A callback for permmision is denied.
     */
    requestPermission(onPermissionGrantedCallback?: ()=> any, onPermissionDeniedCallback? : ()=> any) : void;

    /**
     * return true if the browser supports HTML5 Notification
     * @param true : the browser supports HTML5 Notification, false ; the browswer does not supports HTML5 Notification.
     */
    isSupported() : boolean;
}

declare module notify {
    
    /**
     * Interface for Web Notifications API Wrapper.
     */
     interface INotify {
        /**
         * Show the notification.
         */
        show() : void;

        /**
         * Remove all event listener.
         */
        destroy() : void;

        /**
         * Close the notification.
         */
        close() : void;
        onShowNotification(e : Event) : void;
        onCloseNotification() : void;
        onClickNotification() : void;
        onErrorNotification() : void;
        handleEvent(e : Event) : void;
    }
    
    /**
     * Interface for the Notify's optional parameter.
     */
    interface INotifyOption {

        /**
         * notification message body
         */
        body? : string;

        /**
         * path for icon to display in notification
         */
        icon? : string;

        /**
         * unique identifier to stop duplicate notifications
         */
        tag? : string;

        /**
         * callback when notification is shown
         */
        notifyShow? (e : Event): any;
        /**
         * callback when notification is closed
         */
        notifyClose? : Function;
        /**
         * callback when notification is clicked
         */
        notifyClick? : Function;
        /**
         * callback when notification throws an error
         */
        notifyError? : Function;
        /**
         *  callback when user has granted permission
         */
        permissionGranted? : Function;
        /**
         * callback when user has denied permission
         */
        permissionDenied? : Function;
    }
}
