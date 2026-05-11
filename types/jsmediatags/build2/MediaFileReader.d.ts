import { CallbackType, CharsetType, LoadCallbackType } from "../types";
import { DecodedString } from "./StringUtils";

export default class MediaFileReader {
    _isInitialized: boolean;
    _size: number;

    constructor(path?: any);

    static canReadFile(file: any): boolean;

    init(callbacks: LoadCallbackType): void;
    _init(callbacks: LoadCallbackType): void;
    loadRange(range: [number, number], callbacks: LoadCallbackType): void;
    getSize(): number;
    getByteAt(offset: number): number;
    getBytesAt(offset: number, length: number): number[];
    isBitSetAt(offset: number, bit: number): boolean;
    getSByteAt(offset: number): number;
    getShortAt(offset: number, isBigEndian: boolean): number;
    getSShortAt(offset: number, isBigEndian: boolean): number;
    getLongAt(offset: number, isBigEndian: boolean): number;
    getSLongAt(offset: number, isBigEndian: boolean): number;
    getInteger24At(offset: number, isBigEndian: boolean): number;
    getStringAt(offset: number, length: number): string;
    getStringWithCharsetAt(
        offset: number,
        length: number,
        charset?: CharsetType,
    ): DecodedString;
    getCharAt(offset: number): string;
    getSynchsafeInteger32At(offset: number): number;
}
