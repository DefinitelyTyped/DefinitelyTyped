// Type definitions for react-native-svg-animated-linear-gradient 0.4
// Project: https://github.com/FullstackStation/react-native-svg-animated-linear-gradient
// Definitions by: Federico Grandi <https://github.com/EndBug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface GradientProps {
    primaryColor?: string;
    secondaryColor?: string;
    duration?: number;
    width?: number | string;
    height?: number | string;
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
    useNativeDriver?: boolean;
}

export default class SvgAnimatedLinearGradient extends React.Component<GradientProps> {}
