declare namespace CybozuLabs.MD5 {
    var VERSION: string;
    var BY_ASCII: number;
    var BY_UTF16: number;
    function calc(str: string, option?: number): string;
}
