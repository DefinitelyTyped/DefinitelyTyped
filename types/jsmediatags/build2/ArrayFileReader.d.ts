import { Byte, ByteArray, LoadCallbackType } from "../types";
import MediaFileReader from "./MediaFileReader";

export default class ArrayFileReader extends MediaFileReader {
    _array: ByteArray;
    _size: number;

    constructor(array: ByteArray);

    static canReadFile(file: any): boolean;

    init(callbacks: LoadCallbackType): void;

    loadRange(range: [number, number], callbacks: LoadCallbackType): void;

    getByteAt(offset: number): Byte;
}
