import { CSSProperties, Key, MouseEvent, TouchEvent } from "react";

export interface RangerOptions {
    values: number[];
    min: number;
    max: number;
    stepSize: number;
    steps?: number[] | undefined;
    tickSize?: number | undefined;
    ticks?: number[] | undefined;
    onChange?: ((values: number[]) => void) | undefined;
    onDrag?: ((values: number[]) => void) | undefined;
    interpolator?: {
        getPercentageForValue: (val: number, min: number, max: number) => number;
        getValueForClientX: (clientX: number, trackDims: object, min: number, max: number) => number;
    } | undefined;
}

export interface TrackProps {
    key: Key;
    style: CSSProperties;
}
export interface TickProps {
    key: Key;
    style: CSSProperties;
}
export interface SegmentProps {
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
