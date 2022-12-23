/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 *
 * Created by using code samples from https://github.com/npm/node-tar.
 */

import tar = require('tar');
import fs = require('fs');
import path = require('path');

/**
 * Quick Extract
 */
fs.createReadStream('path/to/file.tar').pipe(tar.extract('path/to/extract'));

/**
 * Use with events
 */
const readStream = fs.createReadStream('/path/to/file.tar');
const extract = tar.extract('/path/to/target');

readStream.pipe(extract);

extract.on('entry', entry => {
    // $ExpectType ReadEntry
    entry;
});

{
    const fixtures = path.resolve(__dirname, 'fixtures');
    const tars = path.resolve(fixtures, 'tars');
    const files = fs.readdirSync(tars);

    const options: tar.Pack.Options = {
        cwd: files,
        portable: true,
        // gzip: true,
        gzip: { flush: 1 },
        prefix: 'package/',
        filter: (path, stat): boolean => {
            // $ExpectType string
            path;
            // $ExpectType unknown
            stat;

            return true;
        },
        onwarn: (c, m, p) => {
            // $ExpectType string
            c;
            // $ExpectType string
            m;
            // $ExpectType Buffer | undefined
            p;
        },
        strict: false,
        preservePaths: true,
        noDirRecurse: true,
        follow: true,
    };

    // $ExpectType Pack
    const pack = new tar.Pack(options)
        .add('dir')
        .end()
        .end('')
        .end('one-byte.txt')
        .on('data', () => {})
        .on('data', c => {
            // $ExpectType string | ReadEntry
            c;
        })
        .on('end', () => {
            // $ExpectType string | ReadEntry
            new tar.Pack.Sync({
                ...options,
                linkCache: pack.linkCache,
                readdirCache: pack.readdirCache,
                statCache: pack.statCache,
            })
                .add('dir')
                .end()
                .read();
        });

    // $ExpectType void
    pack.warn('code', 'message');

    // $ExpectType boolean
    pack.write('path');
}

/**
 * Examples from tar docs:
 */

{
    // $ExpectType Promise<undefined>
    tar.c(
        {
            gzip: true,
            file: 'my-tarball.tgz',
        },
        ['some', 'files', 'and', 'folders'],
    ).then(() => undefined);

    // $ExpectType PackSync
    tar.c(
        {
            gzip: true,
            sync: true,
        },
        ['some', 'files', 'and', 'folders'],
    );

    // $ExpectType undefined
    tar.c(
        {
            gzip: true,
            file: 'my-tarball.tgz',
            sync: true,
        },
        ['some', 'files', 'and', 'folders'],
    );

    // $ExpectType Pack
    tar.c(
        {
            gzip: true,
        },
        ['some', 'files', 'and', 'folders'],
    );

    // $ExpectType WriteStream
    tar.c(
        {
            gzip: true,
        },
        ['some', 'files', 'and', 'folders'],
    ).pipe(fs.createWriteStream('my-tarball.tgz'));

    // $ExpectType WriteStream
    tar.c(
        {
            prefix: 'some-prefix',
        },
        ['some', 'files', 'and', 'folders'],
    ).pipe(fs.createWriteStream('my-tarball.tgz'));
}

{
    // $ExpectType Promise<undefined>
    tar.x(
        {
            strict: true,
            file: 'my-tarball.tgz',
        },
        ['some', 'files', 'and', 'folders'],
    ).then(() => undefined);

    // $ExpectType UnpackSync
    tar.x(
        {
            strict: true,
            sync: true,
        },
        ['some', 'files', 'and', 'folders'],
    );

    // $ExpectType undefined
    tar.x(
        {
            strict: true,
            file: 'my-tarball.tgz',
            sync: true,
        },
        ['some', 'files', 'and', 'folders'],
    );

    // $ExpectType Unpack
    tar.x(
        {
            strict: true,
        },
        ['some', 'files', 'and', 'folders'],
    );

    // $ExpectType WriteStream
    tar.x(
        {
            strict: true,
        },
        ['some', 'files', 'and', 'folders'],
    ).pipe(fs.createWriteStream('my-tarball.tgz'));

    // $ExpectType WriteStream
    tar.x(
        {
            strict: true,
        },
        ['some', 'files', 'and', 'folders'],
    ).pipe(fs.createWriteStream('my-tarball.tgz'));

    // $ExpectType Promise<undefined>
    tar.x({
        file: 'my-tarball.tgz',
        noChmod: true,
    }).then(() => undefined);
}

tar.t({
    file: 'my-tarball.tgz',
    onentry: entry => {
        // $ExpectType ReadEntry
        entry;
        // $ExpectType string
        entry.path;
        // $ExpectType number
        entry.size;
    },
});

fs.createReadStream('my-tarball.tgz')
    .pipe(tar.t())
    .on('entry', entry => {
        // $ExpectType ReadEntry
        entry;
    });

fs.createReadStream('my-tarball.tgz')
    .pipe(new tar.Parse())
    .on('entry', entry => {
        // $ExpectType ReadEntry
        entry;

        entry.on('data', data => {
            // $ExpectType Buffer
            data;
        });
    });

tar.list({
    file: 'my-tarball.tgz',
    onentry: entry => {
        // $ExpectType ReadEntry
        entry;

        entry.path.slice(1);
    },
}).then(() => console.log('after listing'));
