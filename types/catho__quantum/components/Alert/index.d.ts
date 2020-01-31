import React = require('react');

export interface AlertProps {
    children: React.ReactNode;
    onClose: () => void;
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

export default class Alert extends React.Component<AlertProps> {}
