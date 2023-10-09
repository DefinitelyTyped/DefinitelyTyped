import MemoryStream = require("memorystream");
import { createReadStream } from "fs";

const ms = new MemoryStream();
createReadStream("index.ts").pipe(ms);
ms.pipe(process.stdout);
ms.write("it works");

const msOptions = new MemoryStream("", { writeable: true });
createReadStream("index.ts").pipe(msOptions);
msOptions.pipe(process.stdout);
msOptions.write("it works");

const msRead = MemoryStream.createReadStream();
createReadStream("index.ts").pipe(msRead);
msRead.pipe(process.stdout);
msRead.write("it works");

const msWrite = MemoryStream.createWriteStream();
createReadStream("index.ts").pipe(msWrite);
msWrite.pipe(process.stdout);
msWrite.write("it works");
