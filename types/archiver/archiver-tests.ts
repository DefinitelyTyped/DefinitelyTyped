import * as Archiver from 'archiver';
import * as fs from 'fs';

var archiver = Archiver.create('zip');

var writeStream = fs.createWriteStream('./archiver.d.ts');
var readStream = fs.createReadStream('./archiver.d.ts');

archiver.pipe(writeStream);
archiver.append(readStream, {name: 'archiver.d.ts'});
archiver.finalize();

archiver.directory('./path', './someOtherPath');
archiver.directory('./path', { name: "testName"} );

archiver.directory('./', "", {});
archiver.directory('./', {name: 'test'}, {});

archiver.bulk({ mappaing: {} });