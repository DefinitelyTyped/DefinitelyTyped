/// <reference types="jquery" />

interface JQueryBase64Static {
    encode(data: string, isUTF8?: boolean): string;
    decode(data: string, isUTF8?: boolean): string;
}

interface JQueryStatic {
    base64: JQueryBase64Static;
}
