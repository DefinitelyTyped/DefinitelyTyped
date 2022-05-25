import logger = require('npmlog');
import pacote = require('pacote');
import type { Packument } from 'pacote';
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
    packumentCache: new Map<string, Packument>(),
};

pacote.resolve('pacote'); // $ExpectType Promise<string>
pacote.resolve('pacote', opts); // $ExpectType Promise<string>

// tslint:disable-next-line:expect
pacote.manifest('pacote'); // $ExpectType Promise<AbbreviatedManifest & ManifestResult>
// tslint:disable-next-line:expect
pacote.manifest('pacote', opts); // $ExpectType Promise<AbbreviatedManifest & ManifestResult>
pacote.manifest('pacote', { before: new Date() }); // $ExpectType Promise<Manifest & ManifestResult>
pacote.manifest('pacote', { fullMetadata: true }); // $ExpectType Promise<Manifest & ManifestResult>

// tslint:disable-next-line:expect
pacote.packument('pacote'); // $ExpectType Promise<AbbreviatedPackument & PackumentResult>
// tslint:disable-next-line:expect
pacote.packument('pacote', opts); // $ExpectType Promise<AbbreviatedPackument & PackumentResult>
pacote.packument('pacote', { fullMetadata: true }); // $ExpectType Promise<Packument & PackumentResult>

pacote.extract('pacote', './'); // $ExpectType Promise<FetchResult>
pacote.extract('pacote', './', opts); // $ExpectType Promise<FetchResult>

pacote.tarball('pacote'); // $ExpectType Promise<Buffer & FetchResult>
pacote.tarball('pacote', opts); // $ExpectType Promise<Buffer & FetchResult>
pacote.tarball.file('pacote', './pacote.tgz'); // $ExpectType Promise<FetchResult>
pacote.tarball.file('pacote', './pacote.tgz', opts); // $ExpectType Promise<FetchResult>
pacote.tarball.stream('pacote', stream => Promise.resolve(stream.readable)); // $ExpectType Promise<boolean>
pacote.tarball.stream('pacote', stream => Promise.resolve(stream.readable), opts); // $ExpectType Promise<boolean>
