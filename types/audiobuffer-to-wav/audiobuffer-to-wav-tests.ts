import audioBufferToWav = require('audiobuffer-to-wav');

declare const buffer: AudioBuffer;
audioBufferToWav(buffer);
audioBufferToWav(buffer, { float32: true });
