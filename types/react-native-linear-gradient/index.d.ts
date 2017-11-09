// Type definitions for react-native-linear-gradient 2.3
// Project: https://github.com/brentvatne/react-native-linear-gradient#readme
// Definitions by: Jacob Froman <https://github.com/j-fro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewProperties } from 'react-native';

interface LinearGradientProps extends ViewProperties {
    children?: React.ReactNode;

    /**
     * Colors that will be used for the gradient
     */
    colors?: ReadonlyArray<string>;

    /**
     * Coordinates of the position that the gradient starts at, as a fraction
     * of the overall size of the gradient, starting from the top left corner.
     * { x: 0.1, y: 0.1 } means that the gradient will start 10% from the top
     * and 10% from the left.
     */
    start?: { x: number; y: number };

    /**
     * Coordinates of the position that the gradient ends at, as a fraction
     * of the overall size of the gradient, starting from the top left corner.
     * { x: 0.9, y: 0.9 } means that the gradient will end 90% from the top
     * and 90% from the left.
     */
    end?: { x: number; y: number };

    /**
     * An optional array of numbers defining the location of each gradient
     * color stop, mapping to the color with the same index in colors prop.
     * [0.1, 0.75, 1] means that first color will take 0% - 10%, second color
     * will take 10% - 75% and finally third color will occupy 75% - 100%.
     */
    locations?: ReadonlyArray<number>;
}

declare class LinearGradient extends React.Component<LinearGradientProps> {
    constructor(props: LinearGradientProps);
}

export default LinearGradient;
