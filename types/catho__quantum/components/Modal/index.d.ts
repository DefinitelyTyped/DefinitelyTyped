import React = require('react');

export interface ModalProps<T> {
    children?: React.ReactNode[] | React.ReactNode;
    onClose?: React.MouseEventHandler<T>;
    closeButtonAriaLabel?: string;
    theme?: {
        breakpoints?: object;
        colors?: object;
        spacing?: object;
        components?: {
            button?: object;
        };
    };
}

export default class Modal<T = HTMLButtonElement> extends React.Component<ModalProps<T>> {}
