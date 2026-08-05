// open
open();
// @ts-expect-error
open(5);
const text: string = open("file.txt");
// @ts-expect-error
open(5, "b");
// @ts-expect-error
open("file.bin", 5);
open("file.bin", "notamode");
const arrayBuffer: ArrayBuffer = open("file.bin", "b");
// @ts-expect-error
open("file.bin", "b", 5);

// text encoding
const textEncoder = new TextEncoder();
textEncoder.encoding; // $ExpectType string
const encodedText: Uint8Array = textEncoder.encode("Hello, 世界 👋");
textEncoder.encode();
// @ts-expect-error TextEncoder only supports UTF-8 and takes no constructor arguments.
new TextEncoder("utf-16");
// @ts-expect-error
textEncoder.encode(5);
// @ts-expect-error The encoding property is read-only.
textEncoder.encoding = "utf-16";

const textDecoderOptions: TextDecoderOptions = { fatal: true, ignoreBOM: true };
const textDecodeOptions: TextDecodeOptions = { stream: true };
const textDecoder = new TextDecoder("utf-8", textDecoderOptions);
new TextDecoder();
new TextDecoder("utf-16le");
new TextDecoder("utf-16be");
textDecoder.encoding; // $ExpectType string
textDecoder.fatal; // $ExpectType boolean
textDecoder.ignoreBOM; // $ExpectType boolean
const decodedText: string = textDecoder.decode(encodedText);
textDecoder.decode(encodedText.buffer); // $ExpectType string
textDecoder.decode(new DataView(encodedText.buffer)); // $ExpectType string
textDecoder.decode(undefined, textDecodeOptions); // $ExpectType string
// @ts-expect-error
new TextDecoder(5);
// @ts-expect-error
new TextDecoder("utf-8", { fatal: "yes" });
// @ts-expect-error
textDecoder.decode("Hello");
// @ts-expect-error
textDecoder.decode(encodedText, { stream: "yes" });
// @ts-expect-error The encoding property is read-only.
textDecoder.encoding = "utf-16le";
// @ts-expect-error The fatal property is read-only.
textDecoder.fatal = false;
// @ts-expect-error The ignoreBOM property is read-only.
textDecoder.ignoreBOM = false;

// state
__VU; // $ExpectType number
__VU = 9;
__ITER; // $ExpectType number
__ITER = 9;

// environment
// @ts-expect-error
__ENV = 5;
__ENV; // $ExpectType { [name: string]: string; }

// import.meta.resolve
import.meta.resolve("test"); // $ExpectType string

// @ts-expect-error
import.meta.resolve();

// @ts-expect-error
import.meta.resolve("test", "something");
