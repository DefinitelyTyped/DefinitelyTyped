namespace archivesTests {
    const { archive } = adone;

    namespace tarTests {
        const { tar } = archive;

        namespace rawPackStreamTests {
            const { RawPackStream } = tar;

            new RawPackStream();
            new RawPackStream({});
            {
                const a: nodestd.stream.Writable = new RawPackStream().entry({
                    type: "file",
                    gid: 0,
                    mode: 10,
                    mtime: 10,
                    name: "path",
                    size: 10,
                    uid: 10
                });
            }
            {
                const a = new RawPackStream().entry({
                    type: "symlink",
                    gid: 0,
                    mode: 10,
                    mtime: 10,
                    name: "path",
                    size: 10,
                    uid: 10
                });
                a.linkname;
            }
            {
                const a: nodestd.stream.Writable = new RawPackStream().entry({
                    type: "symlink",
                    gid: 0,
                    mode: 10,
                    mtime: 10,
                    name: "path",
                    size: 10,
                    uid: 10,
                    linkname: "/"
                });
            }
            {
                const a: nodestd.stream.Writable = new RawPackStream().entry({
                    type: "file",
                    gid: 0,
                    mode: 10,
                    mtime: 10,
                    name: "path",
                    size: 10,
                    uid: 10
                }, (err: any) => {});
            }
            {
                const a: nodestd.stream.Writable = new RawPackStream().entry({
                    name: "path"
                }, Buffer.from("hello"));
            }
            {
                const a: nodestd.stream.Writable = new RawPackStream().entry({
                    type: "file",
                    gid: 0,
                    mode: 10,
                    mtime: 10,
                    name: "path",
                    size: 10,
                    uid: 10
                }, Buffer.from("hello"), (err: any) => {});
            }

            new RawPackStream().finalize();

            new RawPackStream().destroy();
            new RawPackStream().destroy(new Error());
        }

        namespace rawUnpackStreamTest {
            const { RawUnpackStream } = tar;

            type Header = adone.archive.tar.I.Header;
            type UnpackSourceStream = adone.archive.tar.I.UnpackSourceStream;
            type RawUnpackStream = adone.archive.tar.RawUnpackStream;

            new RawUnpackStream();
            new RawUnpackStream().on("entry", (header: Header, stream: UnpackSourceStream, next) => {
                { const a: string  = header.type; }
                { const a: string | undefined = header.linkname; }
                { const a: number = header.mode; }
                { const a: number = header.mtime; }
                { const a: string = header.name; }
                { const a: number = header.size; }
                { const a: number = header.uid; }
                { const a: number = header.gid; }
                { const a: nodestd.stream.Readable = stream; }
                { const a: RawUnpackStream = stream._parent; }
                next();
                next(123);
            });
            new RawUnpackStream().once("entry", (header: Header, stream: UnpackSourceStream, next) => {
                { const a: string = header.type; }
                { const a: string | undefined = header.linkname; }
                { const a: number = header.mode; }
                { const a: number = header.mtime; }
                { const a: string = header.name; }
                { const a: number = header.size; }
                { const a: number = header.uid; }
                { const a: number = header.gid; }
                { const a: nodestd.stream.Readable = stream; }
                { const a: RawUnpackStream = stream._parent; }
                next();
                next(123);
            });
        }

        namespace packStreamTests {
            const { packStream } = tar;
            type RawPackStream = adone.archive.tar.RawPackStream;
            type Header = adone.archive.tar.I.Header;

            { const a: RawPackStream = packStream("."); }
            { const a: RawPackStream = packStream(".", {}); }
            { const a: RawPackStream = packStream(".", { dereference: true }); }
            { const a: RawPackStream = packStream(".", { dmode: 0o777 }); }
            { const a: RawPackStream = packStream(".", { entries: ["."] }); }
            { const a: RawPackStream = packStream(".", { fmode: 0o777 }); }
            { const a: RawPackStream = packStream(".", { ignore: (name: string) => true }); }
            { const a: RawPackStream = packStream(".", { map: (header: Header) => header }); }
            { const a: RawPackStream = packStream(".", { map: (header: Header) => undefined }); }
            { const a: RawPackStream = packStream(".", { mapStream: (stream: nodestd.stream.Readable, header: Header) => stream }); }
            { const a: RawPackStream = packStream(".", { mapStream: (stream: nodestd.stream.Readable, header: Header) => stream }); }
            { const a: RawPackStream = packStream(".", { pack: new tar.RawPackStream() }); }
            { const a: RawPackStream = packStream(".", { readable: false }); }
            { const a: RawPackStream = packStream(".", { sort: true }); }
            { const a: RawPackStream = packStream(".", { strict: false }); }
            { const a: RawPackStream = packStream(".", { strip: 2 }); }
            { const a: RawPackStream = packStream(".", { umask: 2 }); }
            { const a: RawPackStream = packStream(".", { writable: false }); }
        }

        namespace unpackStreamTests {
            const { unpackStream } = tar;
            type RawUnpackStream = adone.archive.tar.RawUnpackStream;
            type UnpackSourceStream = adone.archive.tar.I.UnpackSourceStream;
            type Header = adone.archive.tar.I.Header;

            { const a: RawUnpackStream = unpackStream("."); }
            { const a: RawUnpackStream = unpackStream(".", {}); }
            { const a: RawUnpackStream = unpackStream(".", { chown: false }); }
            { const a: RawUnpackStream = unpackStream(".", { dmode: 0o777 }); }
            { const a: RawUnpackStream = unpackStream(".", { unpack: new tar.RawUnpackStream() }); }
            { const a: RawUnpackStream = unpackStream(".", { fmode: 0o755 }); }
            { const a: RawUnpackStream = unpackStream(".", { hardlinkAsFilesFallback: false }); }
            { const a: RawUnpackStream = unpackStream(".", { ignore: (name: string) => true }); }
            { const a: RawUnpackStream = unpackStream(".", { map: (header: Header) => header }); }
            { const a: RawUnpackStream = unpackStream(".", { map: (header: Header) => undefined }); }
            { const a: RawUnpackStream = unpackStream(".", { mapStream: (stream: UnpackSourceStream, header) => stream }); }
            { const a: RawUnpackStream = unpackStream(".", { readable: false }); }
            { const a: RawUnpackStream = unpackStream(".", { strip: 2 }); }
            { const a: RawUnpackStream = unpackStream(".", { umask: 2 }); }
            { const a: RawUnpackStream = unpackStream(".", { utimes: false }); }
            { const a: RawUnpackStream = unpackStream(".", { writable: false }); }
        }
    }

    namespace zipTests {
        const { zip } = archive;

        namespace packTests {
            const { fs } = adone;
            const { pack } = zip;
            type ZipFile = adone.archive.zip.pack.ZipFile;

            const file = new pack.ZipFile();
            { const a: ZipFile = file.addBuffer(Buffer.from("buffer"), "file"); }
            { const a: ZipFile = file.addBuffer(Buffer.from("buffer"), "file", {}); }
            { const a: ZipFile = file.addBuffer(Buffer.from("buffer"), "file", { compress: true }); }
            { const a: ZipFile = file.addBuffer(Buffer.from("buffer"), "file", { forceZip64Format: true }); }
            { const a: ZipFile = file.addBuffer(Buffer.from("buffer"), "file", { mode: 0 }); }
            { const a: ZipFile = file.addBuffer(Buffer.from("buffer"), "file", { mtime: 0 }); }

            { const a: ZipFile = file.addEmptyDirectory("hello"); }
            { const a: ZipFile = file.addEmptyDirectory("hello", {}); }
            { const a: ZipFile = file.addEmptyDirectory("hello", { mode: 0 }); }
            { const a: ZipFile = file.addEmptyDirectory("hello", { mtime: 0 }); }

            { const a: ZipFile = file.addFile("hello", "hello"); }
            { const a: ZipFile = file.addFile("hello", "hello", {}); }
            { const a: ZipFile = file.addFile("hello", "hello", { compress: true }); }
            { const a: ZipFile = file.addFile("hello", "hello", { forceZip64Format: false }); }
            { const a: ZipFile = file.addFile("hello", "hello", { mode: 0o111 }); }
            { const a: ZipFile = file.addFile("hello", "hello", { mtime: 13 }); }

            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello"); }
            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello", {}); }
            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello", { compress: true }); }
            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello", { forceZip64Format: false }); }
            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello", { mode: 0 }); }
            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello", { mtime: 0 }); }
            { const a: ZipFile = file.addReadStream(fs.createReadStream("a"), "hello", { size: 0 }); }

            { const a: nodestd.stream.Readable = file.outputStream; }
            file.end().then((x: number) => {});
        }

        namespace unpackTests {
            const { unpack } = zip;
            const { fs } = adone;
            type ZipFile<T> = adone.archive.zip.unpack.I.ZipFile<T>;
            type Entry<T> = adone.archive.zip.unpack.I.Entry<T>;

            {
                const a: ZipFile<string> = unpack.open("hello");
                { const b: boolean = a.isOpen; }
                { const b: number = a.entryCount; }
                { const b: string = a.comment; }
                a.close();
                a.readEntry().then((x) => {});
                a.on("entry", async (entry: Entry<string>) => {
                    { const a: number = entry.versionMadeBy; }
                    { const a: number = entry.versionNeededToExtract; }
                    { const a: number = entry.generalPurposeBitFlag; }
                    { const a: number = entry.compressionMethod; }
                    { const a: number = entry.lastModFileDate; }
                    { const a: number = entry.lastModFileTime; }
                    { const a: number = entry.crc32; }
                    { const a: number = entry.compressedSize; }
                    { const a: number = entry.uncompressedSize; }
                    { const a: number = entry.fileNameLength; }
                    { const a: number = entry.extraFieldLength; }
                    { const a: number = entry.fileCommentLength; }
                    { const a: number = entry.internalFileAttributes; }
                    { const a: number = entry.externalFileAttributes; }
                    { const a: number = entry.relativeOffsetOfLocalHeader; }
                    { const a: Array<{ id: number, data: Buffer }> = entry.extraFields; }
                    { const a: string = entry.fileComment; }
                    { const a: string = entry.fileName; }
                    { const a: adone.I.datetime.Datetime = entry.getLastModDate(); }
                    { const a: boolean = entry.isEncrypted(); }
                    { const a: boolean = entry.isCompressed(); }
                    { const stream: nodestd.stream.Readable = await a.openReadStream(entry); }
                    { const stream: nodestd.stream.Readable = await a.openReadStream(entry, {}); }
                    { const stream: nodestd.stream.Readable = await a.openReadStream(entry, { decompress: true }); }
                    { const stream: nodestd.stream.Readable = await a.openReadStream(entry, { decrypt: false }); }
                    { const stream: nodestd.stream.Readable = await a.openReadStream(entry, { end: 0 }); }
                    { const stream: nodestd.stream.Readable = await a.openReadStream(entry, { start: 0 }); }
                });
                a.on("end", () => {});
                a.on("close", () => {});
                a.on("error", (e: any) => {});
            }
            {
                const a: ZipFile<Buffer> = unpack.open("hello", { decodeStrings: false });
                { const b: Buffer = a.comment; }
                a.on("entry", (entry: Entry<Buffer>) => {
                    { const a: Buffer = entry.fileComment; }
                    { const a: Buffer = entry.fileName; }
                });
            }

            { const a: ZipFile<string> = unpack.open("hello", {}); }
            { const a: ZipFile<string> = unpack.open("hello", { autoClose: true }); }
            { const a: ZipFile<string> = unpack.open("hello", { lazyEntries: true }); }
            { const a: ZipFile<string> = unpack.open("hello", { validateEntrySizes: false }); }

            { const a: ZipFile<string> = unpack.fromBuffer(Buffer.from("123")); }
            { const a: ZipFile<string> = unpack.fromBuffer(Buffer.from("123"), {}); }
            { const a: ZipFile<Buffer> = unpack.fromBuffer(Buffer.from("123"), { decodeStrings: false }); }
            { const a: ZipFile<string> = unpack.fromBuffer(Buffer.from("123"), { lazyEntries: false }); }
            { const a: ZipFile<string> = unpack.fromBuffer(Buffer.from("123"), { validateEntrySizes: false }); }

            { const a: ZipFile<string> = unpack.fromFd(0); }
            { const a: ZipFile<string> = unpack.fromFd(0, {}); }
            { const a: ZipFile<string> = unpack.fromFd(0, { autoClose: false }); }
            { const a: ZipFile<Buffer> = unpack.fromFd(0, { decodeStrings: false }); }
            { const a: ZipFile<string> = unpack.fromFd(0, { lazyEntries: true }); }
            { const a: ZipFile<string> = unpack.fromFd(0, { validateEntrySizes: false }); }

            { const a: ZipFile<string> = unpack.fromRandomAccessReader(new fs.RandomAccessBufferReader(Buffer.from("asd")), 1); }
            { const a: ZipFile<string> = unpack.fromRandomAccessReader(new fs.RandomAccessBufferReader(Buffer.from("asd")), 1, {}); }
            { const a: ZipFile<string> = unpack.fromRandomAccessReader(new fs.RandomAccessBufferReader(Buffer.from("asd")), 1, { autoClose: false }); }
            { const a: ZipFile<Buffer> = unpack.fromRandomAccessReader(new fs.RandomAccessBufferReader(Buffer.from("asd")), 1, { decodeStrings: false }); }
            { const a: ZipFile<string> = unpack.fromRandomAccessReader(new fs.RandomAccessBufferReader(Buffer.from("asd")), 1, { lazyEntries: false }); }
            { const a: ZipFile<string> = unpack.fromRandomAccessReader(new fs.RandomAccessBufferReader(Buffer.from("asd")), 1, { validateEntrySizes: false }); }

            { const a: string | null = unpack.validateFileName("hello"); }
        }
    }
}
