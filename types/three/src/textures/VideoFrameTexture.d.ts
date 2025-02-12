import {
    MagnificationTextureFilter,
    Mapping,
    MinificationTextureFilter,
    PixelFormat,
    TextureDataType,
    Wrapping,
} from "../constants.js";
import { VideoTexture } from "./VideoTexture.js";

declare class VideoFrameTexture extends VideoTexture {
    constructor(
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    // FIXME Replace with VideoFrame when we no longer need to support TypeScript 5.0
    setFrame(frane: unknown): void;
}

export { VideoFrameTexture };
