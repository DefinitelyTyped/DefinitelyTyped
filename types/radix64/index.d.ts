type MethodsString = "base64" | "base64URL" | "base64URLNaturalSort" | "base64URLASCIISort";

interface MethodsEnum {
    BASE64: MethodsString;
    BASE64URL: MethodsString;
    BASE64NATURAL: MethodsString;
    BASE64ASCII: MethodsString;
    DEFAULT: MethodsString;
}

interface Radix {
    radix64: (number: number, method?: MethodsString) => string;
    ascii64: (number: number, pad?: number) => string;
    methods: MethodsEnum;
}

declare const radix: Radix;
export = radix;
