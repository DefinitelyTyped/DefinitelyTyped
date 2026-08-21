export default class PeakCache {
    constructor();

    addRangeToPeakCache(length: number, start: number, end: number): number[][];
    clearPeakCache(): void;
    getCacheRanges(): number[][];
}
