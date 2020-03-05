import database = require('mime-db');

// $ExpectType MimeDatabase
database;

// $ExpectType MimeEntry
database['text/markdown'];

// $ExpectType readonly string[] | undefined
database['text/markdown'].extensions;

// $ExpectType string
database['text/markdown'].extensions![0];
