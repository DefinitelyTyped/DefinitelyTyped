import { FileSystem, MemoryFS } from '@parcel/fs';
import { createWorkerFarm } from '@parcel/core';
const fs: FileSystem = new MemoryFS(createWorkerFarm());
fs.writeFile('/tmp.txt', 'bye').then(async () => {
    await fs.rimraf('/');
    await fs.writeFile('/tmp.txt', 'hello');
    if ('hello' === fs.readFileSync('/tmp.txt', 'utf8')) {
        console.log('pass');
    }
    fs.stat('/tmp.txt').then(stats => {
        console.log(stats.ctime, stats.ctimeMs, stats.isFile());
    });
});
