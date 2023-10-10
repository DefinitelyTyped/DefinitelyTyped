import StreamSearch = require("streamsearch");

const needle = Buffer.from("\r\n");
const ss = new StreamSearch(needle, (isMatch, data, start, end, isSafeData) => {
    isMatch; // $ExpectType boolean
    data; // $ExpectType Buffer | undefined
    start; // $ExpectType number
    end; // $ExpectType number
    isSafeData; // $ExpectType boolean | undefined
});

ss.matches; // $ExpectType number
ss.maxMatches; // $ExpectType number

ss.destroy; // $ExpectType () => void
ss.push; // $ExpectType (chunk: string | Buffer, pos?: number | undefined) => number
ss.reset; // $ExpectType () => void
