import fs = require('fs');
import Volume = require('pcm-volume');

const readable = fs.createReadStream('music.pcm');
const writable = fs.createWriteStream('final.pcm');

// Create a volume instance
const volume = new Volume();

// Wait 5s, then change the volume to 50%
setTimeout(() => {
  volume.setVolume(0.5);
}, 2000);

readable.pipe(volume); // pipe PCM data to volume
volume.pipe(writable); // pipe transformed PCM data to file
