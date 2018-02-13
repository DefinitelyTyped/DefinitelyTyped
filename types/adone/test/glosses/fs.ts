namespace fsTests {
    const { fs, std: { url: { URL } } } = adone;

    namespace readlinkTests {
        fs.readlink("file");
        fs.readlink(Buffer.from("file"));
        fs.readlink(new URL("file://file"));
        fs.readlink("file", {}).then((x: string) => x);
        fs.readlink("file", { encoding: "utf8" }).then((x: string) => x);
        fs.readlink("file", { encoding: null }).then((x: Buffer) => x);
        fs.readlink("file", null).then((x: Buffer) => x);
        fs.readlink("file", "hex").then((x: string) => x);
        fs.readlink("file").then((x: string) => x);
        fs.readlinkSync("file");
        fs.readlinkSync(Buffer.from("file"));
        fs.readlinkSync(new URL("file://file"));
        { const a: string = fs.readlinkSync("file", {}); }
        { const a: string = fs.readlinkSync("file", { encoding: "utf8" }); }
        { const a: Buffer = fs.readlinkSync("file", { encoding: null }); }
        { const a: Buffer = fs.readlinkSync("file", null); }
        { const a: string = fs.readlinkSync("file", "hex"); }
        { const a: string = fs.readlinkSync("file"); }
    }

    namespace unlinkTests {
        fs.unlink("file").then(() => {});
        fs.unlink(Buffer.from("file")).then(() => {});
        fs.unlink(new URL("file://file")).then(() => {});
        fs.unlinkSync("file");
        fs.unlinkSync(Buffer.from("file"));
        fs.unlinkSync(new URL("file://file"));
    }

    namespace utimesTests {
        fs.utimes("hello", 100, 100).then(() => {});
        fs.utimes(Buffer.from("hello"), 100, 100).then(() => {});
        fs.utimes(new URL("hello"), 100, 100).then(() => {});
        fs.utimes("hello", "100", "100").then(() => {});
        fs.utimes("hello", new Date(100), new Date(100)).then(() => {});

        fs.utimesSync("hello", 100, 100);
        fs.utimesSync(Buffer.from("hello"), 100, 100);
        fs.utimesSync(new URL("hello"), 100, 100);
        fs.utimesSync("hello", "100", "100");
        fs.utimesSync("hello", new Date(100), new Date(100));

        fs.utimesMillis("hello", 100, 100);
        fs.utimesMillis(Buffer.from("hello"), 100, 100);
        fs.utimesMillis(new URL("hello"), 100, 100);
    }

    namespace chmodTests {
        fs.chmod("file", 0o333).then(() => {});
        fs.chmod(Buffer.from("file"), 0o333).then(() => {});
        fs.chmod(new URL("file://file"), 0o333).then(() => {});
    }

    namespace chownTests {
        fs.chown("file", 0, 0).then(() => {});
        fs.chown(Buffer.from("file"), 0, 0).then(() => {});
        fs.chown(new URL("file://file"), 0, 0).then(() => {});
    }

    namespace rmdirTests {
        fs.rmdir("file").then(() => {});
        fs.rmdir(Buffer.from("file")).then(() => {});
        fs.rmdir(new URL("file://file")).then(() => {});
    }

    namespace readdirTests {
        fs.readdir("file");
        fs.readdir(Buffer.from("file"));
        fs.readdir(new URL("file://file"));
        fs.readdir("file").then((x: string[]) => {});
        fs.readdir("file", null).then((x: Buffer[]) => {});
        fs.readdir("file", {}).then((x: string[]) => {});
        fs.readdir("file", { encoding: "hex" }).then((x: string[]) => {});
        fs.readdir("file", { encoding: null }).then((x: Buffer[]) => {});

        fs.readdirSync("file");
        fs.readdirSync(Buffer.from("file"));
        fs.readdirSync(new URL("file://file"));
        const a: string[] = fs.readdirSync("file");
        const b: Buffer[] = fs.readdirSync("file", null);
        const c: string[] = fs.readdirSync("file", {});
        const d: string[] = fs.readdirSync("file", { encoding: "hex" });
        const e: Buffer[] = fs.readdirSync("file", { encoding: null });
    }

    namespace readdirpTests {
        fs.readdirp("hello").forEach((entry) => {
            { const a: string = entry.fullParentDir; }
            { const a: string = entry.fullPath; }
            { const a: string = entry.name; }
            { const a: string = entry.parentDir; }
            { const a: string = entry.path; }
            { const a: adone.fs.I.Stats = entry.stat; }
        });

        fs.readdirp(Buffer.from("hello"));
        fs.readdirp(new URL("hello"));
        fs.readdirp("hello", {});
        fs.readdirp("hello", { depth: 100 });
        fs.readdirp("hello", { directories: true });
        fs.readdirp("hello", { directoryFilter: () => true });
        fs.readdirp("hello", {
            directoryFilter: (entry) => {
                { const a: string = entry.fullParentDir; }
                { const a: string = entry.fullPath; }
                { const a: string = entry.name; }
                { const a: string = entry.parentDir; }
                { const a: string = entry.path; }
                { const a: adone.fs.I.Stats = entry.stat; }
                return true;
            }
        });
        fs.readdirp("hello", {
            directoryFilter: [(entry) => {
                { const a: string = entry.fullParentDir; }
                { const a: string = entry.fullPath; }
                { const a: string = entry.name; }
                { const a: string = entry.parentDir; }
                { const a: string = entry.path; }
                { const a: adone.fs.I.Stats = entry.stat; }
                return true;
            }]
        });
        fs.readdirp("hello", {
            directoryFilter: ["*"]
        });
        fs.readdirp("hello", {
            directoryFilter: "*"
        });
        fs.readdirp("hello", { fileFilter: () => true });
        fs.readdirp("hello", {
            fileFilter: (entry) => {
                { const a: string = entry.fullParentDir; }
                { const a: string = entry.fullPath; }
                { const a: string = entry.name; }
                { const a: string = entry.parentDir; }
                { const a: string = entry.path; }
                { const a: adone.fs.I.Stats = entry.stat; }
                return true;
            }
        });
        fs.readdirp("hello", {
            fileFilter: [(entry) => {
                { const a: string = entry.fullParentDir; }
                { const a: string = entry.fullPath; }
                { const a: string = entry.name; }
                { const a: string = entry.parentDir; }
                { const a: string = entry.path; }
                { const a: adone.fs.I.Stats = entry.stat; }
                return true;
            }]
        });
        fs.readdirp("hello", {
            fileFilter: ["*"]
        });
        fs.readdirp("hello", {
            fileFilter: "*"
        });
        fs.readdirp("hello", {
            files: false
        });
        fs.readdirp("hello", {
            lstat: true
        });
    }

    namespace lstatTests {
        fs.lstat("file").then((x: nodestd.fs.Stats) => {});
        fs.lstat(Buffer.from("file")).then((x: nodestd.fs.Stats) => {});
        fs.lstat(new URL("file://file")).then((x: nodestd.fs.Stats) => {});

        const a: nodestd.fs.Stats = fs.lstatSync("file");
        const b: nodestd.fs.Stats = fs.lstatSync(Buffer.from("file"));
        const c: nodestd.fs.Stats = fs.lstatSync(new URL("file://file"));
    }

    namespace statTests {
        fs.stat("file").then((x: nodestd.fs.Stats) => {});
        fs.stat(Buffer.from("file")).then((x: nodestd.fs.Stats) => {});
        fs.stat(new URL("file://file")).then((x: nodestd.fs.Stats) => {});

        const a: nodestd.fs.Stats = fs.statSync("file");
        const b: nodestd.fs.Stats = fs.statSync(Buffer.from("file"));
        const c: nodestd.fs.Stats = fs.statSync(new URL("file://file"));
    }

    namespace truncateTests {
        fs.truncate("file").then(() => {});
        fs.truncate(Buffer.from("file")).then(() => {});
        fs.truncate("file", 100).then(() => {});
    }

    namespace writeFileTests {
        fs.writeFile("file", "hello").then(() => {});
        fs.writeFile(Buffer.from("file"), "hello").then(() => {});
        fs.writeFile(10, "hello").then(() => {});
        fs.writeFile("file", Buffer.from("hello")).then(() => {});
        fs.writeFile("file", new Uint8Array(10)).then(() => {});
        fs.writeFile("file", "hello", {}).then(() => {});
        fs.writeFile("file", "hello", { encoding: "utf8" }).then(() => {});
        fs.writeFile("file", "hello", { mode: 0o755 }).then(() => {});
        fs.writeFile("file", "hello", { flag: "w" }).then(() => {});
    }

    namespace writeFileSyncTests {
        fs.writeFileSync("file", "hello");
        fs.writeFileSync(Buffer.from("file"), "hello");
        fs.writeFileSync(10, "hello");
        fs.writeFileSync("file", Buffer.from("hello"));
        fs.writeFileSync("file", new Uint8Array(10));
        fs.writeFileSync("file", "hello", {});
        fs.writeFileSync("file", "hello", { encoding: "utf8" });
        fs.writeFileSync("file", "hello", { mode: 0o755 });
        fs.writeFileSync("file", "hello", { flag: "w" });
    }

    namespace appendFileTests {
        fs.appendFile("file", "hello").then(() => {});
        fs.appendFile(Buffer.from("file"), "hello").then(() => {});
        fs.appendFile(10, "hello").then(() => {});
        fs.appendFile("file", Buffer.from("hello")).then(() => {});
        fs.appendFile("file", "hello", {}).then(() => {});
        fs.appendFile("file", "hello", { encoding: "utf8" }).then(() => {});
        fs.appendFile("file", "hello", { mode: 0o755 }).then(() => {});
        fs.appendFile("file", "hello", { flag: "w" }).then(() => {});

        fs.appendFileSync("file", "hello");
        fs.appendFileSync(Buffer.from("file"), "hello");
        fs.appendFileSync(10, "hello");
        fs.appendFileSync("file", Buffer.from("hello"));
        fs.appendFileSync("file", "hello", {});
        fs.appendFileSync("file", "hello", { encoding: "utf8" });
        fs.appendFileSync("file", "hello", { mode: 0o755 });
        fs.appendFileSync("file", "hello", { flag: "w" });
    }

    namespace accessTests {
        fs.access("file", fs.constants.F_OK).then(() => {});
        fs.access(Buffer.from("file"), fs.constants.F_OK).then(() => {});
        fs.access(new URL("file://file"), fs.constants.F_OK).then(() => {});
    }

    namespace accessSyncTests {
        fs.accessSync("file", fs.constants.F_OK);
        fs.accessSync(Buffer.from("file"), fs.constants.F_OK);
        fs.accessSync(new URL("file://file"), fs.constants.F_OK);
    }

    namespace symlinkTests {
        fs.symlink("file", "another_file").then(() => {});
        fs.symlink(Buffer.from("file"), "another_file").then(() => {});
        fs.symlink(new URL("file"), "another_file").then(() => {});
        fs.symlink("file", Buffer.from("another_file")).then(() => {});
        fs.symlink("file", new URL("another_file")).then(() => {});
        fs.symlink("file", "another_file", "dir").then(() => {});
        fs.symlink("file", "another_file", "file").then(() => {});
        fs.symlink("file", "another_file", "junction").then(() => {});
    }

    namespace rmTests {
        fs.rm("file").then((x) => {});
        fs.rm("file", {}).then((x) => {});
        fs.rm("file", { glob: true }).then((x) => {});
        fs.rm("file", { maxBusyTries: 3 }).then((x) => {});
        fs.rm("file", { emfileWait: 100 }).then((x) => {});
        fs.rm("file", { cwd: __dirname }).then((x) => {});
    }

    namespace rmEmptyTests {
        fs.rmEmpty("file").then(() => {});
        fs.rmEmpty("file", { cwd: "a" }).then(() => {});
        fs.rmEmpty("file", { filter: (filename) => filename.charCodeAt(0) === 100 }).then(() => {});
    }

    namespace ModeTests {
        const stat = fs.statSync("file");
        const mode = new fs.Mode(stat);
        { const a: number = mode.valueOf(); }
        { const a: boolean = mode.owner.read; }
        { const a: boolean = mode.owner.write; }
        { const a: boolean = mode.owner.execute; }
        { const a: boolean = mode.group.read; }
        { const a: boolean = mode.group.write; }
        { const a: boolean = mode.group.execute; }
        { const a: boolean = mode.others.read; }
        { const a: boolean = mode.others.write; }
        { const a: boolean = mode.others.execute; }
    }

    namespace FileTests {
        const { File } = fs;
        const f = new File("some", "file");
        f.encoding("utf8").encoding("buffer");
        f.stat().then((x: adone.fs.I.Stats) => {});
        { const a: adone.fs.I.Stats = f.statSync(); }
        f.lstat().then((x: adone.fs.I.Stats) => {});
        { const a: adone.fs.I.Stats = f.lstatSync(); }
        { const a: adone.fs.Mode = f.mode(); }
        { const a: string = f.path(); }
        { const a: string = f.normalizedPath(); }
        { const a: string = f.dirname(); }
        { const a: string = f.filename(); }
        { const a: string = f.extname(); }
        { const a: string = f.stem(); }
        { const a: string = f.relativePath("/tmp"); }
        { const a: string = f.relativePath(new fs.Directory("/tmp")); }
        f.exists().then((x: boolean) => {});
        f.create().then(() => {});
        f.create({}).then(() => {});
        f.create({ mode: 0o666 }).then(() => {});
        f.write("hello").then(() => {});
        f.write(Buffer.from("hello")).then(() => {});
        f.write("hello", {}).then(() => {});
        f.write("hello", { encoding: "utf8" }).then(() => {});
        f.write("hello", { mode: 0o666 }).then(() => {});
        f.write("hello", { flag: "w" }).then(() => {});
        f.append("hello").then(() => {});
        f.append(Buffer.from("hello")).then(() => {});
        f.append("hello", {}).then(() => {});
        f.append("hello", { encoding: "utf8" }).then(() => {});
        f.append("hello", { mode: 0o666 }).then(() => {});
        f.append("hello", { flag: "w" }).then(() => {});
        f.unlink().then(() => {});
        f.contents("utf16le").then((a: string) => {});
        f.contents("buffer").then((a: Buffer) => {});
        { const a: string = f.contentsSync("utf16le"); }
        { const a: Buffer = f.contentsSync("buffer"); }
        f.contentsStream("utf8").on("data", (chunk) => {});
        f.chmod(0o755).then(() => {});
        f.chmod(new fs.Mode(f.statSync())).then(() => {});
        { const a: adone.fs.SymbolicLinkFile = f.symbolicLink("another_file"); }
        { const a: adone.fs.SymbolicLinkFile = f.symbolicLink(new File("another_file")); }
        f.size().then((x: number) => {});
    }

    namespace DirectoryTests {
        const { Directory } = fs;

        const d = new Directory("some", "directory");
        { const a: string = d.dirname(); }
        { const a: string = d.filename(); }
        { const a: string = d.path(); }
        { const a: string = d.normalizedPath(); }
        { const a: string = d.relativePath("another_dir"); }
        { const a: string = d.relativePath(new Directory("another_dir")); }
        d.stat().then((x: adone.fs.I.Stats) => {});
        d.lstat().then((x: adone.fs.I.Stats) => {});
        d.exists().then((x: boolean) => {});
        d.create().then(() => {});
        d.create({}).then(() => {});
        d.create({ mode: 0o666 }).then(() => {});
        { const a: string = d.resolve("file", "path"); }
        { const a: adone.fs.Directory = d.getDirectory("nested", "directory"); }
        { const a: adone.fs.File = d.getFile("nested", "file"); }
        { const a: adone.fs.SymbolicLinkFile = d.getSymbolicLinkFile("nested", "filelink"); }
        { const a: adone.fs.SymbolicLinkDirectory = d.getSymbolicLinkDirectory("nester", "dirlink"); }
        d.addFile("a", "b", "c").then((x: adone.fs.File) => {});
        d.addFile("a", "b", "c", {}).then((x: adone.fs.File) => {});
        d.addFile("a", "b", "c", { contents: "hello" }).then((x: adone.fs.File) => {});
        d.addFile("a", "b", "c", { contents: Buffer.from("hello") }).then((x: adone.fs.File) => {});
        d.addFile("a", "b", "c", { encoding: "utf8" }).then((x: adone.fs.File) => {});
        d.addFile("a", "b", "c", { mode: 0o666 }).then((x: adone.fs.File) => {});
        d.addDirectory("a", "b", "c").then((x: adone.fs.Directory) => {});
        d.files().then((x: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory>) => {});
        { const a: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory> = d.filesSync(); }
        d.clean().then(() => {});
        d.unlink().then(() => {});
        d.unlink({ delay: 100 }).then(() => {});
        d.unlink({ retries: 100 }).then(() => {});
        d.find().then((x: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory>) => {});
        d.find({}).then((x: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory>) => {});
        d.find({ dirs: true }).then((x: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory>) => {});
        d.find({ files: false }).then((x: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory>) => {});
        { const a: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory> = d.findSync(); }
        { const a: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory> = d.findSync({}); }
        { const a: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory> = d.findSync({ dirs: true }); }
        { const a: Array<adone.fs.File | adone.fs.Directory | adone.fs.SymbolicLinkFile | adone.fs.SymbolicLinkDirectory> = d.findSync({ files: false }); }
        d.rename("name").then(() => {});
        d.rename(new Directory("name")).then(() => {});
        d.symbolicLink("another").then((x: adone.fs.SymbolicLinkDirectory) => {});
        d.copyTo("another").then(() => {});
        d.copyTo("another", {}).then(() => {});
        d.copyTo("another", { cwd: "/tmp" }).then(() => {});
        d.copyTo("another", { ignoreExisting: true }).then(() => {});
        d.copyFrom("another", { cwd: "/tmp" }).then(() => {});
        d.copyFrom("another", { ignoreExisting: true }).then(() => {});

        Directory.create("hello", "world").then((x: adone.fs.Directory) => {});
        Directory.createTmp().then((x: adone.fs.Directory) => {});
        Directory.createTmp({ dir: "/" }).then((x: adone.fs.Directory) => {});
        Directory.createTmp({ ext: ".exe" }).then((x: adone.fs.Directory) => {});
        Directory.createTmp({ name: "hello" }).then((x: adone.fs.Directory) => {});
        Directory.createTmp({ prefix: "/tmp/t-" }).then((x: adone.fs.Directory) => {});
        Directory.createTmp({ template: /XASDX/ }).then((x: adone.fs.Directory) => {});
        Directory.createTmp({ tries: 100500 }).then((x: adone.fs.Directory) => {});
    }

    namespace SymbolicLinkFileTests {
        const s = new fs.SymbolicLinkFile("path", "to", "link");
        s.realpath().then((x: string) => {});
        s.contents("utf8").then((x: string) => {});
        s.contents("buffer").then((x: Buffer) => {});
        { const a: string = s.contentsSync("utf8"); }
        { const a: Buffer = s.contentsSync("buffer"); }
        s.contentsStream("utf8").on("data", (chunk) => {});
    }

    namespace SymbolicLinkDirectoryTests {
        const s = new fs.SymbolicLinkDirectory("path", "to", "link");
        s.realpath().then((x: string) => {});
        s.unlink().then(() => {});
    }

    namespace RandomAccessFileTests {
        new fs.RandomAccessFile("hello", {});
        new fs.RandomAccessFile("hello", { appendable: true });
        new fs.RandomAccessFile("hello", { readable: true });
        new fs.RandomAccessFile("hello", { writable: true });
        new fs.RandomAccessFile("hello", { cwd: "/tmp" });
        new fs.RandomAccessFile("hello", { mtime: 100500 });
        new fs.RandomAccessFile("hello", { atime: 100500 });
        const raf = new fs.RandomAccessFile("hello");
        raf.read(100).then((x: Buffer) => {});
        raf.read(100, 100).then((x: Buffer) => {});
        raf.write("hello").then((x: number) => {});
        raf.write(Buffer.from("hello")).then((x: number) => {});
        raf.write("hello", 100).then((x: number) => {});
        raf.close().then(() => {});
        raf.end().then(() => {});
        raf.end({}).then(() => {});
        raf.end({ atime: 100500 }).then(() => {});
        raf.end({ mtime: 100500 }).then(() => {});
        raf.truncate(0).then(() => {});
        raf.unlink().then(() => {});
        fs.RandomAccessFile.open("hello").then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", {}).then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", { appendable: true }).then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", { readable: true }).then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", { writable: true }).then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", { cwd: "/tmp" }).then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", { mtime: 100500 }).then((x: adone.fs.RandomAccessFile) => {});
        fs.RandomAccessFile.open("hello", { atime: 100500 }).then((x: adone.fs.RandomAccessFile) => {});
    }

    namespace globTests {
        fs.glob("hello").forEach((x: string) => {});
        fs.glob(["hello"]).forEach((x: string) => {});
        fs.glob(["hello"]).forEach((x: string) => {});
        fs.glob(["hello"], { absolute: true }).forEach((x: string) => {});
        fs.glob(["hello"], { cache: new Map() }).forEach((x: string) => {});
        fs.glob(["hello"], { cwd: "/" }).forEach((x: string) => {});
        fs.glob(["hello"], { dot: true }).forEach((x: string) => {});
        fs.glob(["hello"], { follow: true }).forEach((x: string) => {});
        fs.glob(["hello"], { ignore: "a" }).forEach((x: string) => {});
        fs.glob(["hello"], { ignore: ["a"] }).forEach((x: string) => {});
        fs.glob(["hello"], { mark: true }).forEach((x: string) => {});
        fs.glob(["hello"], { matchBase: false }).forEach((x: string) => {});
        fs.glob(["hello"], { nobrace: true }).forEach((x: string) => {});
        fs.glob(["hello"], { nocase: true }).forEach((x: string) => {});
        fs.glob(["hello"], { nodir: true }).forEach((x: string) => {});
        fs.glob(["hello"], { noext: true }).forEach((x: string) => {});
        fs.glob(["hello"], { noglobstar: true }).forEach((x: string) => {});
        fs.glob(["hello"], { nomount: true }).forEach((x: string) => {});
        fs.glob(["hello"], { nonull: true }).forEach((x: string) => {});
        fs.glob(["hello"], { nosort: true }).forEach((x: string) => {});
        fs.glob(["hello"], { nounique: true }).forEach((x: string) => {});
        fs.glob(["hello"], { patternIndex: true }).forEach((x: { patternIndex: number, path: string }) => {});
        fs.glob(["hello"], { realpath: true }).forEach((x: string) => {});
        fs.glob(["hello"], { realpathCache: new Map() }).forEach((x: string) => {});
        fs.glob(["hello"], { root: "/" }).forEach((x: string) => {});
        fs.glob(["hello"], { silent: true }).forEach((x: string) => {});
        fs.glob(["hello"], { stat: true }).forEach((x: { stat: adone.fs.I.Stats, path: string }) => {});
        fs.glob(["hello"], { statCache: new Map() }).forEach((x: string) => {});
        fs.glob(["hello"], { strict: true }).forEach((x: string) => {});
        fs.glob(["hello"], { symlinks: new Map() }).forEach((x: string) => {});
        fs.glob(["hello"], { stat: true, patternIndex: true }).forEach((x: { path: string, patternIndex: number, stat: adone.fs.I.Stats }) => {});
        new fs.glob.Core("hello").forEach((x: string) => {});
        new fs.glob.Core(["hello"]).forEach((x: string) => {});
        new fs.glob.Core(["hello"]).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { absolute: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { cache: new Map() }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { cwd: "/" }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { dot: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { follow: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { ignore: "a" }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { ignore: ["a"] }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { mark: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { matchBase: false }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nobrace: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nocase: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nodir: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { noext: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { noglobstar: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nomount: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nonull: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nosort: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { nounique: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { patternIndex: true }).forEach((x: { patternIndex: number, path: string }) => {});
        new fs.glob.Core(["hello"], { realpath: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { realpathCache: new Map() }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { root: "/" }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { silent: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { stat: true }).forEach((x: { stat: adone.fs.I.Stats, path: string }) => {});
        new fs.glob.Core(["hello"], { statCache: new Map() }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { strict: true }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { symlinks: new Map() }).forEach((x: string) => {});
        new fs.glob.Core(["hello"], { stat: true, patternIndex: true }).forEach((x: { path: string, patternIndex: number, stat: adone.fs.I.Stats }) => {});
        new fs.glob.Glob("hello").on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello").on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { absolute: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { cache: new Map() }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { cwd: "/" }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { dot: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { follow: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { ignore: "a" }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { ignore: ["a"] }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { mark: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { matchBase: false }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nobrace: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nocase: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nodir: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { noext: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { noglobstar: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nomount: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nonull: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nosort: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { nounique: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { realpath: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { realpathCache: new Map() }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { root: "/" }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { silent: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { stat: true }).on("match", (path: string, stat: adone.fs.I.Stats) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { statCache: new Map() }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { strict: true }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", { symlinks: new Map() }).on("match", (path: string) => {}).on("end", (cb: string[]) => {});
        new fs.glob.Glob("hello", {}, (err: any, matches: string[]) => {}).on("end", () => {});
        new fs.glob.Glob("hello", (err: any, matches: string[]) => {}).on("end", () => {});
        new fs.glob.Glob("hello").pause();
        new fs.glob.Glob("hello").resume();
        new fs.glob.Glob("hello").abort();
    }

    namespace WatcherTests {
        new fs.Watcher();
        new fs.Watcher({});
        new fs.Watcher({ alwaysStat: true });
        new fs.Watcher({ atomic: true });
        new fs.Watcher({ awaitWriteFinish: true });
        new fs.Watcher({ awaitWriteFinish: { pollInterval: 100 } });
        new fs.Watcher({ awaitWriteFinish: { stabilityThreshold: 100 } });
        new fs.Watcher({ binaryInterval: 100 });
        new fs.Watcher({ cwd: "/tmp" });
        new fs.Watcher({ depth: 10 });
        new fs.Watcher({ disableGlobbing: true });
        new fs.Watcher({ followSymlinks: false });
        new fs.Watcher({ ignored: ["hello"] });
        new fs.Watcher({ ignoreInitial: true });
        new fs.Watcher({ ignorePermissionErrors: false });
        new fs.Watcher({ interval: 100 });
        new fs.Watcher({ persistent: false });
        new fs.Watcher({ useFsEvents: false });
        new fs.Watcher({ usePolling: false });
        const w = new fs.Watcher();
        { const a: adone.fs.Watcher = w.add("hello"); }
        { const a: adone.fs.Watcher = w.add(["hello"]); }
        {
            const watched = w.getWatched();
            const a: string[] = watched["/tmp"];
        }
        w.on("add", (path: string, stat: adone.fs.I.Stats) => {});
        w.on("addDir", (path: string, stat: adone.fs.I.Stats) => {});
        w.on("all", (event: adone.fs.I.Watcher.Event, path: string, stat: adone.fs.I.Stats) => {});
        w.on("raw", (event: string, path: string, details: object) => {});
    }

    namespace watchTests {
        { const a: adone.fs.Watcher = fs.watch("path"); }
        { const a: adone.fs.Watcher = fs.watch(["path"]); }
        { const a: adone.fs.Watcher = fs.watch("path", {}); }
        { const a: adone.fs.Watcher = fs.watch("path", { alwaysStat: true }); }
        { const a: adone.fs.Watcher = fs.watch("path", { atomic: true }); }
        { const a: adone.fs.Watcher = fs.watch("path", { awaitWriteFinish: true }); }
        { const a: adone.fs.Watcher = fs.watch("path", { awaitWriteFinish: {} }); }
        { const a: adone.fs.Watcher = fs.watch("path", { awaitWriteFinish: { pollInterval: 100 } }); }
        { const a: adone.fs.Watcher = fs.watch("path", { awaitWriteFinish: { stabilityThreshold: 100 } }); }
        { const a: adone.fs.Watcher = fs.watch("path", { binaryInterval: 100 }); }
        { const a: adone.fs.Watcher = fs.watch("path", { cwd: "/tmp" }); }
        { const a: adone.fs.Watcher = fs.watch("path", { depth: 10 }); }
        { const a: adone.fs.Watcher = fs.watch("path", { disableGlobbing: true }); }
        { const a: adone.fs.Watcher = fs.watch("path", { followSymlinks: false }); }
        { const a: adone.fs.Watcher = fs.watch("path", { ignored: ["hello"] }); }
        { const a: adone.fs.Watcher = fs.watch("path", { ignoreInitial: false }); }
        { const a: adone.fs.Watcher = fs.watch("path", { ignorePermissionErrors: false }); }
        { const a: adone.fs.Watcher = fs.watch("path", { interval: 100 }); }
        { const a: adone.fs.Watcher = fs.watch("path", { persistent: false }); }
        { const a: adone.fs.Watcher = fs.watch("path", { useFsEvents: false }); }
        { const a: adone.fs.Watcher = fs.watch("path", { usePolling: false }); }
    }

    namespace isTests {
        const { is } = fs;
        is.file("hello").then((x: boolean) => {});
        { const a: boolean = is.fileSync("hello"); }
        is.directory("hello").then((x: boolean) => {});
        { const a: boolean = is.directorySync("hello"); }
        is.executable("hello").then((x: boolean) => {});
        { const a: boolean = is.executableSync("hello"); }
    }

    namespace whichTests {
        const { which } = fs;

        which("hello").then((x: string) => {});
        which("hello", { nothrow: true }).then((x: string | null) => {});
        which("hello", { all: true }).then((x: string[]) => {});
        which("hello", { all: true, nothrow: true }).then((x: string[] | null) => {});
        which("hello", { colon: ":" }).then((x: string) => {});
        which("hello", { path: "/" }).then((x: string) => {});
        which("hello", { pathExt: "asd" }).then((x: string) => {});
    }

    namespace whichSyncTests {
        const { whichSync } = fs;

        { const a: string = whichSync("hello"); }
        { const a: string | null = whichSync("hello", { nothrow: true }); }
        { const a: string[] = whichSync("hello", { all: true }); }
        { const a: string[] | null = whichSync("hello", { all: true, nothrow: true }); }
        { const a: string = whichSync("hello", { colon: ":" }); }
        { const a: string = whichSync("hello", { path: "/" }); }
        { const a: string = whichSync("hello", { pathExt: "asd" }); }
    }

    namespace fdTests {
        fs.open("hello", "r+").then((x: number) => {});
        fs.open(Buffer.from("hello"), "r+").then((x: number) => {});
        fs.open(new URL("file://hello"), "r+").then((x: number) => {});
        { const a: number = fs.openSync("hello", "r+"); }
        { const a: number = fs.openSync(Buffer.from("hello"), "r+"); }
        { const a: number = fs.openSync(new URL("file://hello"), "r+"); }
        fs.close(10).then(() => {});
        fs.closeSync(10);
        fs.futimes(10, 100500, 100500).then(() => {});
        fs.futimesSync(10, 100500, 100500);
        fs.fstat(10).then((x: adone.fs.I.Stats) => {});
        { const a: adone.fs.I.Stats = fs.fstatSync(10); }
        fs.ftruncate(10).then(() => {});
        fs.ftruncate(10, 10).then(() => {});
        fs.ftruncateSync(10);
        fs.ftruncateSync(10, 10);
        fs.read(10, Buffer.alloc(10), 0, 10, 10).then((x: number) => {});
        { const a: number = fs.readSync(10, Buffer.alloc(10), 0, 10, 10); }
        fs.write(10, Buffer.alloc(10), 0, 10, 10).then((x: number) => {});
        { const a: number = fs.writeSync(10, Buffer.alloc(10), 0, 10, 10); }
        fs.write(10, "hello", 10, "utf8").then((x: number) => {});
        { const a: number = fs.writeSync(10, "hello", 10, "utf8"); }
        fs.fsync(10).then(()  => {});
        fs.fsyncSync(10);
        fs.fchown(10, 0, 0).then(() => {});
        fs.fchownSync(10, 0, 0);
        fs.fchmod(10, 0o755).then(() => {});
        fs.fchmodSync(10, 0o755);
        fs.seek(10, 100, 0).then((x: number) => {});
        fs.flock(10, "sh").then(() => {});
    }

    namespace constantsTests {
        // ?
        const a: number = fs.constants.F_OK;
    }

    namespace realpathTests {
        fs.realpath("hello").then((x: string) => {});
        fs.realpath("hello", "utf8").then((x: string) => {});
        fs.realpath("hello", "buffer").then((x: Buffer) => {});
        fs.realpath("hello", { encoding: "buffer" }).then((x: Buffer) => {});
        fs.realpath("hello", { encoding: "utf8" }).then((x: string) => {});
        fs.realpath("hello", {}).then((x: string) => {});
        fs.realpath(Buffer.from("hello")).then((x: string) => {});
        fs.realpath(new URL("file://hello")).then((x: string) => {});
    }

    namespace realpathSyncTests {
        { const a: string = fs.realpathSync("hello"); }
        { const a: string = fs.realpathSync("hello", "utf8"); }
        { const a: Buffer = fs.realpathSync("hello", "buffer"); }
        { const a: Buffer = fs.realpathSync("hello", { encoding: "buffer" }); }
        { const a: string = fs.realpathSync("hello", { encoding: "utf8" }); }
        { const a: string = fs.realpathSync("hello", {}); }
        { const a: string = fs.realpathSync(Buffer.from("hello")); }
        { const a: string = fs.realpathSync(new URL("file://hello")); }
    }

    namespace readFileTests {
        fs.readFile("hello").then((x: Buffer) => {});
        fs.readFile(Buffer.from("hello")).then((x: Buffer) => {});
        fs.readFile(new URL("file://hello")).then((x: Buffer) => {});
        fs.readFile("hello", "utf8").then((x: string) => {});
        fs.readFile("hello", null).then((x: Buffer) => {});
        fs.readFile("hello", {}).then((x: Buffer) => {});
        fs.readFile("hello", { check: true }).then((x: null | Buffer) => {});
        fs.readFile("hello", { check: true, encoding: "utf8" }).then((x: null | string) => {});
        fs.readFile("hello", { encoding: "utf8" }).then((x: string) => {});
        fs.readFile("hello", { encoding: null }).then((x: Buffer) => {});
        fs.readFile("hello", { flags: "r+" }).then((x: Buffer) => {});
    }

    namespace readFileSyncTests {
        { const a: Buffer = fs.readFileSync("hello"); }
        { const a: Buffer = fs.readFileSync(Buffer.from("hello")); }
        { const a: Buffer = fs.readFileSync(new URL("file://hello")); }
        { const a: string = fs.readFileSync("hello", "utf8"); }
        { const a: Buffer = fs.readFileSync("hello", null); }
        { const a: Buffer = fs.readFileSync("hello", {}); }
        { const a: null | Buffer = fs.readFileSync("hello", { check: true }); }
        { const a: null | string = fs.readFileSync("hello", { check: true, encoding: "utf8" }); }
        { const a: string = fs.readFileSync("hello", { encoding: "utf8" }); }
        { const a: Buffer = fs.readFileSync("hello", { encoding: null }); }
        { const a: Buffer = fs.readFileSync("hello", { flags: "r+" }); }
    }

    namespace readLinesTests {
        fs.readLines("hello").then((x: string[]) => {});
        fs.readLines(Buffer.from("hello")).then((x: string[]) => {});
        fs.readLines(new URL("file://hello")).then((x: string[]) => {});
        fs.readLines("hello", "utf8").then((x: string[]) => {});
        fs.readLines("hello", null).then((x: string[]) => {});
        fs.readLines("hello", {}).then((x: string[]) => {});
        fs.readLines("hello", { check: true }).then((x: null | string[]) => {});
        fs.readLines("hello", { encoding: "utf8" }).then((x: null | string[]) => {});
        fs.readLines("hello", { encoding: null }).then((x: null | string[]) => {});
        fs.readLines("hello", { flags: "r+" }).then((x: null | string[]) => {});
    }

    namespace readLinesSyncTests {
        { const a: string[] = fs.readLinesSync("hello"); }
        { const a: string[] = fs.readLinesSync(Buffer.from("hello")); }
        { const a: string[] = fs.readLinesSync(new URL("file://hello")); }
        { const a: string[] = fs.readLinesSync("hello", "utf8"); }
        { const a: string[] = fs.readLinesSync("hello", null); }
        { const a: string[] = fs.readLinesSync("hello", {}); }
        { const a: null | string[] = fs.readLinesSync("hello", { check: true }); }
        { const a: string[] = fs.readLinesSync("hello", { encoding: "utf8" }); }
        { const a: string[] = fs.readLinesSync("hello", { encoding: null }); }
        { const a: string[] = fs.readLinesSync("hello", { flags: "r+" }); }
    }

    namespace readWordsTests {
        fs.readWords("hello").then((x: string[]) => {});
        fs.readWords(Buffer.from("hello")).then((x: string[]) => {});
        fs.readWords(new URL("file://hello")).then((x: string[]) => {});
        fs.readWords("hello", "utf8").then((x: string[]) => {});
        fs.readWords("hello", null).then((x: string[]) => {});
        fs.readWords("hello", {}).then((x: string[]) => {});
        fs.readWords("hello", { check: true }).then((x: null | string[]) => {});
        fs.readWords("hello", { encoding: "utf8" }).then((x: null | string[]) => {});
        fs.readWords("hello", { encoding: null }).then((x: null | string[]) => {});
        fs.readWords("hello", { flags: "r+" }).then((x: null | string[]) => {});
    }

    namespace readWordsSyncTests {
        { const a: string[] = fs.readWordsSync("hello"); }
        { const a: string[] = fs.readWordsSync(Buffer.from("hello")); }
        { const a: string[] = fs.readWordsSync(new URL("file://hello")); }
        { const a: string[] = fs.readWordsSync("hello", "utf8"); }
        { const a: string[] = fs.readWordsSync("hello", null); }
        { const a: string[] = fs.readWordsSync("hello", {}); }
        { const a: null | string[] = fs.readWordsSync("hello", { check: true }); }
        { const a: string[] = fs.readWordsSync("hello", { encoding: "utf8" }); }
        { const a: string[] = fs.readWordsSync("hello", { encoding: null }); }
        { const a: string[] = fs.readWordsSync("hello", { flags: "r+" }); }
    }

    namespace existsTests {
        fs.exists("hello").then((x: boolean) => {});
        fs.exists(Buffer.from("hello")).then((x: boolean) => {});
        fs.exists(new URL("file://hello")).then((x: boolean) => {});
    }

    namespace existsSyncTests {
        { const a: boolean = fs.existsSync("hello"); }
        { const a: boolean = fs.existsSync(Buffer.from("hello")); }
        { const a: boolean = fs.existsSync(new URL("file://hello")); }
    }

    namespace mkdirTests {
        fs.mkdir("/path/to/some/dir").then(() => {});
        fs.mkdir("/path/to/some/dir", 0o755).then(() => {});

        fs.mkdirSync("/path/to/some/dir").then(() => {});
        fs.mkdirSync("/path/to/some/dir", 0o755).then(() => {});
    }

    namespace mkdirTests {
        fs.mkdirp("/path/to/some/dir").then(() => {});
        fs.mkdirp("/path/to/some/dir", 0o755).then(() => {});

        fs.mkdirpSync("/path/to/some/dir").then(() => {});
        fs.mkdirpSync("/path/to/some/dir", 0o755).then(() => {});
    }

    namespace copyTests {
        fs.copy("a", "b").then(() => {});
        fs.copy("a", "b", {});
        fs.copy("a", "b", { clobber: true }).then(() => {});
        fs.copy("a", "b", { overwrite: true }).then(() => {});
        fs.copy("a", "b", { filter: /asd/ }).then(() => {});
        fs.copy("a", "b", { filter: () => true }).then(() => {});
        fs.copy("a", "b", { filter: (a) => a.charCodeAt(0) === 100 }).then(() => {});
        fs.copy("a", "b", {
            transform(r, w, file) {
                file.atime.getDay();
                file.mtime.getDay();
                file.mode.toExponential();
                file.name.charCodeAt(0);
                file.stats.atimeMs.toExponential();
                r.pipe(w);
            }
        }).then(() => {});
    }

    namespace copyTests {
        fs.copyTo("a", "b").then(() => {});
        fs.copyTo("a", "b", {});
        fs.copyTo("a", "b", { cwd: "/tmp" }).then(() => {});
        fs.copyTo("a", "b", { ignoreExisting: true }).then(() => {});
    }

    namespace renameTests {
        fs.rename("a", "b").then(() => {});
        fs.rename("a", "b", {}).then(() => {});
        fs.rename("a", "b", { delay: 100 }).then(() => {});
        fs.rename("a", "b", { retries: 100 }).then(() => {});
    }

    namespace tailTests {
        fs.tail("file", 10).then((x: Buffer[]) => {});
        fs.tail("file", 10, {}).then((x: Buffer[]) => {});
        fs.tail("file", 10, { separator: "\n" }).then((x: Buffer[]) => {});
        fs.tail("file", 10, { chunkLength: 4096 }).then((x: Buffer[]) => {});
        fs.tail("file", 10, { pos: 10 }).then((x: Buffer[]) => {});
    }

    namespace statVFSTests {
        fs.statVFS("/tmp").then((x) => {
            { const a: number = x.f_namemax; }
            { const a: number = x.f_bsize; }
            { const a: number = x.f_frsize; }
            { const a: number = x.f_blocks; }
            { const a: number = x.f_bavail; }
            { const a: number = x.f_bfree; }
            { const a: number = x.f_files; }
            { const a: number = x.f_favail; }
            { const a: number = x.f_ffree; }
        });
    }

    namespace createReadStreamTests {
        fs.createReadStream("file").on("data", (chunk) => {});
        fs.createReadStream(Buffer.from("file")).on("data", (chunk) => {});
        fs.createReadStream(new URL("file://file")).on("data", (chunk) => {});
        fs.createReadStream("file", null).on("data", (chunk) => {});
        fs.createReadStream("file", "utf8").on("data", (chunk) => {});
        fs.createReadStream("file", { encoding: "usc2" }).on("data", (chunk) => {});
        fs.createReadStream("file", { encoding: null }).on("data", (chunk) => {});
        fs.createReadStream("file", { flags: "r+" }).on("data", (chunk) => {});
        fs.createReadStream(null, { fd: 10, autoClose: false }).on("data", (chunk) => {});
        fs.createReadStream(undefined, { fd: 10 }).on("data", (chunk) => {});
        fs.createReadStream(null, { fd: 10 }).on("data", (chunk) => {});
        fs.createReadStream("file", { mode: 0o666 }).on("data", (chunk) => {});
        fs.createReadStream("file", { start: 100 }).on("data", (chunk) => {});
        fs.createReadStream("file", { end: 110 }).on("data", (chunk) => {});
    }

    namespace createWriteStreamTests {
        fs.createWriteStream("file").on("data", (chunk) => {});
        fs.createWriteStream(Buffer.from("file")).on("data", (chunk) => {});
        fs.createWriteStream(new URL("file://file")).on("data", (chunk) => {});
        fs.createWriteStream("file", null).on("data", (chunk) => {});
        fs.createWriteStream("file", "utf8").on("data", (chunk) => {});
        fs.createWriteStream("file", { defaultEncoding: "usc2" }).on("data", (chunk) => {});
        fs.createWriteStream("file", { defaultEncoding: null }).on("data", (chunk) => {});
        fs.createWriteStream("file", { flags: "r+" }).on("data", (chunk) => {});
        fs.createWriteStream(null, { fd: 10, autoClose: false }).on("data", (chunk) => {});
        fs.createWriteStream(undefined, { fd: 10 }).on("data", (chunk) => {});
        fs.createWriteStream(null, { fd: 10 }).on("data", (chunk) => {});
        fs.createWriteStream("file", { mode: 0o666 }).on("data", (chunk) => {});
        fs.createWriteStream("file", { start: 100 }).on("data", (chunk) => {});
    }

    namespace tmpNameTests {
        fs.tmpName().then((x: string) => {});
        fs.tmpName({}).then((x: string) => {});
        fs.tmpName({ dir: "/" }).then((x: string) => {});
        fs.tmpName({ ext: ".exe" }).then((x: string) => {});
        fs.tmpName({ name: "ad" }).then((x: string) => {});
        fs.tmpName({ prefix: "/tmp/tmp-" }).then((x: string) => {});
        fs.tmpName({ template: /XXX/ }).then((x: string) => {});
        fs.tmpName({ tries: 100 }).then((x: string) => {});
    }

    namespace homeDirTests {
        const a: string = fs.homeDir();
    }

    namespace lookupTests {
        // TODO
    }

    namespace chownrTests {
        fs.chownr("hello", 1000, 1000).then(() => {});
    }

    namespace TailWatcherTests {
        new fs.TailWatcher("file");
        new fs.TailWatcher("file", {});
        new fs.TailWatcher("file", { encoding: "utf8" });
        new fs.TailWatcher("file", { follow: true });
        new fs.TailWatcher("file", { fromBeginning: true });
        new fs.TailWatcher("file", { fsWatchOptions: {} });
        new fs.TailWatcher("file", { pos: 100 });
        new fs.TailWatcher("file", { separator: "\n" });
        new fs.TailWatcher("file", { separator: /\n/ });
        new fs.TailWatcher("file", { useWatchFile: true });
        const tw = new fs.TailWatcher("file");
        tw.unwatch();
        tw.on("line", (line: string) => {
        });
    }

    namespace watchTailTests {
        const tw: adone.fs.TailWatcher = fs.watchTail("file");
        fs.watchTail("file", {});
        fs.watchTail("file", { encoding: "utf8" });
        fs.watchTail("file", { follow: true });
        fs.watchTail("file", { fromBeginning: true });
        fs.watchTail("file", { fsWatchOptions: {} });
        fs.watchTail("file", { pos: 100 });
        fs.watchTail("file", { separator: "\n" });
        fs.watchTail("file", { separator: /\n/ });
        fs.watchTail("file", { useWatchFile: true });
    }
}
