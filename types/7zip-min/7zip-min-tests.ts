import _7z = require("7zip-min");

// $ExpectType void
_7z.pack("index.d.ts", "archive.7z", err => {});
// $ExpectType void
_7z.unpack("archive.7z", "./", err => {});
// $ExpectType void
_7z.unpack("archive.7z", err => {});
// $ExpectType void
_7z.list("archive.7z", (err, result) => {
    if (err) {
        return;
    }

    for (const item of result) {
        item.attr; // $ExpectType string
        item.block; // $ExpectType string
        item.compressed; // $ExpectType string
        item.crc; // $ExpectType string
        item.date; // $ExpectType string
        item.encrypted; // $ExpectType string
        item.method; // $ExpectType string
        item.name; // $ExpectType string
        item.size; // $ExpectType string
        item.time; // $ExpectType string
    }
});
