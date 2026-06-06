import {
    Archiver,
    type ArchiverError,
    ArchiverOptions,
    EntryData,
    EntryDataFunction,
    JsonArchive,
    ProgressData,
    TarArchive,
    ZipArchive,
} from "archiver";

import * as fs from "fs";
import { Readable, Writable } from "stream";

const options: ArchiverOptions = {
    statConcurrency: 1,
    allowHalfOpen: true,
    readableObjectMode: true,
    writableObjectMode: true,
    decodeStrings: true,
    encoding: "utf8",
    highWaterMark: 1,
    objectMode: true,
    comment: "test",
    forceLocalTime: true,
    forceZip64: true,
    namePrependSlash: true,
    store: true,
    level: 9,
    zlib: {},
    gzip: true,
    gzipOptions: {},
};

const zipArchiver: ZipArchive = new ZipArchive(options);
const tarArchiver: TarArchive = new TarArchive({ gzip: true });
const jsonArchiver: JsonArchive = new JsonArchive();

const archiver: Archiver = zipArchiver;
const readable: Readable = archiver;
const writable: Writable = archiver;

const writeStream = fs.createWriteStream("./archiver.d.ts");
const readStream = fs.createReadStream("./archiver.d.ts");

archiver.abort();

archiver.pipe(writeStream);
archiver.append(readStream, { name: "archiver.d.ts" });
archiver.append(readStream, { name: "buffer.txt", date: "05/05/1991" });
archiver.append(readStream, { name: "buffer.txt", date: new Date() });
archiver.append(readStream, { name: "buffer.txt", mode: 1 });
archiver.append(readStream, {
    name: "buffer.txt",
    mode: 1,
    stats: {} as fs.Stats,
});
archiver.append("Some content", { name: "filename", store: true });
archiver
    .append(readStream, { name: "archiver.d.ts" })
    .append(readStream, { name: "archiver.d.ts" });
archiver.append(Readable.from(["test"]), { name: "buffer.txt", date: new Date() });

archiver.directory("./path", "./someOtherPath");
archiver.directory("./", "", {});
archiver.directory("./", false, { name: "test" });
archiver.directory("./", false, (entry: EntryData) => {
    entry.name = "foobar";
    return entry;
});
archiver.directory("./", false, (entry: EntryData) => false);

archiver.file("./path");
archiver.file("./path", { name: "test" });

archiver.glob("**", { cwd: "path/to/files" });
archiver.glob("./path", {}, {});

archiver.pointer();

archiver.finalize(); // $ExpectType Promise<void>

archiver.symlink("./path", "./target");
archiver.symlink("directory/directory", "../../directory", 493);

function fakeHandler(err: ArchiverError) {
    console.log(err.code);
    console.log(err.message);
    console.log(err.stack);
    console.log(err.data);
}

archiver.on("error", fakeHandler);
archiver.on("warning", fakeHandler);

archiver.on("data", (chunk: Buffer) => console.log(chunk));
archiver.on("progress", (progress: ProgressData) => {
    console.log(progress.entries.total);
});
archiver.on("entry", (entry: EntryData) => {
    console.log(entry.name);
});
