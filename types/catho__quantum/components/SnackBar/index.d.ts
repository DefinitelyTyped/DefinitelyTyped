import React = require('react');

export interface SnackBarProps {
    actionTrigger?: {
        title?: string;
        callback?: () => void;
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
    onClose?: () => void;
    secondsToClose?: number;
    skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
    text?: string;
    inverted?: boolean;
    id?: string;
}

export default class SnackBar extends React.Component<SnackBarProps> {}
