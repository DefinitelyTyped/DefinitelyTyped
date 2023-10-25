import { PackageJson } from "@npm/types";
import fetch = require("npm-registry-fetch");
import { Response } from "node-fetch";

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
export function publish(manifest: PackageJson, tarballData: Buffer, options?: fetch.Options): Promise<Response>;

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
