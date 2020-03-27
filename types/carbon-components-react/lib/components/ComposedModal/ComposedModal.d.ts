import * as React from "react";
import { EmbeddedIconProps, ReactDivAttr } from "../../../typings/shared";
import { ButtonProps } from "../Button";

// ComposedModal

type ExcludedAttributes = "onBlur" | "onClick" | "onTransitionEnd" | "ref" | "role" | "tabIndex";
interface ComposedModalInheritedProps extends Omit<ReactDivAttr, ExcludedAttributes> { }

export interface ComposedModalProps extends ComposedModalInheritedProps {
    containerClassName?: string,
    onClose?(): boolean | void,
    open?: boolean,
    selectedPrimaryFocus?: string,
}

declare class ComposedModal extends React.Component<ComposedModalProps> { }

// Header

interface ModalHeaderInheritedProps extends
    Omit<ReactDivAttr, "title">,
    EmbeddedIconProps
{ }

export interface ModalHeaderProps extends ModalHeaderInheritedProps {
    buttonOnClick?(): void,
    closeClassName?: string,
    closeIconClassName?: string,
    closeModal?(): void,
    label?: React.ReactNode,
    labelClassName?: string,
    title?: React.ReactNode,
    titleClassName?: string,
}

export declare class ModalHeader extends React.Component<ModalHeaderProps> { }

// Body

interface ModalBodyInheritedProps extends ReactDivAttr { }

export interface ModalBodyProps extends ModalBodyInheritedProps { }

export declare class ModalBody extends React.Component<ModalBodyProps> { }

// Footer

interface ModalFooterInheritedProps extends ReactDivAttr { }

export interface ModalFooterProps extends ModalFooterInheritedProps {
    closeModal?(): void,
    primaryClassName?: string,
    primaryButtonText?: string,
    primaryButtonDisabled?: string,
    secondaryClassName?: string,
    secondaryButtonText?: string,
    onRequestClose?: ButtonProps["onClick"],
    onRequestSubmit?: ButtonProps["onClick"],
}

export declare class ModalFooter extends React.Component<ModalFooterProps> { }

export default ComposedModal;
