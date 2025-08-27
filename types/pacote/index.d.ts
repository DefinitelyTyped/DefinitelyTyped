/// <reference types="node" />

import npmFetch = require("npm-registry-fetch");
import { Logger } from "npmlog";
import { Integrity } from "ssri";
import { Transform } from "stream";

export interface PackageDist {
    /**
     * The url to the associated package artifact. (Copied by Pacote to
     * `manifest._resolved`.)
     */
    tarball: string;
    /**
     * The integrity SRI string for the artifact. This may not be present for
     * older packages on the npm registry. (Copied by Pacote to
     * `manifest._integrity`.)
     */
    integrity?: string | undefined;
    /**
     * Legacy integrity value. Hexadecimal-encoded sha1 hash. (Converted to an
     * SRI string and copied by Pacote to `manifest._integrity` when
     * `dist.integrity` is not present.)
     */
    shasum?: string | undefined;
    /**
     * Number of files in the tarball.
     */
    fileCount?: number | undefined;
    /**
     * Size on disk of the package when unpacked.
     */
    unpackedSize?: number | undefined;
    /**
     * A signature of the package by the
     * [`npmregistry`](https://keybase.io/npmregistry) Keybase account.
     * (Obviously only present for packages published to
     * https://registry.npmjs.org.)
     */
    "npm-signature"?: string | undefined;
}

export interface Person {
    name: string;
    email?: string | undefined;
    url?: string | undefined;
}

/**
 * Properties that can appear on both packuments and manifests. These usually
 * only appear when requesting with `fullMetadata = true`.
 */
export interface CommonMetadata {
    author?: Person | undefined;
    bugs?: {
        url?: string | undefined;
        email?: string | undefined;
    } | undefined;
    contributors?: Person[] | undefined;
    homepage?: string | undefined;
    keywords?: string[] | undefined;
    license?: string | undefined;
    maintainers: Person[];
    readme?: string | undefined;
    readmeFilename?: string | undefined;
    repository?: {
        type?: string | undefined;
        url?: string | undefined;
        directory?: string | undefined;
    } | undefined;
    users?: Record<string, boolean> | undefined;
}

/**
 * A `manifest` is similar to a `package.json` file. However, it has a few
 * pieces of extra metadata, and sometimes lacks metadata that is inessential to
 * package installation.
 */
export interface Manifest extends CommonMetadata {
    name: string;
    version: string;
    dist: PackageDist;

    // These properties usually appear in all requests.
    dependencies?: Record<string, string> | undefined;
    optionalDependencies?: Record<string, string> | undefined;
    devDependencies?: Record<string, string> | undefined;
    peerDependencies?: Record<string, string> | undefined;
    bundledDependencies?: false | string[] | undefined;

    bin?: Record<string, string> | undefined;
    directories?: Record<string, string> | undefined;
    engines?: Record<string, string> | undefined;

    // These properties usually only appear when fullMetadata = true.
    browser?: string | undefined;
    config?: Record<string, unknown> | undefined;
    cpu?: string[] | undefined;
    description?: string | undefined;
    files?: string[] | undefined;
    main?: string | undefined;
    man?: string | string[] | undefined;
    os?: string[] | undefined;
    publishConfig?: Record<string, unknown> | undefined;
    scripts?: Record<string, string> | undefined;

    _id: string;
    _nodeVersion: string;
    _npmVersion: string;
    _npmUser: Person;

    // Non-standard properties from package.json may also appear.
    [key: string]: unknown;
}

export type AbbreviatedManifest = Pick<
    Manifest,
    | "name"
    | "version"
    | "bin"
    | "directories"
    | "dependencies"
    | "devDependencies"
    | "peerDependencies"
    | "bundledDependencies"
    | "optionalDependencies"
    | "engines"
    | "dist"
    | "deprecated"
>;

/**
 * A packument is the top-level package document that lists the set of manifests
 * for available versions for a package.
 *
 * When a packument is fetched with `accept: application/vnd.npm.install-v1+json`
 * in the HTTP headers, only the most minimum necessary metadata is returned.
 * Additional metadata is returned when fetched with only `accept: application/json`.
 */
export interface Packument extends CommonMetadata {
    name: string;
    /**
     * An object where each key is a version, and each value is the manifest for
     * that version.
     */
    versions: Record<string, Manifest>;
    /**
     * An object mapping dist-tags to version numbers. This is how `foo@latest`
     * gets turned into `foo@1.2.3`.
     */
    "dist-tags": { latest: string } & Record<string, string>;
    /**
     * In the full packument, an object mapping version numbers to publication
     * times, for the `opts.before` functionality.
     */
    time: Record<string, string> & {
        created: string;
        modified: string;
    };
}

export type AbbreviatedPackument = {
    versions: Record<string, AbbreviatedManifest>;
} & Pick<Packument, "name" | "dist-tags">;

export interface FetchResult {
    /**
     * A normalized form of the spec passed in as an argument.
     */
    from: string;
    /**
     * The tarball url or file path where the package artifact can be found.
     */
    resolved: string;
    /**
     * The integrity value for the package artifact.
     */
    integrity: string;
}

export interface ManifestResult {
    /**
     * A normalized form of the spec passed in as an argument.
     */
    _from: string;
    /**
     * The tarball url or file path where the package artifact can be found.
     */
    _resolved: string;
    /**
     * The integrity value for the package artifact.
     */
    _integrity: string;
    /**
     * The canonical spec of this package version: name@version.
     */
    _id: string;
}

export interface PackumentResult {
    /**
     * The size of the packument.
     */
    _contentLength: number;
}

export interface PacoteOptions {
    /**
     * Where to store cache entries and temp files. Passed to
     * [`cacache`](http://npm.im/cacache). Defaults to the same cache directory
     * that npm will use by default, based on platform and environment.
     */
    cache?: string | undefined;
    /**
     * Base folder for resolving relative `file:` dependencies.
     */
    where?: string | undefined;
    /**
     * Shortcut for looking up resolved values. Should be specified if known.
     */
    resolved?: string | undefined;
    /**
     * Expected integrity of fetched package tarball. If specified, tarballs
     * with mismatched integrity values will raise an `EINTEGRITY` error.
     */
    integrity?: string | Integrity | undefined;
    /**
     * Permission mode mask for extracted files and directories. Defaults to
     * `0o22`.
     */
    umask?: number | undefined;
    /**
     * Minimum permission mode for extracted files. Defaults to `0o666`.
     */
    fmode?: number | undefined;
    /**
     * Minimum permission mode for extracted directories. Defaults to `0o777`.
     */
    dmode?: number | undefined;
    /**
     * A logger object with methods for various log levels. Typically, this will
     * be [`npmlog`](http://npm.im/npmlog) in the npm CLI use case, but if not
     * specified, the default is a logger that emits 'log' events on the process
     * object.
     */
    log?: Logger | undefined;
    /**
     * Prefer to revalidate cache entries, even when it would not be strictly
     * necessary. Default `false`.
     */
    preferOnline?: boolean | undefined;
    /**
     * When picking a manifest from a packument, only consider packages
     * published before the specified date. Default `null`.
     */
    before?: Date | null | undefined;
    /**
     * The default `dist-tag` to use when choosing a manifest from a packument.
     * Defaults to `latest`.
     */
    defaultTag?: string | undefined;
    /**
     * The npm registry to use by default. Defaults to
     * `https://registry.npmjs.org/`.
     */
    registry?: string | undefined;
    /**
     * Fetch the full metadata from the registry for packuments, including
     * information not strictly required for installation (author, description,
     * etc.) Defaults to `true` when `before` is set, since the version publish
     * time is part of the extended packument metadata.
     */
    fullMetadata?: boolean | undefined;

    /**
     * you usually don't want to fetch the same packument multiple times in
     * the span of a given script or command, no matter how many pacote calls
     * are made, so this lets us avoid doing that.  It's only relevant for
     * registry fetchers, because other types simulate their packument from
     * the manifest, which they memoize on this.package, so it's very cheap
     * already.
     */
    packumentCache?: Map<string, Packument> | undefined;
}

export type Options = PacoteOptions & npmFetch.Options;

/**
 * Resolve a specifier like `foo@latest` or `github:user/project` all the way to
 * a tarball url, tarball file, or git repo with commit hash.
 */
export function resolve(spec: string, opts?: Options): Promise<string>;

/**
 * Extract a package's tarball into a destination folder. Returns a promise that
 * resolves to the `{from,integrity,resolved}` of the extracted package.
 */
export function extract(spec: string, dest?: string, opts?: Options): Promise<FetchResult>;

/**
 * Fetch (or simulate) a package's manifest (basically, the `package.json` file,
 * plus a bit of metadata).
 */
export function manifest(
    spec: string,
    opts: Options & ({ before: Date } | { fullMetadata: true }),
): Promise<Manifest & ManifestResult>;
export function manifest(spec: string, opts?: Options): Promise<AbbreviatedManifest & ManifestResult>;

/**
 * Fetch (or simulate) a package's packument (basically, the top-level package
 * document listing all the manifests that the registry returns).
 */
export function packument(spec: string, opts: Options & { fullMetadata: true }): Promise<Packument & PackumentResult>;
export function packument(spec: string, opts?: Options): Promise<AbbreviatedPackument & PackumentResult>;

/**
 * Get a package tarball data as a buffer in memory.
 */
export function tarball(spec: string, opts?: Options): Promise<Buffer & FetchResult>;

export namespace tarball {
    /**
     * Save a package tarball data to a file on disk.
     */
    function file(spec: string, dest: string, opts?: Options): Promise<FetchResult>;

    /**
     * Fetch a tarball and make the stream available to the streamHandler
     * function.
     *
     * This is mostly an internal function, but it is exposed because it does
     * provide some functionality that may be difficult to achieve otherwise.
     *
     * The `streamHandler` function MUST return a Promise that resolves when the
     * stream (and all associated work) is ended, or rejects if the stream has
     * an error.
     *
     * The `streamHandler` function MAY be called multiple times, as Pacote
     * retries requests in some scenarios, such as cache corruption or retriable
     * network failures.
     */
    function stream<T>(spec: string, streamHandler: (stream: Transform) => Promise<T>, opts?: Options): Promise<T>;
}
