import * as fs from 'fs';
import revHash = require('rev-hash');

revHash(fs.readFileSync('unicorn.png'));

revHash('Lorem ipsum dolor sit amet');
