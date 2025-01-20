/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace uiNotification {
        type XPosition = "right" | "left" | "center";
        type YPosition = "top" | "bottom";

        type MessageType = "primary" | "info" | "success" | "warning" | "error";

        interface IGlobalMessageOptions {
            delay?: number | undefined;
            startTop?: number | undefined;
            startRight?: number | undefined;
            verticalSpacing?: number | undefined;
            horizontalSpacing?: number | undefined;
            positionX?: XPosition | undefined;
            positionY?: YPosition | undefined;
            replaceMessage?: boolean | undefined;
            templateUrl?: string | undefined;
            onClose?: ((element: any) => any) | undefined;
            closeOnClick?: boolean | undefined;
            maxCount?: number | undefined;
        }

        interface IMessageOptions {
            title?: string | undefined;
            message?: string | undefined;
            templateUrl?: string | undefined;
            delay?: number | undefined;
            type?: MessageType | undefined;
            positionX?: XPosition | undefined;
            positionY?: YPosition | undefined;
            replaceMessage?: boolean | undefined;
            closeOnClick?: boolean | undefined;
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
