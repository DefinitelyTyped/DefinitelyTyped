import * as React from 'react';

export interface IconButtonProps {
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    skin?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    theme?: {
        baseFontSize?: number;
        colors?: object;
        spacing?: object;
        components?: {
            button?: object;
        };
    };
}

type IconButton = React.ComponentType<IconButtonProps>;

export default IconButton;
