import * as fs from "fs";
import { Transform } from "stream";
import * as unzip from "unzip-stream";

fs.createReadStream("path/to/archive.zip").pipe(unzip.Extract({ path: "output/path" }));

fs.createReadStream("path/to/archive.zip")
    .pipe(unzip.Parse())
    .on("entry", (entry: unzip.Entry) => {
        const fileName = entry.path;
        const type = entry.type; // 'Directory' or 'File'
        const size = entry.size;
        if (fileName === "this IS the file I'm looking for") {
            entry.pipe(fs.createWriteStream("output/path"));
        } else {
            entry.autodrain();
        }
    });

fs.createReadStream("path/to/archive.zip")
    .pipe(unzip.Parse())
    .pipe(
        new Transform({
            objectMode: true,
            transform: (entry: unzip.Entry, _e, cb) => {
                const filePath = entry.path;
                const type: string = entry.type; // 'Directory' or 'File'
                const size: number = entry.size;
                if (filePath === "this IS the file I'm looking for") {
                    entry.pipe(fs.createWriteStream("output/path")).on("finish", cb);
                } else {
                    entry.autodrain();
                    cb();
                }
            },
        }),
    );

fs.createReadStream("path/to/archive.zip").pipe(
    unzip.Parse({
        decodeString: buffer => buffer.toString("utf-8"),
    }),
);

fs.createReadStream("path/to/archive.zip").pipe(
    unzip.Extract({
        path: "output/path",
        decodeString: () => "...",
    }),
);
