import * as React from "react";
import { ButtonProps, ButtonKind } from '../Button';
import { ModalProps } from "../Modal";

type ExcludedModalProps = "onRequestClose" | "onRequestSubmit" | "open";
interface InheritedProps extends Omit<ModalProps, ExcludedModalProps> { }

export interface TriggerProps {
    buttonTriggerClassName?: ButtonProps["className"],
    buttonTriggerText?: ButtonProps["children"],
    renderTriggerButtonIcon?: ButtonProps["renderIcon"],
    triggerButtonIconDescription?: ButtonProps["iconDescription"],
    triggerButtonKind?: ButtonKind,
}

export interface ModalWrapperProps extends InheritedProps, TriggerProps {
    handleOpen?(e: React.MouseEvent<HTMLElement>): void,
    handleSubmit(): boolean,
    shouldCloseAfterSubmit?: boolean,
    status?: string,
}

declare class ModalWrapper extends React.Component<ModalWrapperProps> { }

export default ModalWrapper;
