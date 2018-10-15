import stp = require('stream-to-promise');
import * as fs from 'fs';

const read = fs.createReadStream(__filename);
const write = fs.createWriteStream(__filename);

const read$: Promise<Buffer> = stp(read);
const write$: Promise<void> = stp(write);
