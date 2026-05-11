import * as React from "react";
import { ReactButtonAttr, ReactDivAttr } from "../../../typings/shared";
import { ButtonProps } from "../Button";

export type NotificationType = "inline" | "toast";
export type NotificationKind = "error" | "info" | "info-square" | "success" | "warning" | "warning-alt";

// NotificationActionButton

export interface NotificationActionButtonProps extends ButtonProps {}

export declare const NotificationActionButton: React.FC<NotificationActionButtonProps>;

// NotificationButton

export interface NotificationButtonProps extends Omit<ReactButtonAttr, "title"> {
    ariaLabel?: string | undefined;
    iconDescription?: string | undefined;
    name?: string | undefined;
    notificationType?: NotificationType | undefined;
    renderIcon?: any;
}

export declare const NotificationButton: React.FC<NotificationButtonProps>;

// NotificationTextDetail

type ExcludedDetailDivAttributes = "className" | "title";

export interface NotificationTextDetailsProps extends Omit<ReactDivAttr, ExcludedDetailDivAttributes> {
    caption?: React.ReactNode | undefined;
    subtitle?: React.ReactNode | undefined;
    title?: React.ReactNode | undefined;
}

export declare const NotificationTextDetails: React.FC<NotificationTextDetailsProps>;

// ToastNotification

export interface ToastNotificationProps extends Omit<ReactDivAttr, "title"> {
    caption?: React.ReactNode | undefined;
    closeOnEscape?: boolean | undefined; // v11 only
    hideCloseButton?: boolean | undefined;
    iconDescription?: string | undefined;
    kind?: NotificationKind | undefined; // required but has default value
    lowContrast?: boolean | undefined;
    notificationType?: NotificationType | undefined;
    onClose?(evt: React.MouseEvent<HTMLButtonElement>): boolean;
    onCloseButtonClick?(evt: React.MouseEvent<HTMLButtonElement>): void;
    statusIconDescription?: string | undefined;
    subtitle?: React.ReactNode | undefined;
    timeout?: number | undefined;
    title: NonNullable<React.ReactNode>;
}

export declare const ToastNotification: React.FC<ToastNotificationProps>;

// Inline Notification

export interface InlineNotificationProps extends Omit<ReactDivAttr, "title"> {
    actions?: React.ReactNode | undefined;
    closeOnEscape?: boolean | undefined; // v11 only
    hasFocus?: boolean | undefined; // v11 only
    hideCloseButton?: boolean | undefined;
    iconDescription?: string | undefined;
    kind: NotificationKind;
    lowContrast?: boolean | undefined;
    notificationType?: NotificationType | undefined;
    onClose?(evt: React.MouseEvent<HTMLButtonElement>): boolean;
    onCloseButtonClick?(e: React.MouseEvent<HTMLButtonElement>): void;
    statusIconDescription?: string | undefined;
    subtitle?: React.ReactNode | undefined;
    title: NonNullable<React.ReactNode>;
}

export declare const InlineNotification: React.FC<InlineNotificationProps>;
