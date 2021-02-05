import * as React from "react";
import { ReactButtonAttr, ReactDivAttr } from '../../../typings/shared';
import { ButtonProps } from "../Button";

export type NotificationType = "inline" | "toast";
export type NotificationKind = "error" | "info" | "info-square" | "success" | "warning" | "warning-alt";

// NotificationActionButton

export interface NotificationActionButtonProps extends ButtonProps { }

export declare const NotificationActionButton: React.FC<NotificationActionButtonProps>;

// NotificationButton

export interface NotificationButtonProps extends Omit<ReactButtonAttr, "title"> {
    ariaLabel?: string,
    iconDescription?: string,
    name?: string,
    notificationType?: NotificationType,
    renderIcon?: any,
}

export declare const NotificationButton: React.FC<NotificationButtonProps>;

// NotificationTextDetail

type ExcludedDetailDivAttributes = "className" | "title";

export interface NotificationTextDetailsProps extends Omit<ReactDivAttr, ExcludedDetailDivAttributes> {
    caption?: React.ReactNode,
    subtitle?: React.ReactNode,
    title?: React.ReactNode,
}

export declare const NotificationTextDetails: React.FC<NotificationTextDetailsProps>;

// ToastNotification

export interface ToastNotificationProps extends Omit<ReactDivAttr, "title"> {
    caption?: React.ReactNode,
    hideCloseButton?: boolean,
    iconDescription?: string,
    kind?: NotificationKind; // required but has default value
    lowContrast?: boolean,
    notificationType?: NotificationType,
    onCloseButtonClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    statusIconDescription?: string,
    subtitle?: React.ReactNode,
    timeout?: number;
    title: NonNullable<React.ReactNode>,
}

export declare const ToastNotification: React.FC<ToastNotificationProps>;

// Inline Notification

export interface InlineNotificationProps extends Omit<ReactDivAttr, "title"> {
    actions?: React.ReactNode;
    hideCloseButton?: boolean;
    iconDescription?: string;
    kind: NotificationKind;
    lowContrast?: boolean,
    notificationType?: NotificationType,
    onCloseButtonClick?(e: React.MouseEvent<HTMLButtonElement>): void,
    statusIconDescription?: string,
    subtitle?: React.ReactNode,
    title: NonNullable<React.ReactNode>,
}

export declare const InlineNotification: React.FC<InlineNotificationProps>;
