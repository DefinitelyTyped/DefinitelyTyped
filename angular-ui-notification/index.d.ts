// Type definitions for angular-ui-notification 0.2
// Project: https://github.com/alexcrack/angular-ui-notification
// Definitions by: Kamil Rojewski <https://github.com/krojew/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angular';

declare module 'angular' {
    export namespace uiNotification {
        type XPosition = 'right' | 'left' | 'center';
        type YPosition = 'top' | 'bottom';

        type MessageType = 'primary' | 'info' | 'success' | 'warning' | 'error';

        interface GlobalMessageOptions {
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

        interface MessageOptions {
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

        interface NotificationScope {
            kill(isHard: boolean): void;
        }

        interface NotificationProvider {
            setOptions(options: GlobalMessageOptions): void;
        }

        type Message = string | MessageOptions;

        interface NotificationService {
            primary(message: Message): IPromise<NotificationScope>;
            info(message: Message): IPromise<NotificationScope>;
            success(message: Message): IPromise<NotificationScope>;
            warning(message: Message): IPromise<NotificationScope>;
            error(message: Message): IPromise<NotificationScope>;

            clearAll(): void;

            (message: Message, type?: MessageType): IPromise<NotificationScope>;
        }
    }
}
