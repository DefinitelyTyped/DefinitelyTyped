import { BufferGeometry, Loader, LoadingManager } from "three";
import { ZSTDDecoder } from "../libs/zstddec.module.js";

declare class SPZLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    parse(
        buffer: ArrayBuffer,
        onLoad?: (geometry: BufferGeometry) => void,
        onError?: (err: unknown) => void,
    ): BufferGeometry | Promise<BufferGeometry> | undefined;

    parseRawSPZ(bytes: Uint8Array): BufferGeometry;

    parseRawSPZV4(bytes: Uint8Array, zstd: ZSTDDecoder): BufferGeometry;
}

export { SPZLoader };
