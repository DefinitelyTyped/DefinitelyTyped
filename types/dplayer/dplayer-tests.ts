import DPlayer, { DPlayerOptions } from 'dplayer';

const dp = new DPlayer(<DPlayerOptions>{
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
console.log(dp);
