import React from 'react';

import { NumberProp } from './props';

export interface RadialGradientProps {
    fx: NumberProp;
    fy: NumberProp;
    rx?: NumberProp;
    ry?: NumberProp;
    cx: NumberProp;
    cy: NumberProp;
    r?: NumberProp;
    gradientUnits?: 'objectBoundingBox' | 'userSpaceOnUse';
    id: string;
    children?: React.ReactChild[] | React.ReactChild;
}

export default class RadialGradient extends React.Component<
    RadialGradientProps
> {}
