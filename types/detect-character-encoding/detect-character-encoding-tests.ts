import detectCharacterEncoding = require("detect-character-encoding");

const buf: Buffer = null as any;

const result: detectCharacterEncoding.Result | null = detectCharacterEncoding(buf);

if (result) {
    const str: string = result.encoding;
    const num: number = result.confidence;
}
