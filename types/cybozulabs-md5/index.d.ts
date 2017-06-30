// Type definitions for CybozuLabs.MD5
// Project: http://labs.cybozu.co.jp/blog/mitsunari/2007/07/md5js_1.html
// Definitions by: MIZUNE Pine <https://github.com/pine613>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CybozuLabs.MD5 {
    var VERSION: string;
    var BY_ASCII: number;
    var BY_UTF16: number;
    function calc(str: string, option?: number): string;
}
