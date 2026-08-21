import { ArchiveEntry, ArchiveOutputStream, ZipArchiveEntry, ZipArchiveOutputStream } from "compress-commons";
import { Stream } from "readable-stream";

const ae = new ArchiveEntry();

ae.getLastModifiedDate();
ae.getName();
ae.getSize();
ae.isDirectory();

const zae = new ZipArchiveEntry();
const aos = new ArchiveOutputStream();

aos.entry(ae);
aos.entry(ae, null);
aos.entry(ae, "test");
aos.entry(ae, new Stream());
aos.entry(ae, "test", (err, ae) => {
    if (err) throw err;
    ae!; // $ExpectType ArchiveEntry
});

aos._emitErrorCallback(new Error());
aos._finish(ae);
aos._normalizeEntry(ae);

aos.finish();
aos.getBytesWritten();

aos._appendBuffer(zae);
aos._appendBuffer(zae, null);
aos._appendBuffer(zae, "test");
aos._appendBuffer(zae, new Stream());
aos._appendBuffer(zae, "test", (err, ae) => {
    if (err) throw err;
    ae!; // $ExpectType ArchiveEntry
});

aos._appendStream(zae);
aos._appendStream(zae, null);
aos._appendStream(zae, "test");
aos._appendStream(zae, new Stream());
aos._appendStream(zae, "test", (err, ae) => {
    if (err) throw err;
    ae!; // $ExpectType ArchiveEntry
});

const zaos = new ZipArchiveOutputStream();

// @ts-expect-error Must be a ZipArchiveEntry
zaos._appendBuffer(ae);
// @ts-expect-error Must be a ZipArchiveEntry
zaos._appendStream(ae);
// @ts-expect-error Must be a ZipArchiveEntry
zaos._normalizeEntry(ae);
// @ts-expect-error No arguments
zaos._finish(ae);
// @ts-expect-error No arguments
zaos._finish(zae);

zaos._afterAppend(zae);
zaos._smartStream(zae, (err, ae) => {
    if (err) throw err;
    ae!; // $ExpectType ZipArchiveEntry
});
zaos._writeCentralDirectoryEnd();
zaos._writeCentralDirectoryZip64();
zaos._writeCentralFileHeader(zae);
zaos._writeDataDescriptor(zae);
zaos._writeLocalFileHeader(zae);
zaos.setComment("foobar");
zaos.getComment();
zaos.isZip64();
