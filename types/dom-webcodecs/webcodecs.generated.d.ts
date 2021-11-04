/////////////////////////////
/// webcodecs APIs
/////////////////////////////

interface AudioDecoderConfig {
    codec: string;
    description?: BufferSource | undefined;
    numberOfChannels: number;
    sampleRate: number;
}

interface AudioDecoderInit {
    error: WebCodecsErrorCallback;
    output: AudioFrameOutputCallback;
}

interface AudioDecoderSupport {
    config: AudioDecoderConfig;
    supported: boolean;
}

interface AudioEncoderConfig {
    bitrate?: number | undefined;
    codec: string;
    numberOfChannels: number;
    sampleRate: number;
}

interface AudioEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedAudioChunkOutputCallback;
}

interface AudioEncoderSupport {
    config: AudioEncoderConfig;
    supported: boolean;
}

interface AudioFrameInit {
    buffer: AudioBuffer;
    timestamp: number;
}

interface AvcEncoderConfig {
    format?: AvcBitstreamFormat | undefined;
}

interface EncodedAudioChunkInit {
    data: BufferSource;
    timestamp: number;
    type: EncodedAudioChunkType;
}

interface EncodedAudioChunkMetadata {
    decoderConfig?: AudioDecoderConfig | undefined;
}

interface EncodedVideoChunkInit {
    data: BufferSource;
    duration?: number | undefined;
    timestamp: number;
    type: EncodedVideoChunkType;
}

interface EncodedVideoChunkMetadata {
    decoderConfig?: VideoDecoderConfig | undefined;
    temporalLayerId?: number | undefined;
}

interface ImageDecodeOptions {
    completeFramesOnly?: boolean | undefined;
    frameIndex?: number | undefined;
}

interface ImageDecodeResult {
    complete: boolean;
    image: VideoFrame;
}

interface ImageDecoderInit {
    colorSpaceConversion?: ColorSpaceConversion | undefined;
    data: ImageBufferSource;
    desiredHeight?: number | undefined;
    desiredWidth?: number | undefined;
    preferAnimation?: boolean | undefined;
    premultiplyAlpha?: PremultiplyAlpha | undefined;
    type: string;
}

interface PlaneInit {
    data?: BufferSource | undefined;
    offset?: number | undefined;
    src?: BufferSource | undefined;
    stride: number;
}

interface PlaneLayout {
    offset?: number | undefined;
    stride?: number | undefined;
}

interface VideoDecoderConfig {
    codec: string;
    codedHeight?: number | undefined;
    codedWidth?: number | undefined;
    cropHeight?: number | undefined;
    cropLeft?: number | undefined;
    cropTop?: number | undefined;
    cropWidth?: number | undefined;
    description?: BufferSource | undefined;
    displayHeight?: number | undefined;
    displayWidth?: number | undefined;
    hardwareAcceleration?: HardwarePreference | undefined;
    visibleRegion?: VideoFrameRegion | undefined;
}

interface VideoDecoderInit {
    error: WebCodecsErrorCallback;
    output: VideoFrameOutputCallback;
}

interface VideoDecoderSupport {
    config: VideoDecoderConfig;
    supported: boolean;
}

interface VideoEncoderConfig {
    alpha?: AlphaOption | undefined;
    avc?: AvcEncoderConfig | undefined;
    bitrate?: number | undefined;
    codec: string;
    displayHeight?: number | undefined;
    displayWidth?: number | undefined;
    framerate?: number | undefined;
    hardwareAcceleration?: HardwarePreference | undefined;
    height: number;
    scalabilityMode?: string | undefined;
    width: number;
}

interface VideoEncoderEncodeOptions {
    keyFrame?: boolean | null | undefined;
}

interface VideoEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedVideoChunkOutputCallback;
}

interface VideoEncoderSupport {
    config: VideoEncoderConfig;
    supported: boolean;
}

interface VideoFrameInit {
    alpha?: AlphaOption | undefined;
    duration?: number | undefined;
    timestamp?: number | undefined;
}

interface VideoFramePlaneInit {
    codedHeight: number;
    codedWidth: number;
    cropHeight?: number | undefined;
    cropLeft?: number | undefined;
    cropTop?: number | undefined;
    cropWidth?: number | undefined;
    displayHeight?: number | undefined;
    displayWidth?: number | undefined;
    duration?: number | undefined;
    timestamp: number;
    visibleRegion?: VideoFrameRegion | undefined;
}

interface VideoFrameReadIntoOptions {
    layout?: PlaneLayout[] | undefined;
    region?: VideoFrameRegion | undefined;
}

interface VideoFrameRegion {
    height: number;
    left: number;
    top: number;
    width: number;
}

interface AudioDecoder {
    readonly decodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: AudioDecoderConfig): void;
    decode(chunk: EncodedAudioChunk): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var AudioDecoder: {
    prototype: AudioDecoder;
    new(init: AudioDecoderInit): AudioDecoder;
    isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
};

interface AudioEncoder {
    readonly encodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: AudioEncoderConfig): void;
    encode(frame: AudioFrame): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var AudioEncoder: {
    prototype: AudioEncoder;
    new(init: AudioEncoderInit): AudioEncoder;
    isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
};

interface AudioFrame {
    readonly buffer: AudioBuffer;
    readonly timestamp: number;
    clone(): AudioFrame;
    close(): void;
}

declare var AudioFrame: {
    prototype: AudioFrame;
    new(init: AudioFrameInit): AudioFrame;
};

interface EncodedAudioChunk {
    readonly data: ArrayBuffer;
    readonly timestamp: number;
    readonly type: EncodedAudioChunkType;
}

declare var EncodedAudioChunk: {
    prototype: EncodedAudioChunk;
    new(init: EncodedAudioChunkInit): EncodedAudioChunk;
};

interface EncodedVideoChunk {
    readonly data: ArrayBuffer;
    readonly duration: number | null;
    readonly timestamp: number;
    readonly type: EncodedVideoChunkType;
}

declare var EncodedVideoChunk: {
    prototype: EncodedVideoChunk;
    new(init: EncodedVideoChunkInit): EncodedVideoChunk;
};

interface ImageDecoder {
    readonly complete: boolean;
    readonly tracks: ImageTrackList;
    readonly type: string;
    close(): void;
    decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
    reset(): void;
}

declare var ImageDecoder: {
    prototype: ImageDecoder;
    new(init: ImageDecoderInit): ImageDecoder;
    isTypeSupported(type: string): Promise<boolean>;
};

interface ImageTrack {
    readonly animated: boolean;
    readonly frameCount: number;
    readonly repetitionCount: number;
    selected: boolean;
}

declare var ImageTrack: {
    prototype: ImageTrack;
    new(): ImageTrack;
};

interface ImageTrackList {
    readonly length: number;
    readonly ready: Promise<void>;
    readonly selectedIndex: number;
    readonly selectedTrack: ImageTrack | null;
    [index: number]: ImageTrack;
}

declare var ImageTrackList: {
    prototype: ImageTrackList;
    new(): ImageTrackList;
};

interface Plane {
    readonly length: number;
    readonly rows: number;
    readonly stride: number;
    readInto(dst: ArrayBufferView): void;
}

declare var Plane: {
    prototype: Plane;
    new(): Plane;
};

interface VideoDecoder {
    readonly decodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: VideoDecoderConfig): void;
    decode(chunk: EncodedVideoChunk): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var VideoDecoder: {
    prototype: VideoDecoder;
    new(init: VideoDecoderInit): VideoDecoder;
    isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
};

interface VideoEncoder {
    readonly encodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: VideoEncoderConfig): void;
    encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var VideoEncoder: {
    prototype: VideoEncoder;
    new(init: VideoEncoderInit): VideoEncoder;
    isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
};

interface VideoFrame {
    readonly codedHeight: number;
    readonly codedRegion: VideoFrameRegion;
    readonly codedWidth: number;
    readonly cropHeight: number;
    readonly cropLeft: number;
    readonly cropTop: number;
    readonly cropWidth: number;
    readonly displayHeight: number;
    readonly displayWidth: number;
    readonly duration: number | null;
    readonly format: VideoPixelFormat | null;
    readonly planes: ReadonlyArray<Plane> | null;
    readonly timestamp: number | null;
    readonly visibleRegion: VideoFrameRegion;
    allocationSize(options?: VideoFrameReadIntoOptions): number;
    clone(): VideoFrame;
    close(): void;
    readInto(destination: BufferSource, options?: VideoFrameReadIntoOptions): Promise<PlaneLayout[]>;
}

declare var VideoFrame: {
    prototype: VideoFrame;
    new(source: HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas | VideoFrame, init?: VideoFrameInit): VideoFrame;
    new(format: VideoPixelFormat, planes: PlaneInit[], init: VideoFramePlaneInit): VideoFrame;
};

interface AudioFrameOutputCallback {
    (output: AudioFrame): void;
}

interface EncodedAudioChunkOutputCallback {
    (output: EncodedAudioChunk, metadata: EncodedAudioChunkMetadata): void;
}

interface EncodedVideoChunkOutputCallback {
    (chunk: EncodedVideoChunk, metadata: EncodedVideoChunkMetadata): void;
}

interface VideoFrameOutputCallback {
    (output: VideoFrame): void;
}

interface WebCodecsErrorCallback {
    (error: DOMException): void;
}

type ImageBufferSource = ArrayBuffer | ArrayBufferView | ReadableStream;
type VideoPixelFormat = string;
type AlphaOption = "discard" | "keep";
type AvcBitstreamFormat = "annexb" | "avc";
type CodecState = "closed" | "configured" | "unconfigured";
type EncodedAudioChunkType = "delta" | "key";
type EncodedVideoChunkType = "delta" | "key";
type HardwarePreference = "allow" | "deny" | "require";
