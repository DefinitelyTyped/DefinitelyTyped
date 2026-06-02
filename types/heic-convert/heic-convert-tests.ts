import convert = require("heic-convert");
import convertBrowser = require("heic-convert/browser");

// $ExpectType Promise<NonSharedUint8Array>
convert({ buffer: new Uint8Array(10), format: "PNG" });
// $ExpectType Promise<Uint8Array>
convertBrowser({ buffer: new Uint8Array(10), format: "PNG" });

// $ExpectType Promise<NonSharedUint8Array>
convert({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<NonSharedUint8Array>
convertBrowser({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new Uint8Array(10), format: "PNG" });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new Uint8Array(10), format: "PNG" });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
