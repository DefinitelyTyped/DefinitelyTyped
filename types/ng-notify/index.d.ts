// Type definitions for ng-notify 0.7.1
// Project: https://github.com/matowens/ng-notify
// Definitions by: Nick Zamosenchuk <https://github.com/nzamosenchuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular"/>

declare namespace ngNotify {

    /**
     * Contains the options used to configure notification.
     */
    interface IUserOptions{
        type?: string;
        theme?: string;
        position?: string;
        duration?: number;
        sticky?: boolean;
        button?: boolean;
        html?: boolean;
    }

    /**
     * Simply and lightweight notification service for AngularJS
     */
    interface INotifyService {

        /**
         * Allows to create a whole new set of styles for each notification type.
         * @param themeName The name used when setting the theme in the config object.
         * @param className The class used to target this theme in the stylesheet.
         */
        addTheme(themeName:string, className:string):void;

        /**
         * Allows to create a new type of notification to use in their app.
         * @param typeName The name used to trigger this notification type in the set method.
         * @param className The class used to target this type in the stylesheet.
         */
        addType(typeName:string, className:string):void;

        /**
         * Sets default settings for all notifications to take into account when displaying.
         * @param userOptions Notification configuration object
         */
        config(userOptions: IUserOptions):void;

        /**
         * Manually dismisses any sticky notifications that may still be set.
         */
        dismiss():void;

        /**
         * Displays a notification message.
         * @param message A message text to display.
         */
        set(message: string):void;

        /**
         * Displays a notification message and sets the type for this one notification.
         * @param message A message text to display.
         * @param type The type of the notification.
         */
        set(message: string, type: string):void;

        /**
         * displays a notification message and sets the formatting/behavioral options for this one notification.
         * @param message A message text to display.
         * @param userOptions Notification configuration object.
         */
        set(message: string, userOptions: IUserOptions):void;
    }
}
