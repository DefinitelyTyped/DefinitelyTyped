export type Index = {
    index: number
};

export type PositionInfo = {
    x: number,
    y: number
};

export type ScrollPosition = {
    scrollLeft: number,
    scrollTop: number
};

export type SizeInfo = {
    height: number,
    width: number
};

export type SizeAndPositionInfo = SizeInfo & PositionInfo;

export type Map<T> = { [key: string]: T };

export type Alignment = 'auto' | 'end' | 'start' | 'center';

export type IndexRange = {
    startIndex: number,
    stopIndex: number
}

export type OverscanIndexRange = {
    overscanStartIndex: number,
    overscanStopIndex: number,
}

export type ScrollEventData = {
    clientHeight: number,
    scrollHeight: number,
    scrollTop: number
}