declare var windows1251: {
    encode(input: string, options?: { mode?: windows1251.EncoderMode | undefined }): string;
    decode(text: string, options?: { mode?: windows1251.DecoderMode | undefined }): string;
    version: string;
    labels: string[];
};

export = windows1251;
export as namespace windows1251;

declare namespace windows1251 {
    type EncoderMode = "fatal" | "html";
    type DecoderMode = "replacement" | "fatal";

    interface windows1251 {
        encode(input: string, options?: { mode?: EncoderMode | undefined }): string;
        decode(text: string, options?: { mode?: DecoderMode | undefined }): string;
    }
}
