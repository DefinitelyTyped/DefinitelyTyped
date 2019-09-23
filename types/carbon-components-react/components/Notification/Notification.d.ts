import * as React from "react";
import { EmbeddedIconProps, ReactAttr, ReactButtonAttr, ReactDivAttr, RenderIconProps } from "../../typings/shared";
import { ButtonProps } from "../Button";

export type NotificationType = "inline" | "toast";
export type NotificationKind = "error" | "info" | "success" | "warning";

interface SharedProps {
    notificationType?: NotificationType,
}

export interface NotificationContentProps {
    caption: NonNullable<React.ReactNode>,
    subtitle: NonNullable<React.ReactNode>,
    title: NonNullable<React.ReactNode>,
}

export interface NotificationInteractionProps {
    hideCloseButton?: boolean,
    onCloseButtonClick?(e: React.MouseEvent<HTMLButtonElement>): void,
}

export interface NotificationBaseProps extends NotificationInteractionProps, SharedProps {
    kind: NotificationKind,
}

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
    NotificationContentProps,
    SharedProps
{ }

export interface NotificationTextDetailsProps extends NotificationTextDetailInheritedProps { }

export declare class NotificationTextDetails extends React.Component<NotificationTextDetailsProps> { }

// ToastNotification

type ExcludedToastDivAttributes = "role" | "title";
interface ToastNotificationInheritedProps extends
    Omit<ReactDivAttr, ExcludedToastDivAttributes>,
    NotificationContentProps,
    NotificationBaseProps
{
    iconDescription: NonNullable<EmbeddedIconProps["iconDescription"]>,
    role: NonNullable<ReactAttr["role"]>,
}

export interface ToastNotificationProps extends ToastNotificationInheritedProps {
    timeout?: number,
}

export declare class ToastNotification extends React.Component<ToastNotificationProps> { }

// Inline Notification

interface InlineNotificationInheritedProps extends
    Omit<ReactDivAttr, "title">,
    Omit<NotificationContentProps, "caption">,
    NotificationBaseProps
{ }

export interface InlineNotificationProps extends InlineNotificationInheritedProps {
    actions?: React.ReactNode,
}

export declare class InlineNotification extends React.Component<InlineNotificationProps> { }
