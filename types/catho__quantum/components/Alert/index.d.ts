import React = require('react');

export interface AlertProps<T> {
    children: React.ReactNode;
    onClose: React.MouseEventHandler<T>;
    icon?: string;
    skin?: 'primary' | 'success' | 'error' | 'neutral' | 'warning';
    theme?: {
        baseFontSize?: number;
        colors?: object;
        spacing?: object;
        components?: {
            alert?: object;
            button?: object;
        };
    };
}

export default class Alert<T = HTMLButtonElement> extends React.Component<AlertProps<T>> {}
