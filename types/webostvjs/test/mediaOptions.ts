import { MediaOptions } from 'webostvjs';

const mediaOptions: MediaOptions = {
    mediaTransportType: 'WIDEVINE',
    option: {
        mediaFormat: {
            type: 'audio',
        },
        drm: {
            clientId: '111',
            type: 'widevine',
            widevine: {
                seperatedStream: true,
            },
        },
        adaptiveStreaming: {
            seamlessPlay: true,
            maxWidth: 1000,
            maxHeight: 800,
            bps: {
                start: 100000,
                minimum: 0,
                maximum: 1e10,
            },
        },
    },
};

console.log(mediaOptions);
