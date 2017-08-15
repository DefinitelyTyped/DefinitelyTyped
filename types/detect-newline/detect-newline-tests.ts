import detectNewline = require('detect-newline');

const res1 = detectNewline('foo\nbar\nbaz\r\n');
res1; // $ExpectType "\r\n" | "\n" | null

const res2 = detectNewline.graceful('foo\nbar\nbaz\r\n');
res2; // $ExpectType "\r\n" | "\n"
