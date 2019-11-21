import * as React from "react";
import { EmbeddedIconProps, ReactDivAttr } from "../../../typings/shared";

type ExcludedAttributes = "role" | "tabIndex" | "onBlur" | "onClick" | "onKeyDown" | "onTransitionEnd" | "ref";
interface InheritedProps extends
    Omit<ReactDivAttr, ExcludedAttributes>,
    EmbeddedIconProps
{ }

export interface ModalProps extends InheritedProps {
    danger?: boolean,
    focusTrap?: boolean,
    modalAriaLabel?: string,
    modalHeading?: React.ReactNode,
    modalLabel?: React.ReactNode,
    open?: boolean,
    onRequestClose?(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void,
    onRequestSubmit?(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>): void,
    onSecondarySubmit?: ModalProps["onRequestClose"],
    passiveModal?: boolean,
    primaryButtonDisabled?: boolean,
    primaryButtonText?: string,
    secondaryButtonText?: string,
    selectorPrimaryFocus?: string,
    selectorsFloatingMenus?: string[],
    shouldSubmitOnEnter?: boolean,
}

declare class Modal extends React.Component<ModalProps> { }

export default Modal;
