// Type definitions for angular-ui-notification
// Project: https://github.com/alexcrack/angular-ui-notification
// Definitions by: Kamil Rojewski <https://github.com/krojew/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace uiNotification {
        type XPosition = 'right' | 'left' | 'center';
        type YPosition = 'top' | 'bottom';

        type MessageType = 'primary' | 'info' | 'success' | 'warning' | 'error';

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

        type Message = string | IMessageOptions;

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
}
