import * as QC from 'qrcode';
import toSJIS = require('qrcode/helper/to-sjis');
import { Writable } from 'stream';

// test type exports
type ErrorCorrectionLevel = QC.QRCodeErrorCorrectionLevel;
type MaskPattern = QC.QRCodeMaskPattern;
type ToSJISFunc = QC.QRCodeToSJISFunc;
type Options = QC.QRCodeOptions;
type DataURLType = QC.QRCodeDataURLType;
type ToDataURLOptions = QC.QRCodeToDataURLOptions;
type ToDataURLOptionsJpegWebp = QC.QRCodeToDataURLOptionsJpegWebp;
type ToDataURLOptionsOther = QC.QRCodeToDataURLOptionsOther;
type StringType = QC.QRCodeStringType;
type ToStringOptions = QC.QRCodeToStringOptions;
type ToStringOptionsTerminal = QC.QRCodeToStringOptionsTerminal;
type ToStringOptionsOther = QC.QRCodeToStringOptionsOther;
type FileType = QC.QRCodeFileType;
type ToFileOptions = QC.QRCodeToFileOptions;
type ToFileOptionsPng = QC.QRCodeToFileOptionsPng;
type ToFileOptionsOther = QC.QRCodeToFileOptionsOther;
type FileStreamType = QC.QRCodeFileStreamType;
type ToFileStreamOptions = QC.QRCodeToFileStreamOptions;
type BufferType = QC.QRCodeBufferType;
type ToBufferOptions = QC.QRCodeToBufferOptions;
type RenderersOptions = QC.QRCodeRenderersOptions;
type SegmentMode = QC.QRCodeSegmentMode;
type Segment = QC.QRCodeSegment;
type NumericSegment = QC.QRCodeNumericSegment;
type AlphanumericSegment = QC.QRCodeAlphanumericSegment;
type ByteSegment = QC.QRCodeByteSegment;
type KanjiSegment = QC.QRCodeKanjiSegment;
type QRC = QC.QRCode;
type BitMatrix = QC.BitMatrix;
type ECL = QC.ErrorCorrectionLevel;
type ModeId = QC.ModeId;
type Mode = QC.Mode;
type GeneratedQRCodeSegment = QC.GeneratedQRCodeSegment;
type NumericData = QC.NumericData;
type AlphanumericData = QC.AlphanumericData;
type ByteData = QC.ByteData;
type KanjiData = QC.KanjiData;

const qrcode = QC.create('foo'); // $ExpectType QRCode
QC.create([{ data: 'foo' }]); // $ExpectType QRCode
QC.create([{ data: Buffer.from('foo') }]); // $ExpectType QRCode
QC.create([{ data: new Uint8Array([30]) }]); // $ExpectType QRCode
QC.create([{ data: new Uint8ClampedArray([30]) }]); // $ExpectType QRCode
QC.create([{ mode: 'numeric', data: '123' }]); // $ExpectType QRCode
QC.create([{ mode: 'numeric', data: 123 }]); // $ExpectType QRCode
// @ts-expect-error
QC.create([{ mode: 'numeric', data: new Uint8Array([30]) }]);
QC.create([{ mode: 'alphanumeric', data: 'foo' }]); // $ExpectType QRCode
// @ts-expect-error
QC.create([{ mode: 'alphanumeric', data: new Uint8Array([30]) }]);
QC.create([{ mode: 'byte', data: Buffer.from('foo') }]); // $ExpectType QRCode
QC.create([{ mode: 'byte', data: new Uint8Array([30]) }]); // $ExpectType QRCode
QC.create([{ mode: 'byte', data: new Uint8ClampedArray([30]) }]); // $ExpectType QRCode
// @ts-expect-error
QC.create([{ mode: 'byte', data: 'foo' }]);
QC.create([{ mode: 'kanji', data: 'foo' }]); // $ExpectType QRCode
// @ts-expect-error
QC.create([{ mode: 'kanji', data: new Uint8Array([30]) }]);
QC.create('foo', { version: 1 }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'H' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'L' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'M' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'Q' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'high' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'low' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'medium' }); // $ExpectType QRCode
QC.create('foo', { errorCorrectionLevel: 'quartile' }); // $ExpectType QRCode
// @ts-expect-error
QC.create('foo', { errorCorrectionLevel: 'foo' });
QC.create('foo', { maskPattern: 0 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 1 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 2 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 3 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 4 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 5 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 6 }); // $ExpectType QRCode
QC.create('foo', { maskPattern: 7 }); // $ExpectType QRCode
// @ts-expect-error
QC.create('foo', { maskPattern: 8 });
// $ExpectType QRCode
QC.create('foo', {
    toSJISFunc: codePoint => {
        codePoint; // $ExpectType string
        return 1;
    },
});
QC.create('foo', { toSJISFunc: toSJIS }); // $ExpectType QRCode

qrcode.errorCorrectionLevel; // $ExpectType ErrorCorrectionLevel
const bit: 0 | 1 | 2 | 3 = qrcode.errorCorrectionLevel.bit;
// @ts-expect-error
const bit1: 0 | 1 | 2 = qrcode.errorCorrectionLevel.bit;
// @ts-expect-error
const bit2: 1 | 2 | 3 = qrcode.errorCorrectionLevel.bit;
const maskP: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined = qrcode.maskPattern;
// @ts-expect-error
const maskP1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 = qrcode.maskPattern;
// @ts-expect-error
const maskP2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined = qrcode.maskPattern;
// @ts-expect-error
const maskP3: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined = qrcode.maskPattern;
qrcode.modules; // $ExpectType BitMatrix
qrcode.modules.size; // $ExpectType number
qrcode.modules.data; // $ExpectType Uint8Array
qrcode.modules.reservedBit; // $ExpectType Uint8Array
qrcode.modules.get(1, 1); // $ExpectType number
qrcode.modules.set(1, 1, 1, false); // $ExpectType void
qrcode.modules.xor(1, 1, 1); // $ExpectType void
qrcode.modules.isReserved(1, 1); // $ExpectType number
qrcode.segments; // $ExpectType GeneratedQRCodeSegment[]

const dataSegment = qrcode.segments[0];
dataSegment.mode.bit; // $ExpectType number
dataSegment.mode.ccBits; // $ExpectType readonly number[]
dataSegment.mode.id; // $ExpectType "Numeric" | "Alphanumeric" | "Byte" | "Kanji"
dataSegment.data; // $ExpectType string | Uint8Array
dataSegment.getLength(); // $ExpectType number
dataSegment.getBitsLength(); // $ExpectType number

/*
 * toCanvas() without canvas param
 */

// $ExpectType void
QC.toCanvas('sample text', error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toCanvas([{ data: Buffer.from('foo') }], (error, canvas) => {
    error; // $ExpectType Error | null | undefined
    canvas; // $ExpectType HTMLCanvasElement
});
// $ExpectType void
QC.toCanvas('sample text', { maskPattern: 0 }, (error, canvas) => {
    error; // $ExpectType Error | null | undefined
    canvas; // $ExpectType HTMLCanvasElement
});
// $ExpectType void
QC.toCanvas([{ data: Buffer.from('foo') }], { maskPattern: 0 }, error => {
    error; // $ExpectType Error | null | undefined
});

QC.toCanvas('sample text'); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas([{ data: Buffer.from('foo') }]); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas('sample text', { maskPattern: 0 }); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas([{ data: Buffer.from('foo') }], { maskPattern: 0 }); // $ExpectType Promise<HTMLCanvasElement>

QC.toCanvas('sample text', { margin: 0 }); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas('sample text', { scale: 0 }); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas('sample text', { width: 0 }); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas('sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<HTMLCanvasElement>
QC.toCanvas('sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<HTMLCanvasElement>

/*
 * toCanvas() with HTML canvas param
 */

declare const canvas: HTMLCanvasElement;

// $ExpectType void
QC.toCanvas(canvas, 'sample text', error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toCanvas(canvas, [{ data: Buffer.from('foo') }], error => {
    error; // $ExpectType Error | null | undefined
});
// @ts-expect-error
QC.toCanvas(canvas, 'sample text', (error, foo) => ({}));
// $ExpectType void
QC.toCanvas(canvas, 'sample text', { maskPattern: 0 }, error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toCanvas(canvas, [{ data: Buffer.from('foo') }], { maskPattern: 0 }, error => {
    error; // $ExpectType Error | null | undefined
});
// @ts-expect-error
QC.toCanvas(canvas, 'sample text', { maskPattern: 0 }, (error, foo) => ({}));

QC.toCanvas(canvas, 'sample text'); // $ExpectType Promise<void>
QC.toCanvas(canvas, [{ data: Buffer.from('foo') }]); // $ExpectType Promise<void>
QC.toCanvas(canvas, 'sample text', { maskPattern: 0 }); // $ExpectType Promise<void>
QC.toCanvas(canvas, [{ data: Buffer.from('foo') }], { maskPattern: 0 }); // $ExpectType Promise<void>

QC.toCanvas(canvas, 'sample text', { margin: 0 }); // $ExpectType Promise<void>
QC.toCanvas(canvas, 'sample text', { scale: 0 }); // $ExpectType Promise<void>
QC.toCanvas(canvas, 'sample text', { width: 0 }); // $ExpectType Promise<void>
QC.toCanvas(canvas, 'sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<void>
QC.toCanvas(canvas, 'sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<void>

/*
 * toCanvas() with any canvas param
 */

declare const nodeCanvas: {
    some: 'prop';
    foo: 'bar';
};

// $ExpectType void
QC.toCanvas(nodeCanvas, 'sample text', error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toCanvas(nodeCanvas, [{ data: Buffer.from('foo') }], error => {
    error; // $ExpectType Error | null | undefined
});
// @ts-expect-error
QC.toCanvas(nodeCanvas, 'sample text', (error, foo) => ({}));
// $ExpectType void
QC.toCanvas(nodeCanvas, 'sample text', { maskPattern: 0 }, error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toCanvas(nodeCanvas, [{ data: Buffer.from('foo') }], { maskPattern: 0 }, error => {
    error; // $ExpectType Error | null | undefined
});
// @ts-expect-error
QC.toCanvas(nodeCanvas, 'sample text', { maskPattern: 0 }, (error, foo) => ({}));

QC.toCanvas(nodeCanvas, 'sample text'); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, [{ data: Buffer.from('foo') }]); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, 'sample text', { maskPattern: 0 }); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, [{ data: Buffer.from('foo') }], { maskPattern: 0 }); // $ExpectType Promise<void>

QC.toCanvas(nodeCanvas, 'sample text', { margin: 0 }); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, 'sample text', { scale: 0 }); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, 'sample text', { width: 0 }); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, 'sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<void>
QC.toCanvas(nodeCanvas, 'sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<void>

/*
 * toDataURL() without canvas param
 */

// $ExpectType void
QC.toDataURL('some text', (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});
// $ExpectType void
QC.toDataURL([{ data: Buffer.from([253, 254, 255]), mode: 'byte' }], (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});
// $ExpectType void
QC.toDataURL('some text', { version: 2 }, (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});
// $ExpectType void
QC.toDataURL([{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }, (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});

QC.toDataURL('some text'); // $ExpectType Promise<string>
QC.toDataURL([{ data: Buffer.from([253, 254, 255]), mode: 'byte' }]); // $ExpectType Promise<string>
QC.toDataURL('some text', { version: 2 }); // $ExpectType Promise<string>
QC.toDataURL([{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }); // $ExpectType Promise<string>

QC.toDataURL('sample text', { margin: 0 }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { scale: 0 }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { width: 0 }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { type: 'image/jpeg' }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { type: 'image/webp' }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { type: 'image/png' }); // $ExpectType Promise<string>
// @ts-expect-error
QC.toDataURL('sample text', { type: 'foo' });
QC.toDataURL('sample text', { type: 'image/jpeg', rendererOpts: { quality: 1 } }); // $ExpectType Promise<string>
QC.toDataURL('sample text', { type: 'image/webp', rendererOpts: { quality: 1 } }); // $ExpectType Promise<string>
// @ts-expect-error
QC.toDataURL('sample text', { type: 'image/png', rendererOpts: { quality: 1 } });

/*
 * toDataURL() with canvas param
 */

// $ExpectType void
QC.toDataURL(canvas, 'some text', (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});
// $ExpectType void
QC.toDataURL(canvas, [{ data: Buffer.from([253, 254, 255]), mode: 'byte' }], (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});
// $ExpectType void
QC.toDataURL(canvas, 'some text', { version: 2 }, (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});
// $ExpectType void
QC.toDataURL(canvas, [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }, (error, url) => {
    error; // $ExpectType Error | null | undefined
    url; // $ExpectType string
});

QC.toDataURL(canvas, 'some text'); // $ExpectType Promise<string>
QC.toDataURL(canvas, [{ data: Buffer.from([253, 254, 255]), mode: 'byte' }]); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'some text', { version: 2 }); // $ExpectType Promise<string>
QC.toDataURL(canvas, [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }); // $ExpectType Promise<string>

QC.toDataURL(canvas, 'sample text', { margin: 0 }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { scale: 0 }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { width: 0 }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { type: 'image/jpeg' }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { type: 'image/webp' }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { type: 'image/png' }); // $ExpectType Promise<string>
// @ts-expect-error
QC.toDataURL(canvas, 'sample text', { type: 'foo' });
QC.toDataURL(canvas, 'sample text', { type: 'image/jpeg', rendererOpts: { quality: 1 } }); // $ExpectType Promise<string>
QC.toDataURL(canvas, 'sample text', { type: 'image/webp', rendererOpts: { quality: 1 } }); // $ExpectType Promise<string>
// @ts-expect-error
QC.toDataURL(canvas, 'sample text', { type: 'image/png', rendererOpts: { quality: 1 } });

/*
 * toString()
 */

// $ExpectType void
QC.toString('some text', (error, string) => {
    error; // $ExpectType Error | null | undefined
    string; // $ExpectType string
});
// $ExpectType void
QC.toString([{ data: Buffer.from([253, 254, 255]), mode: 'byte' }], (error, string) => {
    error; // $ExpectType Error | null | undefined
    string; // $ExpectType string
});
// $ExpectType void
QC.toString('some text', { version: 2 }, (error, string) => {
    error; // $ExpectType Error | null | undefined
    string; // $ExpectType string
});
// $ExpectType void
QC.toString([{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }, (error, string) => {
    error; // $ExpectType Error | null | undefined
    string; // $ExpectType string
});

QC.toString('some text'); // $ExpectType Promise<string>
QC.toString([{ data: Buffer.from([253, 254, 255]), mode: 'byte' }]); // $ExpectType Promise<string>
QC.toString('some text', { version: 2 }); // $ExpectType Promise<string>
QC.toString([{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }); // $ExpectType Promise<string>

QC.toString('sample text', { margin: 0 }); // $ExpectType Promise<string>
QC.toString('sample text', { scale: 0 }); // $ExpectType Promise<string>
QC.toString('sample text', { width: 0 }); // $ExpectType Promise<string>
QC.toString('sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<string>
QC.toString('sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<string>
QC.toString('sample text', { type: 'utf8' }); // $ExpectType Promise<string>
QC.toString('sample text', { type: 'svg' }); // $ExpectType Promise<string>
QC.toString('sample text', { type: 'terminal' }); // $ExpectType Promise<string>
// @ts-expect-error
QC.toString('sample text', { type: 'foo' });
QC.toString('sample text', { type: 'terminal', small: true }); // $ExpectType Promise<string>
// @ts-expect-error
QC.toString('sample text', { type: 'utf8', small: true });

/*
 * toFile()
 */

// $ExpectType void
QC.toFile('path/to/filename.png', 'Some text', error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toFile('path/to/filename.png', [{ data: Buffer.from([253, 254, 255]) }], error => {
    error; // $ExpectType Error | null | undefined
});
// @ts-expect-error
QC.toFile('path/to/filename.png', 'some text', (error, foo) => {});
// $ExpectType void
QC.toFile(
    'path/to/filename.png',
    'some text',
    {
        color: {
            dark: '#00F', // Blue dots
            light: '#0000', // Transparent background
        },
    },
    error => {
        error; // $ExpectType Error | null | undefined
    },
);
// $ExpectType void
QC.toFile(
    'path/to/filename.png',
    [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }],
    { errorCorrectionLevel: 'H', maskPattern: 3 },
    error => {
        error; // $ExpectType Error | null | undefined
    },
);
// @ts-expect-error
QC.toFile('path/to/filename.png', 'some text', { margin: 0 }, (error, foo) => {});

QC.toFile('file/path', 'some text'); // $ExpectType Promise<void>
QC.toFile('file/path', [{ data: Buffer.from([253, 254, 255]), mode: 'byte' }]); // $ExpectType Promise<void>
QC.toFile('file/path', 'some text', { version: 2 }); // $ExpectType Promise<void>
QC.toFile('file/path', [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }); // $ExpectType Promise<void>

QC.toFile('file/path', 'sample text', { margin: 0 }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { scale: 0 }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { width: 0 }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { type: 'png' }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { type: 'svg' }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { type: 'utf8' }); // $ExpectType Promise<void>
// @ts-expect-error
QC.toFile('file/path', 'sample text', { type: 'foo' });
QC.toFile('file/path', 'sample text', { rendererOpts: { deflateLevel: 1 } }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { rendererOpts: { deflateStrategy: 1 } }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { type: 'png', rendererOpts: { deflateLevel: 1 } }); // $ExpectType Promise<void>
QC.toFile('file/path', 'sample text', { type: 'png', rendererOpts: { deflateStrategy: 1 } }); // $ExpectType Promise<void>
// @ts-expect-error
QC.toFile('file/path', 'sample text', { type: 'utf8', rendererOpts: { deflateStrategy: 1 } });

/*
 * toFileStream()
 */

declare const fileStream: Writable;

// $ExpectType void
QC.toFileStream(fileStream, 'Some text', error => {
    error; // $ExpectType Error | null | undefined
});
// $ExpectType void
QC.toFileStream(fileStream, [{ data: Buffer.from([253, 254, 255]) }], error => {
    error; // $ExpectType Error | null | undefined
});
// @ts-expect-error
QC.toFileStream(fileStream, 'some text', (error, foo) => {});
// $ExpectType void
QC.toFileStream(
    fileStream,
    'some text',
    {
        color: {
            dark: '#00F', // Blue dots
            light: '#0000', // Transparent background
        },
    },
    error => {
        error; // $ExpectType Error | null | undefined
    },
);
// $ExpectType void
QC.toFileStream(
    fileStream,
    [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }],
    { errorCorrectionLevel: 'H', maskPattern: 3 },
    error => {
        error; // $ExpectType Error | null | undefined
    },
);
// @ts-expect-error
QC.toFileStream(fileStream, 'some text', { margin: 0 }, (error, foo) => {});

QC.toFileStream(fileStream, 'some text'); // $ExpectType Promise<void>
QC.toFileStream(fileStream, [{ data: Buffer.from([253, 254, 255]), mode: 'byte' }]); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'some text', { version: 2 }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, [{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }); // $ExpectType Promise<void>

QC.toFileStream(fileStream, 'sample text', { margin: 0 }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'sample text', { scale: 0 }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'sample text', { width: 0 }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'sample text', { type: 'png' }); // $ExpectType Promise<void>
// @ts-expect-error
QC.toFileStream(fileStream, 'sample text', { type: 'foo' });
QC.toFileStream(fileStream, 'sample text', { rendererOpts: { deflateLevel: 1 } }); // $ExpectType Promise<void>
QC.toFileStream(fileStream, 'sample text', { rendererOpts: { deflateStrategy: 1 } }); // $ExpectType Promise<void>

/*
 * toBuffer()
 */

QC.toBuffer('http://www.google.com', (error, buffer) => {
    error; // $ExpectType Error | null | undefined
    buffer; // $ExpectType Buffer
});
QC.toBuffer([{ data: Buffer.from([253, 254, 255]) }], (error, buffer) => {
    error; // $ExpectType Error | null | undefined
    buffer; // $ExpectType Buffer
});
QC.toBuffer('some text', { errorCorrectionLevel: 'H', maskPattern: 3 }, (error, buffer) => {
    error; // $ExpectType Error | null | undefined
    buffer; // $ExpectType Buffer
});
QC.toBuffer(
    [{ data: Buffer.from([253, 254, 255]) }],
    {
        color: {
            dark: '#00F', // Blue dots
            light: '#0000', // Transparent background
        },
    },
    (error, buffer) => {
        error; // $ExpectType Error | null | undefined
        buffer; // $ExpectType Buffer
    },
);

QC.toBuffer('some text'); // $ExpectType Promise<Buffer>
QC.toBuffer([{ data: Buffer.from([253, 254, 255]), mode: 'byte' }]); // $ExpectType Promise<Buffer>
QC.toBuffer('some text', { version: 2 }); // $ExpectType Promise<Buffer>
QC.toBuffer([{ data: new Uint8ClampedArray([253, 254, 255]), mode: 'byte' }], { version: 2 }); // $ExpectType Promise<Buffer>

QC.toBuffer('sample text', { margin: 0 }); // $ExpectType Promise<Buffer>
QC.toBuffer('sample text', { scale: 0 }); // $ExpectType Promise<Buffer>
QC.toBuffer('sample text', { width: 0 }); // $ExpectType Promise<Buffer>
QC.toBuffer('sample text', { color: { dark: '#000000ff' } }); // $ExpectType Promise<Buffer>
QC.toBuffer('sample text', { color: { light: '#000000ff' } }); // $ExpectType Promise<Buffer>
QC.toBuffer('sample text', { type: 'png' }); // $ExpectType Promise<Buffer>
// @ts-expect-error
QC.toBuffer('sample text', { type: 'foo' });
QC.toBuffer('sample text', { rendererOpts: { deflateLevel: 1 } }); // $ExpectType Promise<Buffer>
QC.toBuffer('sample text', { rendererOpts: { deflateStrategy: 1 } }); // $ExpectType Promise<Buffer>
