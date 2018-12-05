import fileUrl = require("file-url");

// from https://raw.githubusercontent.com/sindresorhus/file-url/df60ecfe08f9844569c794e92ecc2c53d1dd298d/readme.md

fileUrl('unicorn.jpg');
// => 'file:///Users/sindresorhus/dev/file-url/unicorn.jpg'

fileUrl('/Users/pony/pics/unicorn.jpg');
// => 'file:///Users/pony/pics/unicorn.jpg'

// passing {resolve: false} will make it not call path.resolve() on the path
fileUrl('unicorn.jpg', {resolve: false});
// => 'file:///unicorn.jpg'
