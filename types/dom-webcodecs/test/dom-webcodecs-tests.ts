// Most of the code below is copied from
// https://github.com/web-platform-tests/wpt/tree/f4351ba70263b622c24c6b79ff57ecef2916f0b6/webcodecs
// and assertions added.

//////////////////////////////////////////////////
// utils.js

const audioFrame = new AudioData({
    timestamp: 100,
    data: new ArrayBuffer(1024),
    format: "s32-planar",
    numberOfChannels: 2,
    numberOfFrames: 1,
    sampleRate: 44100,
});

declare const imageBitmap: ImageBitmap;

function genericCodec(codec: AudioDecoder | AudioEncoder | VideoDecoder | VideoEncoder) {
    const state: CodecState = codec.state;

    // $ExpectType void
    codec.reset();

    // $ExpectType void
    codec.close();
}

function errorCallback(error: DOMException): void {}

//////////////////////////////////////////////////
// audio-decoder.any.js

new EncodedAudioChunk({
    type: "key",
    timestamp: 0,
    data: Uint8Array.of(0),
});

const fullAudioDecoderConfig: AudioDecoderConfig = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
    description: Uint8Array.of(0),
};

// description is optional
const audioDecoderConfig: AudioDecoderConfig = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
};

// @ts-expect-error
AudioDecoder.isConfigSupported();

// @ts-expect-error
AudioDecoder.isConfigSupported({
    sampleRate: 48000,
    numberOfChannels: 2,
});

// @ts-expect-error
AudioDecoder.isConfigSupported({
    codec: "opus",
    numberOfChannels: 2,
});

// @ts-expect-error
AudioDecoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
});

AudioDecoder.isConfigSupported(audioDecoderConfig).then((result: AudioDecoderSupport) => {
    // $ExpectType boolean | undefined
    result.supported;
    // $ExpectType AudioDecoderConfig | undefined
    result.config;
});

function audioOutput(output: AudioData): void {
    // $ExpectType void
    output.copyTo(new ArrayBuffer(1024), { planeIndex: 0 });
}

// @ts-expect-error
new AudioDecoder({});

// @ts-expect-error
new AudioDecoder({
    output: audioOutput,
});

// @ts-expect-error
new AudioDecoder({
    error: errorCallback,
});

const audioDecoder = new AudioDecoder({
    output: audioOutput,
    error: errorCallback,
});

// @ts-expect-error
audioDecoder.configure();

// @ts-expect-error
audioDecoder.configure({
    sampleRate: 48000,
    numberOfChannels: 2,
});

// $ExpectType void
audioDecoder.configure(audioDecoderConfig);

// additional properties are allowed
const futureAudioDecoderConfig = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
    futureConfigFeature: "foo",
};

// $ExpectType Promise<AudioDecoderSupport>
AudioDecoder.isConfigSupported(futureAudioDecoderConfig);

// $ExpectType void
audioDecoder.configure(futureAudioDecoderConfig);

audioDecoder.ondequeue = () => "";

// $ExpectType void
audioDecoder.addEventListener("dequeue", (e) => e, { once: true });

genericCodec(audioDecoder);

//////////////////////////////////////////////////
// audio-encoder-config.any.js

const fullAudioEncoderConfig: AudioEncoderConfig = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
    bitrate: 128000,
};

// bitrate is optional
const audioEncoderConfig: AudioEncoderConfig = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
};

// @ts-expect-error
AudioEncoder.isConfigSupported();

// @ts-expect-error
AudioEncoder.isConfigSupported({
    sampleRate: 48000,
    numberOfChannels: 2,
});

// @ts-expect-error
AudioEncoder.isConfigSupported({
    codec: "opus",
    numberOfChannels: 2,
});

// @ts-expect-error
AudioEncoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
});

AudioEncoder.isConfigSupported(audioEncoderConfig).then((result: AudioEncoderSupport) => {
    // $ExpectType boolean | undefined
    result.supported;
    // $ExpectType AudioEncoderConfig | undefined
    result.config;
});

// additional properties are allowed
const futureAudioEncoderConfig = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
    futureConfigFeature: "foo",
};

// $ExpectType Promise<AudioEncoderSupport>
AudioEncoder.isConfigSupported(futureAudioEncoderConfig);

//////////////////////////////////////////////////
// audio-encoder.any.js

function encodedAudioOutput(output: EncodedAudioChunk, metadata?: EncodedAudioChunkMetadata): void {
    if (metadata?.decoderConfig !== undefined) {
        audioDecoder.configure(metadata.decoderConfig);
    }
    audioDecoder.decode(output);
}

// @ts-expect-error
new AudioEncoder();

// @ts-expect-error
new AudioEncoder({
    output: encodedAudioOutput,
});

// @ts-expect-error
new AudioEncoder({
    error: errorCallback,
});

const audioEncoder = new AudioEncoder({
    output: encodedAudioOutput,
    error: errorCallback,
});

// $ExpectType void
audioEncoder.configure(audioEncoderConfig);

// $ExpectType void
audioEncoder.configure(futureAudioEncoderConfig);

// $ExpectType void
audioEncoder.encode(audioFrame);

// $ExpectType void
audioEncoder.addEventListener("dequeue", (e) => e, { once: true });

// $ExpectType void
audioFrame.close();

// $ExpectType Promise<void>
audioEncoder.flush();

// $ExpectType Promise<void>
audioDecoder.flush();

genericCodec(audioEncoder);

//////////////////////////////////////////////////
// audio-frame.any.js

// $ExpectType number
audioFrame.timestamp;

const audioBuffer = new ArrayBuffer(1024);

// @ts-expect-error
new AudioData({ data: audioBuffer });

// @ts-expect-error
new AudioData({ timestamp: 100 });

// $ExpectType AudioData
new AudioData({
    data: audioBuffer,
    timestamp: 100,
    format: "f32",
    numberOfChannels: 2,
    numberOfFrames: 1,
    sampleRate: 48000,
});

// $ExpectType AudioData
audioFrame.clone();

//////////////////////////////////////////////////
// image-decoder-utils.js

const imageDecoderInit: ImageDecoderInit = { data: new Uint8Array(0), type: "image/jpeg" };

// @ts-expect-error
new ImageDecoder();

// @ts-expect-error
new ImageDecoder({ data: new Uint8Array(0) });

// @ts-expect-error
new ImageDecoder({ type: "image/jpeg" });

const imageDecoder = new ImageDecoder(imageDecoderInit);

declare const context2d: OffscreenCanvasRenderingContext2D;
imageDecoder.decode().then((result: ImageDecodeResult) => {
    const imageDecodeImage: VideoFrame = result.image;
    // $ExpectType number
    imageDecodeImage.displayWidth;
    // $ExpectType number
    imageDecodeImage.displayHeight;

    context2d.drawImage(imageDecodeImage, 0, 0);
});

//////////////////////////////////////////////////
// image-decoder.any.js

// $ExpectType ImageDecoder
new ImageDecoder({ data: new ArrayBuffer(0), type: "image/jpeg", preferAnimation: true });

// $ExpectType Promise<ImageDecodeResult>
imageDecoder.decode({ frameIndex: 1 });

// $ExpectType Promise<ImageDecodeResult>
imageDecoder.decode({ completeFramesOnly: false });

// $ExpectType ImageDecoder
new ImageDecoder({ data: new ReadableStream(), type: "image/jpeg" });

const imageDecoderTracks: ImageTrackList = imageDecoder.tracks;

// $ExpectType number
imageDecoderTracks.length;
// $ExpectType Promise<void>
imageDecoderTracks.ready;
// $ExpectType number
imageDecoderTracks.selectedIndex;
if (imageDecoderTracks.selectedTrack !== null) {
    // $ExpectType boolean
    imageDecoderTracks.selectedTrack.selected;
    // $ExpectType boolean
    imageDecoderTracks.selectedTrack.animated;
    // $ExpectType number
    imageDecoderTracks.selectedTrack.frameCount;
    // $ExpectType number
    imageDecoderTracks.selectedTrack.repetitionCount;
}
// $ExpectType ImageTrack
imageDecoderTracks[0];
imageDecoderTracks[0].selected = true;

// $ExpectType void
imageDecoder.reset();

// $ExpectType void
imageDecoder.close();

// $ExpectType string
imageDecoder.type;

//////////////////////////////////////////////////
// video-decoder.any.js

const encodedVideoChunk = new EncodedVideoChunk({
    type: "key",
    timestamp: 0,
    data: Uint8Array.of(0),
});

const fullVideoDecoderConfig: VideoDecoderConfig = {
    codec: "avc1.64000c",
    description: new Uint8Array(0),
    codedWidth: 1920,
    codedHeight: 1088,
    hardwareAcceleration: "prefer-hardware",
};

const videoDecoderConfig: VideoDecoderConfig = {
    codec: "avc1.64000c",
};

// @ts-expect-error
VideoDecoder.isConfigSupported();

// @ts-expect-error
VideoDecoder.isConfigSupported({ description: new Uint8Array(0) });

VideoDecoder.isConfigSupported(videoDecoderConfig).then((result: VideoDecoderSupport) => {
    // $ExpectType boolean | undefined
    result.supported;
    // $ExpectType VideoDecoderConfig | undefined
    result.config;
});

function videoOutput(output: VideoFrame): void {
    // $ExpectType number | undefined
    output.visibleRect?.width;
    // $ExpectType number | undefined
    output.visibleRect?.height;
    // $ExpectType number
    output.displayWidth;
    // $ExpectType number
    output.displayHeight;
    // $ExpectType number
    output.timestamp;
    // $ExpectType void
    output.close();
}

// @ts-expect-error
new VideoDecoder({});

// @ts-expect-error
new VideoDecoder({
    output: videoOutput,
});

// @ts-expect-error
new VideoDecoder({
    error: errorCallback,
});

const videoDecoder = new VideoDecoder({
    output: videoOutput,
    error: errorCallback,
});

// @ts-expect-error
videoDecoder.configure();

// @ts-expect-error
videoDecoder.configure({ description: new Uint8Array(0) });

// $ExpectType void
videoDecoder.configure(videoDecoderConfig);

// additional properties are allowed
const futureVideoDecoderConfig = {
    codec: "avc1.64000c",
    futureConfigFeature: "foo",
};

// $ExpectType Promise<VideoDecoderSupport>
VideoDecoder.isConfigSupported(futureVideoDecoderConfig);

// $ExpectType void
videoDecoder.configure(futureVideoDecoderConfig);

genericCodec(videoDecoder);

// $ExpectType void
videoDecoder.addEventListener("dequeue", () => {}, { once: true });

// $ExpectType void
videoDecoder.decode(encodedVideoChunk);

// $ExpectType Promise<void>
videoDecoder.flush();

// $ExpectType number
videoDecoder.decodeQueueSize;

//////////////////////////////////////////////////
// video-encoder-config.any.js

const fullVideoEncoderConfig: VideoEncoderConfig = {
    codec: "avc1.42001E",
    hardwareAcceleration: "prefer-software",
    alpha: "keep",
    width: 640,
    height: 480,
    displayWidth: 640,
    displayHeight: 480,
    bitrate: 5000000,
    framerate: 24,
    avc: {
        format: "annexb",
    },
    scalabilityMode: "L3T3",
};

// Only codec, width, and height are required.
const videoEncoderConfig: VideoEncoderConfig = {
    codec: "avc1.42001E",
    width: 640,
    height: 480,
};

// @ts-expect-error
VideoEncoder.isConfigSupported();

// @ts-expect-error
VideoEncoder.isConfigSupported({
    width: 640,
    height: 480,
});

// @ts-expect-error
VideoEncoder.isConfigSupported({
    codec: "avc1.42001E",
    height: 480,
});

// @ts-expect-error
VideoEncoder.isConfigSupported({
    codec: "avc1.42001E",
    width: 640,
});

VideoEncoder.isConfigSupported(videoEncoderConfig).then((result: VideoEncoderSupport) => {
    // $ExpectType boolean | undefined
    result.supported;
    // $ExpectType VideoEncoderConfig | undefined
    result.config;
});

// additional properties are allowed
const futureVideoEncoderConfig = {
    codec: "avc1.42001E",
    width: 640,
    height: 480,
    futureConfigFeature: "foo",
};
// $ExpectType Promise<VideoEncoderSupport>
VideoEncoder.isConfigSupported(futureVideoEncoderConfig);

//////////////////////////////////////////////////
// video-encoder.any.js

const videoFrame = new VideoFrame(imageBitmap, { timestamp: 1000000 });

function encodedVideoOutput(output: EncodedVideoChunk, metadata?: EncodedVideoChunkMetadata): void {
    if (metadata?.decoderConfig !== undefined) {
        videoDecoder.configure(metadata.decoderConfig);
    }
    videoDecoder.decode(output);
    // $ExpectType number
    output.timestamp;
}

// @ts-expect-error
new VideoEncoder();

// @ts-expect-error
new VideoEncoder({
    output: encodedVideoOutput,
});

// @ts-expect-error
new VideoEncoder({
    error: errorCallback,
});

const videoEncoder = new VideoEncoder({
    output: encodedVideoOutput,
    error: errorCallback,
});

// @ts-expect-error
videoEncoder.configure({
    width: 640,
    height: 480,
});

// $ExpectType void
videoEncoder.configure(videoEncoderConfig);

// $ExpectType void
videoEncoder.configure(futureVideoEncoderConfig);

// $ExpectType number
videoEncoder.encodeQueueSize;

// $ExpectType void
videoEncoder.addEventListener("dequeue", () => {}, { once: true });

// $ExpectType void
videoEncoder.encode(videoFrame);

// $ExpectType Promise<void>
videoEncoder.flush();

genericCodec(videoEncoder);

//////////////////////////////////////////////////
// video-frame-serialization.any.js

const videoFrameClone: VideoFrame = videoFrame.clone();

// $ExpectType void
videoFrame.close();

//////////////////////////////////////////////////
// video-frame.any.js

// $ExpectType number
videoFrame.timestamp;
// $ExpectType number | null
videoFrame.duration;
// $ExpectType number | undefined
videoFrame.visibleRect?.left;
// $ExpectType number | undefined
videoFrame.visibleRect?.top;
// $ExpectType number | undefined
videoFrame.visibleRect?.width;
// $ExpectType number | undefined
videoFrame.visibleRect?.height;
// $ExpectType number
videoFrame.displayWidth;
// $ExpectType number
videoFrame.displayHeight;

// @ts-expect-error
new VideoFrame(new ArrayBuffer(1024), {
    codedWidth: 4,
    codedHeight: 2,
});

// @ts-expect-error
new VideoFrame(new ArrayBuffer(1024), {
    timestamp: 1234,
    codedHeight: 2,
});

// @ts-expect-error
new VideoFrame(new ArrayBuffer(1024), {
    timestamp: 1234,
    codedWidth: 4,
});

const videoFramePlaneInit: VideoFrameBufferInit = {
    format: "BGRA",
    timestamp: 1234,
    codedWidth: 4,
    codedHeight: 2,
};

new VideoFrame(new ArrayBuffer(1024), videoFramePlaneInit);

new VideoFrame(new ArrayBuffer(1024), {
    format: "BGRA",
    timestamp: 1234,
    duration: 4321,
    codedWidth: 4,
    codedHeight: 2,
    visibleRect: { x: 0, y: 0, width: 4, height: 2 },
    displayWidth: 4,
    displayHeight: 2,
});

//////////////////////////////////////////////////
// videoFrame-canvasImageSource.html

new VideoFrame(document.createElement("video"));

new VideoFrame(document.createElement("img"));

new VideoFrame(document.createElementNS("http://www.w3.org/2000/svg", "image"));

new VideoFrame(document.createElement("canvas"));

//////////////////////////////////////////////////
// videoFrame-createImageBitmap.any.js

// $ExpectType Promise<ImageBitmap>
createImageBitmap(videoFrame);

// $ExpectType Promise<ImageBitmap>
createImageBitmap(videoFrame, { colorSpaceConversion: "none" });

// $ExpectType void
videoEncoder.encode(videoFrame, { keyFrame: true });

//////////////////////////////////////////////////
// videoFrame-texImage.any.js

declare const gl: WebGL2RenderingContext;
if (!gl) throw new Error("missing context");
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoFrame);
gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, videoFrame);
