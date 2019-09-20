import * as base64topdf from 'base64topdf';

base64topdf.base64Encode('index.ts'); // $ExpectType void
base64topdf.base64Decode('decodethis', 'test.b64'); // $ExpectType void
base64topdf.rtfToText('rtf'); // $ExpectType string
base64topdf.textToRtf('text'); // $ExpectType string
base64topdf.strToBase64('str'); // $ExpectType string
base64topdf.base64ToStr('base64'); // $ExpectType string
