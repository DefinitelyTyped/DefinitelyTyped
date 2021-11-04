import * as fs from 'fs';
import youtubedl = require('youtube-dl');
import downloader = require('youtube-dl/lib/downloader');

const videoUrl = 'http://www.youtube.com/watch?v=90AiXO1pAiA';
const args = ['--format=18'];
const options = { cwd: __dirname };

const video = youtubedl(videoUrl,
  // Optional arguments passed to youtube-dl.
  args,
  // Additional options can be given for calling `child_process.execFile()`.
  options
  );

// Will be called when the download starts.
video.on('info', (info: youtubedl.Info) => {
  console.log('Download started');
  console.log('_filename: ' + info._filename);
  console.log('filename: ' + info.filename);
  console.log('size: ' + info.size);
});
video.on('error', (error: Error) => {
  console.log(error);
});

video.pipe(fs.createWriteStream('myvideo.mp4'));

youtubedl.exec(videoUrl, args, options, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getInfo(videoUrl, args, options, (err: any, output: youtubedl.Info) => {
  console.log('_filename: ' + output._filename);
});

youtubedl.getInfo(videoUrl, args, (err: any, output: youtubedl.Info) => {
  console.log('_filename: ' + output._filename);
});

youtubedl.getInfo(videoUrl, (err: any, output: youtubedl.Info) => {
  console.log('_filename: ' + output._filename);
});

youtubedl.getSubs(videoUrl, options, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getSubs(videoUrl, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getThumbs(videoUrl, options, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getThumbs(videoUrl, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getExtractors(true, options, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getExtractors(true, (err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

youtubedl.getExtractors((err: any, output: string[]) => {
  console.log(err);
  console.log(output.join('\n'));
});

downloader('path/to-binary', (err: any, message?: string) => {
  console.log(err);
  console.log(message);
});
