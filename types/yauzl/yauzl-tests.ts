import * as yauzl from 'yauzl';
import { Writable } from 'stream';

yauzl.open('path/to/file.zip', {lazyEntries: true}, (err, zipfile) => {
    if (err) {
        throw err;
    }
    if (zipfile) {
        zipfile.readEntry();
        zipfile.on('entry', entry => {
            if (/\/$/.test(entry.fileName)) {
                zipfile.readEntry();
            } else {
                zipfile.openReadStream(entry, (err, readStream) => {
                    if (err) {
                        throw err;
                    }
                    if (readStream) {
                        readStream.on('end', () => {
                            zipfile.readEntry();
                        });
                        readStream.pipe(new Writable());
                    }
                });
            }
        });
    }
});

yauzl.open('options.zip', {strictFileNames: true}, () => {});
