import React = require('react');

export interface SkeletonButtonProps {
    size: 'xsmall' | 'small' | 'medium' | 'large';
    theme: {
        spacing?: object;
    };
}

export type SkeletonButton = React.ComponentType<SkeletonButtonProps>;

export type SkeletonCircle = React.ComponentType;

export type SkeletonText = React.ComponentType;

export interface SkeletonTagProps {
    size: 'xsmall' | 'small' | 'medium' | 'large';
    theme: {
        spacing?: object;
        baseFontSize?: number;
    };
}

export type SkeletonTag = React.ComponentType<SkeletonTagProps>;

export interface SkeletonProps {
    type?: 'rect' | 'circle' | 'text' | 'button' | 'tag';
    width?: string;
    height?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    theme?: {
        spacing?: object;
        baseFontSize?: number;
    };
}

export default class Skeleton extends React.Component<SkeletonProps> {
    static Button: SkeletonButton;

    static Circle: SkeletonCircle;

    static Text: SkeletonText;

    static Tag: SkeletonTag;
}
