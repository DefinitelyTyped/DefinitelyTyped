import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";
import { ButtonProps } from "../Button";

// ComposedModal

type ExcludedAttributes = "onBlur" | "onClick" | "onTransitionEnd" | "ref" | "role" | "tabIndex";
export interface ComposedModalProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    containerClassName?: string,
    danger?: boolean,
    onClose?(): boolean | void,
    open?: boolean,
    preventCloseOnClickOutside?: boolean,
    selectedPrimaryFocus?: string,
    selectorsFloatingMenus?: string,
    size?: "xs" | "sm" | "md" | "lg";
}

declare class ComposedModal extends React.Component<ComposedModalProps> { }

// Header

export interface ModalHeaderProps extends Omit<ReactDivAttr, "title"> {
    buttonOnClick?(event: React.MouseEvent<HTMLButtonElement>): void,
    closeClassName?: string,
    closeIconClassName?: string,
    closeModal?(): void,
    iconDescription?: string,
    label?: React.ReactNode,
    labelClassName?: string,
    title?: React.ReactNode,
    titleClassName?: string,
}

export declare class ModalHeader extends React.Component<ModalHeaderProps> { }

// Body

export interface ModalBodyProps extends ReactDivAttr {
    hasForm?: boolean;
    hasScrollingContent?: boolean;
}

export declare const ModalBody: React.FC<ModalBodyProps>;

// Footer

export interface ModalFooterSecondaryButtonConfig {
    buttonText: NonNullable<React.ReactNode>;
    onClick?: ButtonProps["onClick"];
}

export interface ModalFooterProps extends ReactDivAttr {
    closeModal?: ButtonProps["onClick"];
    danger?: boolean,
    inputref?: any; // TODO
    primaryClassName?: string,
    primaryButtonText?: string,
    primaryButtonDisabled?: boolean,
    secondaryClassName?: string,
    secondaryButtonText?: string,
    secondaryButtons?: readonly ModalFooterSecondaryButtonConfig[];
    onRequestClose?: ButtonProps["onClick"],
    onRequestSubmit?: ButtonProps["onClick"],
}

export declare class ModalFooter extends React.Component<ModalFooterProps> { }

export default ComposedModal;
