import depsSort = require("deps-sort");

function browserifyTest(opts: depsSort.Options) {
    const depsOpts: depsSort.Options = {
        index: opts != null && opts.index,
        dedupe: opts != null && opts.dedupe,
        expose: opts.expose || { id: "file.txt" }
    };

    const res = depsSort(); // 'opts' are optional
    res.pipe(depsSort(depsOpts));

    res.once("error", (err: any) => {
        console.error("module-deps error: ", err);
    });

    const inst: NodeJS.ReadWriteStream = depsSort({
        index: true,
        expose: { id: "file.txt" }
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
