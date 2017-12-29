// Type definitions for react-content-loader 1.7
// Project: https://github.com/danilowoz/react-content-loader
// Definitions by: Alaa Masoud <https://github.com/alaatm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export interface ContentLoaderProps {
    style?: React.CSSProperties;
    type?: 'facebook' | 'instagram' | 'list' | 'bullet-list' | 'code';
    speed?: number;
    width?: number;
    height?: number;
    primaryColor?: string;
    secondaryColor?: string;
    preserveAspectRatio?: 'none' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' |
    'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' |
    'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice';
    className?: string;
}
export default class ContentLoader extends React.Component<ContentLoaderProps> { }

export interface CircleProps {
    x: number;
    y: number;
    radius: number;
}
export class Circle extends React.Component<CircleProps> { }

export interface RectProps {
    x: number;
    y: number;
    radius: number;
    width: number;
    height: number;
}
export class Rect extends React.Component<RectProps> { }
