import * as Hls from 'hls.js';

// How to write DTS tests: https://github.com/Microsoft/dtslint#write-tests
const mockHTMLVideoElement: HTMLVideoElement = {}; // $ExpectError
const mockHTMLAudioElement: HTMLAudioElement = {}; // $ExpectError
const emptyObj = {};

const hls = new Hls();
hls.attachMedia(mockHTMLVideoElement);
hls.attachMedia(mockHTMLAudioElement);
hls.attachMedia(emptyObj); // $ExpectError

hls.on(Hls.Events.MEDIA_ATTACHING, (event: typeof Hls.Events.MEDIA_ATTACHING, data: Hls.mediaAttachingData) => {
    const mediaElement: HTMLMediaElement = data.media;
    // HTMLAudioElement matches HTMLMediaElement
    const audioElement: HTMLAudioElement = data.media;

    let videoElement: HTMLVideoElement = data.media; // $ExpectError
    if (data instanceof HTMLVideoElement) {
        videoElement = data.media as HTMLVideoElement;
    }
});
hls.on(Hls.Events.MEDIA_ATTACHED, (event: typeof Hls.Events.MEDIA_ATTACHED, data: Hls.mediaAttachedData) => {
    const mediaElement: HTMLMediaElement = data.media;
    // HTMLAudioElement matches HTMLMediaElement
    const audioElement: HTMLAudioElement = data.media;

    let videoElement: HTMLVideoElement = data.media; // $ExpectError
    if (data instanceof HTMLVideoElement) {
        videoElement = data.media as HTMLVideoElement;
    }
});

function process(playlist: string) {
    return playlist;
}

class pLoader extends Hls.DefaultConfig.loader {
    constructor(config: Hls.LoaderConfig) {
        super(config);
        const load = this.load.bind(this);
        this.load = (context: Hls.LoaderContext, cfg: Hls.LoaderConfig, callbacks: Hls.LoaderCallbacks) => {
            if (context.type === 'manifest') {
                const onSuccess = callbacks.onSuccess;
                callbacks.onSuccess = (response: Hls.LoaderResponse, stats: Hls.LoaderStats, context: Hls.LoaderContext) => {
                    response.data = process(response.data as string);
                    onSuccess(response, stats, context);
                };
            }
            load(context, config, callbacks);
        };
    }
}

if (Hls.isSupported()) {
    const video = <HTMLVideoElement> document.getElementById('video');
    const hls = new Hls({
        pLoader,
        startFragPrefetch: true,
        debug: {
            log: (...args: any[]) => console.log(...args)
        }
    });

    const version: string = Hls.version;
    hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
    if (hls.media === undefined || hls.media === null) {
        hls.attachMedia(video);
    } else {
        console.log('src: ', hls.media.src);
    }

    hls.once(Hls.Events.MANIFEST_PARSED, (event: "hlsManifestParsed", data: Hls.manifestParsedData) => {
        video.play();
    });

    const onFragBuffered = (event: "hlsFragBuffered", data: Hls.fragBufferedData) => {
        // DO SOMETHING
    };

    hls.on(Hls.Events.FRAG_BUFFERED, onFragBuffered);
    hls.off(Hls.Events.FRAG_BUFFERED, onFragBuffered);

    hls.on(Hls.Events.FRAG_LOAD_EMERGENCY_ABORTED, (event: "hlsFragLoadEmergencyAborted", data: Hls.fragLoadEmergencyAbortedData) => {
        console.log('frag: ', data.frag);
        console.log(data.frag.programDateTime + 10);
    });

    hls.on(Hls.Events.ERROR, (event: "hlsError", data: Hls.errorData) => {
        const errorType = data.type;
        const errorDetails = data.details;
        const errorFatal = data.fatal;

        if (errorDetails) {
            switch (errorDetails) {
                case Hls.ErrorDetails.FRAG_LOAD_ERROR:
                    break;
                default:
                    break;
            }
        }

        if (errorFatal) {
            switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    console.log('fatal network error encoutered, try to recover');
                    hls.startLoad();
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log('fatal media error encourted, try to recover');
                    hls.recoverMediaError();
                    break;
                default:
                    hls.destroy();
                    break;
            }
        }
    });
}
