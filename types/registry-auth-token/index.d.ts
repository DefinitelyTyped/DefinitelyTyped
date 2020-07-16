// Type definitions for Registry Auth Token 3.3
// Project: https://github.com/rexxars/registry-auth-token
// Definitions by: Maurice de Beijer <https://github.com/mauricedb>
//                 James Liang <https://github.com/LiangZugeng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * Simple namespace describing the inputs and outputs for `registry-auth-token`
 */
declare namespace auth {
    /**
     * The options for passing into `registry-auth-token`
     */
    interface AuthOptions {
        /**
         * Wether or not url's path parts are recursively trimmed from the registry
         * url when searching for tokens
         */
        recursive?: boolean;
        /**
         * An npmrc configuration object used when searching for tokens. If no object is provided,
         * the `.npmrc` file at the base of the project is used.
         */
        npmrc?: {
            /**
             * A registry url used for matching
             */
            registry?: string;
            /**
             * Registry url's with token information
             */
            [registryUrls: string]: string | undefined;
        };
    }
    /**
     * The generated authentication information
     */
    interface NpmCredentials {
        /**
         * The token representing the users credentials
         */
        token: string;
        /**
         * The type of token
         */
        type: 'Basic'|'Bearer';
        /**
         * The username used in `Basic`
         */
        username?: string;
        /**
         * The password used in `Basic`
         */
        password?: string;
    }
}

/**
 *
 * @param registryUrl - Either the registry url used
 * for matching or a configuration object describing the contents of the .npmrc file
 * @param [options] - a configuration object describing the
 * contents of the .npmrc file.  If an `npmrc` config object was passed in as the
 * first parameter, this parameter is ignored.
 * @returns The `NpmCredentials` object or undefined if no match found.
 */
declare function auth(registryUrl: string | auth.AuthOptions, options?: auth.AuthOptions): auth.NpmCredentials;

export = auth;
