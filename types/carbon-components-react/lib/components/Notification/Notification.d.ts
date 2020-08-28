import * as React from "react";
import { EmbeddedIconProps, ReactButtonAttr, ReactDivAttr, RenderIconProps } from '../../../typings/shared';
import { ButtonProps } from "../Button";

export type NotificationType = "inline" | "toast";
export type NotificationKind = "error" | "info" | "success" | "warning";

interface SharedProps {
    notificationType?: NotificationType,
}

interface ContrastProps {
    lowContrast?: boolean,
}

export interface NotificationTitleProps {
    subtitle?: React.ReactNode;
    title: React.ReactNode;
}

export interface NotificationContentProps {
    caption: React.ReactNode;
}

export interface NotificationInteractionProps {
    hideCloseButton?: boolean,
    onCloseButtonClick?(e: React.MouseEvent<HTMLButtonElement>): void,
}

export interface NotificationBaseProps extends NotificationInteractionProps, SharedProps {}

// NotificationActionButton

interface NotificationActionButtonInheritedProps extends ButtonProps { }

export interface NotificationActionButtonProps extends NotificationActionButtonInheritedProps { }

export declare const NotificationActionButton: React.FC<NotificationActionButtonProps>;

// NotificationButton

type ExcludedButtonAttributes = "aria-label" | "title";
interface NotificationButtonInheritedProps extends
    Omit<ReactButtonAttr, ExcludedButtonAttributes>,
    EmbeddedIconProps,
    RenderIconProps,
    SharedProps
{
    ariaLabel?: React.AriaAttributes["aria-label"],
}

export interface NotificationButtonProps extends NotificationButtonInheritedProps {
    name?: string,
}

export declare const NotificationButton: React.FC<NotificationButtonProps>;

// NotificationTextDetail

type ExcludedDetailDivAttributes = "className" | "title";
interface NotificationTextDetailInheritedProps extends
    Omit<ReactDivAttr, ExcludedDetailDivAttributes>,
    Partial<NotificationContentProps>,
    Partial<NotificationTitleProps>,
    SharedProps
{ }

export interface NotificationTextDetailsProps extends NotificationTextDetailInheritedProps { }

export declare const NotificationTextDetails: React.FC<NotificationTextDetailsProps>;

// ToastNotification

interface ToastNotificationInheritedProps extends
    Omit<ReactDivAttr, "title">,
    ContrastProps,
    EmbeddedIconProps,
    NotificationBaseProps,
    NotificationContentProps,
    NotificationTitleProps
{ }

export interface ToastNotificationProps extends ToastNotificationInheritedProps {
    kind?: NotificationKind; // required but has default value
    statusIconDescription?: string,
    timeout?: number;
}

export declare const ToastNotification: React.FC<ToastNotificationProps>;

// Inline Notification

interface InlineNotificationInheritedProps extends
    Omit<ReactDivAttr, "title">,
    ContrastProps,
    EmbeddedIconProps,
    NotificationBaseProps,
    NotificationTitleProps
{ }

export interface InlineNotificationProps extends InlineNotificationInheritedProps {
    actions?: React.ReactNode;
    kind: NotificationKind;
    statusIconDescription?: string,
}

export declare const InlineNotification: React.FC<InlineNotificationProps>;
