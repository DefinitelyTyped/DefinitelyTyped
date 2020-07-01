import * as audiosprite from 'audiosprite';

const files = ['file1.mp3', 'file2.mp3'];
const opts = {output: 'result'};

audiosprite(files, opts, (err, obj) => {
    if (err) {
        return err;
    }

    return JSON.stringify(obj, null, 2);
});

audiosprite(files, {
    path: "aaa",
    format: "howler",
    export: "ogg,mp3",
    minlength: 9999,
    vbr: 9,
    'vbr:vorbis': 10,
    logger: {
        debug(a) {
        }
    }
}, (err, obj) => {
});
