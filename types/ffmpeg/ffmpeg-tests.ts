import ffmpeg from "ffmpeg";

new ffmpeg("./test/mymovie.avi")
    .then((video) => {
        video.setVideoAspectRatio("16:9");
    });

/// save
(async () => {
    const video = await new ffmpeg("./test/mymovie.avi");
    try {
        const file = await video.save("./test/otherVideo.avi");
        file; // $ExpectType string
    } catch (error) {
        // no-opt
    }
})();

/// setAudioBitRate
(async () => {
    const video = await new ffmpeg("./test/mymovie.avi");
    try {
        video.addCommand("-f", "avi"); // $ExpectType void
        video.addFilterComplex(""); // $ExpectType void
        video.addInput(""); // $ExpectType void
        video.fnAddWatermark(""); // $ExpectType Promise<string>
        video.fnAddWatermark("", "", undefined, () => {}); // $ExpectType void
        video.fnExtractFrameToJPG("", undefined); // $ExpectType Promise<string[]>
        video.fnExtractFrameToJPG("", undefined, () => {}); // $ExpectType void
        video.fnExtractSoundToMP3(""); // $ExpectType Promise<string>
        video.fnExtractSoundToMP3("", () => {}); // $ExpectType void
        video.save(""); // $ExpectType Promise<string>
        video.save("", () => {}); // $ExpectType void
        video.setAudioBitRate(128); // $ExpectType Video
        video.setAudioChannels(2); // $ExpectType Video
        video.setAudioCodec("libfaac"); // $ExpectType Video
        video.setAudioFrequency(48); // $ExpectType Video
        video.setAudioQuality(128); // $ExpectType Video
        video.setDisableAudio(); // $ExpectType Video
        video.setDisableVideo(); // $ExpectType Video
        video.setOutput(""); // $ExpectType void
        video.setVideoAspectRatio(1.77); // $ExpectType Video
        video.setVideoAspectRatio("16:9"); // $ExpectType Video
        video.setVideoBitRate(1024); // $ExpectType Video
        video.setVideoCodec("mpeg4"); // $ExpectType Video
        video.setVideoDuration(100); // $ExpectType Video
        video.setVideoDuration("00:01:40"); // $ExpectType Video
        video.setVideoFormat("avi"); // $ExpectType Video
        video.setVideoFrameRate(25); // $ExpectType Video
        video.setVideoSize("640x480", true, true, "#fff"); // $ExpectType Video
        video.setVideoSize("50%", true, true, "#fff"); // $ExpectType Video
        video.setVideoSize("?x480", true, true); // $ExpectType Video
        video.setVideoSize("640x?", true, true); // $ExpectType Video
        video.setVideoStartTime(13); // $ExpectType Video
        video.setVideoStartTime("00:00:13"); // $ExpectType Video
        video.setWatermark(""); // $ExpectType Video
    } catch (error) {
        // no-opt
    }
})();
