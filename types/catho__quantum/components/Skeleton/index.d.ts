import React = require('react');

type SkeletonButtonProps = {
    size: 'xsmall' | 'small' | 'medium' | 'large';
    theme: {
        spacing?: object;
    };
};

type SkeletonButton = React.ComponentType<SkeletonButtonProps>;

type SkeletonCircle = React.ComponentType;

type SkeletonText = React.ComponentType;

type SkeletonTagProps = {
    size: 'xsmall' | 'small' | 'medium' | 'large';
    theme: {
        spacing?: object;
        baseFontSize?: number;
    };
};

type SkeletonTag = React.ComponentType<SkeletonTagProps>;

type SkeletonProps = {
    type?: 'rect' | 'circle' | 'text' | 'button' | 'tag';
    width?: string;
    height?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    theme?: {
        spacing?: object;
        baseFontSize?: number;
    };
};

export default class Skeleton extends React.Component<SkeletonProps> {
    static Button: SkeletonButton;

    static Circle: SkeletonCircle;

    static Text: SkeletonText;

    static Tag: SkeletonTag;
}
