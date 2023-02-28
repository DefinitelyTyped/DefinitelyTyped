import OvenPlayer = require('ovenplayer');

const playerContainer1 = document.createElement('div');
playerContainer1.id = 'player1';
document.body.appendChild(playerContainer1);

const playerContainer2 = document.createElement('div');
playerContainer2.id = 'player2';
document.body.appendChild(playerContainer2);

// test interface OvenPlayer, interface OvenPlayerConfig,
// interface OvenPlayerWebRTCStream and interface OvenPlayerSource

// debug(debug: boolean): boolean;
const debug: boolean = OvenPlayer.debug(true);

// generateWebrtcUrls(sources: OvenPlayerWebRTCStream | OvenPlayerWebRTCStream[]): OvenPlayerSource[];
const webrtcSources1 = OvenPlayer.generateWebrtcUrls({
    host: 'ws://host:port',
    application: 'app',
    stream: 'stream_1080',
    label: 'WebRTC 1080P'
});

const webrtcSources2 = OvenPlayer.generateWebrtcUrls([{
    host: 'ws://host:port',
    application: 'app',
    stream: 'stream_1080',
    label: 'WebRTC 1080P'
}]);

// create(container: string | HTMLDivElement, config: OvenPlayerConfig): OvenPlayerInstance;
const player = OvenPlayer.create('player1', {
    mute: true,
    playbackRates: [1, 2, 3, 3],
    waterMark: {
        image: '/path/to/watermark/image.png',
        position: 'top-left',
        y: '20px',
        x: '20px',
        width: '40px',
        height: '30px',
        opacity: 0.7
    },
    sources: webrtcSources1,
    webrtcConfig: {
        a: 1,
        b: 2
    }
});

const player2 = OvenPlayer.create(playerContainer2, {});

// getPlayerByContainerId(containerId: string): OvenPlayerInstance | null;
const playerInstance1 = OvenPlayer.getPlayerByContainerId('player');

// getPlayerByIndex(index: number): OvenPlayerInstance | null;
const playerInstance2 = OvenPlayer.getPlayerByIndex(0);

// getPlayerList(): OvenPlayerInstance[];
OvenPlayer.getPlayerList();

// removePlayer(player: OvenPlayerInstance): void;
OvenPlayer.removePlayer(player2);

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
        type: 'webrtc',
        file: 'file',
        label: 'myLabel'
    },
    {
        type: 'webrtc',
        file: 'file'
    }
]);

player.load([
    [
        {
            type: 'webrtc',
            file: 'file'
        },
        {
            type: 'webrtc',
            file: 'file'
        }
    ],
    [
        {
            type: 'webrtc',
            file: 'file'
        },
        {
            type: 'webrtc',
            file: 'file'
        }
    ]
]);

// getMediaElement(): HTMLVideoElement;
const videoElement: HTMLVideoElement = player.getMediaElement();

// on(eventName: string, callback: OvenPlayerCallbackFunction): void;
player.on('ready', (data, data2) => {
});

// once(eventName: string, callback: OvenPlayerCallbackFunction): void;
player.once('play', (data) => {
});

// off(eventName: string): void;
player.off('ready');

// remove(): void;
player.remove();
