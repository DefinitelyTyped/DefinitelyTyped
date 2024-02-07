import * as yauzl from "yauzl-promise";

import type { Readable } from "stream";

/**
 * Replaces `$ExpectType` which is too naïve in some cases.
 */
const expectType = <T>(value: T): T => value;

async function basicTest() {
    const zip = await yauzl.open("/path/to/file.zip");
    for await (const entry of zip) {
        if (entry.filename.endsWith("/")) {
            console.log("Directory");
        } else {
            // $ExpectType Readable
            await entry.openReadStream();
        }
    }
    await zip.close();
}

async function zipTest() {
    const zip = await yauzl.open("/path/to/file.zip");

    // $ExpectType boolean
    zip.isOpen;

    // $ExpectType number
    zip.entryCount;

    // $ExpectType boolean
    zip.entryCountIsCertain;

    // $ExpectType string
    zip.comment;

    // $ExpectType boolean
    zip.isZip64;

    // $ExpectType boolean
    zip.isMacArchive;

    // $ExpectType boolean
    zip.isMaybeMacArchive;

    const firstEntry = expectType<null | yauzl.Entry<string>>(await zip.readEntry());

    expectType<Array<yauzl.Entry<string>>>(await zip.readEntries());
    expectType<Array<yauzl.Entry<string>>>(await zip.readEntries(null));
    expectType<Array<yauzl.Entry<string>>>(await zip.readEntries(123));

    // $ExpectType Readable
    await zip.openReadStream(firstEntry!);
    await zip.openReadStream(firstEntry!, null);
    await zip.openReadStream(firstEntry!, {
        decompress: true,
        decrypt: true,
        validateCrc32: true,
    });
    await zip.openReadStream(firstEntry!, {
        decompress: false,
        decrypt: false,
        validateCrc32: false,
        start: 12,
        end: 34,
    });
}

async function entriesTest() {
    const zip = await yauzl.open("/path/to/file.zip");

    for await (const entry of zip) {
        // $ExpectType number
        entry.versionMadeBy;

        // $ExpectType number
        entry.versionNeededToExtract;

        // $ExpectType number
        entry.generalPurposeBitFlag;

        // $ExpectType number
        entry.compressionMethod;

        // $ExpectType number
        entry.lastModDate;

        // $ExpectType number
        entry.lastModTime;

        // $ExpectType number
        entry.crc32;

        // $ExpectType number
        entry.compressedSize;

        // $ExpectType number
        entry.uncompressedSize;

        // $ExpectType number
        entry.internalFileAttributes;

        // $ExpectType number
        entry.externalFileAttributes;

        // $ExpectType number
        entry.fileHeaderOffset;

        // $ExpectType undefined | number
        entry.fileDataOffset;

        // $ExpectType string
        entry.filename;

        // $ExpectType boolean
        entry.uncompressedSizeIsCertain;

        expectType<Array<{ id: number; data: Buffer }>>(entry.extraFields);

        // $ExpectType string
        entry.comment;

        // $ExpectType Date
        entry.getLastMod;

        // $ExpectType boolean
        entry.isEncrypted;

        // $ExpectType boolean
        entry.isCompressed;

        // $ExpectType Readable
        await entry.openReadStream();
        await entry.openReadStream(null);
        await entry.openReadStream({
            decompress: true,
            decrypt: true,
            validateCrc32: true,
        });
        await entry.openReadStream({
            decompress: false,
            decrypt: false,
            validateCrc32: false,
            start: 12,
            end: 34,
        });
    }
}

async function createOptionsTests() {
    const options = {
        decodeStrings: true as const,
        validateEntrySizes: false,
        validateFilenames: true,
        strictFilenames: true,
        supportMacArchive: true,
    };

    expectType<yauzl.Zip<string>>(
        await yauzl.open("/path/to/file.zip", null),
    );
    expectType<yauzl.Zip<string>>(
        await yauzl.open("/path/to/file.zip", options),
    );

    expectType<yauzl.Zip<string>>(
        await yauzl.fromFd(123),
    );
    expectType<yauzl.Zip<string>>(
        await yauzl.fromFd(123, null),
    );
    expectType<yauzl.Zip<string>>(
        await yauzl.fromFd(123, options),
    );

    const buffer = Buffer.from([1, 2, 3]);
    expectType<yauzl.Zip<string>>(
        await yauzl.fromBuffer(buffer),
    );
    expectType<yauzl.Zip<string>>(
        await yauzl.fromBuffer(buffer, null),
    );
    expectType<yauzl.Zip<string>>(
        await yauzl.fromBuffer(buffer, options),
    );
}

async function noDecodeStringsTest() {
    const zips = [
        await yauzl.open("/path/to/file.zip", { decodeStrings: false }),
    ];

    for (const zip of zips) {
        // $ExpectType Buffer
        zip.comment;
        for await (const entry of zip) {
            // $ExpectType Buffer
            entry.filename;
            // $ExpectType Buffer
            entry.comment;
        }
    }
}

async function utilsTest() {
    // $ExpectType Date
    yauzl.dosDateTimeToDate(12, 34);

    // $ExpectType void
    yauzl.validateFilename("/foo.txt");
}
