import * as Catbox from "catbox";

/**
 * hapi uses catbox for its cache implementation which includes support for common storage solutions (e.g. Redis,
 * MongoDB, Memcached, Riak, among others). Caching is only utilized if methods and plugins explicitly store their state in the cache.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-cache)
 */
export interface ServerOptionsCache extends Catbox.PolicyOptions {

    /** a class, a prototype function, or a catbox engine object. */
    engine?: Catbox.EnginePrototypeOrObject;

    /** an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisioned as well. */
    name?: string;

    /** if true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false. */
    shared?: boolean;

    /** (optional) string used to isolate cached data. Defaults to 'hapi-cache'. */
    partition?: string;

    /** other options passed to the catbox strategy used. Other options are only passed to catbox when engine above is a class or function and ignored if engine is a catbox engine object). */
    [s: string]: any;

}
