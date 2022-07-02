import MuteStream = require('mute-stream');

const output = new MuteStream();
output.pipe(process.stdout);
output.mute();
output.unmute();
output.isTTY;

const options: MuteStream.Options = {};

new MuteStream(options);
new MuteStream({ replace: 'a' });
new MuteStream({ replace: 'a', prompt: 'a' });
new MuteStream({ prompt: 'a' });
