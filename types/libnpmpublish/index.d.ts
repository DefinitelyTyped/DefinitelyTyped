import { PackageJson } from "@npm/types";
import { Response } from "node-fetch";
import fetch = require("npm-registry-fetch");

export interface PublishOptions extends fetch.Options {
    /**
     * Registers the published package with the given tag, defaults to latest.
     * @default "latest"
     */
    defaultTag?: string;

    /**
     * Tells the registry whether this package should be published as public or restricted. Only applies to scoped packages.
     * @default "public"
     */
    access?: string;

    /**
     * When running in a supported CI environment, will trigger the generation of a signed provenance statement to be published alongside the package. Mutually exclusive with the `provenanceFile` option.
     */
    provenance?: boolean;

    /**
     * Specifies the path to an externally-generated provenance statement to be published alongside the package. Mutually exclusive with the `provenance` option. The specified file should be a [Sigstore Bundle](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) containing a [DSSE](https://github.com/secure-systems-lab/dsse)-packaged provenance statement.
     */
    provenanceFile?: string;

    /**
     * If passed in, it will be used as the `_npmVersion` field in the outgoing packument. You may put your own user-agent string in there to identify your publishes.
     */
    npmVersion?: string;

    /**
     * If passed in, it should be an array of hashing algorithms to generate `integrity` hashes for. The default is `['sha512']`, which means you end up with `dist.integrity = 'sha512-deadbeefbadc0ffee'`. Any algorithm supported by your current node version is allowed -- npm clients that do not support those algorithms will simply ignore the unsupported hashes.
     * @default ["sha512"]
     */
    algorithms?: string[];
}

/**
 * Sends the package represented by the manifest and tarData to the configured registry.
 * @param manifest the parsed package.json for the package being published (which can also be the manifest pulled from a packument, a git repo, tarball, etc.)
 * @param tarballData a Buffer of the tarball being published.
 * @param options (optional) a object containing the options
 * @returns a Promise that resolves to a Response
 * @example // note that pacote.manifest() and pacote.tarball() can also take
 * // any spec that npm can install.  a folder shown here, since that's
 * // far and away the most common use case.
 * const path = '/a/path/to/your/source/code'
 * const pacote = require('pacote') // see: http://npm.im/pacote
 * const manifest = await pacote.manifest(path)
 * const tarData = await pacote.tarball(path)
 * await libpub.publish(manifest, tarData, { npmVersion: 'my-pub-script@1.0.2', token: 'my-auth-token-here' }, opts)
 * // Package has been published to the npm registry.
 */
export function publish(manifest: PackageJson, tarballData: Buffer, options?: PublishOptions): Promise<Response>;

/**
 * Unpublishes spec from the appropriate registry. The registry in question may have its own limitations on unpublishing.
 * @param spec either a string, or a valid npm-package-arg parsed spec object. For legacy compatibility reasons, only tag and version specs will work as expected.
 * @param options (optional) a object containing the options
 * @returns a Promise that resolves to a Boolean
 * @example await libpub.unpublish('lodash', { token: 'my-auth-token-here'})
 *          //
 *          // `lodash` has now been unpublished, along with all its versions
 */
export function unpublish(spec: string | object, options?: fetch.Options): Promise<boolean>;
