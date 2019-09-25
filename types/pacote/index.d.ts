// Type definitions for pacote 9.5
// Project: https://github.com/npm/pacote#readme
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { Readable } from 'stream';
import npmFetch = require('npm-registry-fetch');

import extract = require('./extract');
import manifest = require('./manifest');
import packument = require('./packument');
import prefetch = require('./prefetch');
import tarball = require('./tarball');

export { extract, manifest, packument, prefetch, tarball };

/**
 * This utility function can be used to force pacote to release its references
 * to any memoized data in its various internal caches. It might help free some
 * memory.
 */
export function clearMemoized(): void;

export interface Manifest {
    name: string;
    version: string;
    dependencies: Record<string, string>;
    optionalDependencies: Record<string, string>;
    devDependencies: Record<string, string>;
    peerDependencies: Record<string, string>;
    bundleDependencies: false | string[];
    bin: Record<string, string> | null;
    _resolved: string;
    _integrity: string;
    _shrinkwrap: Record<string, unknown> | null;

    engines?: Record<string, string>;
    cpu?: string[];
    os?: string[];
    _id?: string;

    [key: string]: unknown;
}

export interface PackageDist {
    shasum: string;
    tarball: string;
    integrity?: string;
    fileCount?: number;
    unpackedSize?: number;
}

export interface Human {
    name: string;
    email?: string;
    url?: string;
}

export interface PackageVersion {
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    optionalDependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    directories: {};
    dist: PackageDist;
    _hasShrinkwrap: boolean;

    // Extra metadata which may be added by the registry:
    description?: string;
    main?: string;
    scripts?: Record<string, string>;
    repository?: {
        type: string;
        url: string;
        directory?: string;
    };
    engines?: Record<string, string>;
    keywords?: string[];
    author?: Human;
    contributors?: Human[];
    maintainers?: Human[];
    license?: string;
    homepage?: string;
    bugs?: { url: string };
    _id?: string;
    _nodeVersion?: string;
    _npmVersion?: string;
    _npmUser?: Human;

    [key: string]: unknown;
}

export interface Packument {
    name: string;
    'dist-tags': { latest: string; } & Record<string, string>;
    versions: Record<string, PackageVersion>;

    [key: string]: unknown;
}

export interface PacoteOptions {
    /**
     * Expects a function that takes a single argument, `dir`, and returns a
     * `ReadableStream` that outputs packaged tarball data. Used when creating
     * tarballs for package specs that are not already packaged, such as git and
     * directory dependencies. The default `opts.dirPacker` does not execute
     * `prepare` scripts, even though npm itself does.
     */
    dirPacker?: (dir: string) => Readable;
    /**
     * If passed in, will be used while resolving to filter the versions for
     * **registry dependencies** such that versions published **after**
     * `opts.enjoy-by` are not considered -- as if they'd never been published.
     */
    'enjoy-by'?: Date | string | number;
    /** Alias for `enjoy-by` */
    enjoyBy?: Date | string | number;
    /** Alias for `enjoy-by` */
    before?: Date | string | number;
    /**
     * If false, deprecated versions will be skipped when selecting from
     * registry range specifiers. If true, deprecations do not affect version
     * selection.
     */
    'include-deprecated'?: boolean;
    /** Alias for 'include-deprecated' */
    includeDeprecated?: boolean;
    /**
     * If `true`, the full packument will be fetched when doing metadata
     * requests. By default, pacote only fetches the summarized packuments, also
     * called "corgis".
     */
    'full-metadata'?: boolean;
    /**
     * Package version resolution tag. When processing registry spec ranges,
     * this option is used to determine what dist-tag to treat as "latest". For
     * more details about how `pacote` selects versions and how `tag` is
     * involved, see [the documentation for `npm-pick-manifest`](https://npm.im/npm-pick-manifest).
     */
    tag?: string;
    /** Alias for `tag` */
    defaultTag?: string;
    /**
     * When fetching tarballs, this option can be passed in to skip registry
     * metadata lookups when downloading tarballs. If the string is a `file:`
     * URL, pacote will try to read the referenced local file before attempting
     * to do any further lookups. This option does not bypass integrity checks
     * when `opts.integrity` is passed in.
     */
    resolved?: string;
    /**
     * Passed as an argument to [`npm-package-arg`](https://npm.im/npm-package-arg)
     * when resolving `spec` arguments. Used to determine what path to resolve
     * local path specs relatively from.
     */
    where?: string;
}

export type Options = PacoteOptions & npmFetch.Options;
