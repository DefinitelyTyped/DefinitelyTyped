import minizlib = require("minizlib");

// $ExpectType BrotliCompress
new minizlib.BrotliCompress({});

// $ExpectType BrotliDecompress
new minizlib.BrotliDecompress({});

// $ExpectType Deflate
new minizlib.Deflate({});

// $ExpectType Inflate
new minizlib.Inflate({});

// $ExpectType Gzip
new minizlib.Gzip({});

// $ExpectType Gunzip
new minizlib.Gunzip({});

// $ExpectType DeflateRaw
new minizlib.DeflateRaw({});

// $ExpectType InflateRaw
new minizlib.InflateRaw({});

// $ExpectType Unzip
new minizlib.Unzip({});
