import React from 'react';

import { NumberProp } from './props';

export interface ImageProps {
    x?: NumberProp;
    y?: NumberProp;
    width: NumberProp;
    height: NumberProp;
    href: string;
    preserveAspectRatio?: string;
    children?: React.ReactChild[] | React.ReactChild;
}

export default class Image extends React.Component<ImageProps> {}
