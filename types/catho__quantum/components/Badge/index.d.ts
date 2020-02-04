import React = require('react');

export interface BadgeProps {
    skin?: 'primary' | 'secondary' | 'success' | 'error' | 'neutral';
    children?: React.ReactNode[] | React.ReactNode;
    number?: number;
    inverted?: boolean;
    theme?: {
        baseFontSize?: number;
        spacing?: object;
        components?: {
            badge?: object;
        };
    };
}

export default class Badge extends React.Component<BadgeProps> {}
