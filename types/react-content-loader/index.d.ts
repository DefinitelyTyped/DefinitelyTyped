// Type definitions for react-content-loader 3.1
// Project: https://github.com/danilowoz/react-content-loader
// Definitions by: Alaa Masoud <https://github.com/alaatm>
//                 Sam Walsh <https://github.com/samwalshnz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ContentLoaderProps {
    style?: React.CSSProperties;
    animate?: boolean;
    speed?: number;
    width?: number;
    height?: number;
    primaryColor?: string;
    secondaryColor?: string;
    primaryOpacity?: number;
    secondaryOpacity?: number;
    preserveAspectRatio?: 'none' | 'xMinYMin meet' | 'xMidYMin meet' | 'xMaxYMin meet' | 'xMinYMid meet' | 'xMidYMid meet' | 'xMaxYMid meet' |
    'xMinYMax meet' | 'xMidYMax meet' | 'xMaxYMax meet' | 'xMinYMin slice' | 'xMidYMin slice' | 'xMaxYMin slice' | 'xMinYMid slice' |
    'xMidYMid slice' | 'xMaxYMid slice' | 'xMinYMax slice' | 'xMidYMax slice' | 'xMaxYMax slice';
    uniquekey?: string;
    className?: string;
}
export default class ContentLoader extends React.Component<ContentLoaderProps> { }
export class Facebook extends React.Component<ContentLoaderProps> { }
export class Instagram extends React.Component<ContentLoaderProps> { }
export class Code extends React.Component<ContentLoaderProps> { }
export class List extends React.Component<ContentLoaderProps> { }
export class BulletList extends React.Component<ContentLoaderProps> { }
