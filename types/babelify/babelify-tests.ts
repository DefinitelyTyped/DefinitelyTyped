import babelify = require("babelify");

module BabelifyTest {

    export function whatDidTheEs6Say(srcPath: string, opts?: babelify.BabelifyOptions) {
        opts.extensions = opts.extensions || undefined;
        opts.sourceMapsAbsolute = opts.sourceMapsAbsolute || false;
        var dst: NodeJS.ReadWriteStream;

        babelify(""); // 'opts' are optional

        babelify(srcPath, opts).on("error", function (err: any) {
            console.error("babelify error: ", err);
        });

        babelify.configure(opts)(srcPath).pipe(dst);
    }

}

export = BabelifyTest;