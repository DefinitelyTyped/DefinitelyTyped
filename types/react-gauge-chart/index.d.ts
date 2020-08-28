// Type definitions for react-gauge-chart 0.2
// Project: https://github.com/Martin36/react-gauge-chart
// Definitions by: Meir Keller <https://github.com/meirkl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface GaugeChartProps {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    marginInPercent?: number;
    cornerRadius?: number;
    nrOfLevels?: number;
    percent?: number;
    arcPadding?: number;
    arcWidth?: number;
    arcsLength?: number[];
    colors?: string[];
    textColor?: string;
    needleColor?: string;
    needleBaseColor?: string;
    hideText?: boolean;
    animate?: boolean;
    animDelay?: number;
    formatTextValue?: (value: string) => string;
    fontSize?: string;
}

export default function GaugeChart(props: GaugeChartProps): React.ReactElement;
