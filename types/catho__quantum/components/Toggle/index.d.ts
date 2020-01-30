import React = require('react');

type ToggleProps = {
    checked?: boolean;
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
};

export default class Toggle extends React.Component<ToggleProps> {}
