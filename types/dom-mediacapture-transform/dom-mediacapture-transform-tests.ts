// Allow await in the code below.
async function topLevel() {
    ////////////////////////////////////////////////////////////////////////////////
    // Based on the example from the spec: https://w3c.github.io/mediacapture-transform/#examples

    // Dummy definitions for functions used below.
    async function detectFace(videoFrame: VideoFrame): Promise<number[]> {
        return [];
    }
    function blurBackground(videoFrame: VideoFrame, facePosition: number[]): VideoFrame {
        return videoFrame;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoTrack = stream.getVideoTracks()[0];
    const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
    const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });
    const transformer = new TransformStream({
        async transform(videoFrame, controller) {
            const facePosition = await detectFace(videoFrame);
            const newFrame = blurBackground(videoFrame, facePosition);
            videoFrame.close();
            controller.enqueue(newFrame);
        },
    });

    // After this, trackGenerator can be assigned to any sink such as a
    // peer connection, or media element.
    trackProcessor.readable.pipeThrough(transformer).pipeTo(trackGenerator.writable);

    // Forward Web-exposed signals to the original videoTrack.
    trackGenerator.readableControl.pipeTo(trackProcessor.writableControl);

    ////////////////////////////////////////////////////////////////////////////////
    // Based on https://github.com/web-platform-tests/wpt/tree/5366cbd0021528a3415af60a585a45aa8a52a210/mediacapture-insertable-streams with assertions added.

    // MediaStreamTrackGenerator-audio.https.html

    const audioBuffer = new AudioBuffer({
        length: 300,
        sampleRate: 3000,
    });

    const audioFrame = new AudioFrame({
        timestamp: 1,
        buffer: audioBuffer,
    });

    const generator1 = new MediaStreamTrackGenerator({ kind: "audio" });

    // $ExpectType WritableStreamDefaultWriter<AudioFrame>
    const writer1 = generator1.writable.getWriter();
    // $ExpectType void
    await writer1.write(audioFrame);

    // $ExpectType "audio"
    generator1.kind;

    // $ExpectType MediaStreamTrackState
    generator1.readyState;

    // $ExpectType void
    generator1.stop();

    const audioCaptureStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioCaptureTrack = audioCaptureStream.getAudioTracks()[0];

    const generator2 = new MediaStreamTrackGenerator({ signalTarget: audioCaptureTrack, kind: "audio" });

    // $ExpectType "audio"
    generator2.kind;

    // $ExpectError
    new MediaStreamTrackGenerator({ kind: "invalid kind" });

    // $ExpectError
    new MediaStreamTrackGenerator({ signalTarget: audioCaptureTrack });

    // $ExpectError
    new MediaStreamTrackGenerator({ signalTarget: audioCaptureTrack, kind: "video" });

    // $ExpectError
    new MediaStreamTrackGenerator({ signalTarget: "IamNotATrack" });

    const generator3 = new MediaStreamTrackGenerator({ kind: "video" });
    const writer3 = generator3.writable.getWriter();

    // $ExpectError
    writer3.write(audioFrame);

    new MediaStream([generator1]);

    // MediaStreamTrackGenerator-video.https.html

    const offscreenCanvas = new OffscreenCanvas(1, 1);
    const imageBitmap = offscreenCanvas.transferToImageBitmap();
    const videoFrame = new VideoFrame(imageBitmap, { timestamp: 1 });

    const videoCaptureStream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoCaptureTrack = videoCaptureStream.getVideoTracks()[0];

    const videoTrackProcessor = new MediaStreamTrackProcessor({ track: videoCaptureTrack });

    // $ExpectType ReadableStreamDefaultReader<VideoFrame>
    const reader = videoTrackProcessor.readable.getReader();

    const readResult = await reader.read();
    if (!readResult.done) {
        // $ExpectType VideoFrame
        readResult.value;
    }

    const generator4 = new MediaStreamTrackGenerator({ kind: "video" });

    const processor4 = new MediaStreamTrackProcessor({ track: generator4 });

    // $ExpectType ReadableStreamDefaultReader<VideoFrame>
    processor4.readable.getReader();

    // $ExpectType WritableStreamDefaultWriter<VideoFrame>
    const writer4 = generator4.writable.getWriter();
    // $ExpectType void
    await writer4.write(videoFrame);

    new MediaStream([generator4]);

    // $ExpectType "video"
    generator4.kind;

    // $ExpectType MediaStreamTrackState
    generator4.readyState;

    // $ExpectType void
    generator4.stop();

    const generator5 = new MediaStreamTrackGenerator({ signalTarget: videoCaptureTrack, kind: "video" });

    // $ExpectType "video"
    generator5.kind;

    // $ExpectError
    writer1.write(videoFrame);

    // MediaStreamTrackProcessor-audio.https.html

    const audioTrackProcessor = new MediaStreamTrackProcessor({ track: audioCaptureTrack });

    // $ExpectType ReadableStream<AudioFrame>
    audioTrackProcessor.readable;
}
