import DPlayer from 'dplayer';

const dp = new DPlayer({
  container: document.querySelector('#dplayer'),
  screenshot: true,
  video: {
    url: 'demo.mp4',
    pic: 'demo.jpg',
    thumbnails: 'thumbnails.jpg'
  },
  subtitle: {
    url: 'webvtt.vtt'
  },
  danmaku: {
    id: 'demo',
    api: 'https://api.prprpr.me/dplayer3/'
  }
});
