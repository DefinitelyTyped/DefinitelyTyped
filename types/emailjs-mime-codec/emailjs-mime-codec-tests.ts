import {
    encode,
    decode,
    convert,
    mimeEncode,
    mimeDecode,
    base64Encode,
    base64Decode,
    quotedPrintableEncode,
    quotedPrintableDecode,
    mimeWordEncode,
    mimeWordDecode,
    mimeWordsEncode,
    mimeWordsDecode,
    headerLineEncode,
    headerLinesDecode,
    continuationEncode,
    foldLines,
    parseHeaderValue,
} from 'emailjs-mime-codec';

encode('testing'); // $ExpectType Uint8Array
