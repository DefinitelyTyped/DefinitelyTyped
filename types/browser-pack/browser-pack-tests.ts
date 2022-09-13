import browserPack = require("browser-pack");

function packIt(opts: browserPack.Options) {
    const packOpts: browserPack.Options = {
        basedir: opts.basedir || "./",
        externalRequireName: opts.externalRequireName || "require",
        hasExports: opts.hasExports || false,
        prelude: opts.prelude || undefined,
        preludePath: opts.preludePath || undefined,
        raw: opts.raw || false,
        sourceMapPrefix: opts.sourceMapPrefix || '//#',
        sourceRoot: opts.sourceRoot || undefined,
        standalone: opts.standalone || undefined,
        standaloneModule: opts.standaloneModule || undefined,
    };

    const bpack1 = browserPack(); // 'opts' is optional
    const bpack2 = browserPack({ raw: true }); // options literal
    const bpack3 = browserPack(packOpts); // all options

    // return value is a stream
    const bpack4 = bpack1.pipe(bpack2);

    bpack3.on("error", (err) => {
        console.error("browser-pack error: ", err);
    });

    bpack4.end(() => {
        console.log("end");
    });
}

export = packIt;
