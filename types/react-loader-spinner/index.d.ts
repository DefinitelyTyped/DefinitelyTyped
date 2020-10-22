// Type definitions for react-loader-spinner 3.1
// Project: https://github.com/mhnpd/react-loader-spinner
// Definitions by: Rayhan Wirjowerdojo <https://github.com/rayhanw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { FC } from 'react';

type Types =
    | 'Audio'
    | 'BallTriangle'
    | 'Bars'
    | 'Circles'
    | 'Grid'
    | 'Hearts'
    | 'MutatingDots'
    | 'None'
    | 'NotSpecified'
    | 'Oval'
    | 'Plane'
    | 'Puff'
    | 'RevolvingDot'
    | 'Rings'
    | 'TailSpin'
    | 'ThreeDots'
    | 'Triangle'
    | 'Watch';

interface LoaderProps {
    color?: string;
    height?: number;
    radius?: number;
    secondaryColor?: string;
    timeout?: number; // in milliseconds
    type?: Types;
    visible?: boolean | string;
    width?: number;
}

declare const Loader: FC<LoaderProps>;
export default Loader;
