import * as Hls from 'hls.js';

if (Hls.isSupported()) {
  const video = <HTMLVideoElement> document.getElementById('video');
  const hls = new Hls();
  const version: string = Hls.version;
  hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.play();
  });
}
