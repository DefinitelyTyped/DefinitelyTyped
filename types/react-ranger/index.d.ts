// Type definitions for react-ranger 2.0
// Project: https://github.com/tannerlinsley/react-ranger#readme
// Definitions by: Matt Polichette <https://github.com/mpolichette>,
//                 Guy Gascoigne-Piggford <https://github.com/ggascoigne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Key, CSSProperties, MouseEvent, TouchEvent } from 'react';

export interface RangerOptions {
    values: number[];
    min: number;
    max: number;
    stepSize: number;
    steps?: number[];
    tickSize?: number;
    ticks?: number[];
    onChange?: (values: number[]) => void;
    onDrag?: (values: number[]) => void;
    interpolator?: {
        getPercentageForValue: (val: number, min: number, max: number) => number;
        getValueForClientX: (clientX: number, trackDims: object, min: number, max: number) => number;
    };
}

export interface TrackProps {
    key: Key;
    style: CSSProperties;
}
export interface TickProps  {
    key: Key;
    style: CSSProperties;
}
export interface SegmentProps  {
    key: Key;
    style: CSSProperties;
}
export interface HandleProps {
    key: Key;
    style: CSSProperties;
    onMouseDown: (event: MouseEvent) => void;
    onTouchStart: (event: TouchEvent) => void;
    tabIndex: number;
}

export interface RangerTick {
    value: number;
    getTickProps: <T>(props?: T) => T & TickProps;
}

export interface RangerSegment {
    value: number;
    getSegmentProps: <T>(props?: T) => T & SegmentProps;
}

export interface RangerHandle {
    value: number;
    active: boolean;
    getHandleProps: <T>(props?: T) => T & HandleProps;
}

export interface Ranger {
    getTrackProps: <T>(props?: T) => T & TrackProps;
    ticks: RangerTick[];
    segments: RangerSegment[];
    handles: RangerHandle[];
    activeHandleIndex: number | null;
}

export function useRanger(options: RangerOptions): Ranger;
