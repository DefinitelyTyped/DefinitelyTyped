// Type definitions for react-notification-system-redux 1.0
// Project: https://github.com/gor181/react-notification-system-redux
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from "react";
import { Action } from "redux";
import { Attributes, Notification } from "react-notification-system";

export as namespace Notifications;

export = Notifications;

declare class Notifications extends Component<Notifications.NotificationsProps> {}

declare namespace Notifications {
    type NotificationsState = Notification[];

    type NotificationLevel = "error" | "warning" | "info" | "success";

    type NotificationsReducer<A extends Action> = (state: NotificationsState, action: A) => NotificationsState;

    type NotificationShow = (opts?: Notification) => Action;

    interface NotificationsProps extends Attributes {
        notifications?: Notification[];
    }

    const reducer: NotificationsReducer<any>;

    function show(opts?: Notification, level?: NotificationLevel): Action;
    const error: NotificationShow;
    function hide(opts?: Notification | string | number): Action;
    const info: NotificationShow;
    const success: NotificationShow;
    const warning: NotificationShow;
}
