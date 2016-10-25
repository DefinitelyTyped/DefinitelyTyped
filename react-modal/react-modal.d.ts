// Type definitions for react-modal v1.3.0
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    }
    let ReactModal: React.ClassicComponentClass<ReactModal>;
    export = ReactModal;
}
