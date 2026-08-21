import { createReadStream } from "streamifier";

createReadStream(JSON.stringify({ a: 1, b: 2 })).pipe(process.stdout);
