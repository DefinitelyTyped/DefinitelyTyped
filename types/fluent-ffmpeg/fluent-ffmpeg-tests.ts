import ffmpeg = require('fluent-ffmpeg');
import { createWriteStream } from 'fs';

const stream = createWriteStream('outputfile.divx');

ffmpeg('/path/to/file.avi')
    .output('outputfile.mp4')
    .output(stream);

ffmpeg('/path/to/file.avi')
    // You may pass a pipe() options object when using a stream
    .output(stream, { end: true });

// Output-related methods apply to the last output added
ffmpeg('/path/to/file.avi')

    .output('outputfile.mp4')
    .audioCodec('libfaac')
    .videoCodec('libx264')
    .size('320x200')

    .output(stream)
    .preset('divx')
    .size('640x480');

// Use the run() method to run commands with multiple outputs
ffmpeg('/path/to/file.avi')
    .output('outputfile.mp4')
    .output(stream)
    .on('end', () => {
        console.log('Finished processing');
    })
    .run();

// Create a command to convert source.avi to MP4
const command = ffmpeg('/path/to/source.avi')
    .audioCodec('libfaac')
    .videoCodec('libx264')
    .format('mp4');

// Create a clone to save a small resized version
command.clone()
    .size('320x200')
    .save('/path/to/output-small.mp4');

// Create a clone to save a medium resized version
command.clone()
    .size('640x400')
    .save('/path/to/output-medium.mp4');

// Save a converted version with the original size
command.save('/path/to/output-original-size.mp4');

ffmpeg.ffprobe('/path/to/file.avi', (err, metadata) => {
    console.dir(metadata);
});
