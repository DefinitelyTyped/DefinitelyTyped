import isSsh = require('is-ssh');

isSsh('ssh://user@host.xz:port/path/to/repo.git/'); // $ExpectType boolean
isSsh('ssh://user@host.xz/path/to/repo.git/'); // $ExpectType boolean
isSsh('ssh://host.xz:port/path/to/repo.git/'); // $ExpectType boolean
isSsh('ssh://host.xz/path/to/repo.git/'); // $ExpectType boolean
