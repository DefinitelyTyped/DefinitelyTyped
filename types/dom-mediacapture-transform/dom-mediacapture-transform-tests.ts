// Allow await in the code below.
declare const imageBitmap: ImageBitmap;
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
    // Based on https://github.com/web-platform-tests/wpt/tree/7463f07229f3cf71797d742c0f7bf6e161b7ae03/mediacapture-insertable-streams with assertions added.

    // MediaStreamTrackGenerator-audio.https.html

    const sampleRate = 30000;

    const frames = sampleRate / 10;
    const channels = 1;

    // Generate a simple sin wave, so we have something.
    const data = new Float32Array(frames * channels);
    const hz = 100; // sound frequency
    for (let i = 0; i < data.length; i++) {
        const t = (i / sampleRate) * hz * (Math.PI * 2);
        data[i] = Math.sin(t);
    }

    const audioData = new AudioData({
        timestamp: 1,
        numberOfFrames: frames,
        numberOfChannels: channels,
        sampleRate,
        data,
        format: "f32",
    });

    {
        const generator = new MediaStreamTrackGenerator({ kind: "audio" });

        // $ExpectType WritableStreamDefaultWriter<AudioData>
        const writer = generator.writable.getWriter();
        // $ExpectType void
        await writer.write(audioData);

        // $ExpectType "audio"
        generator.kind;

        // $ExpectType MediaStreamTrackState
        generator.readyState;

        // $ExpectType void
        generator.stop();
    }

    {
        const capturedStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const upstreamTrack = capturedStream.getAudioTracks()[0];

        const generator = new MediaStreamTrackGenerator({ signalTarget: upstreamTrack, kind: "audio" });

        // $ExpectType "audio"
        generator.kind;

        // @ts-expect-error
        new MediaStreamTrackGenerator({ kind: "invalid kind" });
    }

    {
        const generator = new MediaStreamTrackGenerator({ kind: "video" });
        generator.stop();

        const writer3 = generator.writable.getWriter();
        const data = audioData;
        // @ts-expect-error
        writer3.write(data);
    }

    {
        const generator = new MediaStreamTrackGenerator({ kind: "audio" });

        new MediaStream([generator]);
    }

    // MediaStreamTrackGenerator-video.https.html

    const videoFrame = new VideoFrame(imageBitmap, { timestamp: 1, alpha: 'discard' });

    {
        const generator = new MediaStreamTrackGenerator({ kind: 'video' });

        // Use a MediaStreamTrackProcessor as a sink for |generator| to verify
        // that |processor| actually forwards the frames written to its writable
        // field.
        const processor = new MediaStreamTrackProcessor({ track: generator });

        // $ExpectType ReadableStreamDefaultReader<VideoFrame>
        const reader = processor.readable.getReader();

        const result = await reader.read();
        if (!result.done) {
            // $ExpectType VideoFrame
            result.value;
        }

        generator.writable.getWriter().write(videoFrame);
    }

    {
        const generator = new MediaStreamTrackGenerator({ kind: 'video' });

        new MediaStream([generator]);
    }

    {
        const generator = new MediaStreamTrackGenerator({ kind: 'video' });

        // $ExpectType WritableStreamDefaultWriter<VideoFrame>
        const writer = generator.writable.getWriter();
        // $ExpectType void
        await writer.write(videoFrame);
    }

    {
        const generator = new MediaStreamTrackGenerator({ kind: "video" });

        // $ExpectType "video"
        generator.kind;

        // $ExpectType MediaStreamTrackState
        generator.readyState;

        // $ExpectType void
        generator.stop();
    }

    {
        const generator = new MediaStreamTrackGenerator({ kind: "audio" });

        const writer = generator.writable.getWriter();
        // @ts-expect-error
        writer.write(videoFrame);
    }

    // MediaStreamTrackProcessor-audio.https.html

    {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const track = stream.getTracks()[0] as MediaStreamAudioTrack;
        const processor = new MediaStreamTrackProcessor({ track });

        // $ExpectType ReadableStreamDefaultReader<AudioData>
        const reader = processor.readable.getReader();
    }
}
