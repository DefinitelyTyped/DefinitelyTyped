// Type definitions for angular-notify 2.5.0
// Project: https://github.com/cgross/angular-notify
// Definitions by: Suwato <https://github.com/Suwato/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="angular" />

import * as ng from 'angular';

declare module 'angular' {
    export namespace cgNotify {

        interface INotifyService {

            /**
             * The notify function can either be passed a string or an object.
             * This function will return an object with a close() method and a message property.
             * @param message
             */
            (message: string): INotify;

            /**
             * When passing an object, the object parameters can be:
             * @param option
             */
            (option: {
                /**
                 * Required. The message to show.
                 */
                message: string;

                /**
                 * Optional. A custom template for the UI of the message.
                 */
                templateUrl?: string;

                /**
                 * Optional. A list of custom CSS classes to apply to the message element.
                 */
                classes?: string;

                /**
                 * Optional. A string containing any valid Angular HTML which will be shown instead of the regular message text.
                 * The string must contain one root element like all valid Angular HTML templates (so wrap everything in a <span>).
                 */
                messageTemplate?: string;

                /**
                 * Optional. A valid Angular scope object. The scope of the template will be created by calling $new() on this scope.
                 */
                $scope?: ng.IScope;

                /**
                 * Optional. Currently center and right are the only acceptable values.
                 */
                position?: string;

                /**
                 * Optional. The duration (in milliseconds) of the message. A duration of 0 will prevent the message from closing automatically.
                 */
                duration?: number;

                /**
                 * Optional. Element that contains each notification. Defaults to document.body.
                 */
                container?: any;
            }): INotify;


            /**
             * Call config to set the default configuration options for angular-notify.
             * The following options may be specified in the given object:
             * @param option
             */
            config(option: {
                /**
                 * The default duration (in milliseconds) of each message. A duration of 0 will prevent messages from closing automatically.
                 */
                duration?: number;

                /**
                 * The Y pixel value where messages will be shown.
                 */
                startTop?: number;

                /**
                 * The number of pixels that should be reserved between messages vertically.
                 */
                verticalSpacing?: number;

                /**
                 * The default message template.
                 */
                templateUrl?: string;

                /**
                 * The default position of each message. Currently only center and right are the supported values.
                 */
                position?: string;

                /**
                 * The default element that contains each notification. Defaults to document.body.
                 */
                container?: any;

                /**
                 * The maximum number of total notifications that can be visible at one time. Older notifications will be closed when the maximum is reached.
                 */
                maximumOpen?: number;
            }): void;

            /**
             * Closes all currently open notifications.
             */
            closeAll(): void;
        }

        interface INotify {
            /**
             * The message to show.
             */
            message: string;

            /**
             * Close this open notifications.
             */
            close(): void;
        }
    }
}
