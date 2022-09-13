import videojs from 'video.js';
import 'videojs-mobile-ui';

const player = videojs('my-video');

player.mobileUi();
player.mobileUi({
    fullscreen: {
        enterOnRotate: true,
        exitOnRotate: true,
        lockOnRotate: true,
    },
    touchControls: {
        seekSeconds: 10,
        tapTimeout: 300,
        disableOnEnd: false,
    },
});
