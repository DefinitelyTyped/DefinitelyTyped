import * as yauzl from "yauzl-promise";

class FakeReader extends yauzl.Reader {}

const options: yauzl.Options = {
    decodeStrings: true,
    validateEntrySizes: true,
    validateFilenames: true,
    strictFilenames: false,
    supportMacArchive: true,
};

const zipOptions: yauzl.ZipFileOptions = {
    decrypt: true,
    decompress: true,
    validateCrc32: true,
    start: 0,
    end: 1,
};

const date = yauzl.dosDateTimeToDate(1, 1);
yauzl.validateFilename("fake");

async function test() {
    const zip = await yauzl.open("");
    const open2 = await yauzl.open("", options);

    const fd1 = await yauzl.fromFd(0);
    const fd2 = await yauzl.fromFd(0, options);

    const buffer1 = await yauzl.fromBuffer(Buffer.from("test", "utf-8"));
    const buffer2 = await yauzl.fromBuffer(Buffer.from("test", "utf-8"), options);

    const reader1 = await yauzl.fromReader(new FakeReader(), 1);
    const reader2 = await yauzl.fromReader(new FakeReader(), 1, options);

    zip.comment; // $ExpectType string
    zip.entryCount; // $ExpectType number
    zip.entryCountIsCertain; // $ExpectType boolean
    zip.isOpen; // $ExpectType boolean
    zip.isZip64; // $ExpectType boolean
    zip.decodeStrings; // $ExpectType boolean
    zip.validateEntrySizes; // $ExpectType boolean

    // $ExpectType Entry | null
    const entryOrNull = await zip.readEntry();
    const entry = entryOrNull!;
    await zip.readEntries();
    await zip.readEntries(1);

    const rs = await zip.openReadStream(entry);
    await zip.openReadStream(entry, zipOptions);

    await entry.openReadStream();
    await entry.openReadStream(zipOptions);

    entry.comment; // $ExpectType string;
    entry.compressedSize; // $ExpectType number;
    entry.compressionMethod; // $ExpectType number;
    entry.crc32; // $ExpectType number;
    entry.externalFileAttributes; // $ExpectType number;
    entry.extraFields; // $ExpectType { id: number; data: Buffer }[] || { id: number; data: Buffer<ArrayBufferLike> }[];
    entry.fileDataOffset; // $ExpectType null | number;
    entry.fileHeaderOffset; // $ExpectType number;
    entry.filename; // $ExpectType string;
    entry.filenameLength; // $ExpectType number;
    entry.generalPurposeBitFlag; // $ExpectType number;
    entry.internalFileAttributes; // $ExpectType number;
    entry.lastModDate; // $ExpectType number;
    entry.lastModTime; // $ExpectType number;
    entry.uncompressedSize; // $ExpectType number;
    entry.uncompressedSizeIsCertain; // $ExpectType boolean;
    entry.versionMadeBy; // $ExpectType number;
    entry.versionNeededToExtract; // $ExpectType number;

    entry.getLastMod(); // $ExpectType Date
    entry.isEncrypted(); // $ExpectType boolean
    entry.isCompressed(); // $ExpectType boolean

    {
        let entry: yauzl.Entry;
        for await (entry of zip) {}
    }

    await zip.close();
}
