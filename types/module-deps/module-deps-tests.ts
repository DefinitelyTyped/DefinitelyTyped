import moduleDeps = require("module-deps");

function coreDepsTest() {
    const coreDeps: { [prop: string]: any } = {};
    const coreModules = {
        assert: "./assert.js",
        buffer: "./buffer.js",
        path: "./path.js"
    };

    const opts = {
        resolve: () => { },
        modules: coreModules,
        extensions: [".js", ".json"]
    };

    const s = moduleDeps(opts);

    s.on("data", (obj) => {
        for (const dep of Object.keys(obj.deps)) {
            if (dep in coreModules) {
                coreDeps[dep] = true;
            }
        }
    });
}

function rifiTest() {
    const md = moduleDeps({
        resolve: (id, parent, cb) => {
            const dependency = id.substr(1);
        },
        transform: [],
        globalTransform: [],
        cache: {}
    });

    md.once("error", (err) => {
        console.error(err);
    });
}

function browserifyTest(opts: moduleDeps.Options) {
    const packOpts: moduleDeps.Options = {
        basedir: opts.basedir || "./",
        externalRequireName: opts["externalRequireName"] || "require",
        hasExports: opts["hasExports"] || false,
        prelude: opts["prelude"] || undefined,
        preludePath: opts["preludePath"] || undefined,
        raw: opts["raw"] || false,
        sourceMapPrefix: opts["sourceMapPrefix"] || "//#",
        standalone: opts["standalone"] || undefined,
        standaloneModule: opts["standaloneModule"] || undefined,
    };

    const res = moduleDeps(); // 'opts' are optional
    const res2 = moduleDeps(packOpts);

    // ensure return value is a stream
    const res3 = res.pipe(res2);

    res.on("error", (err: any) => {
        console.error("module-deps error: ", err);
    });

    const inst: moduleDeps.ModuleDepsObject = moduleDeps({
        expose: { id: "file.txt" },
        extensions: [ ".js", ".json" ],
        transform: [],
        transformKey: ["browserify", "transform"],
        filter: (id) => {
            if (opts.filter && !opts.filter(id)) return false;
            if (["name"].indexOf(id) >= 0) return false;
            return true;
        },
        postFilter: (id, file, pkg) => {
            console.log("postFilter", id, file, pkg);
        },
        globalTransform: [],
        modules: {},
        resolve: (id, parent, cb) => {
            cb(null, "", {});
        }
    });

    inst.on("file", (file, id) => {
        console.log("file", file, id);
    });
    inst.on("package", (pkg) => {
        console.log("package", pkg);
    });
    inst.on("transform", (tr, file) => {
        console.log("transform", tr, file);
    });
}
