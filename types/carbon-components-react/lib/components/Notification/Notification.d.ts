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

export declare class NotificationActionButton extends React.Component<NotificationActionButtonProps> { }

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

export declare class NotificationButton extends React.Component<NotificationButtonProps> { }

// NotificationTextDetail

type ExcludedDetailDivAttributes = "className" | "title";
interface NotificationTextDetailInheritedProps extends
    Omit<ReactDivAttr, ExcludedDetailDivAttributes>,
    Partial<NotificationContentProps>,
    Partial<NotificationTitleProps>,
    SharedProps
{ }

export interface NotificationTextDetailsProps extends NotificationTextDetailInheritedProps { }

export declare class NotificationTextDetails extends React.Component<NotificationTextDetailsProps> { }

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
    kind?: NotificationKind;
    timeout?: number;
}

export declare class ToastNotification extends React.Component<ToastNotificationProps> { }

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
}

export declare class InlineNotification extends React.Component<InlineNotificationProps> { }
