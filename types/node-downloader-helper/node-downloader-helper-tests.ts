import { DownloaderHelper } from 'node-downloader-helper';

let paused = false;
const dl = new DownloaderHelper('http://example.com', __dirname);

dl.on('start', () => {
    console.log('Download started');

    if (!paused) {
      paused = true;
      dl.pause();
    }
});
dl.on('download', () => {
    console.log('Downloading');
});
dl.on('progress', (stats) => {
    console.log(`${stats.progress}% downloaded`);
});
dl.on('end', () => {
    console.log('Download finished');
});
dl.on('error', (err) => {
    console.error(err);
});
dl.on('pause', () => {
    console.log('Download paused');
    dl.resume();
});
dl.on('resume', () => {
    console.log('Download resumed');
    dl.stop();
});
dl.on('stop', () => {
    console.log('Download stopped');
});
dl.on('stateChanged', (state) => {
    console.log(`State changed: ${state}`);
});

dl.start().catch(e => console.error(e));
