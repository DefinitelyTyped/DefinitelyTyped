/**
 Default value: { privacy: 'default', statuses: [200], otherwise: 'no-cache' }.
 If the route method is 'GET', the route can be configured to include HTTP caching directives in the response. Caching can be customized using an object with the following options:
 privacy - determines the privacy flag included in client-side caching using the 'Cache-Control' header. Values are:
 'default' - no privacy flag.
 'public' - mark the response as suitable for public caching.
 'private' - mark the response as suitable only for private caching.
 expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
 expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn.
 statuses - an array of HTTP response status code numbers (e.g. 200) which are allowed to include a valid caching directive.
 otherwise - a string with the value of the 'Cache-Control' header when caching is disabled.
 The default Cache-Control: no-cache header can be disabled by setting cache to false.
 */
export type RouteOptionsCache = {
    privacy?: 'default' | 'public' | 'private';
    statuses?: number[];
    otherwise?: string;
} & (
    {
    expiresIn?: number;
    expiresAt?: undefined;
    } | {
    expiresIn?: undefined;
    expiresAt?: string;
    } | {
    expiresIn?: undefined;
    expiresAt?: undefined;
    }
);
