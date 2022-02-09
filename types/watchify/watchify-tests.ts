import browserify = require('browserify');
import watchify = require('watchify');
import fs = require('fs');

const setupWatchifyTest = (srcPath: string, opts: watchify.Options, stream: NodeJS.ReadWriteStream) => {
    // new syntax
    let bfyWatched = browserify(srcPath, {
        cache: watchify.args.cache,
        packageCache: watchify.args.packageCache,
        plugin: [watchify],
    });

    bfyWatched.pipeline.get('deps').push(stream);

    // old syntax
    const bfy = browserify(srcPath);

    bfyWatched = watchify(bfy, {
        delay: opts.delay || 100,
        ignoreWatch: opts.ignoreWatch || false,
        poll: opts.poll || 0,
    });

    bfy.pipeline.get('wrap').on('error', () => {});
};

const b = browserify({
    entries: ['path/to/entry.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify],
});

b.on('update', bundle);
b.on('update', ids => {});
b.on('bytes', bytes => {});
b.on('time', time => {});
b.on('log', msg => {});

bundle();

function bundle() {
    b.bundle()
        .on('error', console.error)
        .pipe(fs.createWriteStream('output.js'));
}
