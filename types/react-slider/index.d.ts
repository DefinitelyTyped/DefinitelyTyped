// Type definitions for react-slider 1.0
// Project: https://github.com/zillow/react-slider
// Definitions by: Jason Unger <https://github.com/jsonunger>
//                 Björgvin Bæhrenz Þórðarson <https://github.com/bjorgvin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as motion from 'react-motion';

declare namespace ReactSlider {
    interface ReactSliderProps {
        min?: number;
        max?: number;
        step?: number;
        pageFn?: (step: number) => number;
        minDistance?: number;
        defaultValue?: number | number[];
        value?: number | number[];
        orientation?: 'horizontal' | 'vertical';
        className?: string;
        thumbClassName?: string;
        thumbActiveClassName?: string;
        trackClassName?: string;
        withTracks?: boolean;
        pearling?: boolean;
        disabled?: boolean;
        snapDragDisabled?: boolean;
        invert?: boolean;
        onBeforeChange?: (value: number | number[] | undefined | null) => void;
        onChange?: (value: number | number[] | undefined | null) => void;
        onAfterChange?: (value: number | number[] | undefined | null) => void;
        onSliderClick?: (value: number) => void;
        ariaLabel?: string | string[];
        ariaValuetext?: string | ((value: {index: number, value: number | number[], valueNow: number }) => string);
        renderTrack?: (props: object, state: {index: number, value: number | number[] }) => JSX.Element;
        renderThumb?: (props: object, state: {index: number, value: number | number[], valueNow: number }) => JSX.Element;
    }
}

declare const ReactSlider: React.ComponentClass<ReactSlider.ReactSliderProps>;
export = ReactSlider;
