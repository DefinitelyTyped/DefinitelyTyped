import React = require('react');

import { NumberProp } from './props';

export interface LinearGradientProps {
    x1: NumberProp;
    x2: NumberProp;
    y1: NumberProp;
    y2: NumberProp;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
    id?: string;
    children?: React.ReactNode[] | React.ReactNode;
}

export default class LinearGradient extends React.Component<
    LinearGradientProps
> {}
