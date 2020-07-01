// Type definitions for gravatar 1.8
// Project: https://github.com/emerleite/node-gravatar
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    cdn?: string;
    d?: string;
    default?: string;
    f?: string;
    forcedefault?: string;
    format?: string;
    protocol?: string;
    r?: string;
    rating?: string;
    s?: string;
    size?: string;
}
/**
 * @param email - The gravatar email
 * @param [options] - Query string options
 * @param [protocol] - Define if will use no protocol, http or https gravatar URL.
 * Default is 'undefined', which generates URLs without protocol.
 * True to force https and false to force http
 */
export function url(email: string, options?: Options, protocol?: boolean): string;
/**
 * @param email - The gravatar email
 * @param [options] - Query string options
 * @param [protocol] - Define if will use no protocol, http or https gravatar URL.
 * Default is 'undefined', which generates URLs without protocol.
 * True to force https and false to force http
 */
export function profile_url(email: string, options?: Options, protocol?: boolean): string;
