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
aos.entry(ae, "test", err => err);

aos._emitErrorCallback(new Error());
aos._finish(ae);
aos._normalizeEntry(ae);

aos.finish();
aos.getBytesWritten();

aos._appendBuffer(zae);
aos._appendBuffer(zae, null);
aos._appendBuffer(zae, "test");
aos._appendBuffer(zae, new Stream());
aos._appendBuffer(zae, "test", err => err);

aos._appendStream(zae);
aos._appendStream(zae, null);
aos._appendStream(zae, "test");
aos._appendStream(zae, new Stream());
aos._appendStream(zae, "test", err => err);

const zaos = new ZipArchiveOutputStream();

zaos._afterAppend(ae);
zaos._smartStream(ae, err => err);
zaos._writeCentralDirectoryEnd();
zaos._writeCentralDirectoryZip64();
zaos._writeCentralFileHeader(ae);
zaos._writeDataDescriptor(ae);
zaos._writeLocalFileHeader(ae);
zaos.setComment("foobar");
zaos.getComment();
zaos.isZip64();
