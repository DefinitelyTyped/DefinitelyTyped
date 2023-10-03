import OvenPlayer, { OvenPlayerQuality } from "ovenplayer";

const playerContainer1 = document.createElement("div");
playerContainer1.id = "player1";
document.body.appendChild(playerContainer1);

// test interface OvenPlayer, interface OvenPlayerConfig,
// interface OvenPlayerWebRTCStream and interface OvenPlayerSource

// debug(debug: boolean): boolean;
const debug: boolean = OvenPlayer.debug(true);

// generateWebrtcUrls(sources: OvenPlayerWebRTCStream | OvenPlayerWebRTCStream[]): OvenPlayerSource[];
const webrtcSources1 = OvenPlayer.generateWebrtcUrls({
    host: "ws://host:port",
    application: "app",
    stream: "stream_1080",
    label: "WebRTC 1080P",
});

const webrtcSources2 = OvenPlayer.generateWebrtcUrls([
    {
        host: "ws://host:port",
        application: "app",
        stream: "stream_1080",
        label: "WebRTC 1080P",
    },
]);

// create(container: string, config: OvenPlayerConfig): OvenPlayerInstance;
const player = OvenPlayer.create("player1", {
    mute: true,
    playbackRates: [1, 2, 3, 3],
    waterMark: {
        image: "/path/to/watermark/image.png",
        position: "top-left",
        y: "20px",
        x: "20px",
        width: "40px",
        height: "30px",
        opacity: 0.7,
    },
    autoStart: true,
    autoFallback: true,
    controls: true,
    loop: true,
    showBigPlayButton: true,
    disableSeekUI: true,
    showSeekControl: true,
    seekControlInterval: 10,
    expandFullScreenUI: true,
    timecode: true,
    playbackRate: 1,
    currentProtocolOnly: false,
    tracks: [],
    volume: 100,
    adTagUrl: "<url>",
    adClient: "googleima",
    hidePlaylistIcon: true,
    sources: webrtcSources1,
    webrtcConfig: {
        timeoutMaxRetry: 0,
        connectionTimeout: 10000,
        playoutDelayHint: 0,
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302"],
            },
        ],
    },
});

// getPlayerByContainerId(containerId: string): OvenPlayerInstance | null;
const playerInstance1 = OvenPlayer.getPlayerByContainerId("player");

// getPlayerByIndex(index: number): OvenPlayerInstance | null;
const playerInstance2 = OvenPlayer.getPlayerByIndex(0);

// getPlayerList(): OvenPlayerInstance[];
OvenPlayer.getPlayerList();

// test interface OvenPlayerInstance

// getVersion(): string;
const version: string = player.getVersion();

// getConfig(): OvenPlayerConfig;
const config = player.getConfig();

// getContainerElement(): HTMLDivElement;
const containerElement: HTMLDivElement = player.getContainerElement();

// getContainerId(): string;
const containerId: string = player.getContainerId();

// getMseInstance(): object | null;
const mseInstance: object | null = player.getMseInstance();

// getProviderName(): string | null;
const providerName: string | null = player.getProviderName();

// load(sources: OvenPlayerSource[] | OvenPlayerPlayList): void;
player.load([
    {
        type: "webrtc",
        file: "file",
        label: "myLabel",
    },
    {
        type: "webrtc",
        file: "file",
    },
]);

player.load([
    {
        title: "01",
        adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?...",
        image: "https://path.to/your_video_thumbnail.jpeg",
        duration: 7343,
        sources: [{
            type: "mp4",
            file: "https://path.to/your_video",
            label: "360P",
        }],
        tracks: [{
            kind: "captions",
            file: "https://path.to/your_caption.vtt",
            label: "KO vtt",
        }],
    },
    {
        title: "02",
        adTagUrl: "https://pubads.g.doubleclick.net/gampad/ads?...",
        image: "https://path.to/your_video_thumbnail2.jpeg",
        duration: 8333,
        sources: [
            {
                type: "mp4",
                file: "https://path.to/your_video2",
                label: "360P",
            },
            {
                type: "hls",
                file: "https://path.to/your_video.m3u8",
                label: "360P DASH",
            },
        ],
        tracks: [{
            kind: "captions",
            file: "https://path.to/your_caption2.vtt",
            label: "KO vtt",
        }],
    },
]);

const quality: OvenPlayerQuality = {
    bitrate: "4000",
    height: 320,
    width: 320,
    index: 1,
    label: "320p",
};

// getMediaElement(): HTMLVideoElement;
const videoElement: HTMLVideoElement = player.getMediaElement();

// on(evnetName: 'ready', callback: (eventData: OvenPlayerEvents['ready']) => void): void;
player.on("ready", () => {});

// once (evnetName: 'stateChanged', callback: (eventData: OvenPlayerEvents['stateChanged']) => void): void;
player.once("stateChanged", data => {});

// off(eventName: keyof OvenPlayerEvents): void;
player.off("ready");

// remove(): void;
player.remove();

// @ts-expect-error: it's deprecated method, should throw error for newest users.
player.setCaption({
    // you can use player.setCaption?.()
    file: "https://youtu.be/dQw4w9WgXcQ",
    kind: "caption",
    label: "label",
});

player.addCaption({
    file: "https://youtu.be/dQw4w9WgXcQ",
    kind: "caption",
    label: "label",
});

// removePlayer(player: OvenPlayerInstance): void;
OvenPlayer.removePlayer(player);
