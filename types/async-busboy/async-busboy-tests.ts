import asyncBusboy = require('async-busboy');
import { IncomingMessage } from 'http';

// test type exports
type Options = asyncBusboy.Options;
type OnFileOptions = asyncBusboy.OnFileOptions;
type Result = asyncBusboy.Result;
type OnFileResult = asyncBusboy.OnFileResult;
type FileReadStream = asyncBusboy.FileReadStream;

declare const req: IncomingMessage;

const resultPromise = asyncBusboy(req); // $ExpectType Promise<Result>
asyncBusboy(req, {}); // $ExpectType Promise<Result>
asyncBusboy(req, { headers: { 'content-type': 'foo' } }); // $ExpectType Promise<Result>
asyncBusboy(req, { highWaterMark: 10 }); // $ExpectType Promise<Result>

const onFileResultPromise = asyncBusboy(req, {
    onFile: (fieldname, file, filename, encoding, mimetype) => {
        fieldname; // $ExpectType string
        file; // $ExpectType Readable
        filename; // $ExpectType string
        encoding; // $ExpectType string
        mimetype; // $ExpectType string
    },
});
// can't assert via ExpectType because TS4.1 detects OnFileResult as Pick<Result, "fields">
let assignableToOnFileResult: Promise<OnFileResult> = onFileResultPromise;
// @ts-expect-error
let assignableToResult: Promise<Result> = onFileResultPromise;
assignableToOnFileResult = assignableToResult; // make sure that OnFileResult is supertype of Result

const onFileResultPromise2 = asyncBusboy(req, { headers: {}, onFile: () => {} });
// can't assert via ExpectType because TS4.1 detects OnFileResult as Pick<Result, "fields">
assignableToOnFileResult = onFileResultPromise2;
// @ts-expect-error
assignableToResult = onFileResultPromise2;

const onFileResultPromise3 = asyncBusboy(req, { highWaterMark: 10, onFile: () => {} });
// can't assert via ExpectType because TS4.1 detects OnFileResult as Pick<Result, "fields">
assignableToOnFileResult = onFileResultPromise3;
// @ts-expect-error
assignableToResult = onFileResultPromise3;

(async () => {
    const result = await resultPromise;

    result.fields; // $ExpectType { [key: string]: unknown; }
    result.files; // $ExpectType FileReadStream[]

    const onFileResult = await onFileResultPromise;

    onFileResult.fields; // $ExpectType { [key: string]: unknown; }
    // @ts-expect-error
    onFileResult.files;

    const file = result.files[0];
    file.fieldname; // $ExpectType string
    file.filename; // $ExpectType string
    file.transferEncoding; // $ExpectType string
    file.encoding; // $ExpectType string
    file.mimeType; // $ExpectType string
    file.mime; // $ExpectType string
    file.bytesRead; // $ExpectType number
})();
