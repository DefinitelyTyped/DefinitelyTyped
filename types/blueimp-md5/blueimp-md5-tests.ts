import md5 = require("blueimp-md5");

function hash1(): string {
    return md5('hello world');
}
