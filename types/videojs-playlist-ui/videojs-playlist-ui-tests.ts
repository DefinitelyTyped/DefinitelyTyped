import videojs from 'video.js';
import 'videojs-playlist-ui';

declare const video: HTMLVideoElement;

videojs(video).playlistUi();
videojs(video).playlistUi({});
videojs(video).playlistUi({
    className: 'vjs-playlist',
    playOnSelect: true,
    children: undefined,
    createEl: undefined,
    el: video,
});
