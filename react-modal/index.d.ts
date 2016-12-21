// Type definitions for react-modal v1.6.0
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh> and Remi Marenco <https://github.com/remimarenco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react"/>

declare module "react-modal" {
    interface ReactModal {
        isOpen: boolean;
	contentLabel: string;
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
