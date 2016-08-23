// Type definitions for angular-ui-notification
// Project: https://github.com/alexcrack/angular-ui-notification
// Definitions by: Kamil Rojewski <https://github.com/krojew/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace angular.uiNotification {
    // Taken from angular to avoid dependency
    interface IPromise<T> {
        /**
         * Regardless of when the promise was or will be resolved or rejected, then calls one of the success or error callbacks asynchronously as soon as the result is available. The callbacks are called with a single argument: the result or rejection reason. Additionally, the notify callback may be called zero or more times to provide a progress indication, before the promise is resolved or rejected.
         * The successCallBack may return IPromise<void> for when a $q.reject() needs to be returned
         * This method returns a new promise which is resolved or rejected via the return value of the successCallback, errorCallback. It also notifies via the return value of the notifyCallback method. The promise can not be resolved or rejected from the notifyCallback method.
         */
        then<TResult>(successCallback: (promiseValue: T) => IPromise<TResult>|TResult, errorCallback?: (reason: any) => any, notifyCallback?: (state: any) => any): IPromise<TResult>;

        /**
         * Shorthand for promise.then(null, errorCallback)
         */
        catch<TResult>(onRejected: (reason: any) => IPromise<TResult>|TResult): IPromise<TResult>;

        /**
         * Allows you to observe either the fulfillment or rejection of a promise, but to do so without modifying the final value. This is useful to release resources or do some clean-up that needs to be done whether the promise was rejected or resolved. See the full specification for more information.
         *
         * Because finally is a reserved word in JavaScript and reserved keywords are not supported as property names by ES3, you'll need to invoke the method like promise['finally'](callback) to make your code IE8 and Android 2.x compatible.
         */
        finally(finallyCallback: () => any): IPromise<T>;
    }

    type XPosition = 'right'|'left'|'center';
    type YPosition = 'top'|'bottom';

    type MessageType = 'primary'|'info'|'success'|'warning'|'error';

    interface IGlobalMessageOptions {
        delay?: number;
        startTop?: number;
        startRight?: number;
        verticalSpacing?: number;
        horizontalSpacing?: number;
        positionX?: XPosition;
        positionY?: YPosition;
        replaceMessage?: boolean;
        templateUrl?: string;
        onClose?: (element: any) => any;
        closeOnClick?: boolean;
        maxCount?: number;
    }

    interface IMessageOptions {
        title?: string;
        message?: string;
        templateUrl?: string;
        delay?: number;
        type?: MessageType;
        positionX?: XPosition;
        positionY?: YPosition;
        replaceMessage?: boolean;
        closeOnClick?: boolean;
    }

    interface INotificationScope {
        kill(isHard: boolean): void;
    }

    interface INotificationProvider {
        setOptions(options: IGlobalMessageOptions): void;
    }

    type Message = string|IMessageOptions;

    interface INotificationService {
        primary(message: Message): IPromise<INotificationScope>;
        info(message: Message): IPromise<INotificationScope>;
        success(message: Message): IPromise<INotificationScope>;
        warning(message: Message): IPromise<INotificationScope>;
        error(message: Message): IPromise<INotificationScope>;

        clearAll(): void;

        (message: Message, type?: MessageType): IPromise<INotificationScope>;
    }
}
