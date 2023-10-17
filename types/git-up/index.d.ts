export = gitUp;

/**
 * A low level git url parser. Parses the `input` url.
 *
 * @param input The url as string.
 * @returns The parsed url.
 *
 * @example
 * import gitUp = require("git-up");
 *
 * console.log(gitUp("git@github.com:IonicaBizau/node-parse-url.git"));
 * // => {
 * //     protocols: []
 * //   , port: null
 * //   , resource: "github.com"
 * //   , user: "git"
 * //   , pathname: "/IonicaBizau/node-parse-url.git"
 * //   , hash: ""
 * //   , search: ""
 * //   , href: "git@github.com:IonicaBizau/node-parse-url.git"
 * //   , protocol: "ssh"
 * // }
 *
 * console.log(gitUp("https://github.com/IonicaBizau/node-parse-url.git"));
 * // => {
 * //     protocols: [ "https" ]
 * //   , port: null
 * //   , resource: "github.com"
 * //   , user: ""
 * //   , pathname: "/IonicaBizau/node-parse-url.git"
 * //   , hash: ""
 * //   , search: ""
 * //   , href: "https://github.com/IonicaBizau/node-parse-url.git"
 * //   , protocol: "https"
 * // }
 */
declare function gitUp(input: string): gitUp.ParsedUrl;

declare namespace gitUp {
    interface ParsedUrl {
        /** An array with the url protocols (usually it has one element). */
        protocols: string[];
        /** The domain port. */
        port: string;
        /** The url domain (including subdomains). */
        resource: string;
        /** The authentication user (usually for ssh urls). */
        user: string | undefined;
        /** The url pathname. */
        pathname: string;
        /** The url hash. */
        hash: string;
        /** The url querystring value. */
        search: string;
        /** The input url. */
        href: string;
        /** The git url protocol. */
        protocol: string;
        /** The oauth token (could appear in the https urls). */
        token: string;
        query: Record<string, string>;
        parse_failed: false;
    }
}
