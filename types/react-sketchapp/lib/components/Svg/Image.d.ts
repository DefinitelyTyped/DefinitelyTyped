import React = require('react');

import { NumberProp } from './props';

export interface ImageProps {
    x?: NumberProp;
    y?: NumberProp;
    width: NumberProp;
    height: NumberProp;
    href: string;
    preserveAspectRatio?: string;
    children?: React.ReactNode[] | React.ReactNode;
}

export default class Image extends React.Component<ImageProps> {}
