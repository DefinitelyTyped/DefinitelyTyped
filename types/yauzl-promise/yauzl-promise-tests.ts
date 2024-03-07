import * as yauzl from "yauzl-promise";

class FakeRaR extends yauzl.RandomAccessReader {}

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
const fn = yauzl.validateFilename("fake");

async function test() {
    const zip = await yauzl.open("");
    const open2 = await yauzl.open("", options);

    const fd1 = await yauzl.fromFd(0);
    const fd2 = await yauzl.fromFd(0, options);

    const buffer1 = await yauzl.fromBuffer(Buffer.from("test", "utf-8"));
    const buffer2 = await yauzl.fromBuffer(Buffer.from("test", "utf-8"), options);

    const rar1 = await yauzl.fromRandomAccessReader(new FakeRaR(), 1);
    const rar2 = await yauzl.fromRandomAccessReader(new FakeRaR(), 1, options);

    const entry = await zip.readEntry();
    await zip.readEntries();
    await zip.readEntries(1);

    const rs = await zip.openReadStream(entry);
    await zip.openReadStream(entry, zipOptions);

    await entry.openReadStream();
    await entry.openReadStream(zipOptions);

    const filename = entry.filename;
    const filenameLength = entry.filenameLength;

    await zip.walkEntries(async (entry: yauzl.Entry) => {
        console.log("foo");
    });

    await zip.walkEntries(async (entry: yauzl.Entry) => {
        console.log("foo");
    }, 1);

    {
        let entry: yauzl.Entry;
        for await (entry of zip) {}
    }
}
