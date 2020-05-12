import database = require('mime-db');

// $ExpectType MimeDatabase
database;

// $ExpectType MimeEntry
database['text/markdown'];

// $ExpectType ReadonlyArray<string> | undefined
database['text/markdown'].extensions;

// $ExpectType string
database['text/markdown'].extensions![0];

// $ExpectType "iana" | "apache" | "nginx" | undefined
database['text/markdown'].source;

// $ExpectType string | undefined
database['text/markdown'].charset;

// $ExpectType boolean | undefined
database['text/markdown'].compressible;
