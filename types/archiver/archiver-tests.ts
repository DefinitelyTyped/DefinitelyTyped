import Archiver = require('archiver');
import FS = require('fs');

const archiver = Archiver.create('zip');

const writeStream = FS.createWriteStream('./archiver.d.ts');
const readStream = FS.createReadStream('./archiver.d.ts');

archiver.abort();
archiver.append(readStream, {name: 'archiver.d.ts'})
.append(readStream, {name: 'archiver.d.ts'});

archiver.bulk({ mappaing: {} });

archiver.directory('./path', './someOtherPath');
archiver.directory('./path', { name: "testName"} );

archiver.directory('./', "", {});
archiver.directory('./', {name: 'test'}, {});

archiver.file('./path', { name: 'test' });
archiver.glob('./path', {}, {});
archiver.finalize();

archiver.setFormat('zip');
archiver.setModule(() => {});

archiver.pointer();
archiver.use(() => {});

archiver.pipe(writeStream);
