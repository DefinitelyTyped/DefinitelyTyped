import * as React from 'react';
import { CSSModule } from '../index';
import { FadeProps } from './Fade';

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    isOpen?: boolean;
    autoFocus?: boolean;
    size?: string;
    toggle?: React.KeyboardEventHandler<any> | React.MouseEventHandler<any>;
    keyboard?: boolean;
    backdrop?: boolean | 'static';
    scrollable?: boolean;
    onEnter?: () => void;
    onExit?: () => void;
    onOpened?: () => void;
    onClosed?: () => void;
    cssModule?: CSSModule;
    wrapClassName?: string;
    modalClassName?: string;
    backdropClassName?: string;
    contentClassName?: string;
    zIndex?: number | string;
    fade?: boolean;
    backdropTransition?: FadeProps;
    modalTransition?: FadeProps;
    centered?: boolean;
    external?: React.ReactNode;
    labelledBy?: string;
    unmountOnClose?: boolean;
    returnFocusAfterClose?: boolean;
    container?: string | HTMLElement | React.RefObject<HTMLElement>;
}

declare class Modal<T> extends React.Component<ModalProps> {}
export default Modal;
