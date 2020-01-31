import React = require('react');

export interface TagProps {
    bold?: boolean;
    inverted?: boolean;
    onClose?: () => void;
    size?: 'small' | 'medium' | 'large';
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    stroked?: boolean;
    text?: string;
    theme?: {
        colors?: object;
        components?: {
            tag?: object;
        };
        spacing?: object;
    };
}

export default class Tag extends React.Component<TagProps> {}
