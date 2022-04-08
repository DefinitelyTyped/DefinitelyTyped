const players: YT.Player[] = [
    new YT.Player(document.body, {}),
    new YT.Player(document.body, {
        width: 100,
        height: 100,
    }),
    new YT.Player("id", {
        width: "100%",
        height: "100%",
        videoId: "videoId",
        playerVars: {},
        events: {},
        host: 'https://www.youtube.com',
    }),
    new YT.Player("id", {
        playerVars: {
            autohide: YT.AutoHide.AlwaysVisible,
            autoplay: YT.AutoPlay.AutoPlay,
            cc_load_policy: YT.ClosedCaptionsLoadPolicy.ForceOn,
            color: "red",
            controls: YT.Controls.Hide,
            disablekb: YT.KeyboardControls.Disable,
            enablejsapi: YT.JsApi.Disable,
            end: 9001,
            fs: YT.FullscreenButton.Hide,
            hl: "en-us",
            iv_load_policy: YT.IvLoadPolicy.Hide,
            list: "my query",
            listType: "search",
            loop: YT.Loop.Loop,
            modestbranding: YT.ModestBranding.Full,
            origin: "localhost",
            playlist: "1,2",
            playsinline: YT.PlaysInline.Fullscreen,
            rel: YT.RelatedVideos.Hide,
            showinfo: YT.ShowInfo.Hide,
            start: 0,
        },
    }),
    new YT.Player("id", {
        events: {
            onReady(event: YT.PlayerEvent) {
                const targetPlayer: YT.Player = event.target;
            },
            onStateChange(event: YT.OnStateChangeEvent) {
                const targetPlayer: YT.Player = event.target;
                const playerData: YT.PlayerState = event.data;
            },
            onPlaybackQualityChange(event: YT.OnPlaybackQualityChangeEvent) {
                const targetPlayer: YT.Player = event.target;
                const newQuality: string = event.data;
            },
            onPlaybackRateChange(event: YT.OnPlaybackRateChangeEvent) {
                const targetPlayer: YT.Player = event.target;
                const newRate: number = event.data;
            },
            onError(event: YT.OnErrorEvent) {
                const targetPlayer: YT.Player = event.target;
                const error: YT.PlayerError = event.data;
            },
            onApiChange(event: YT.PlayerEvent) {
                const targetPlayer: YT.Player = event.target;
            },
        }
    }),
];

const ensureNumeric = <TValue extends number>() => {};

ensureNumeric<YT.PlayerState>();
ensureNumeric<YT.PlayerError>();
ensureNumeric<YT.AutoHide>();
ensureNumeric<YT.AutoPlay>();
ensureNumeric<YT.ClosedCaptionsLoadPolicy>();
ensureNumeric<YT.Controls>();
ensureNumeric<YT.KeyboardControls>();
ensureNumeric<YT.JsApi>();
ensureNumeric<YT.FullscreenButton>();
ensureNumeric<YT.IvLoadPolicy>();
ensureNumeric<YT.Loop>();
ensureNumeric<YT.ModestBranding>();
ensureNumeric<YT.PlaysInline>();
ensureNumeric<YT.RelatedVideos>();
ensureNumeric<YT.ShowInfo>();

const ensureString = <TValue extends string>() => {}

ensureString<YT.ProgressBarColor>();
ensureString<YT.ListType>();
ensureString<YT.ListTypePlayer>();
ensureString<YT.ListTypeSearch>();
ensureString<YT.ListTypeUserUploads>();
ensureString<YT.SuggestedVideoQuality>();

const player = new YT.Player("", {});

player.cueVideoById("id");
player.cueVideoById("id", 0);
player.cueVideoById("id", 9001, "default");
player.cueVideoById("id", 9001, "small");

player.cueVideoById({
    videoId: "id",
});

player.cueVideoById({
    startSeconds: 0,
    endSeconds: 9001,
    suggestedQuality: "highres",
    videoId: "id",
});

player.loadVideoById("id");
player.loadVideoById("id", 0);
player.loadVideoById("id", 0, "medium");
player.loadVideoById("id", 0, "large");

player.loadVideoById({
    videoId: "id",
});

player.loadVideoById({
    endSeconds: 9001,
    startSeconds: 0,
    suggestedQuality: "hd720",
    videoId: "id",
});

player.cueVideoByUrl("url");
player.cueVideoByUrl("url", 0);
player.cueVideoByUrl("url", 0, "hd1080");
player.cueVideoByUrl("url", 0, "highres");

player.cueVideoByUrl({
    mediaContentUrl: "url",
});

player.cueVideoByUrl({
    endSeconds: 9001,
    mediaContentUrl: "url",
    startSeconds: 0,
    suggestedQuality: "hd720",
});

player.loadVideoByUrl("url");
player.loadVideoByUrl("url", 0);
player.loadVideoByUrl("url", 0, "hd1080");
player.loadVideoByUrl("url", 0, "highres");

player.loadVideoByUrl({
    mediaContentUrl: "url",
});

player.loadVideoByUrl({
    endSeconds: 9001,
    mediaContentUrl: "url",
    startSeconds: 0,
    suggestedQuality: "hd720",
});

player.cuePlaylist(["play", "list"]);
player.cuePlaylist(["play", "list"], 7);
player.cuePlaylist(["play", "list"], 7, 0);
player.cuePlaylist(["play", "list"], 7, 0, "default");

player.cuePlaylist({
    list: "playlist",
    listType: "player",
});

player.cuePlaylist({
    index: 7,
    list: "playlist",
    listType: "search",
});

player.cuePlaylist({
    endSeconds: 9001,
    index: 7,
    list: "playlist",
    listType: "search",
    startSeconds: 0,
    suggestedQuality: "hd720",
});

player.loadPlaylist(["play", "list"]);
player.loadPlaylist(["play", "list"], 7);
player.loadPlaylist(["play", "list"], 7, 0);
player.loadPlaylist(["play", "list"], 7, 0, "default");

player.loadPlaylist({
    list: "playlist",
    listType: "player",
});

player.loadPlaylist({
    index: 7,
    listType: "search",
    list: "playlist",
});

player.loadPlaylist({
    endSeconds: 9001,
    index: 7,
    listType: "search",
    list: "playlist",
    startSeconds: 0,
    suggestedQuality: "hd720",
});

player.playVideo();

player.pauseVideo();

player.stopVideo();

player.seekTo(9001, true);

player.nextVideo();

player.previousVideo();

player.playVideoAt(0);

player.mute();

player.unMute();

const muted: boolean = player.isMuted();

player.setVolume(49);

const volume: number = player.getVolume();

player.setSize(350, 490);

const playbackRate: number = player.getPlaybackRate();

player.setPlaybackRate(2);

const playbackRates: number[] = player.getAvailablePlaybackRates();

player.setLoop(true);

player.setShuffle(false);

const fraction: number = player.getVideoLoadedFraction();

const state: YT.PlayerState = player.getPlayerState();

const time: number = player.getCurrentTime();

const quality: YT.SuggestedVideoQuality = player.getPlaybackQuality();

player.setPlaybackQuality(quality);
player.setPlaybackQuality("medium");

const qualities: YT.SuggestedVideoQuality[] = player.getAvailableQualityLevels();

for (const quality of player.getAvailableQualityLevels()) {
    player.setPlaybackQuality(quality)
}

const duration: number = player.getDuration();

const videoUrl: string = player.getVideoUrl();

const videoEmbed: string = player.getVideoEmbedCode();

const playlist: string[] = player.getPlaylist();

const playlistIndex: number = player.getPlaylistIndex();

player.addEventListener("onReady", (event: YT.PlayerEvent) => {});
player.addEventListener("onStateChange", (event: YT.OnStateChangeEvent) => {});
player.addEventListener("onPlaybackQualityChange", (event: YT.OnPlaybackQualityChangeEvent) => {});
player.addEventListener("onPlaybackRateChange", (event: YT.OnPlaybackRateChangeEvent) => {});
player.addEventListener("onError", (event: YT.OnErrorEvent) => {});
player.addEventListener("onApiChange", (event: YT.PlayerEvent) => {});

const frame: HTMLIFrameElement = player.getIframe();

const sphericalProperties: YT.SphericalProperties = player.getSphericalProperties();
player.setSphericalProperties({yaw: 1, pitch: 2, roll: 3, fov: 50, enableOrientationSensor: true});

player.destroy();
