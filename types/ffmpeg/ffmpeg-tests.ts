import ffmpeg from 'ffmpeg';

new ffmpeg('./test/mymovie.avi')
    .then((video) => {
        video.setVideoAspectRatio('16:9');
    });
