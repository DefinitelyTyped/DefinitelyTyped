import * as React from "react";
import { ReactDivAttr, CarbonSize } from "../../../typings/shared";
import { ButtonProps } from "../Button";

type ExcludedAttributes = "role" | "onBlur" | "onClick" | "onKeyDown" | "onTransitionEnd" | "ref";

export interface ModalSecondaryButtonConfig {
    buttonText: NonNullable<React.ReactNode>;
    onClick: NonNullable<ButtonProps["onClick"]>;
}

export interface ModalProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    alert?: boolean,
    danger?: boolean,
    /**
     * @deprecated
     */
    focusTrap?: boolean,
    hasForm?: boolean,
    hasScrollingContent?: boolean,
    iconDescription?: string,
    modalAriaLabel?: string,
    modalHeading?: React.ReactNode,
    modalLabel?: React.ReactNode,
    open?: boolean,
    onRequestClose?(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void,
    onRequestSubmit?(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void,
    onSecondarySubmit?: ModalProps["onRequestClose"],
    passiveModal?: boolean,
    preventCloseOnClickOutside?: boolean,
    primaryButtonDisabled?: boolean,
    primaryButtonText?: React.ReactNode,
    secondaryButtons?: readonly ModalSecondaryButtonConfig[];
    secondaryButtonText?: React.ReactNode,
    selectorPrimaryFocus?: string,
    selectorsFloatingMenus?: readonly string[],
    size?: "xs" | "sm" | "md" | "lg";
    shouldSubmitOnEnter?: boolean,
}

declare class Modal extends React.Component<ModalProps> { }

export default Modal;
