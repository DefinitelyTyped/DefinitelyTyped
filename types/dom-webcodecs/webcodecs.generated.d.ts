/////////////////////////////
/// webcodecs APIs
/////////////////////////////

interface AudioDataCopyToOptions {
    format?: AudioSampleFormat | undefined;
    frameCount?: number | undefined;
    frameOffset?: number | undefined;
    planeIndex: number;
}

interface AudioDataInit {
    data: AllowSharedBufferSource;
    format: AudioSampleFormat;
    numberOfChannels: number;
    numberOfFrames: number;
    sampleRate: number;
    timestamp: number;
}

interface AudioDecoderConfig {
    codec: string;
    description?: AllowSharedBufferSource | undefined;
    numberOfChannels: number;
    sampleRate: number;
}

interface AudioDecoderInit {
    error: WebCodecsErrorCallback;
    output: AudioDataOutputCallback;
}

interface AudioDecoderSupport {
    config?: AudioDecoderConfig;
    supported?: boolean;
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
    config?: AudioEncoderConfig;
    supported?: boolean;
}

interface AvcEncoderConfig {
    format?: AvcBitstreamFormat | undefined;
}

interface EncodedAudioChunkInit {
    data: AllowSharedBufferSource;
    duration?: number | undefined;
    timestamp: number;
    type: EncodedAudioChunkType;
}

interface EncodedAudioChunkMetadata {
    decoderConfig?: AudioDecoderConfig | undefined;
}

interface EncodedVideoChunkInit {
    data: AllowSharedBufferSource;
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

interface PlaneLayout {
    offset: number;
    stride: number;
}

interface VideoColorSpaceInit {
    fullRange?: boolean | null | undefined;
    matrix?: VideoMatrixCoefficients | null | undefined;
    primaries?: VideoColorPrimaries | null | undefined;
    transfer?: VideoTransferCharacteristics | null | undefined;
}

interface VideoDecoderConfig {
    codec: string;
    codedHeight?: number | undefined;
    codedWidth?: number | undefined;
    colorSpace?: VideoColorSpaceInit | undefined;
    description?: AllowSharedBufferSource | undefined;
    displayAspectHeight?: number | undefined;
    displayAspectWidth?: number | undefined;
    hardwareAcceleration?: HardwarePreference | undefined;
    optimizeForLatency?: boolean | undefined;
}

interface VideoDecoderInit {
    error: WebCodecsErrorCallback;
    output: VideoFrameOutputCallback;
}

interface VideoDecoderSupport {
    config?: VideoDecoderConfig;
    supported?: boolean;
}

interface VideoEncoderConfig {
    alpha?: AlphaOption | undefined;
    avc?: AvcEncoderConfig | undefined;
    bitrate?: number | undefined;
    bitrateMode?: VideoEncoderBitrateMode | undefined;
    codec: string;
    displayHeight?: number | undefined;
    displayWidth?: number | undefined;
    framerate?: number | undefined;
    hardwareAcceleration?: HardwarePreference | undefined;
    height: number;
    latencyMode?: LatencyMode | undefined;
    scalabilityMode?: string | undefined;
    width: number;
}

interface VideoEncoderEncodeOptions {
    keyFrame?: boolean;
}

interface VideoEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedVideoChunkOutputCallback;
}

interface VideoEncoderSupport {
    config?: VideoEncoderConfig;
    supported?: boolean;
}

interface VideoFrameBufferInit {
    codedHeight: number;
    codedWidth: number;
    colorSpace?: VideoColorSpaceInit | undefined;
    displayHeight?: number | undefined;
    displayWidth?: number | undefined;
    duration?: number | undefined;
    format: VideoPixelFormat;
    layout?: PlaneLayout[] | undefined;
    timestamp: number;
    visibleRect?: DOMRectInit | undefined;
}

interface VideoFrameCopyToOptions {
    layout?: PlaneLayout[] | undefined;
    rect?: DOMRectInit | undefined;
}

interface VideoFrameInit {
    alpha?: AlphaOption | undefined;
    displayHeight?: number | undefined;
    displayWidth?: number | undefined;
    duration?: number | undefined;
    timestamp?: number | undefined;
    visibleRect?: DOMRectInit | undefined;
}

interface AudioData {
    readonly duration: number;
    readonly format: AudioSampleFormat | null;
    readonly numberOfChannels: number;
    readonly numberOfFrames: number;
    readonly sampleRate: number;
    readonly timestamp: number;
    allocationSize(options: AudioDataCopyToOptions): number;
    clone(): AudioData;
    close(): void;
    copyTo(destination: AllowSharedBufferSource, options: AudioDataCopyToOptions): void;
}

declare var AudioData: {
    prototype: AudioData;
    new(init: AudioDataInit): AudioData;
};

interface AudioDecoderEventMap {
    "dequeue": Event;
}

/** Available only in secure contexts. */
interface AudioDecoder {
    readonly decodeQueueSize: number;
    readonly state: CodecState;
    ondequeue: ((this: AudioDecoder, ev: Event) => any) | null;
    close(): void;
    configure(config: AudioDecoderConfig): void;
    decode(chunk: EncodedAudioChunk): void;
    flush(): Promise<void>;
    reset(): void;
    addEventListener<K extends keyof AudioDecoderEventMap>(
        type: K,
        listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof AudioDecoderEventMap>(
        type: K,
        listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare var AudioDecoder: {
    prototype: AudioDecoder;
    new(init: AudioDecoderInit): AudioDecoder;
    isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
};

interface AudioEncoderEventMap {
    "dequeue": Event;
}

/** Available only in secure contexts. */
interface AudioEncoder {
    readonly encodeQueueSize: number;
    readonly state: CodecState;
    ondequeue: ((this: AudioEncoder, ev: Event) => any) | null;
    close(): void;
    configure(config: AudioEncoderConfig): void;
    encode(data: AudioData): void;
    flush(): Promise<void>;
    reset(): void;
    addEventListener<K extends keyof AudioEncoderEventMap>(
        type: K,
        listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof AudioEncoderEventMap>(
        type: K,
        listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare var AudioEncoder: {
    prototype: AudioEncoder;
    new(init: AudioEncoderInit): AudioEncoder;
    isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
};

interface EncodedAudioChunk {
    readonly byteLength: number;
    readonly duration: number | null;
    readonly timestamp: number;
    readonly type: EncodedAudioChunkType;
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedAudioChunk: {
    prototype: EncodedAudioChunk;
    new(init: EncodedAudioChunkInit): EncodedAudioChunk;
};

interface EncodedVideoChunk {
    readonly byteLength: number;
    readonly duration: number | null;
    readonly timestamp: number;
    readonly type: EncodedVideoChunkType;
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedVideoChunk: {
    prototype: EncodedVideoChunk;
    new(init: EncodedVideoChunkInit): EncodedVideoChunk;
};

/** Available only in secure contexts. */
interface ImageDecoder {
    readonly complete: boolean;
    readonly completed: Promise<void>;
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

interface VideoColorSpace {
    readonly fullRange: boolean | null;
    readonly matrix: VideoMatrixCoefficients | null;
    readonly primaries: VideoColorPrimaries | null;
    readonly transfer: VideoTransferCharacteristics | null;
    toJSON(): VideoColorSpaceInit;
}

declare var VideoColorSpace: {
    prototype: VideoColorSpace;
    new(init?: VideoColorSpaceInit): VideoColorSpace;
};

interface VideoDecoderEventMap {
    "dequeue": Event;
}

/** Available only in secure contexts. */
interface VideoDecoder {
    readonly decodeQueueSize: number;
    readonly state: CodecState;
    ondequeue: ((this: VideoDecoder, ev: Event) => any) | null;
    close(): void;
    configure(config: VideoDecoderConfig): void;
    decode(chunk: EncodedVideoChunk): void;
    flush(): Promise<void>;
    reset(): void;
    addEventListener<K extends keyof VideoDecoderEventMap>(
        type: K,
        listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof VideoDecoderEventMap>(
        type: K,
        listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare var VideoDecoder: {
    prototype: VideoDecoder;
    new(init: VideoDecoderInit): VideoDecoder;
    isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
};

interface VideoEncoderEventMap {
    "dequeue": Event;
}

/** Available only in secure contexts. */
interface VideoEncoder {
    readonly encodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    ondequeue: ((this: VideoEncoder, ev: Event) => any) | null;
    configure(config: VideoEncoderConfig): void;
    encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    flush(): Promise<void>;
    reset(): void;
    addEventListener<K extends keyof VideoEncoderEventMap>(
        type: K,
        listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof VideoEncoderEventMap>(
        type: K,
        listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;
}

declare var VideoEncoder: {
    prototype: VideoEncoder;
    new(init: VideoEncoderInit): VideoEncoder;
    isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
};

interface VideoFrame {
    readonly codedHeight: number;
    readonly codedRect: DOMRectReadOnly | null;
    readonly codedWidth: number;
    readonly colorSpace: VideoColorSpace;
    readonly displayHeight: number;
    readonly displayWidth: number;
    readonly duration: number | null;
    readonly format: VideoPixelFormat | null;
    readonly timestamp: number;
    readonly visibleRect: DOMRectReadOnly | null;
    allocationSize(options?: VideoFrameCopyToOptions): number;
    clone(): VideoFrame;
    close(): void;
    copyTo(destination: AllowSharedBufferSource, options?: VideoFrameCopyToOptions): Promise<PlaneLayout[]>;
}

declare var VideoFrame: {
    prototype: VideoFrame;
    new(source: CanvasImageSource, init?: VideoFrameInit): VideoFrame;
    new(data: AllowSharedBufferSource, init: VideoFrameBufferInit): VideoFrame;
};

interface AudioDataOutputCallback {
    (output: AudioData): void;
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

// type AllowSharedBufferSource = ArrayBuffer | ArrayBufferView;
// type BitrateMode = "constant" | "variable";
type ImageBufferSource = ArrayBuffer | ArrayBufferView | ReadableStream;
// type AlphaOption = "discard" | "keep";
// type AudioSampleFormat = "f32" | "f32-planar" | "s16" | "s16-planar" | "s32" | "s32-planar" | "u8" | "u8-planar";
// type AvcBitstreamFormat = "annexb" | "avc";
// type CodecState = "closed" | "configured" | "unconfigured";
// type EncodedAudioChunkType = "delta" | "key";
// type EncodedVideoChunkType = "delta" | "key";
type HardwarePreference = "no-preference" | "prefer-hardware" | "prefer-software";
// type LatencyMode = "quality" | "realtime";
// type VideoColorPrimaries = "bt470bg" | "bt709" | "smpte170m";
// type VideoMatrixCoefficients = "bt470bg" | "bt709" | "rgb" | "smpte170m";
// type VideoPixelFormat = "BGRA" | "BGRX" | "I420" | "I420A" | "I422" | "I444" | "NV12" | "RGBA" | "RGBX";
// type VideoTransferCharacteristics = "bt709" | "iec61966-2-1" | "smpte170m";
