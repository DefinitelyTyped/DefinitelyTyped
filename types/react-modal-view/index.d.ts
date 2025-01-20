import { Component, ReactNode } from "react";

export interface ModalProps {
    /** Modal contents */
    children?: ReactNode | undefined;
    /** Whether or not the modal should be visible */
    visible?: boolean | undefined;
    /** Whether or not the modal is closable */
    closable?: boolean | undefined;

    /** Called when the modal is shown */
    onShow?: (() => void) | undefined;
    /** Called when the modal is hidden */
    onHide?: (() => void) | undefined;
}

export default class Modal extends Component<ModalProps> {
    /**
     * Doesn't seem to be used anywhere.
     * Not actually assignable to ModalProps
     */
    static get defaultProps(): { type: "notice"; message: null };

    handleBeforeComponentUpdate(props: ModalProps): void;

    handleComponentUpdate(prevProps: ModalProps, prevState: { visible: boolean }): void;

    handleCloseBtnClick(e: MouseEvent): void;

    handleOverlayClick(e: MouseEvent): void;

    toggleVisibility(): void;

    show(): void;

    hide(): void;
}
