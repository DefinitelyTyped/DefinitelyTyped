import React = require('react');

export interface TagProps<T> {
    bold?: boolean;
    inverted?: boolean;
    onClose?: React.MouseEventHandler<T>;
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

export default class Tag<T = HTMLButtonElement> extends React.Component<TagProps<T>> {}
