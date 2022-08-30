import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { ButtonProps } from "../Button";

type ExcludedAttributes = "role" | "onBlur" | "onClick" | "onKeyDown" | "onTransitionEnd" | "ref";

export interface ModalSecondaryButtonConfig {
    buttonText: NonNullable<React.ReactNode>;
    onClick: NonNullable<ButtonProps["onClick"]>;
}

export interface ModalProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    alert?: boolean | undefined,
    closeButtonLabel?: string | undefined,
    danger?: boolean | undefined,
    /**
     * @deprecated
     */
    focusTrap?: boolean | undefined,
    /**
     * @deprecated
     */
    hasForm?: boolean | undefined,
    hasScrollingContent?: boolean | undefined,
    /**
     * @deprecated
     */
    iconDescription?: string | undefined,
    modalAriaLabel?: string | undefined,
    modalHeading?: React.ReactNode | undefined,
    modalLabel?: React.ReactNode | undefined,
    open?: boolean | undefined,
    onRequestClose?(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void,
    onRequestSubmit?(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void,
    onSecondarySubmit?: ModalProps["onRequestClose"] | undefined,
    passiveModal?: boolean | undefined,
    preventCloseOnClickOutside?: boolean | undefined,
    primaryButtonDisabled?: boolean | undefined,
    primaryButtonText?: React.ReactNode | undefined,
    secondaryButtons?: readonly ModalSecondaryButtonConfig[] | undefined;
    secondaryButtonText?: React.ReactNode | undefined,
    selectorPrimaryFocus?: string | undefined,
    selectorsFloatingMenus?: readonly string[] | undefined,
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    shouldSubmitOnEnter?: boolean | undefined,
}

declare class Modal extends React.Component<ModalProps> { }

export default Modal;
