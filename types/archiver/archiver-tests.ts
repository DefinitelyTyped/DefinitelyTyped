import Archiver = require('archiver');
import * as fs from 'fs';

const options: Archiver.ArchiverOptions = {
    statConcurrency: 1,
    allowHalfOpen: true,
    readableObjectMode: true,
    writeableObjectMode: true,
    decodeStrings: true,
    encoding: 'test',
    highWaterMark: 1,
    objectmode: true,
    comment: 'test',
    forceLocalTime: true,
    forceZip64: true,
    store: true,
    zlib: {},
    gzip: true,
    gzipOptions: {},
};

Archiver('zip', options);

const archiver = Archiver.create('zip');

const writeStream = fs.createWriteStream('./archiver.d.ts');
const readStream = fs.createReadStream('./archiver.d.ts');

archiver.abort();

archiver.pipe(writeStream);
archiver.append(readStream, { name: 'archiver.d.ts' });
archiver.append(readStream, { date: '05/05/1991' });
archiver.append(readStream, { date: new Date() });
archiver.append(readStream, { mode: 1 });
archiver.append(readStream, { mode: 1, stats: new fs.Stats() });

archiver.append(readStream, {name: 'archiver.d.ts'})
.append(readStream, {name: 'archiver.d.ts'});

archiver.directory('./path', './someOtherPath');
archiver.directory('./', '', {});
archiver.directory('./', false, { name: 'test' });
archiver.directory('./', false, (entry: Archiver.EntryData) => {
    entry.name = "foobar";
    return entry;
});
archiver.directory('./', false, (entry: Archiver.EntryData) => false);

archiver.append(readStream, {
    name: "sub/folder.xml"
});

archiver.glob("**", {
    cwd: 'path/to/files',
});
archiver.glob('./path', {}, {});

archiver.file('./path', { name: 'test' });

archiver.setFormat('zip');
archiver.setModule(() => {});

archiver.pointer();
archiver.use(() => {});

archiver.finalize();

archiver.symlink('./path', './target');

function fakeHandler(err: Archiver.ArchiverError) {
    console.log(err.code);
    console.log(err.message);
    console.log(err.stack);
    console.log(err.data);
}

const fakeError = new Archiver.ArchiverError('code', 'foo');

archiver.on('error', fakeHandler);
archiver.on('warning', fakeHandler);
