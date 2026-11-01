import match = require("mime-match");

// exact match
// $ExpectType boolean
match("image/jpeg", "image/jpeg");
// --> true

// wildcard match
// $ExpectType boolean
match("image/jpeg", "image/*");
// --> true

// find which of our wildcard patterns matches a specific mimetype
// $ExpectType string[]
["application/*", "image/*"].filter(match("image/jpeg"));
// --> ['image/*']

// charset suffix is ignored
// $ExpectType boolean
match("application/json", "application/json; charset=utf-8");
// --> true
