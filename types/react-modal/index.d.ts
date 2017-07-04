// Type definitions for react-modal 2.2
// Project: https://github.com/reactjs/react-modal
// Definitions by: Guo Yunhe <https://github.com/guoyunhe>, Rajab Shakirov <https://github.com/radziksh>, Drew Noakes <https://github.com/drewnoakes>, Thomas B Homburg <https://github.com/homburg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare module 'react-modal' {
    interface ModalProps {
        isOpen: boolean;
        style?: ModalStyles;
        portalClassName?: string;
        bodyOpenClassName?: string;
        className?: string | object;
        overlayClassName?: string | object;
        appElement?: HTMLElement;
        onAfterOpen?(): void;
        onRequestClose?(): void;
        closeTimeoutMS?: number;
        ariaHideApp?: boolean;
        shouldCloseOnOverlayClick?: boolean;
        parentSelector?(): void;
        aria?: object;
        role?: string;
        contentLabel?: string;
    }

    interface ModalStyles {
        overlay: {};
        content: {};
    }

    class Modal extends React.Component<ModalProps, {}> {
        static setAppElement(element: HTMLElement): void;
        static injectCSS(): void;
        static defaultProps: ModalProps;
        static defaultStyles: ModalStyles;
        removePortal(): void;
        renderPortal(props: ModalProps): void;
    }
}

export default Modal;
