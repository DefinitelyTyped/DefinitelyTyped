import convert from "heic-convert";
import convertBrowser from "heic-convert/browser";

// $ExpectType Promise<ArrayBuffer>
convert({ buffer: new ArrayBuffer(10), format: "PNG" });
// $ExpectType Promise<ArrayBuffer>
convertBrowser({ buffer: new ArrayBuffer(10), format: "PNG" });

// $ExpectType Promise<ArrayBuffer>
convert({ buffer: new ArrayBuffer(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<ArrayBuffer>
convertBrowser({ buffer: new ArrayBuffer(10), format: "JPEG", quality: 0.4 });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new ArrayBuffer(10), format: "PNG" });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new ArrayBuffer(10), format: "PNG" });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new ArrayBuffer(10), format: "JPEG", quality: 0.4 });
// $ExpectType Promise<Convertible[]>
convertBrowser.all({ buffer: new ArrayBuffer(10), format: "JPEG", quality: 0.4 });
