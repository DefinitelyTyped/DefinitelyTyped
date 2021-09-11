// Type definitions for React Notification System 0.2
// Project: https://www.npmjs.com/package/react-notification-system
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>, Deividas Bakanas <https://github.com/DeividasBakanas>, Karol Janyst <https://github.com/LKay>, Bartosz Szewczyk <https://github.com/sztobar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

declare namespace NotificationSystem {

    export interface System extends React.Component<Attributes, State> {
        addNotification(notification: Notification): Notification;
        removeNotification(uidOrNotification: number | string | Notification): void;
        clearNotifications(): void;
        editNotification(uidOrNotification: number | string | Notification, newNotification: Notification): void;
    }

    export type CallBackFunction = (notification: Notification) => void;

    export interface Notification {
        title?: string | JSX.Element | undefined;
        message?: string | JSX.Element | undefined;
        level?: "error" | "warning" | "info" | "success" | undefined;
        position?: "tr" | "tl" | "tc" | "br" | "bl" | "bc" | undefined;
        autoDismiss?: number | undefined;
        dismissible?: 'both' | 'button' | 'click' | 'hide' | 'none' | boolean | undefined;
        action?: ActionObject | undefined;
        children?: React.ReactNode | undefined;
        onAdd?: CallBackFunction | undefined;
        onRemove?: CallBackFunction | undefined;
        uid?: number | string | undefined;
    }

    export interface ActionObject {
        label: string;
        callback?: (() => void) | undefined;
    }

    export interface ContainersStyle {
        DefaultStyle: React.CSSProperties;
        tl?: React.CSSProperties | undefined;
        tr?: React.CSSProperties | undefined;
        tc?: React.CSSProperties | undefined;
        bl?: React.CSSProperties | undefined;
        br?: React.CSSProperties | undefined;
        bc?: React.CSSProperties | undefined;
    }

    export interface ItemStyle {
        DefaultStyle?: React.CSSProperties | undefined;
        success?: React.CSSProperties | undefined;
        error?: React.CSSProperties | undefined;
        warning?: React.CSSProperties | undefined;
        info?: React.CSSProperties | undefined;
    }

    export interface WrapperStyle {
        DefaultStyle?: React.CSSProperties | undefined;
    }

    export interface Style {
        Wrapper?: any;
        Containers?: ContainersStyle | undefined;
        NotificationItem?: ItemStyle | undefined;
        Title?: ItemStyle | undefined;
        MessageWrapper?: WrapperStyle | undefined;
        Dismiss?: ItemStyle | undefined;
        Action?: ItemStyle | undefined;
        ActionWrapper?: WrapperStyle | undefined;
    }

    export interface Attributes extends React.ClassAttributes<System> {
        noAnimation?: boolean | undefined;
        style?: Style | boolean | undefined;
        allowHTML?: boolean | undefined;
    }

    export interface State {
        notifications: Notification[]
    }
}


declare var NotificationSystem: React.ClassicComponentClass<NotificationSystem.Attributes>;
export = NotificationSystem;
