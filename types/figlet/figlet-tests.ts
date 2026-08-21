import figlet = require("figlet");

figlet("abc", (err, str) => {
    // $ExpectType Error | null
    err;
    // $ExpectType string | undefined
    str;
});
figlet("My World", "1Row", (err, str) => {
    // $ExpectType Error | null
    err;
    // $ExpectType string | undefined
    str;
});
// @ts-expect-error
figlet("fweGWEPewfe", "What is the font? I cannot get it");
// It is ok to skip callback.
// $ExpectType void
figlet("qweoqw");
// It is ok to skip callback.
// $ExpectType void
figlet("qweoqw", "1Row");
// @ts-expect-error
figlet("qweoqw", "1Row", undefined as any, undefined as any);

figlet.text("tokiyo tomare", (err, str) => {
    // $ExpectType Error | null
    err;
    // $ExpectType string | undefined
    str;
});
figlet.text("Hi", "Flower Power", (err, str) => {
    // $ExpectType Error | null
    err;
    // $ExpectType string | undefined
    str;
});
figlet.text(
    "Annyeong",
    {
        font: "Fun Face",
        horizontalLayout: "full",
        verticalLayout: "fitted",
        width: 80,
        whitespaceBreak: true,
    },
    (err, str) => {
        // $ExpectType Error | null
        err;
        // $ExpectType string | undefined
        str;
    },
);
figlet.text(
    "Annyeong",
    {
        font: "Fun Face",
        horizontalLayout: "full",
        verticalLayout: "fitted",
    },
    (err, str) => {
        // $ExpectType Error | null
        err;
        // $ExpectType string | undefined
        str;
    },
);
// It is ok to skip callback.
// $ExpectType void
figlet.text("Oreehe", { font: "Fun Face" });
// It is ok to skip callback.
// $ExpectType void
figlet.text("It cannot make sense");

// $ExpectType string
figlet.textSync("test text");
// $ExpectType string
figlet.textSync("text desu", "Fuzzy");
// $ExpectType string
figlet.textSync("oho", {
    font: "Invita",
});
// @ts-expect-error
figlet.textSync();

figlet.metadata("JS Block Letters", (err, fontOptions, headerComment) => {
    // $ExpectType Error | null
    err;
    // $ExpectType FontOptions | undefined
    fontOptions;
    // $ExpectType string | undefined
    headerComment;
});
// @ts-expect-error
figlet.metadata("This is random font name which cannot make sense", undefined as any);
// @ts-expect-error
figlet.metadata("Alligator", undefined as any, undefined as any);

// $ExpectType Defaults
figlet.defaults();
// $ExpectType Defaults
figlet.defaults({});
// $ExpectType Defaults
figlet.defaults({
    font: "Patorjk's Cheese",
});

figlet.fonts((err, fonts) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Fonts[] | undefined
    fonts;
});

// $ExpectType Fonts[]
figlet.fontsSync();

// $ExpectType string
figlet.textSync("testing the new font", "ANSI Regular");

// $ExpectType void
figlet.parseFont("myfont", "--fontFileDataHere--");
// @ts-expect-error
figlet.parseFont("parsing a font without a file");

// $ExpectType string
figlet.textSync("test1", { font: "ANSI Regular" });
// $ExpectType string
figlet.textSync("test2", { whitespaceBreak: true });
// $ExpectType string
figlet.textSync("test3", { whitespaceBreak: false, width: 100 });
// $ExpectType string
figlet.textSync("test3", { width: 69 });
// $ExpectType string
figlet.textSync("test4", { font: "Pagga" });

// Can only preload specific fonts
// @ts-expect-error
figlet.preloadFonts(["test4"]);
// Can omit optional callback
// $ExpectType Promise<void>
figlet.preloadFonts(["Fun Face"]);
// Can pass optional callback
// $ExpectType Promise<void>
figlet.preloadFonts(["Fun Face"], () => {});
