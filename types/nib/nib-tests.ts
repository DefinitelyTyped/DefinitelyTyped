import connect = require("connect");
import stylus = require("stylus");
import nib = require("nib");

const server = connect();

function compile(str: string, path: string) {
    return stylus(str)
        .set("filename", path)
        .set("compress", true)
        .use(nib());
}

server.use(stylus.middleware({
    src: __dirname,
    compile,
}));
