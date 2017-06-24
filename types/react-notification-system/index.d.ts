// Type definitions for React Notification System 0.2
// Project: https://www.npmjs.com/package/react-notification-system
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>, Deividas Bakanas <https://github.com/DeividasBakanas>, Karol Janyst <https://github.com/LKay>, Bartosz Szewczyk <https://github.com/sztobar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

declare namespace NotificationSystem {

    export interface System extends React.Component<Attributes, State> {
        addNotification(notification: Notification): Notification;
        removeNotification(uidOrNotification: number | string | Notification): void;
        clearNotifications(): void;
    }

    export type CallBackFunction = (notification: Notification) => void;

    export interface Notification {
        title?: string;
        message?: string;
        level?: "error" | "warning" | "info" | "success";
        position?: "tr" | "tl" | "tc" | "br" | "bl" | "bc";
        autoDismiss?: number;
        dismissible?: boolean;
        action?: ActionObject;
        children?: React.ReactNode;
        onAdd?: CallBackFunction;
        onRemove?: CallBackFunction;
        uid?: number | string;
    }

    export interface ActionObject {
        label: string;
        callback?: () => void;
    }

    export interface ContainersStyle {
        DefaultStyle: React.CSSProperties;
        tl?: React.CSSProperties;
        tr?: React.CSSProperties;
        tc?: React.CSSProperties;
        bl?: React.CSSProperties;
        br?: React.CSSProperties;
        bc?: React.CSSProperties;
    }

    export interface ItemStyle {
        DefaultStyle?: React.CSSProperties;
        success?: React.CSSProperties;
        error?: React.CSSProperties;
        warning?: React.CSSProperties;
        info?: React.CSSProperties;
    }

    export interface WrapperStyle {
        DefaultStyle?: React.CSSProperties;
    }

    export interface Style {
        Wrapper?: any;
        Containers?: ContainersStyle;
        NotificationItem?: ItemStyle;
        Title?: ItemStyle;
        MessageWrapper?: WrapperStyle;
        Dismiss?: ItemStyle;
        Action?: ItemStyle;
        ActionWrapper?: WrapperStyle;
    }

    export interface Attributes extends React.ClassAttributes<System> {
        noAnimation?: boolean;
        style?: Style | boolean;
        allowHTML?: boolean;
    }

    export interface State {
        notifications: Notification[]
    }
}


declare var NotificationSystem: React.ClassicComponentClass<NotificationSystem.Attributes>;
export = NotificationSystem;
