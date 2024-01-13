import * as React from "react";

interface reactNotifyToastColor {
    background: string;
    text: string;
}

declare class reactNotifyToast {
    show(
        text: string,
        type?: "success" | "error" | "warning" | "custom",
        timeout?: number,
        color?: reactNotifyToastColor,
    ): void;

    hide(): void;
    createShowQueue(): reactNotifyToast;
}

interface Options {
    wrapperId?: string | undefined;
    animationDuration?: number | undefined;
    timeout?: number | undefined;
    zIndex?: number | undefined;
    top?: number | string | undefined;
    colors?: any;
}

interface NotificationProps {
    options?: Options | undefined;
}

export class Notification extends React.Component<NotificationProps, any> {}

export const notify: reactNotifyToast;
export default Notification;
