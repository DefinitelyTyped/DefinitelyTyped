import shellEscape = require('shell-escape');

shellEscape(['cp', '-r', 'src/', 'dest/']); // $ExpectType string
shellEscape(['cp', '-r', 'src/', 'dest/'] as const); // $ExpectType string
