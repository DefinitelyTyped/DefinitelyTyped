import YoutubePlayer = require("yt-player");

new YoutubePlayer("#player", {});

new YoutubePlayer("#player", {
    width: 640, height: 480, autoplay: true, fullscreen: true
});

new YoutubePlayer("#player", {
    captions: "en_US"
});

new YoutubePlayer("#player", {
    captions: false
});

const player = new YoutubePlayer("#player");

player.load("abcdef");
player.load("abcdef", true);

player.play();
player.pause();
player.stop();
player.seek(42);

player.setVolume(67);
player.getVolume();

player.mute();
player.unMute();
player.isMuted();

player.setSize(800, 600);

player.getPlaybackRate();
player.getAvailablePlaybackRates();
player.setPlaybackRate(2);

player.setPlaybackQuality("medium");

player.getDuration();
player.getProgress();
player.getState();
player.getCurrentTime();

player.destroy();

player.destroyed;
player.videoId;

player.on("timeupdate", (sec: number) => {});
player.on("playbackRateChange", (rate: number) => {});
player.on("playbackQualityChange", (quality) => {});

player.on("buffering", () => {});
player.on("unstarted", () => {});
player.on("ended", () => {});
player.on("cued", () => {});
player.on("playing", () => {});
player.on("paused", () => {});

player.on("error", (err: Error) => {});
player.on("unplayable", (videoId: string) => {});
