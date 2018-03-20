import * as unzip from 'unzip';
import * as fs from 'fs';

fs.createReadStream('path/to/archive.zip')
    .pipe(unzip.Extract({ path: 'output/path' }));

fs.createReadStream('path/to/archive.zip')
    .pipe(unzip.Parse())
    .on('entry', (entry: unzip.Entry) => {
        const fileName = entry.path;
        const type = entry.type; // 'Directory' or 'File'
        const size = entry.size;
        if (fileName === "this IS the file I'm looking for") {
            entry.pipe(fs.createWriteStream('output/path'));
        } else {
            entry.autodrain();
        }
    });
