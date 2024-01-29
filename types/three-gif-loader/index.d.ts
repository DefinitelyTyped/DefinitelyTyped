import { GifReader } from "omggif";
import { LoadingManager } from "three";
import GifTexture from "./lib/gif-texture";

export default class GifLoader {
    constructor(manager?: LoadingManager);
    load(
        url: string,
        onLoad: (reader: GifReader) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): GifTexture;
    setPath(value: string): void;
}
