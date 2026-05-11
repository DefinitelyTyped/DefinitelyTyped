export type Protocol = false | "http" | true | "https";

export interface Options {
    cdn?: string | undefined;
    d?: string | undefined;
    default?: string | undefined;
    f?: string | undefined;
    forcedefault?: string | undefined;
    format?: string | undefined;
    protocol?: Protocol | undefined;
    r?: string | undefined;
    rating?: string | undefined;
    s?: string | undefined;
    size?: string | undefined;
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
