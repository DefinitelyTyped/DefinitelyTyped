import React = require('react');

type ProgressBarProps = {
    skin?: 'neutral' | 'primary' | 'secondary';
    theme?: {
        components?: {
            progressBar?: object;
        };
    };
    width?: string;
    height?: string;
    progressText?: number;
    progressPercent?: number;
    label?: string;
};

export default class ProgressBar extends React.Component<ProgressBarProps> {}
