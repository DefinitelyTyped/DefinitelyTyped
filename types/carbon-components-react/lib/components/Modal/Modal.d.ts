import * as React from "react";
import { EmbeddedIconProps, ReactDivAttr, CarbonSize } from "../../../typings/shared";

type ExcludedAttributes = "role" | "onBlur" | "onClick" | "onKeyDown" | "onTransitionEnd" | "ref";
interface InheritedProps extends
    Omit<ReactDivAttr, ExcludedAttributes>,
    EmbeddedIconProps
{ }

export interface ModalProps extends InheritedProps {
    danger?: boolean,
    /**
     * @deprecated
     */
    focusTrap?: boolean,
    hasForm?: boolean,
    hasScrollingContent?: boolean,
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
    selectorsFloatingMenus?: readonly string[],
    size?: CarbonSize,
    shouldSubmitOnEnter?: boolean,
}

declare class Modal extends React.Component<ModalProps> { }

export default Modal;
