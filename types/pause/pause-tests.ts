import pause = require('pause');
import * as fs from 'fs';

const pauseHandle = pause(fs.createReadStream('file.txt'));
pause(process.stdin);
pause(process.stdout);
pause(process.stderr);

pauseHandle; // $ExpectType Handle
pauseHandle.resume();
pauseHandle.end();
