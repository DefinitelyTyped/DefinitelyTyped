// Type definitions for react-modal v1.6.1
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react"/>

declare module "react-modal" {
    interface ReactModal {
        isOpen: boolean;
        style?: {
            content?: {
                [key: string]: any;
            },
            overlay?: {
                [key: string]: any;
            }
        },
        appElement?: HTMLElement | {},
        onAfterOpen?: Function,
        onRequestClose?: Function,
        closeTimeoutMS?: number,
        ariaHideApp?: boolean,
        shouldCloseOnOverlayClick?: boolean,
        overlayClassName?: string,
        className?: string
        contentLabel?: string
    }
    let ReactModal: React.ClassicComponentClass<ReactModal>;
    export = ReactModal;
}
