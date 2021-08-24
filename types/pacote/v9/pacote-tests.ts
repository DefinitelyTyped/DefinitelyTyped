import { Readable } from 'stream';

import pacote = require('pacote');
import extract = require('pacote/extract');
import manifest = require('pacote/manifest');
import packument = require('pacote/packument');
import prefetch = require('pacote/prefetch');
import tarball = require('pacote/tarball');

const opts: pacote.Options = {
    dirPacker: _dir => new Readable(),
    'enjoy-by': new Date(1970, 1),
    'include-deprecated': false,
    'full-metadata': false,
    tag: 'latest',
    resolved: 'file://local/path',
    where: './',

    registry: 'https://registry.npmjs.org',
    cache: './cache',
};

pacote.manifest('pacote'); // $ExpectType Promise<Manifest>
pacote.manifest('pacote', opts); // $ExpectType Promise<Manifest>
manifest('pacote'); // $ExpectType Promise<Manifest>
manifest('pacote', opts); // $ExpectType Promise<Manifest>

pacote.packument('pacote'); // $ExpectType Promise<Packument>
pacote.packument('pacote', opts); // $ExpectType Promise<Packument>
packument('pacote'); // $ExpectType Promise<Packument>
packument('pacote', opts); // $ExpectType Promise<Packument>

pacote.extract('pacote', './'); // $ExpectType Promise<void>
pacote.extract('pacote', './', opts); // $ExpectType Promise<void>
extract('pacote', './'); // $ExpectType Promise<void>
extract('pacote', './', opts); // $ExpectType Promise<void>

pacote.tarball('pacote'); // $ExpectType Promise<Buffer>
pacote.tarball('pacote', opts); // $ExpectType Promise<Buffer>
pacote.tarball.stream('pacote'); // $ExpectType PassThrough
pacote.tarball.stream('pacote', opts); // $ExpectType PassThrough
pacote.tarball.toFile('pacote', './pacote.tgz'); // $ExpectType Promise<void>
pacote.tarball.toFile('pacote', './pacote.tgz', opts); // $ExpectType Promise<void>

tarball('pacote'); // $ExpectType Promise<Buffer>
tarball('pacote', opts); // $ExpectType Promise<Buffer>
tarball.stream('pacote'); // $ExpectType PassThrough
tarball.stream('pacote', opts); // $ExpectType PassThrough
tarball.toFile('pacote', './pacote.tgz'); // $ExpectType Promise<void>
tarball.toFile('pacote', './pacote.tgz', opts); // $ExpectType Promise<void>

pacote.prefetch('pacote'); // $ExpectType Promise<void>
pacote.prefetch('pacote', opts); // $ExpectType Promise<void>
prefetch('pacote'); // $ExpectType Promise<void>
prefetch('pacote', opts); // $ExpectType Promise<void>

pacote.clearMemoized(); // $ExpectType void
