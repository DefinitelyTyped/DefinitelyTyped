import { Options, Manifest } from './index';

/**
 * Fetches the manifest for a package. Manifest objects are similar and based on
 * the `package.json` for that package, but with pre-processed and limited
 * fields.
 *
 * Note that depending on the spec type, some additional fields might be
 * present. For example, packages from `registry.npmjs.org` have additional
 * metadata appended by the registry.
 */
declare function manifest(spec: string, opts?: Options): Promise<Manifest>;
export = manifest;
