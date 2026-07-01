import { Readable, Writable } from "stream";
import * as yauzl from "yauzl";

yauzl.open("path/to/file.zip", { lazyEntries: true }, (err, zipfile) => {
    if (err) {
        throw err;
    }
    if (zipfile) {
        zipfile.readEntry();
        zipfile.on("entry", (entry: yauzl.Entry) => {
            // String and number metadata.
            const name: string = entry.fileName;
            const comment: string = entry.fileComment;
            const aliased: string = entry.comment;
            const mode: number = entry.externalFileAttributes;
            const madeBy: number = entry.versionMadeBy;

            // Raw, undecoded buffers.
            const nameRaw: Buffer = entry.fileNameRaw;
            const extraRaw: Buffer = entry.extraFieldRaw;
            const commentRaw: Buffer = entry.fileCommentRaw;

            // Parsed extra fields.
            const fields: yauzl.ExtraField[] = entry.extraFields;
            const firstId: number | undefined = fields[0]?.id;
            const firstData: Buffer | undefined = fields[0]?.data;

            // Timestamps.
            const localDate: Date = entry.getLastModDate();
            const utcDate: Date = entry.getLastModDate({ timezone: "UTC" });
            const dosDate: Date = entry.getLastModDate({ forceDosFormat: true });

            // Predicates.
            const decodable: boolean = entry.canDecodeFileData();
            const encrypted: boolean = entry.isEncrypted();
            const compressed: boolean = entry.isCompressed();

            if (
                /\/$/.test(name) || mode + madeBy + (firstId ?? 0) < 0
                || aliased.length + comment.length + nameRaw.length + extraRaw.length + commentRaw.length < 0
                || localDate < utcDate || dosDate < localDate || (firstData?.length ?? 0) < 0
            ) {
                zipfile.readEntry();
            } else if (!decodable || encrypted || compressed) {
                // Reading raw bytes of a range.
                zipfile.openReadStream(
                    entry,
                    { decodeFileData: false, start: 0, end: entry.compressedSize },
                    (streamErr, readStream) => {
                        if (streamErr) throw streamErr;
                        readStream.on("end", () => zipfile.readEntry()).pipe(new Writable());
                    },
                );
            } else {
                zipfile.openReadStream(entry, (streamErr, readStream: Readable) => {
                    if (streamErr) throw streamErr;
                    readStream.on("end", () => zipfile.readEntry()).pipe(new Writable());
                });
            }

            // Low-level header and stream APIs.
            zipfile.readLocalFileHeader(entry, { minimal: true }, (headerErr, header) => {
                if (headerErr) throw headerErr;
                const start: number = header.fileDataStart;
                zipfile.openReadStreamLowLevel(
                    start,
                    entry.compressedSize,
                    0,
                    entry.compressedSize,
                    true,
                    entry.uncompressedSize,
                    (lowErr, lowStream: Readable) => {
                        if (lowErr) throw lowErr;
                        lowStream.pipe(new Writable());
                    },
                );
            });

            zipfile.readLocalFileHeader(entry, (headerErr, header: yauzl.LocalFileHeader) => {
                if (headerErr) throw headerErr;
                const rawName: Buffer = header.fileName;
                const rawExtra: Buffer = header.extraField;
                yauzl.parseExtraFields(rawExtra);
                yauzl.getFileNameLowLevel(header.generalPurposeBitFlag, rawName, [], false);
                if (header.fileDataStart < 0) throw new Error("unreachable");
            });
        });

        zipfile.on("end", () => {});
        zipfile.on("error", () => {});
        zipfile.on("close", () => {});

        const open: boolean = zipfile.isOpen;
        const count: number = zipfile.entryCount;
        if (open && count >= 0) zipfile.close();
    }
});

yauzl.open("options.zip", { strictFileNames: true }, () => {});
yauzl.open("no-options.zip", () => {});

yauzl.fromBuffer(Buffer.alloc(0), { lazyEntries: true }, () => {});
yauzl.fromFd(0, () => {});

// Subclassing RandomAccessReader for fromRandomAccessReader().
class MemoryReader extends yauzl.RandomAccessReader {
    _readStreamForRange(start: number, end: number): Readable {
        return Readable.from(Buffer.alloc(end - start));
    }
}
yauzl.fromRandomAccessReader(new MemoryReader(), 1024, { lazyEntries: true }, () => {});

// Standalone helpers.
const nameError: string | null = yauzl.validateFileName("a/b/c.txt");
if (nameError != null) throw new Error(nameError);
const fromDos: Date = yauzl.dosDateTimeToDate(0, 0);
if (fromDos.getTime() < 0) throw new Error("unreachable");

const decodedName: string = yauzl.getFileNameLowLevel(0x800, Buffer.from("a.txt"), [], true);
const parsed: yauzl.ExtraField[] = yauzl.parseExtraFields(Buffer.alloc(0));
if (decodedName.length < 0 || parsed.length < 0) throw new Error("unreachable");

// Promises API.
async function withPromises() {
    const zipfile: yauzl.ZipFile = await yauzl.openPromise("path/to/file.zip");
    await yauzl.openPromise("path/to/file.zip", { strictFileNames: true });
    await yauzl.fromFdPromise(0);
    await yauzl.fromBufferPromise(Buffer.alloc(0), { decodeStrings: false });
    await yauzl.fromRandomAccessReaderPromise(new MemoryReader(), 1024);

    for await (const entry of zipfile.eachEntry()) {
        const name: string = entry.fileName;
        if (name.length < 0) throw new Error("unreachable");

        const readStream: Readable = await zipfile.openReadStreamPromise(entry);
        readStream.pipe(new Writable());
        await zipfile.openReadStreamPromise(entry, { decodeFileData: false });

        const minimal = await zipfile.readLocalFileHeaderPromise(entry, { minimal: true });
        const start: number = minimal.fileDataStart;

        const header: yauzl.LocalFileHeader = await zipfile.readLocalFileHeaderPromise(entry);
        const rawName: Buffer = header.fileName;
        if (rawName.length < 0) throw new Error("unreachable");

        const lowStream: Readable = await zipfile.openReadStreamLowLevelPromise(
            start,
            entry.compressedSize,
            0,
            entry.compressedSize,
            true,
            entry.uncompressedSize,
        );
        lowStream.pipe(new Writable());
    }
}
withPromises();
