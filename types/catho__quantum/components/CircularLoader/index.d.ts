import React = require('react');

export interface CircularLoaderProps {
    size?: 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
    skin?: 'primary' | 'secondary';
    theme?: {
        colors?: object;
        gutter?: number;
    };
}

export default class CircularLoader extends React.Component<CircularLoaderProps> {}
