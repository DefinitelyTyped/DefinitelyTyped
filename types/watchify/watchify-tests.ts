import browserify = require("browserify");
import watchify = require("watchify");

module WatchifyTest {

    export function setupWatchify(srcPath: string, opts?: watchify.Options) {
        // new syntax
        var bfyWatched = browserify(srcPath, {
            cache: watchify.args.cache,
            packageCache: watchify.args.packageCache,
            plugin: [watchify],
        });

        var stream: NodeJS.ReadWriteStream;
        bfyWatched.pipeline.get("deps").push(stream);

        // old syntax
        var bfy = browserify(srcPath);

        var bfyWatched = watchify(bfy, {
            delay: opts.delay || 100,
            ignoreWatch: opts.ignoreWatch || false,
            poll: opts.poll || 0,
        });

        bfy.pipeline.get('wrap').on("error", function () { });
    }

}

export = WatchifyTest;