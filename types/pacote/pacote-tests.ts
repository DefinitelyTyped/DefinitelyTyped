import logger = require('npmlog');
import pacote = require('pacote');
import { Integrity } from 'ssri';

const opts: pacote.Options = {
    cache: './cache',
    where: './',
    resolved: 'file://local/path',
    integrity: new Integrity(),
    umask: 0o22,
    fmode: 0o666,
    dmode: 0o777,
    log: logger,
    perferOnline: false,
    before: new Date(1970, 1),
    defaultTag: 'latest',
    registry: 'https://registry.npmjs.org',
    fullMetadata: false,
};

pacote.resolve('pacote'); // $ExpectType Promise<string>
pacote.resolve('pacote', opts); // $ExpectType Promise<string>

pacote.manifest('pacote'); // $ExpectType Promise<ManifestResult>
pacote.manifest('pacote', opts); // $ExpectType Promise<ManifestResult>

pacote.packument('pacote'); // $ExpectType Promise<Packument>
pacote.packument('pacote', opts); // $ExpectType Promise<Packument>

pacote.extract('pacote', './'); // $ExpectType Promise<FetchResult>
pacote.extract('pacote', './', opts); // $ExpectType Promise<FetchResult>

pacote.tarball('pacote'); // $ExpectType Promise<Buffer & FetchResult>
pacote.tarball('pacote', opts); // $ExpectType Promise<Buffer & FetchResult>
pacote.tarball.file('pacote', './pacote.tgz'); // $ExpectType Promise<FetchResult>
pacote.tarball.file('pacote', './pacote.tgz', opts); // $ExpectType Promise<FetchResult>
pacote.tarball.stream('pacote', stream => Promise.resolve(stream.readable)); // $ExpectType Promise<boolean>
pacote.tarball.stream('pacote', stream => Promise.resolve(stream.readable), opts); // $ExpectType Promise<boolean>
