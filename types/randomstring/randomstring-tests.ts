import * as randomstring from "randomstring";

randomstring.generate();

randomstring.generate(24);

randomstring.generate({
    length: 12,
    readable: true,
    capitalization: "",
    charset: "alphabetic"
});

randomstring.generate({
    charset: "abc"
});
