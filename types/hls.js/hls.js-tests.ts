import * as Hls from 'hls.js';

if (Hls.isSupported) {
  var video = <HTMLVideoElement>document.getElementById('video');
  var hls = new Hls();
  hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
}
