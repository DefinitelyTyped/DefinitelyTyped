import parseUrl = require("parse-url");

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
 * //   , port: ""
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
 * //   , port: ""
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
    interface ParsedUrl  extends parseUrl.ParsedUrl {
        /**
         * The oauth token (could appear in the https urls).
         *
         * An empty string if not found.
         * Set from user if password is `x-oauth-basic`.
         * Set from password if user is `x-token-auth`.
         */
        token: string;
    }
}
