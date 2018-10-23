// Type definitions for react-slider 0.8
// Project: https://github.com/mpowaga/react-slider
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as motion from 'react-motion';

declare namespace ReactSlider {
    interface ReactSliderProps {
        min?: number;
        max?: number;
        step?: number;
        minDistance?: number;
        defaultValue?: number | number[];
        value?: number | number[];
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
        onBeforeChange?: (value: number | number[] | undefined | null) => void;
        onChange?: (value: number | number[] | undefined | null) => void;
        onAfterChange?: (value: number | number[] | undefined | null) => void;
        onSliderClick?: (value: number) => void;
    }
}

declare const ReactSlider: React.ComponentClass<ReactSlider.ReactSliderProps>;
export = ReactSlider;
