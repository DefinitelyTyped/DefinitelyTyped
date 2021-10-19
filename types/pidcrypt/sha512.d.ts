declare namespace pidcrypt {
    type Format = 'HEX' | 'B64';

    interface pidcrypt {
        SHA384: (input: string, format: Format) => string;
        SHA512: (input: string, format: Format) => string;
    }
}
