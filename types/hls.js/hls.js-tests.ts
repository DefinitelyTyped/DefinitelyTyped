import * as Hls from 'hls.js';

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
    const hls = new Hls({ pLoader });
    const version: string = Hls.version;
    hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
    });

    hls.on(Hls.Events.FRAG_LOAD_ERMERGENCY_ABORTED, (event: string, data: Hls.Data) => {
        console.log('frag: ', data.frag);
    });

    hls.on(Hls.Events.ERROR, (event: string, data: Hls.Data) => {
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
