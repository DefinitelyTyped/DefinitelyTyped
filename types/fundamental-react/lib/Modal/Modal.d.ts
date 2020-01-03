import * as React from "react";

export type ModalProps = {
    title: string;
    /* Node(s) to render within the footer of the dialog. */
    actions?: React.ReactNode;
    /* Additional props to be spread to the body section of the dialog. */
    bodyProps?: { [x: string]: any };
    /* Additional props to be spread to the close `<button>` element. */
    closeProps?: { [x: string]: any };
    /* Additional props to be spread to the content section of the dialog. */
    contentProps?: { [x: string]: any };
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    /* Additional props to be spread to the footer of the dialog. */
    footerProps?: { [x: string]: any };
    /* Additional props to be spread to the header of the dialog. */
    headerProps?: { [x: string]: any };
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    localizedText?: {
        /* Aria-label for <button> element. */
        closeButton: string;
    };
    /* Set to **true** to make the dialog visible. */
    show?: boolean;
    titleProps?: { [x: string]: any };
    /* Callback function passing event when close button is clicked. */
    onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & { [x: string]: any };

declare class Modal extends React.Component<ModalProps> {}

export default Modal;
