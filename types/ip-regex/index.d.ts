// Type definitions for ip-regex 3.0
// Project: https://github.com/sindresorhus/ip-regex
// Definitions by: Renārs Vilnis <https://github.com/renarsvilnis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ip(options?: ip.IpRegexOptions): RegExp;

declare namespace ip {
    interface IpRegexOptions {
        exact?: boolean;
    }

    function v4(options?: IpRegexOptions): RegExp;
    function v6(options?: IpRegexOptions): RegExp;
}
export = ip;
