// Type definitions for react-loading-indicator 1.0
// Project: https://github.com/exponentjs/react-loading-indicator#readme
// Definitions by: Markus Lasermann <https://github.com/snaptags>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import * as React from "react";
export interface LoadingIndicatorColor {
    red: number; // value between 0 and 255, inclusive
    green: number; // value between 0 and 255, inclusive
    blue: number; // value between 0 and 255, inclusive
    alpha: number; // value between 0 and 1, inclusive
}

export interface LoadingIndicatorProps {
    /*
  The color of the most solid segment—what we call each spoke of the loading indicator.
  The color prop is an object with four keys: red, green, blue, and alpha.
  The first three color components are values between 0 and 255, inclusive.
  The alpha component is a value between 0 and 1, inclusive.
     */
    color?: LoadingIndicatorColor;
    segments?: number; // The number of segments, evenly spaced from each other.
    segmentWidth?: number; // The width of each segment, in logical pixels.
    segmentLength?: number; // The length of each segment, in logical pixels.
    spacing?: number; // Extra spacing to pad the distance between the center of the loading indicator and each segment, in logical pixels.
    /*
      The alpha multiplier of the faintest segments.
      Each segment's color is determined by multiplying the alpha channel of the color
      prop by a gradually decreasing alpha multiplier that starts at 1 and linearly
      decreases to the fadeTo prop.

     */
    fadeTo?: number;
    /*
      The number of steps between segments from the boldest segment to the faintest segments.
      If fadeSteps is segments - 1 then only the last segment will be the faintest,
      multiplied by fadeTo.
      If fadeSteps is a lower value, then several of the last segments will all have the faintest opacity.
     */
    fadeSteps?: number;
}

export default class LoadingIndicator extends React.PureComponent<LoadingIndicatorProps> {}
