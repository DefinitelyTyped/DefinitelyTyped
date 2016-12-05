import fileUrl = require("file-url");
// Copied from https://github.com/sindresorhus/file-url/blob/14c7a69ae3798f50b3a4a21823c86e10b38160fe/readme.md



fileUrl('unicorn.jpg');
//=> 'file:///Users/sindresorhus/dev/file-url/unicorn.jpg'

fileUrl('/Users/pony/pics/unicorn.jpg');
//=> 'file:///Users/pony/pics/unicorn.jpg'
