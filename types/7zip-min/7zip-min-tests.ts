import _7z = require('7zip-min');

_7z.pack("index.d.ts", "archive.7z", (err: any) => { });
_7z.unpack("archive.7z", "./", (err: any) => { });
_7z.unpack("archive.7z", (err: any) => { });

_7z.list("archive.7z", (err: any, result: _7z.Result[]) => {
    if (err) {
        return;
    }

    for (const item of result) {
        // attr:'A'
        // block:''
        // compressed:'0'
        // crc:''
        // date:'2021-03-20'
        // encrypted:'-'
        // method:''
        // name:'index.js'
        // size:'0'
        // time:'12:07:46'
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
