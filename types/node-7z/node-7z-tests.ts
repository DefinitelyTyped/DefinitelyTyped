import * as Seven from 'node-7z'; // Name the class as you want!
const stream = Seven.extractFull('myArchive.7z', 'destination', { password: 'myPassword' });
stream.on('progress', progress => {
    /** Do something with progress data */
});
stream.on('data', data => {
    /** Do something with processed file data */
});
stream.on('end', () => {
    /** Finished */
    console.log(`Files read from disk - ${stream.info.get('Files read from disk')}`);
});
stream.on('error', err => {
    /** Do something with error */
});
