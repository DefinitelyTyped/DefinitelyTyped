import { createReadStream } from 'fs';
import { get } from 'http';
import { CentralDirectory, Entry, Open, Parse } from 'unzipper';

createReadStream("http://example.org/path/to/archive.zip")
    .pipe(Parse())
    .on("entry", (entry: Entry) => {
        entry.autodrain().promise().then(() => {
            console.log("Finished draining stream");
        });
    });

createReadStream("http://example.org/path/to/archive.zip")
    .pipe(Parse())
    .on("entry", (entry: Entry) => {
        entry.buffer().then((b1: Buffer) => {});
        const s1: string = entry.path;
        const s2: string = entry.type;
        const o1: {
            signature?: number;
            versionsNeededToExtract: number;
            flags: number;
            compressionMethod: number;
            lastModifiedTime: number;
            crc32: number;
            compressedSize: number;
            fileNameLength: number;
            extraFieldLength: number;
        } =
            entry.vars;

        const o2: {
            signature: number;
            partsize: number;
            uncompressedSize: number;
            compressedSize: number;
            offset: number;
            disknum: number;
        } =
            entry.extra;
    })
    .promise()
    .then(() => {
        console.log("Finished reading stream");
    });

const dir1: Promise<CentralDirectory> = Open.file("Z:\\path\\to\\archive.zip");
const dir2: Promise<CentralDirectory> = Open.url(get("url/to/archive.zip"), {});
const dir3: Promise<CentralDirectory> = Open.s3("any", "any");
const dir4: Promise<CentralDirectory> = Open.buffer(Buffer.from('ZIPDATA'));
