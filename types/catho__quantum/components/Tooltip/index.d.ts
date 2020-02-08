import React = require('react');

export interface TooltipProps {
    text: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    visible?: boolean;
    children: React.ReactNode[] | React.ReactNode;
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
}

export default class Tooltip extends React.Component<TooltipProps> {}
