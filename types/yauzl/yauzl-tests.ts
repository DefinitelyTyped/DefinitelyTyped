import { Writable } from "stream";
import * as yauzl from "yauzl";

yauzl.open("path/to/file.zip", { lazyEntries: true }, (err, zipfile) => {
    if (err) {
        throw err;
    }
    if (zipfile) {
        zipfile.readEntry();
        zipfile.on("entry", entry => {
            if (/\/$/.test(entry.fileName)) {
                zipfile.readEntry();
            } else {
                zipfile.openReadStream(entry, (err, readStream) => {
                    if (err) {
                        throw err;
                    }
                    if (readStream) {
                        readStream.on("end", () => {
                            zipfile.readEntry();
                        });
                        readStream.pipe(new Writable());
                    }
                });
            }
        });
    }
});

yauzl.open("options.zip", { strictFileNames: true }, () => {});

// decodeStrings: false returns raw Buffers on Entry
yauzl.open("raw.zip", { lazyEntries: true, decodeStrings: false }, (err, zipfile) => {
    if (err) throw err;
    if (zipfile) {
        zipfile.on("entry", (entry: yauzl.Entry) => {
            const rawName: Buffer = entry.fileNameRaw;
            const rawComment: Buffer = entry.fileCommentRaw;
            const rawExtra: Buffer = entry.extraFieldRaw;

            const decoded: string = yauzl.getFileNameLowLevel(
                entry.generalPurposeBitFlag,
                rawName,
                entry.extraFields,
                false,
            );

            const validationError: string | null = yauzl.validateFileName(decoded);

            zipfile.readEntry();
        });
    }
});

// parseExtraFields
yauzl.open("extra.zip", { lazyEntries: true }, (err, zipfile) => {
    if (err) throw err;
    if (zipfile) {
        zipfile.on("entry", (entry: yauzl.Entry) => {
            const extraFields: Array<{ id: number; data: Buffer }> = yauzl.parseExtraFields(entry.extraFieldRaw);
        });
    }
});

// readLocalFileHeader
yauzl.open("local.zip", { lazyEntries: true }, (err, zipfile) => {
    if (err) throw err;
    if (zipfile) {
        zipfile.on("entry", (entry: yauzl.Entry) => {
            zipfile.readLocalFileHeader(entry, (err, localFileHeader) => {
                if (err) throw err;
                const start: number = localFileHeader.fileDataStart;
                const name: Buffer = localFileHeader.fileName;
                const extra: Buffer = localFileHeader.extraField;
            });

            zipfile.readLocalFileHeader(entry, { minimal: true }, (err, localFileHeader) => {
                if (err) throw err;
                const start: number = localFileHeader.fileDataStart;
            });
        });
    }
});

// getLastModDate options
yauzl.open("dates.zip", { lazyEntries: true }, (err, zipfile) => {
    if (err) throw err;
    if (zipfile) {
        zipfile.on("entry", (entry: yauzl.Entry) => {
            const date1: Date = entry.getLastModDate();
            const date2: Date = entry.getLastModDate({ timezone: "UTC" });
            const date3: Date = entry.getLastModDate({ forceDosFormat: true });
        });
    }
});
