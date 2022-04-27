// Type definitions for react-native-svg-animated-linear-gradient 0.4
// Project: https://github.com/FullstackStation/react-native-svg-animated-linear-gradient
// Definitions by: Federico Grandi <https://github.com/EndBug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface GradientProps {
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    duration?: number | undefined;
    width?: number | string | undefined;
    height?: number | string | undefined;
    x1?: string | undefined;
    y1?: string | undefined;
    x2?: string | undefined;
    y2?: string | undefined;
    useNativeDriver?: boolean | undefined;
}

export default class SvgAnimatedLinearGradient extends React.Component<GradientProps> {}
