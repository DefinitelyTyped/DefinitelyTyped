import _7z = require('7zip-min');

_7z.pack("index.d.ts", "archive.7z", (err: any) => { });
_7z.unpack("archive.7z", "./", (err: any) => { });
_7z.list("archive.7z", (err: any, result: _7z.Result[]) => { });
