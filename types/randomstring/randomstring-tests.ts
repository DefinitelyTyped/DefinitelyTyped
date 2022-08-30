import * as randomstring from "randomstring";

randomstring.generate();

randomstring.generate(24);

randomstring.generate({
    length: 12,
    readable: true,
    capitalization: undefined,
    charset: "alphabetic"
});

randomstring.generate({
    charset: "abc"
});

randomstring.generate({
    charset: "octal",
    capitalization: "uppercase"
});
