import convert = require("heic-convert");
import convertBrowser = require("heic-convert/browser");

// $ExpectType Promise<Uint8Array> typescript<5.7
// $ExpectType Promise<Uint8Array<ArrayBuffer>> typescript>=5.7
convert({ buffer: new Uint8Array(10), format: "PNG" });
convert({ buffer: new Uint8Array(10), format: "PNG" });
// $ExpectType Promise<Uint8Array> typescript<5.7
// $ExpectType Promise<Uint8Array<ArrayBuffer>> typescript>=5.7
convert({ buffer: new Uint8Array(10), format: "PNG" });
convertBrowser({ buffer: new Uint8Array(10), format: "PNG" });

// $ExpectType Promise<Uint8Array> typescript<5.7
// $ExpectType Promise<Uint8Array<ArrayBuffer>> typescript>=5.7
convert({ buffer: new Uint8Array(10), format: "PNG" });
convert({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<Uint8Array> typescript<5.7
// $ExpectType Promise<Uint8Array<ArrayBuffer>> typescript>=5.7
convert({ buffer: new Uint8Array(10), format: "PNG" });
convertBrowser({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new Uint8Array(10), format: "PNG" });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new Uint8Array(10), format: "PNG" });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
