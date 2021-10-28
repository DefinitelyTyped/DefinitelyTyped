declare module 'pidcrypt' {
    type Format = 'HEX' | 'B64';

    function SHA384(input: string, format: Format): string;
    function SHA512(input: string, format: Format): string;
}
