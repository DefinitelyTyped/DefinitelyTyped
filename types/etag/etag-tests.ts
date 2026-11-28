import etag = require("etag");

// $ExpectType string
etag("str");
etag("str", { weak: true });
etag(new Buffer(""));
etag(new Uint8Array([1, 2, 3]));
etag({
    ctime: new Date(),
    mtime: new Date(),
    ino: 1,
    size: 1,
});
