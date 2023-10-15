import * as React from "react";
import { ButtonKind, ButtonProps } from "../Button";
import { ModalProps } from "../Modal";

export interface TriggerProps {
    buttonTriggerClassName?: ButtonProps["className"] | undefined;
    buttonTriggerText?: ButtonProps["children"] | undefined;
    renderTriggerButtonIcon?: ButtonProps["renderIcon"] | undefined;
    triggerButtonIconDescription?: ButtonProps["iconDescription"] | undefined;
    triggerButtonKind?: ButtonKind | undefined;
}

type ExcludedModalProps = "onRequestClose" | "onRequestSubmit" | "open";
export interface ModalWrapperProps extends Omit<ModalProps, ExcludedModalProps>, TriggerProps {
    handleOpen?(e: React.MouseEvent<HTMLElement>): void;
    handleSubmit(): boolean;
    shouldCloseAfterSubmit?: boolean | undefined;
    status?: string | undefined;
}

declare class ModalWrapper extends React.Component<ModalWrapperProps> {}

export default ModalWrapper;
