import convert from "heic-convert";
import convertBrowser from "heic-convert/browser";

// $ExpectType Promise<Uint8Array> || Promise<Uint8Array<ArrayBuffer>>
convert({ buffer: new Uint8Array(10), format: "PNG" });
// $ExpectType Promise<Uint8Array> || Promise<Uint8Array<ArrayBuffer>>
convertBrowser({ buffer: new Uint8Array(10), format: "PNG" });

// $ExpectType Promise<Uint8Array> || Promise<Uint8Array<ArrayBuffer>>
convert({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<Uint8Array> || Promise<Uint8Array<ArrayBuffer>>
convertBrowser({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new Uint8Array(10), format: "PNG" });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new Uint8Array(10), format: "PNG" });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new Uint8Array(10), format: "JPEG", quality: 0.4 });
