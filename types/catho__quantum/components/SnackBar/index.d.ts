import React = require('react');

export interface SnackBarProps<T> {
    actionTrigger?: {
        title?: string;
        callback?: React.MouseEventHandler<T>;
    };
    theme?: {
        baseFontSize?: number;
        colors?: object;
        breakpoints?: object;
        spacing?: object;
        components?: {
            snackbar?: object;
            button?: object;
        };
    };
    closeButtonAriaLabel?: string;
    onClose?: React.MouseEventHandler<T>;
    secondsToClose?: number;
    skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
    text?: string;
    inverted?: boolean;
    id?: string;
}

export default class SnackBar<T = HTMLButtonElement> extends React.Component<SnackBarProps<T>> {}
