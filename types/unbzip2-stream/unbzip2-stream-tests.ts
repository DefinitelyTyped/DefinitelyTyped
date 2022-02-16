import stream from "stream";
import bz2 from "unbzip2-stream";

stream.Readable.from('test').pipe(bz2()).pipe(process.stdout);
