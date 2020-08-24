import ffmpeg from 'ffmpeg';

new ffmpeg('./test/mymovie.avi')
    .then((video) => {
        video.setVideoAspectRatio('16:9');
    });

/// save
(async () => {
    const video = await new ffmpeg('./test/mymovie.avi');
    try {
        const file = await video.save('./test/otherVideo.avi');
        file; // $ExpectType string
    } catch (error) {
        // no-opt
    }
})();
