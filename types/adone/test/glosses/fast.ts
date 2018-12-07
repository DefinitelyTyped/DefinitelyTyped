namespace fastTests {
    const { fast } = adone;

    namespace FileTests {
        const { File } = fast;

        new File();
        new File({ base: "/" });
        new File({ contents: Buffer.from("hello") });
        new File({ contents: Buffer.from("hello") }).contents.fill(0);
        new File({ contents: adone.fs.createReadStream("hello") }).contents.pipe(process.stdout);
        new File({ contents: null }).contents === null;
        new File({ cwd: "/" });
        new File({ history: ["a", "b"] });
        new File({ path: "/a/b/c" });
        new File({ stat: adone.fs.statSync("hello") });
        new File({ symlink: "/a/b/c" });

        {
            const f = new File();
            f.base === "";
            f.base = "1";
            f.basename === "";
            f.basename = "2";
            f.contents === null;
            f.cwd === "";
            f.cwd = "1";
            f.dirname === "";
            f.dirname = "2";
            f.extname === "";
            f.extname = "3";
            f.history[0] === "";
            f.path === "";
            f.path = "2";
            f.relative === "";
            f.relative = "3";
            const s: adone.fs.I.Stats = f.stat;
            f.stem = "3";
            f.symlink = "5";
        }
        {
            const n = new File({ contents: null });
            n.clone({ contents: true }).contents === null;
            const b = new File({ contents: Buffer.from("1") });
            b.clone({ contents: true }).contents.fill(0);
            // todo stream
        }
        {
            const f = new File();
            const a: boolean = f.isBuffer();
            const b: boolean = f.isDirectory();
            const c: boolean = f.isNull();
            const d: boolean = f.isStream();
            const e: boolean = f.isSymbolic();
        }
    }

    namespace srcTests {
        const { src } = fast;

        src("hello");
        src(["hello"]);
        src("hello").forEach((x) => {
            x.isBuffer();
            x.contents.fill(0);
        });
        src("hello", { buffer: true }).forEach((x) => {
            x.isBuffer();
            x.contents.fill(0);
        });
        src("hello", { read: true, buffer: true }).forEach((x) => {
            x.isBuffer();
            x.contents.fill(0);
        });
        src("hello", { stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        src("hello", { read: true, stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        src("hello", { read: true, stream: true, buffer: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        src("hello", { read: false }).forEach((x) => {
            const a: null = x.contents;
        });
        src("hello", { read: false, stream: true }).forEach((x) => {
            const a: null = x.contents;
        });
        src("hello", { read: false, stream: true, buffer: true }).forEach((x) => {
            const a: null = x.contents;
        });
        src("hello", { cwd: "/" }).forEach((x) => {
            x.contents.fill(0);
        });

        src("hello").dest("hello");
        src("hello").dest("hello", { cwd: "/" });
        src("hello").dest("hello", { flag: "w+" });
        src("hello").dest("hello", { mode: 0o555 });
        src("hello").dest("hello", { originMode: true });
        src("hello").dest("hello", { originOwner: true });
        src("hello").dest("hello", { originTimes: true });
        src("hello").dest("hello", { produceFiles: true });
        src("hello").dest((file) => {
            file.contents.fill(0);
            return "a";
        });
        src("hello", { stream: true }).dest((file) => {
            file.contents.pipe(process.stdout);
            return "a";
        });
    }

    namespace watchTests {
        const { watch } = fast;
        watch("hello").forEach((x) => {
            x.contents.fill(0);
        });
        watch(["hello"]).forEach((x) => {
            x.contents.fill(0);
        });
        watch("hello", { read: false }).forEach((x) => {
            const a: null = x.contents;
        });
        watch("hello", { read: false, stream: true }).forEach((x) => {
            const a: null = x.contents;
        });
        watch("hello", { read: false, buffer: true }).forEach((x) => {
            const a: null = x.contents;
        });
        watch("hello", { stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        watch("hello", { read: true, stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        watch("hello", { read: true, stream: true, buffer: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        watch("hello", { alwaysStat: true });
        watch("hello", { followSymlinks: true });
    }

    namespace mapTests {
        const { map } = fast;

        map({
            from: "a",
            to: "b"
        }).forEach((x) => {
            x.contents.fill(0);
        });
        map([{
            from: "a",
            to: "b"
        }]).forEach((x) => {
            x.contents.fill(0);
        });
        map([]).dest({ cwd: "/" });
        map([]).dest({ flag: "w+" });
        map([]).dest({ mode: 0o677 });
        map([]).dest({ originMode: true });
        map([]).dest({ originOwner: false });
        map([]).dest({ originTimes: true });
        map([]).dest({ produceFiles: true });
        map([], { read: false }).forEach((x) => {
            const a: null = x.contents;
        });
        map([], { read: false, stream: true }).forEach((x) => {
            const a: null = x.contents;
        });
        map([], { read: false, stream: true, buffer: true }).forEach((x) => {
            const a: null = x.contents;
        });
        map([], { stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        map([], { stream: true, buffer: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        map([], { read: true, stream: true, buffer: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        map([], { buffer: true }).forEach((x) => {
            x.contents.fill(0);
        });
    }

    namespace watchMapTests {
        const { watchMap } = fast;

        watchMap({
            from: "a",
            to: "b"
        }).forEach((x) => {
            x.contents.fill(0);
        });
        watchMap([{
            from: "a",
            to: "b"
        }]).forEach((x) => {
            x.contents.fill(0);
        });
        watchMap([], { read: false }).forEach((x) => {
            const a: null = x.contents;
        });
        watchMap([], { stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        watchMap([], { read: true, stream: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        watchMap([], { read: true, stream: true, buffer: true }).forEach((x) => {
            x.contents.pipe(process.stdout);
        });
        watchMap([], { buffer: true }).forEach((x) => {
            x.contents.fill(0);
        });
        watchMap([], { read: true, buffer: true }).forEach((x) => {
            x.contents.fill(0);
        });
        watchMap([], { read: false, stream: true }).forEach((x) => {
            const a: null = x.contents;
        });
        watchMap([], { read: false, stream: true, buffer: true }).forEach((x) => {
            const a: null = x.contents;
        });
    }

    namespace pluginsTests {
        const { src } = fast;
        namespace compressorTests {
            src("hello").compress("gz");
            src("hello").compress("brotli");
            src("hello").compress("deflate");
            src("hello").compress("lzma");
            src("hello").compress("snappy");
            src("hello").compress("xz");
            src("hello").compress("gz", {});
            src("hello").compress("gz", { rename: true });
            src("hello").decompress("gz");
            src("hello").decompress("brotli");
            src("hello").decompress("deflate");
            src("hello").decompress("lzma");
            src("hello").decompress("snappy");
            src("hello").decompress("xz");
            src("hello").decompress("gz", {});
        }

        namespace archiveTests {
            src("hello").pack("tar");
            src("hello").pack("zip");
            src("hello").pack("tar", {});
            src("hello").unpack("tar");
            src("hello").unpack("zip");
            src("hello").unpack("tar", {});
        }

        namespace transpileTests {
            src("hello").transpile({}); // TODO
        }

        namespace renameTests {
            src("hello").rename("opa");
            src("hello").rename((obj) => {
                const a: string = obj.basename;
                const b: string = obj.dirname;
                const c: string = obj.extname;
                return "asd";
            });
            src("hello").rename({
                dirname: "1"
            });
            src("hello").rename({
                basename: "1"
            });
            src("hello").rename({
                extname: "1"
            });
            src("hello").rename({
                prefix: "1"
            });
        }

        namespace concatTests {
            src("hello").concat("file");
            src("hello").concat({
                path: "file"
            });
            src("hello").concat("file", {});
            src("hello").concat("file", { newLine: "\n" });
        }

        namespace sourcemapsTests {
            src("hello").sourcemapsInit();
            src("hello").sourcemapsInit({});
            src("hello").sourcemapsInit({ loadMaps: true });
            src("hello").sourcemapsInit({ identityMap: true });
            src("hello").sourcemapsInit({ largeFile: true });
            src("hello").sourcemapsWrite({});
            src("hello").sourcemapsWrite({ addComment: true });
            src("hello").sourcemapsWrite({ charset: "utf8" });
            src("hello").sourcemapsWrite({ clone: { deep: true } });
            src("hello").sourcemapsWrite({ clone: { contents: true } });
            src("hello").sourcemapsWrite({ destPath: "../" });
            src("hello").sourcemapsWrite({ includeContent: true });
            src("hello").sourcemapsWrite({ mapFile: (f) => f.contents.fill(0) && f.path });
            src("hello").sourcemapsWrite({ mapSources: (path: string, file) => file.contents.fill(0) && path });
            src("hello").sourcemapsWrite({ mapSourcesAbsolute: true });
            src("hello").sourcemapsWrite({ sourceMappingURL: (file) => file.contents.fill(0) && file.path });
            src("hello").sourcemapsWrite({ sourceMappingURLPrefix: "haha" });
            src("hello").sourcemapsWrite({ sourceMappingURLPrefix: (file) => file.contents.fill(0) && file.path });
            src("hello").sourcemapsWrite({ sourceRoot: "../" });
            src("hello").sourcemapsWrite("../", {});
            src("hello").sourcemapsWrite("../", { addComment: true });
            src("hello").sourcemapsWrite("../", { charset: "utf8" });
            src("hello").sourcemapsWrite("../", { clone: { deep: true } });
            src("hello").sourcemapsWrite("../", { clone: { contents: true } });
            src("hello").sourcemapsWrite("../", { destPath: "../" });
            src("hello").sourcemapsWrite("../", { includeContent: true });
            src("hello").sourcemapsWrite("../", { mapFile: (f) => f.contents.fill(0) && f.path });
            src("hello").sourcemapsWrite("../", { mapSources: (path: string, file) => file.contents.fill(0) && path });
            src("hello").sourcemapsWrite("../", { mapSourcesAbsolute: true });
            src("hello").sourcemapsWrite("../", { sourceMappingURL: (file) => file.contents.fill(0) && file.path });
            src("hello").sourcemapsWrite("../", { sourceMappingURLPrefix: "haha" });
            src("hello").sourcemapsWrite("../", { sourceMappingURLPrefix: (file) => file.contents.fill(0) && file.path });
            src("hello").sourcemapsWrite("../", { sourceRoot: "../" });
        }

        namespace wrapTests {
            src("hello").wrap("template");
            src("hello").wrap({ src: "template path" });
            src("hello").wrap((data) =>  "123");
            src("hello").wrap("template", (file) => file.contents.fill(0) && { a: 1 });
            src("hello").wrap("template", { a: 1 });
            src("hello").wrap("template", undefined, { escape: /aasd/ });
            src("hello").wrap("template", undefined, { evaluate: /aa/ });
            src("hello").wrap("template", undefined, { imports: {} });
            src("hello").wrap("template", undefined, { interpolate: /a/ });
            src("hello").wrap("template", undefined, { parse: true });
            src("hello").wrap("template", undefined, { sourceURL: ".a" });
            src("hello").wrap("template", undefined, { variable: "a" });
            src("hello").wrap("template", undefined, (file) => (file.contents.fill(0) && { parse: true }));
        }

        namespace replaceTests {
            src("hello").replace("a", "b");
            src("hello").replace("a", (x: string) => "b");
            src("hello").replace(/a/, "b");
            src("hello").replace([/a/], ["b"]);
            src("hello").replace([/a/], ["b"]);
            src("hello").replace(["a", /a/], ["b", "e"]);
            src("hello").replace(["a", /a/], [(x: string) => "b", "e"]);
        }

        namespace revisionHashTests {
            src("hello").revisionHash();
            src("hello").revisionHash({
                manifest: {}
            });
            src("hello").revisionHash({
                manifest: {
                    merge: true
                }
            });
            src("hello").revisionHash({
                manifest: {
                    path: "a"
                }
            });
            src("hello").revisionHash({
                manifest: {
                    transformer: JSON
                }
            });
            src("hello").revisionHash({
                manifest: {
                    transformer: {
                        parse: () => ({}),
                        stringify: () => ""
                    }
                }
            });
        }

        namespace revisionHashReplaceTests {
            src("hello").revisionHashReplace({
                canonicalUris: true
            });
            src("hello").revisionHashReplace({
                prefix: "hello"
            });
            src("hello").revisionHashReplace({
                replaceExtensions: [".js"]
            });
            src("hello").revisionHashReplace({
                manifest: src("hello")
            });
            (async () => {
                src("hello").revisionHashReplace({
                    manifest: await src("hello")
                });
            })();
            src("hello").revisionHashReplace({
                modifyReved: (p: string) => p
            });
            src("hello").revisionHashReplace({
                modifyUnreved: (p: string) => p
            });
        }

        namespace chmodTests {
            src("hello").chmod(0o777);
            src("hello").chmod({
                group: {
                    read: true
                }
            });
            src("hello").chmod({
                group: {
                    write: true
                }
            });
            src("hello").chmod({
                group: {
                    execute: true
                }
            });
            src("hello").chmod({
                owner: {
                    read: true
                }
            });
            src("hello").chmod({
                owner: {
                    write: true
                }
            });
            src("hello").chmod({
                owner: {
                    execute: true
                }
            });
            src("hello").chmod({
                others: {
                    read: true
                }
            });
            src("hello").chmod({
                others: {
                    write: true
                }
            });
            src("hello").chmod({
                others: {
                    execute: true
                }
            });
            src("hello").chmod(undefined, 0o777);
            src("hello").chmod(undefined, {
                group: {
                    read: true
                }
            });
            src("hello").chmod(undefined, {
                group: {
                    write: true
                }
            });
            src("hello").chmod(undefined, {
                group: {
                    execute: true
                }
            });
            src("hello").chmod(undefined, {
                owner: {
                    read: true
                }
            });
            src("hello").chmod(undefined, {
                owner: {
                    write: true
                }
            });
            src("hello").chmod(undefined, {
                owner: {
                    execute: true
                }
            });
            src("hello").chmod(undefined, {
                others: {
                    read: true
                }
            });
            src("hello").chmod(undefined, {
                others: {
                    write: true
                }
            });
            src("hello").chmod(undefined, {
                others: {
                    execute: true
                }
            });
        }

        namespace notifyTests {
            src("hello").notify("hello");
            src("hello").notify({
                appName: "a"
            });
            src("hello").notify({
                console: true
            });
            src("hello").notify({
                debounce: {
                    timeout: 100
                }
            });
            src("hello").notify({
                debounce: 100
            });
            src("hello").notify({
                debounce: {
                    timeout: 100,
                    leading: true
                }
            });
            src("hello").notify({
                debounce: {
                    timeout: 100,
                    trailing: true
                }
            });
            src("hello").notify({
                emitError: true
            });
            src("hello").notify({
                filter: (file) => file.contents.fill(0) && true
            });
            src("hello").notify({
                gui: true
            });
            src("hello").notify({
                host: "192.168.1.1"
            });
            src("hello").notify({
                message: "hello"
            });
            src("hello").notify({
                message: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notify({
                notifier: {} // TODO
            });
            src("hello").notify({
                onLast: true
            });
            src("hello").notify({
                open: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notify({
                open: "hello"
            });
            src("hello").notify({
                port: 31337
            });
            src("hello").notify({
                subtitle: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notify({
                subtitle: "hello"
            });
            src("hello").notify({
                templateOptions: {}
            });
            src("hello").notify({
                title: "hello"
            });
            src("hello").notify({
                title: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notifyError("hello");
            src("hello").notifyError({
                appName: "a"
            });
            src("hello").notifyError({
                console: true
            });
            src("hello").notifyError({
                debounce: {
                    timeout: 100
                }
            });
            src("hello").notifyError({
                debounce: 100
            });
            src("hello").notifyError({
                debounce: {
                    timeout: 100,
                    leading: true
                }
            });
            src("hello").notifyError({
                debounce: {
                    timeout: 100,
                    trailing: true
                }
            });
            src("hello").notifyError({
                emitError: true
            });
            src("hello").notifyError({
                filter: (file) => file.contents.fill(0) && true
            });
            src("hello").notifyError({
                gui: true
            });
            src("hello").notifyError({
                host: "192.168.1.1"
            });
            src("hello").notifyError({
                message: "hello"
            });
            src("hello").notifyError({
                message: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notifyError({
                notifier: {} // TODO
            });
            src("hello").notifyError({
                onLast: true
            });
            src("hello").notifyError({
                open: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notifyError({
                open: "hello"
            });
            src("hello").notifyError({
                port: 31337
            });
            src("hello").notifyError({
                subtitle: (file) => file.contents.fill(0) && file.path
            });
            src("hello").notifyError({
                subtitle: "hello"
            });
            src("hello").notifyError({
                templateOptions: {}
            });
            src("hello").notifyError({
                title: "hello"
            });
            src("hello").notifyError({
                title: (file) => file.contents.fill(0) && file.path
            });

            fast.plugin.notify.onError("hello");
            fast.plugin.notify.onError({
                appName: "a"
            });
            fast.plugin.notify.onError({
                console: true
            });
            fast.plugin.notify.onError({
                debounce: {
                    timeout: 100
                }
            });
            fast.plugin.notify.onError({
                debounce: 100
            });
            fast.plugin.notify.onError({
                debounce: {
                    timeout: 100,
                    leading: true
                }
            });
            fast.plugin.notify.onError({
                debounce: {
                    timeout: 100,
                    trailing: true
                }
            });
            fast.plugin.notify.onError({
                emitError: true
            });
            fast.plugin.notify.onError({
                filter: (file) => true
            });
            fast.plugin.notify.onError({
                gui: true
            });
            fast.plugin.notify.onError({
                host: "192.168.1.1"
            });
            fast.plugin.notify.onError({
                message: "hello"
            });
            fast.plugin.notify.onError({
                message: (file) => file.path
            });
            fast.plugin.notify.onError({
                notifier: {} // TODO
            });
            fast.plugin.notify.onError({
                onLast: true
            });
            fast.plugin.notify.onError({
                open: (file) => file.path
            });
            fast.plugin.notify.onError({
                open: "hello"
            });
            fast.plugin.notify.onError({
                port: 31337
            });
            fast.plugin.notify.onError({
                subtitle: (file) => file.path
            });
            fast.plugin.notify.onError({
                subtitle: "hello"
            });
            fast.plugin.notify.onError({
                templateOptions: {}
            });
            fast.plugin.notify.onError({
                title: "hello"
            });
            fast.plugin.notify.onError({
                title: (file) => file.path
            });
        }
    }
}
