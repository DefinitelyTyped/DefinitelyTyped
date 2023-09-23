import {
    base64Decode,
    base64Encode,
    continuationEncode,
    convert,
    decode,
    encode,
    foldLines,
    headerLineEncode,
    headerLinesDecode,
    mimeDecode,
    mimeEncode,
    mimeWordDecode,
    mimeWordEncode,
    mimeWordsDecode,
    mimeWordsEncode,
    parseHeaderValue,
    quotedPrintableDecode,
    quotedPrintableEncode,
} from "emailjs-mime-codec";

const int8 = new Uint8Array([]);

encode("testing"); // $ExpectType Uint8Array
// @ts-expect-error
encode(int8);
// @ts-expect-error
encode(34);

decode(int8, "UTF-8"); // $ExpectType string
decode(int8); // $ExpectType string
// @ts-expect-error
decode("some string", "UTF-8");

convert("sample", "UTF-8"); // $ExpectType Uint8Array
convert(int8, "UTF-8"); // $ExpectType Uint8Array

foldLines("Content-Type: multipart/alternative; boundary=\"----zzzz----\""); // $ExpectType string
foldLines("Content-Type: multipart/alternative; boundary=\"----zzzz----\"", true); // $ExpectType string
// @ts-expect-error
foldLines(int8);

mimeEncode(); // $ExpectType string
mimeEncode("hello"); // $ExpectType string
mimeEncode("hello", "UTF-8"); // $ExpectType string
mimeEncode(int8, "UTF-8"); // $ExpectType string

mimeDecode(); // $ExpectType string

mimeWordEncode("See on õhin test"); // $ExpectType string
mimeWordEncode("See on õhin test", "Q"); // $ExpectType string
mimeWordEncode("See on õhin test", "Q", "UTF-8"); // $ExpectType string
mimeWordEncode(int8, "Q", "UTF-8"); // $ExpectType string
// @ts-expect-error
mimeWordEncode([1, 2, 3], "Q", "UTF-8");

mimeWordDecode("=?UTF-8?Q?See_on_=C3=B5hin_test?="); // $ExpectType string
mimeWordDecode(); // $ExpectType string
// @ts-expect-error
mimeWordDecode(int8);
// @ts-expect-error
mimeWordDecode(34);

continuationEncode("filename", "filename õäöü.txt", 20); // $ExpectType Record<string, unknown>[]
continuationEncode(int8, "filename õäöü.txt", 20); // $ExpectType Record<string, unknown>[]
continuationEncode(int8, "filename õäöü.txt", 20, "UTF-8"); // $ExpectType Record<string, unknown>[]
// @ts-expect-error
continuationEncode([1, 2, 3], "filename õäöü.txt", 20, "UTF-8"); // $ExpectType Record<string, unknown>[]

quotedPrintableEncode(); // $ExpectType string
quotedPrintableEncode("See on õhin test"); // $ExpectType string
quotedPrintableEncode("See on õhin test", "UTF-8"); // $ExpectType string
quotedPrintableEncode(int8); // $ExpectType string
quotedPrintableEncode(int8, "UTF-8"); // $ExpectType string

quotedPrintableDecode(); // $ExpectType string
quotedPrintableDecode("some string"); // $ExpectType string
quotedPrintableDecode("some string", "UTF-8"); // $ExpectType string

// @ts-expect-error
base64Encode();
base64Encode("hello"); // $ExpectType string
base64Encode("hello", "UTF-8"); // $ExpectType string
base64Encode(int8); // $ExpectType string
base64Encode(int8, "UTF-8"); // $ExpectType string

// @ts-expect-error
base64Decode();
base64Decode("aGVsbG8="); // $ExpectType string
base64Decode("aGVsbG8=", "UTF-8"); // $ExpectType string

// @ts-expect-error
mimeWordEncode();
mimeWordEncode("hello"); // $ExpectType string
mimeWordEncode("hello", "Q"); // $ExpectType string
mimeWordEncode("hello", "Q", "UTF-8"); // $ExpectType string
mimeWordEncode(int8); // $ExpectType string
mimeWordEncode(int8, "B"); // $ExpectType string
mimeWordEncode(int8, "Q", "UTF-8"); // $ExpectType string

mimeWordsEncode(); // $ExpectType string
mimeWordsEncode("hello"); // $ExpectType string
mimeWordsEncode("hello", "Q"); // $ExpectType string
mimeWordsEncode("hello", "Q", "UTF-8"); // $ExpectType string
mimeWordsEncode(int8); // $ExpectType string
mimeWordsEncode(int8, "B"); // $ExpectType string
mimeWordsEncode(int8, "Q", "UTF-8"); // $ExpectType string
// @ts-expect-error
mimeWordsEncode([1, 2, 3]);

mimeWordDecode(); // $ExpectType string
mimeWordDecode("=?UTF-8?Q?hello?="); // $ExpectType string
// @ts-expect-error
mimeWordDecode(int8);

mimeWordsDecode(); // $ExpectType string
mimeWordsDecode("=?UTF-8?Q?hello?="); // $ExpectType string
// @ts-expect-error
mimeWordsDecode(int8);

// @ts-expect-error
headerLineEncode();
headerLineEncode("hello", "hello there"); // $ExpectType string
headerLineEncode("hello", "hello there", "UTF-8"); // $ExpectType string
headerLineEncode("hello", int8); // $ExpectType string
headerLineEncode("hello", int8, "UTF-8"); // $ExpectType string

// @ts-expect-error
headerLinesDecode();
headerLinesDecode("hello"); // $ExpectType Record<string, string | string[]>

// @ts-expect-error
parseHeaderValue();
parseHeaderValue("value"); // $ExpectType { value: string | false; params: Record<string, string>; }
