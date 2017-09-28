import browserPack = require("browser-pack");

module BrowserPackTest {

    export function packIt(opts?: browserPack.Options) {
        var packOpts: browserPack.Options = {
            basedir: opts.basedir || "./",
            externalRequireName: opts.externalRequireName || "require",
            hasExports: opts.hasExports || false,
            prelude: opts.prelude || undefined,
            preludePath: opts.preludePath || undefined,
            raw: opts.raw || false,
            sourceMapPrefix: opts.sourceMapPrefix || '//#',
            standalone: opts.standalone || undefined,
            standaloneModule: opts.standaloneModule || undefined,
        };

        var res = browserPack(); // 'opts' are optional
        var res2 = browserPack(packOpts);

        // ensure return value is a stream
        var res3 = res.pipe(res2);

        res.on("error", function (err: any) {
            console.error("browser-pack error: ", err);
        });
    }

}

export = BrowserPackTest;