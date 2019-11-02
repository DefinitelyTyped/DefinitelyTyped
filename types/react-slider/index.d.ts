// Type definitions for react-slider 0.8
// Project: https://github.com/mpowaga/react-slider
// Definitions by: Jason Unger <https://github.com/jsonunger>
//                 Wayne Van Son <https://github.com/waynevanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as motion from 'react-motion';

declare namespace ReactSlider {
    interface ReactSliderProps<S extends number | number[]> {
        min?: number;
        max?: number;
        step?: number;
        minDistance?: number;
        defaultValue?: S;
        value?: S;
        orientation?: 'horizontal' | 'vertical';
        className?: string;
        handleClassName?: string;
        handleActiveClassName?: string;
        withBars?: boolean;
        barClassName?: string;
        pearling?: boolean;
        disabled?: boolean;
        snapDragDisabled?: boolean;
        invert?: boolean;
        onBeforeChange?: (value: S) => void;
        onChange?: (value: S) => void;
        onAfterChange?: (value: S) => void;
        onSliderClick?: (value: number) => void;
        renderTrack?: Render<S>;
        renderThumb?: Render<S>;
    }
}

interface Render<S extends number | number[]> {
    (props: ReactSlider.ReactSliderProps<S>, state: S): React.ReactElement;
}

declare const ReactSlider: React.ComponentClass<ReactSlider.ReactSliderProps<any>>;
export = ReactSlider;
