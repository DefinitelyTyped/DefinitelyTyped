import React = require('react');

type CircularLoaderProps = {
    size?: 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
    skin?: 'primary' | 'secondary';
    theme?: {
        colors?: object;
        gutter?: number;
    };
};

export default class CircularLoader extends React.Component<CircularLoaderProps> {}
