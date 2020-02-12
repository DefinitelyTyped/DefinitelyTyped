import React = require('react');

export interface ToggleProps {
    id?: string;
    checked?: boolean;
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
}

export default class Toggle extends React.Component<ToggleProps> {}
