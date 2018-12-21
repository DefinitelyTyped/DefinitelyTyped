// Type definitions for ip-regex 3.0
// Project: https://github.com/sindresorhus/ip-regex
// Definitions by: Renārs Vilnis <https://github.com/renarsvilnis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module no-declare-current-package
declare module "ip-regex" {
    function ipRegex(options?: ipRegex.IpRegexOptions): RegExp;

    namespace ipRegex {
        interface IpRegexOptions {
            exact?: boolean;
        }

        function v4(options?: IpRegexOptions): RegExp;
        function v6(options?: IpRegexOptions): RegExp;
    }
    export = ipRegex;
}
