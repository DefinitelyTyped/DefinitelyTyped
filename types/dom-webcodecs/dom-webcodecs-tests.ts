// Most of the code below is copied from
// https://github.com/web-platform-tests/wpt/tree/f4351ba70263b622c24c6b79ff57ecef2916f0b6/webcodecs
// and assertions added.

//////////////////////////////////////////////////
// utils.js

const audioBuffer = new AudioBuffer({
    length: 1,
    sampleRate: 44100,
});

const audioFrame = new AudioFrame({
    timestamp: 100,
    buffer: audioBuffer,
});

const offscreenCanvas = new OffscreenCanvas(1, 1);

const imageBitmap = offscreenCanvas.transferToImageBitmap();

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

// $ExpectError
AudioDecoder.isConfigSupported();

// $ExpectError
AudioDecoder.isConfigSupported({
    sampleRate: 48000,
    numberOfChannels: 2,
});

// $ExpectError
AudioDecoder.isConfigSupported({
    codec: "opus",
    numberOfChannels: 2,
});

// $ExpectError
AudioDecoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
});

AudioDecoder.isConfigSupported(audioDecoderConfig).then((result: AudioDecoderSupport) => {
    // $ExpectType boolean
    result.supported;
    // $ExpectType AudioDecoderConfig
    result.config;
});

function audioOutput(output: AudioFrame): void {
    // $ExpectType AudioBuffer
    output.buffer;
}

// $ExpectError
new AudioDecoder({});

// $ExpectError
new AudioDecoder({
    output: audioOutput,
});

// $ExpectError
new AudioDecoder({
    error: errorCallback,
});

const audioDecoder = new AudioDecoder({
    output: audioOutput,
    error: errorCallback,
});

// $ExpectError
audioDecoder.configure();

// $ExpectError
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

// $ExpectError
AudioEncoder.isConfigSupported();

// $ExpectError
AudioEncoder.isConfigSupported({
    sampleRate: 48000,
    numberOfChannels: 2,
});

// $ExpectError
AudioEncoder.isConfigSupported({
    codec: "opus",
    numberOfChannels: 2,
});

// $ExpectError
AudioEncoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
});

AudioEncoder.isConfigSupported(audioEncoderConfig).then((result: AudioEncoderSupport) => {
    // $ExpectType boolean
    result.supported;
    // $ExpectType AudioEncoderConfig
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

function encodedAudioOutput(output: EncodedAudioChunk, metadata: EncodedAudioChunkMetadata): void {
    if (metadata.decoderConfig !== undefined) {
        audioDecoder.configure(metadata.decoderConfig);
    }
    audioDecoder.decode(output);
}

// $ExpectError
new AudioEncoder();

// $ExpectError
new AudioEncoder({
    output: encodedAudioOutput,
});

// $ExpectError
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

// $ExpectError
new AudioFrame({buffer: audioBuffer});

// $ExpectError
new AudioFrame({timestamp: 100});

// $ExpectType AudioFrame
new AudioFrame({buffer: audioBuffer, timestamp: 100});

// $ExpectType AudioFrame
audioFrame.clone();

//////////////////////////////////////////////////
// image-decoder-utils.js

const imageDecoderInit: ImageDecoderInit = { data: new Uint8Array(0), type: "image/jpeg" };

// $ExpectError
new ImageDecoder();

// $ExpectError
new ImageDecoder({ data: new Uint8Array(0) });

// $ExpectError
new ImageDecoder({ type: "image/jpeg" });

const imageDecoder = new ImageDecoder(imageDecoderInit);

imageDecoder.decode().then((result: ImageDecodeResult) => {
    const imageDecodeImage: VideoFrame = result.image;
    // $ExpectType number
    imageDecodeImage.displayWidth;
    // $ExpectType number
    imageDecodeImage.displayHeight;
    // $ExpectType string | null
    imageDecodeImage.format;

    const context2d = offscreenCanvas.getContext("2d");
    if (!context2d) throw new Error("missing context");
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
    visibleRegion: { left: 0, top: 0, width: 1920, height: 1080 },
    displayWidth: 1920,
    displayHeight: 1080,
    hardwareAcceleration: "require",
};

const videoDecoderConfig: VideoDecoderConfig = {
    codec: "avc1.64000c",
};

// $ExpectError
VideoDecoder.isConfigSupported();

// $ExpectError
VideoDecoder.isConfigSupported({ description: new Uint8Array(0) });

VideoDecoder.isConfigSupported(videoDecoderConfig).then((result: VideoDecoderSupport) => {
    // $ExpectType boolean
    result.supported;
    // $ExpectType VideoDecoderConfig
    result.config;
});

function videoOutput(output: VideoFrame): void {
    // $ExpectType number
    output.visibleRegion.width;
    // $ExpectType number
    output.visibleRegion.height;
    // $ExpectType number | null
    output.timestamp;
    // $ExpectType void
    output.close();
}

// $ExpectError
new VideoDecoder({});

// $ExpectError
new VideoDecoder({
    output: videoOutput,
});

// $ExpectError
new VideoDecoder({
    error: errorCallback,
});

const videoDecoder = new VideoDecoder({
    output: videoOutput,
    error: errorCallback,
});

// $ExpectError
videoDecoder.configure();

// $ExpectError
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
videoDecoder.decode(encodedVideoChunk);

// $ExpectType Promise<void>
videoDecoder.flush();

// $ExpectType number
videoDecoder.decodeQueueSize;

//////////////////////////////////////////////////
// video-encoder-config.any.js

const fullVideoEncoderConfig: VideoEncoderConfig = {
    codec: "avc1.42001E",
    hardwareAcceleration: "deny",
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

// $ExpectError
VideoEncoder.isConfigSupported();

// $ExpectError
VideoEncoder.isConfigSupported({
    width: 640,
    height: 480,
});

// $ExpectError
VideoEncoder.isConfigSupported({
    codec: "avc1.42001E",
    height: 480,
});

// $ExpectError
VideoEncoder.isConfigSupported({
    codec: "avc1.42001E",
    width: 640,
});

VideoEncoder.isConfigSupported(videoEncoderConfig).then((result: VideoEncoderSupport) => {
    // $ExpectType boolean
    result.supported;
    // $ExpectType VideoEncoderConfig
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

function encodedVideoOutput(output: EncodedVideoChunk, metadata: EncodedVideoChunkMetadata): void {
    if (metadata.decoderConfig !== undefined) {
        videoDecoder.configure(metadata.decoderConfig);
    }
    videoDecoder.decode(output);
    // $ExpectType number
    output.timestamp;
}

// $ExpectError
new VideoEncoder();

// $ExpectError
new VideoEncoder({
    output: encodedVideoOutput,
});

// $ExpectError
new VideoEncoder({
    error: errorCallback,
});

const videoEncoder = new VideoEncoder({
    output: encodedVideoOutput,
    error: errorCallback,
});

// $ExpectError
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

// $ExpectType number | null
videoFrame.timestamp;
// $ExpectType number | null
videoFrame.duration;
// $ExpectType number
videoFrame.visibleRegion.left;
// $ExpectType number
videoFrame.visibleRegion.top;
// $ExpectType number
videoFrame.visibleRegion.width;
// $ExpectType number
videoFrame.visibleRegion.height;
// $ExpectType number
videoFrame.displayWidth;
// $ExpectType number
videoFrame.displayHeight;
// $ExpectType string | null
videoFrame.format;

if (videoFrame.planes !== null) {
    // $ExpectType number
    videoFrame.planes.length;
    // $ExpectType number
    videoFrame.planes[0].stride;
    // $ExpectType number
    videoFrame.planes[0].rows;
    // $ExpectType number
    videoFrame.planes[0].length;

    // $ExpectType void
    videoFrame.planes[0].readInto(new Uint8Array(0));
}

// $ExpectError
new VideoFrame("ABCD", [], {
    codedWidth: 4,
    codedHeight: 2,
});

// $ExpectError
new VideoFrame("ABCD", [], {
    timestamp: 1234,
    codedHeight: 2,
});

// $ExpectError
new VideoFrame("ABCD", [], {
    timestamp: 1234,
    codedWidth: 4,
});

const videoFramePlaneInit: VideoFramePlaneInit = {
    timestamp: 1234,
    codedWidth: 4,
    codedHeight: 2,
};

new VideoFrame("ABCD", [], videoFramePlaneInit);

new VideoFrame("ABCD", [{ src: new Uint8Array(0), stride: 4 }], videoFramePlaneInit);

new VideoFrame("ABCD", [], {
    timestamp: 1234,
    duration: 4321,
    codedWidth: 4,
    codedHeight: 2,
    visibleRegion: { left: 0, top: 0, width: 4, height: 2 },
    displayWidth: 4,
    displayHeight: 2,
});

new VideoFrame(videoFrame);

new VideoFrame(videoFrame, { duration: 1234 });

new VideoFrame(videoFrame, { timestamp: 1234, duration: 1234 });

new VideoFrame(offscreenCanvas);

new VideoFrame(videoFrame, { alpha: "keep" });

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

const gl = offscreenCanvas.getContext("webgl");
if (!gl) throw new Error("missing context");
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoFrame);
gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, videoFrame);
