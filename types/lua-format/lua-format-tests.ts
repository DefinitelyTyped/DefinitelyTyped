import { Beautify, Minify, type Settings } from "lua-format";

Beautify("print('hello')", {});
Minify("print('hello')", {});

Beautify("print('hello')", {
    RenameVariables: true,
    Indentation: "\t",
});

Minify("print('hello')", {
    RenameGlobals: false,
    SolveMath: true,
});

const settings: Settings = {
    RenameVariables: true,
    RenameGlobals: false,
    SolveMath: true,
    Indentation: "  ",
};

Beautify("print('hello')", settings);
Minify("print('hello')", settings);

const beautified: string = Beautify("print()", {});
const minified: string = Minify("print()", {});

// @ts-expect-error
Beautify();

// @ts-expect-error
Beautify("print('hello')");

// @ts-expect-error
Minify(123);

Beautify("code", {
    // @ts-expect-error
    RenameVariables: "yes",
});

Minify("code", {
    // @ts-expect-error
    RenameGlobals: 1,
});

Beautify("code", {
    // @ts-expect-error
    Indentation: 4,
});

Beautify("code", {
    // @ts-expect-error
    UnknownOption: true,
});
