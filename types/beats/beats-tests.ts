import beats = require('beats');

const bins: beats.Bin[] = [
    { lo: 0, hi: 512, threshold: 0, decay: 0.005 },
    { lo: 512, hi: 1024, threshold: 0, decay: 0.005 },
];

const detect = beats(bins, 1);

const frequencies = new Uint8Array(1024);
const result = detect(frequencies);
