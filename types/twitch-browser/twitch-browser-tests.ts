// $ExpectType Player
new Twitch.Player("id", {
    width: 100,
    height: 100,
    parent: ["yourUrl.com"],
});
// $ExpectType Player
new Twitch.Player("id", {
    width: "100%",
    height: "100%",
    video: "videoId",
    parent: ["yourUrl.com"],
});
// @ts-expect-error
new Twitch.Player("id", {
    width: "100%",
    height: "100%",
});
// $ExpectType Player
new Twitch.Player("id", {
    width: "100%",
    height: "100%",
    video: "videoId",
    parent: ["yourUrl.com"],
    autoplay: true,
    muted: true,
    time: "1h1m1s",
});
// $ExpectType Player
new Twitch.Player("id", {
    width: "100%",
    height: "100%",
    collection: "videoId",
    parent: ["yourUrl.com"],
    autoplay: true,
    muted: true,
    time: "1h1m1s",
});
// $ExpectType Player
new Twitch.Player("id", {
    width: "100%",
    height: "100%",
    channel: "videoId",
    parent: ["yourUrl.com"],
    autoplay: true,
    muted: true,
    time: "1h1m1s",
});
// $ExpectType Player
const player = new Twitch.Player("id", {
    width: "100%",
    height: "100%",
    channel: "videoId",
    parent: ["yourUrl.com"],
    autoplay: true,
    muted: true,
    time: "1h1m1s",
});
// $ExpectType void
player.addEventListener(Twitch.Player.READY, () => {});
// $ExpectType void
player.addEventListener(Twitch.Player.CAPTIONS, () => {});
// $ExpectType void
player.addEventListener(Twitch.Player.ENDED, () => {});
// $ExpectType void
player.addEventListener(Twitch.Player.PLAY, () => {});
// $ExpectType void
player.addEventListener(Twitch.Player.PLAYBACK_BLOCKED, () => {});
// $ExpectType void
player.addEventListener(Twitch.Player.VIDEO_PAUSE, () => {});
// $ExpectType void
player.addEventListener(Twitch.Player.VIDEO_READY, () => {});

// $ExpectType string
player.getChannel();
// $ExpectType void
player.pause();
// $ExpectType void
player.play();
// $ExpectType void
player.setMuted(true);
// @ts-expect-error
player.setMuted();
// $ExpectType void
player.setMuted(false);
// $ExpectType void
player.disableCaptions();
// $ExpectType void
player.enableCaptions();
// $ExpectType number
player.getCurrentTime();
// $ExpectType number
player.getDuration();
// $ExpectType boolean
player.getEnded();
// $ExpectType boolean
player.getMuted();
player.getPlaybackStats();
// $ExpectType string[]
player.getQualities();
// $ExpectType string
player.getQuality();
// $ExpectType string
player.getVideo();
// $ExpectType number
player.getVolume();
// $ExpectType boolean
player.isPaused();
// $ExpectType void
player.seek(1.0);
// $ExpectType void
player.setChannel("channel");
// $ExpectType void
player.setCollection("collection", "video");
// @ts-expect-error
player.setCollection("collection");
// $ExpectType void
player.setQuality("");
// $ExpectType void
player.setVideo("new video", 200);
// @ts-expect-error
player.setVideo("new video", "1h1m1s");
// $ExpectType void
player.setVolume(50);
// @ts-expect-error
player.setVolume("50%");

// $ExpectType string
Twitch.Player.VIDEO_READY;
// $ExpectType string
Twitch.Player.VIDEO_PLAY;
// $ExpectType string
Twitch.Player.VIDEO_PAUSE;
// $ExpectType string
Twitch.Player.CAPTIONS;
// $ExpectType string
Twitch.Player.ENDED;
// $ExpectType string
Twitch.Player.ERROR;
// $ExpectType string
Twitch.Player.ONLINE;
// $ExpectType string
Twitch.Player.OFFLINE;
// $ExpectType string
Twitch.Player.PAUSE;
// $ExpectType string
Twitch.Player.PLAY;
// $ExpectType string
Twitch.Player.PLAYBACK_BLOCKED;
// $ExpectType string
Twitch.Player.PLAYING;
// $ExpectType string
Twitch.Player.READY;
// $ExpectType string
Twitch.Player.SEEK;
