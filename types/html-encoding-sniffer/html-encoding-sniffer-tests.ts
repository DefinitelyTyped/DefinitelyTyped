import htmlEncodingSniffer = require('html-encoding-sniffer');

// test type exports
type Opts = htmlEncodingSniffer.Options;

const bytes = new Uint8Array([1, 2]);
htmlEncodingSniffer(bytes); // $ExpectType string
htmlEncodingSniffer(bytes, { defaultEncoding: 'utf-8' }); // $ExpectType string
htmlEncodingSniffer(bytes, { transportLayerEncodingLabel: 'utf-8' }); // $ExpectType string
