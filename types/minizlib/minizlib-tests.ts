import zlib = require('minizlib');

// $ExpectType BrotliCompress
new zlib.BrotliCompress({});

// $ExpectType BrotliDecompress
new zlib.BrotliDecompress({});

// $ExpectType Deflate
new zlib.Deflate({});

// $ExpectType Inflate
new zlib.Inflate({});

// $ExpectType Gzip
new zlib.Gzip({});

// $ExpectType Gunzip
new zlib.Gunzip({});

// $ExpectType DeflateRaw
new zlib.DeflateRaw({});

// $ExpectType InflateRaw
new zlib.InflateRaw({});

// $ExpectType Unzip
new zlib.Unzip({});
