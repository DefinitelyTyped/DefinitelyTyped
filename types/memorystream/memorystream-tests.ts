import MemoryStream = require('memorystream');
import { createReadStream } from 'fs';

const ms = new MemoryStream();

createReadStream('index.ts').pipe(ms);
ms.pipe(process.stdout);
ms.write('it works');
