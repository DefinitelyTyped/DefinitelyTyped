import * as whatwgUrl from 'whatwg-url';
import parseDataURL, { fromURLRecord } from 'data-urls';

// test type exports
type DataURL = parseDataURL.DataURL;

const url = 'data:text/html,%3Ch1%3EHello%2C%20DefinitelyTyped!%3C%2Fh1%3E';
const urlRecord = whatwgUrl.parseURL(url);

// $ExpectType DataURL | null
const dataUrl = parseDataURL(url);

if (urlRecord !== null) {
    // $ExpectType DataURL | null
    fromURLRecord(urlRecord);
}

if (dataUrl != null) {
    dataUrl.mimeType; // $ExpectType MIMEType
    dataUrl.body; // $ExpectType Uint8Array
}
