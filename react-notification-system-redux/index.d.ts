// Type definitions for react-notification-system-redux 1.0
// Project: https://github.com/gor181/react-notification-system-redux
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Component } from "react";
import { Action } from "redux";
import { Attributes, Notification } from "react-notification-system";

export as namespace Notifications;

export = Notifications;

declare class Notifications extends Component<Notifications.NotificationsProps, any> {}

declare namespace Notifications {

    export type NotificationsState = Notification[];

    export type NotificationLevel = "error" | "warning" | "info" | "success";

    export type NotificationsReducer<A extends Action> = (state: NotificationsState, action: A) => NotificationsState;

    export type NotificationShow = (opts?: Notification) => Action;

    export interface NotificationsProps extends Attributes {
        notifications?: Notification[];
    }

    export const reducer: NotificationsReducer<any>;

    export const show: (opts?: Notification, level?: NotificationLevel) => Action;
    export const error: NotificationShow;
    export const hide: (opts?: Notification | string | number) => Action;
    export const info: NotificationShow;
    export const success: NotificationShow;
    export const warning: NotificationShow;
}

