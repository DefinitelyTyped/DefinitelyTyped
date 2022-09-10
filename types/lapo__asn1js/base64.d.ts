declare namespace Base64 {
    function decode(a: string | number[]): Uint8Array;
    function pretty(str: string): string;
    let re: RegExp;
    function unarmor(a: string): ReturnType<typeof Base64.decode>;
}

export = Base64;

export as namespace base64;
