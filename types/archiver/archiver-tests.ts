import * as Archiver from 'archiver';
import * as fs from 'fs';

const archiver = Archiver.create('zip');

const writeStream = fs.createWriteStream('./archiver.d.ts');
const readStream = fs.createReadStream('./archiver.d.ts');

archiver.pipe(writeStream);
archiver.append(readStream, { name: 'archiver.d.ts' });
archiver.finalize();

archiver.directory('./path', './someOtherPath');
archiver.directory('./path', { name: "testName" });

archiver.directory('./', "", {});
archiver.directory('./', { name: 'test' }, {});

archiver.bulk({ mappaing: {} });
