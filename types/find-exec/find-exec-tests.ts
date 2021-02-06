import findExec = require('find-exec');

findExec(['mplayer', 'afplay', 'cvlc']); // $ExpectType string | null
// support var args as per implementation details
findExec('mplayer', 'afplay', 'cvlc'); // ExpectType string | null
