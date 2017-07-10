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
}
