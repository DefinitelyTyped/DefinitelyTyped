import { Archiver, ArchiverError, ArchiverOptions, EntryData, JsonArchive, TarArchive, ZipArchive } from "archiver";
import * as fs from "fs";
import { Readable, Writable } from "stream";

const options: ArchiverOptions = {
    statConcurrency: 1,
    allowHalfOpen: true,
    readableObjectMode: true,
    writableObjectMode: true,
    decodeStrings: true,
    encoding: "test",
    highWaterMark: 1,
    objectMode: true,
    comment: "test",
    forceLocalTime: true,
    forceZip64: true,
    namePrependSlash: true,
    store: true,
    zlib: {},
    gzip: true,
    gzipOptions: {},
};

const archiver = new ZipArchive({ zlib: { level: 9 } });

const archiverAsReadable: Readable = archiver;
const archiverAsWritable: Writable = archiver;

const writeStream = fs.createWriteStream("./archiver.d.ts");
const readStream = fs.createReadStream("./archiver.d.ts");

archiver.abort();

archiver.pipe(writeStream);
archiver.append(readStream, { name: "archiver.d.ts" });
archiver.append(readStream, { name: "buffer.txt", date: "05/05/1991" });
archiver.append(readStream, { name: "buffer.txt", date: new Date() });
archiver.append(readStream, { name: "buffer.txt", mode: 1 });
archiver.append(readStream, { name: "buffer.txt", mode: 1, stats: ({} as fs.Stats) });
archiver.append("Some content", { name: "filename", store: true });
archiver.append(readStream, { name: "archiver.d.ts" }).append(readStream, { name: "archiver.d.ts" });
archiver.append(Readable.from(["test"]), { name: "buffer.txt", date: new Date() });

archiver.directory("./path", "./someOtherPath");
archiver.directory("./", "", {});
archiver.directory("./", false, { name: "test" });
archiver.directory("./", false, (entry: EntryData) => {
    entry.name = "foobar";
    return entry;
});
archiver.directory("./", false, (entry: EntryData) => false);

archiver.append(readStream, {
    name: "sub/folder.xml",
});

archiver.glob("**", {
    cwd: "path/to/files",
});
archiver.glob("./path", {}, {});

archiver.file("./path", { name: "test" });

archiver.pointer();

archiver.finalize(); // $ExpectType Promise<void>

archiver.symlink("./path", "./target");

function fakeHandler(err: ArchiverError) {
    console.log(err.code);
    console.log(err.message);
    console.log(err.stack);
    console.log(err.data);
}

const fakeError = new ArchiverError("code", "foo");

archiver.on("error", fakeHandler);
archiver.on("warning", fakeHandler);

archiver.on("data", (chunk: Buffer) => console.log(chunk));

archiver.symlink("directory/directory", "../../directory", 493); // $ExpectType ZipArchive

const tarArchive = new TarArchive({ gzip: true, gzipOptions: { level: 9 } });
tarArchive.append("content", { name: "file.txt" });
tarArchive.finalize(); // $ExpectType Promise<void>

const jsonArchive = new JsonArchive();
jsonArchive.append("content", { name: "file.txt" });
jsonArchive.finalize(); // $ExpectType Promise<void>
