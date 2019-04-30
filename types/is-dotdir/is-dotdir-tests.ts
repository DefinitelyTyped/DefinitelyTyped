import isDotdir = require('is-dotdir');

isDotdir('a/b/c/.gitignore'); // $ExpectType boolean
