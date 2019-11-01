// Type definitions for react-loader-spinner 3.1
// Project: https://github.com/mhnpd/react-loader-spinner
// Definitions by: Rayhan Wirjowerdojo <https://github.com/rayhanw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { FC } from 'react';

/**
 * Possible Types:
 * Audio
 * BallTriangle
 * Bars
 * Circles
 * Grid
 * Hearts
 * Oval
 * Puff
 * Rings
 * TailSpin
 * ThreeDots
 * Watch
 * RevolvingDot
 * Triangle
 * Plane
 * MutatingDots
 * None (Will default to Audio)
 * NotSpecified (Will default to Audio)
 **/

type Types =
    | 'Audio'
    | 'BallTriangle'
    | 'Bars'
    | 'Circles'
    | 'Grid'
    | 'Hearts'
    | 'Oval'
    | 'Puff'
    | 'Rings'
    | 'TailSpin'
    | 'ThreeDots'
    | 'Watch'
    | 'RevolvingDot'
    | 'Triangle'
    | 'Plane'
    | 'MutatingDots'
    | 'None'
    | 'NotSpecified';

interface ILoaderProps {
    type?: Types;
    color?: string;
    timeout?: number; // in milliseconds
    height?: number;
    width?: number;
    visible?: boolean | string;
}

declare const Loader: FC<ILoaderProps>;
export default Loader;
