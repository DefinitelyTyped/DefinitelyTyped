export = Sequence;
declare function Sequence(key: number): void;
declare class Sequence {
    constructor(key: number);
    key_: number;
    cacheFileName_: string;
    infoFileName_: string;
    private path_;
    private cacheSize_;
    key: number;
    private getCacheSize_;
    private readInfoFile_;
    private updateInfoFile_;
    private getDataSetFromDB_;
    private cycle_;
    private reserveRange_;
    private loadCache_;
    private saveCache_;
    private nextValueFromCache_;
    nextValue(): number;
}
declare namespace Sequence {
    export { ReservedRange };
}
interface ReservedRange {
    start: number;
    end: number;
}
