import { Options, Packument } from './index';

/**
 * Fetches the packument for a package. Packument objects are general metadata
 * about a project corresponding to registry metadata, and include version and
 * `dist-tag` information about a package's available versions, rather than a
 * specific version. It may include additional metadata not usually available
 * through the individual package metadata objects.
 *
 * Note that depending on the spec type, some additional fields might be
 * present. For example, packages from `registry.npmjs.org` have additional
 * metadata appended by the registry.
 */
declare function packument(spec: string, opts?: Options): Promise<Packument>;
export = packument;
