import { Options, IntrospectionFunction } from '.';

declare const localIntrospect: IntrospectionFunction;

declare function localIntrospection(
    options: Pick<
        Options,
        | 'jwks'
        | 'jwks_uri'
        | 'jwks_cache_enabled'
        | 'jwks_cache_maxentries'
        | 'jwks_cache_time'
        | 'jwks_ratelimit_enabled'
        | 'jwks_ratelimit_per_minute'
        | 'allowed_algs'
    >,
): typeof localIntrospect;

export = localIntrospection;
