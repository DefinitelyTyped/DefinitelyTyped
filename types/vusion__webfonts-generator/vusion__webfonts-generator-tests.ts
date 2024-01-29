import webfontsGenerator = require("vusion__webfonts-generator");

// @ts-expect-error
webfontsGenerator();
// @ts-expect-error
webfontsGenerator({});

// @ts-expect-error
webfontsGenerator({
    dest: "",
    files: "",
    order: ["eot", "svg", "ttf", "woff", "woff2"],
    types: ["eot", "svg", "ttf", "woff", "woff2"],
    formatOptions: { eot: {}, svg: {}, ttf: {}, woff: {}, woff2: {} },
});

// $ExpectType void
webfontsGenerator({
    dest: "",
    files: [""],
    order: ["eot", "svg", "woff", "woff2"],
    types: ["eot", "svg", "woff", "woff2"],
}, (err, res) => {
    // $ExpectType Error | undefined
    const _err = err;
    // $ExpectType Buffer
    const eot = res.eot;
    // $ExpectType string
    const svg = res.svg;
    // $ExpectType Buffer
    const woff = res.woff;
    // $ExpectType Buffer
    const woff2 = res.woff2;
    // @ts-expect-error
    const ttf = res.ttf;
});

// $ExpectType void
webfontsGenerator({
    dest: "",
    files: [""],
    order: ["eot", "svg", "woff", "woff2"],
    types: ["eot", "svg", "woff", "woff2"],
    centerHorizontally: true,
    codepoints: { ex: 123 },
    css: true,
    cssContext(context, options, handlebars) {},
    cssDest: "",
    cssFontsUrl: "",
    cssTemplate: "",
    descent: 123,
    fixedWidth: true,
    fontHeight: 123,
    fontName: "test",
    formatOptions: {
        eot: {},
        svg: {},
        woff: {},
        woff2: {},
        // @ts-expect-error
        ttf: {},
    },
    html: true,
    htmlContext(context, options, handlebars) {},
    htmlDest: "",
    htmlTemplate: "",
    ligature: false,
    normalize: true,
    rename(name) {
        // $ExpectType string
        const n = name;
        return name;
    },
    round: 123,
    startCodepoint: 123,
    templateOptions: {
        baseSelector: "",
        classPrefix: "",
    },
    writeFiles: true,
}, (err, res) => {});

// $ExpectType void
webfontsGenerator({
    dest: "",
    files: [""],
    order: ["eot"],
    types: ["eot"],
    html: true,
    css: true,
}, (err, res) => {
    // $ExpectType (urls?: Record<"eot", string> | undefined) => string
    const generateHtml = res.generateHtml;
    // $ExpectType (urls?: Record<"eot", string> | undefined) => string
    const generateCss = res.generateCss;
});

// $ExpectType void
webfontsGenerator({
    dest: "",
    files: [""],
    order: ["eot"],
    types: ["eot"],
    html: false,
    css: false,
}, (err, res) => {
    // $ExpectType (urls?: Record<"eot", string> | undefined) => string
    const generateHtml = res.generateHtml;
    // $ExpectType (urls?: Record<"eot", string> | undefined) => string
    const generateCss = res.generateCss;
});

// $ExpectType string
webfontsGenerator.templates.css;
// $ExpectType string
webfontsGenerator.templates.scss;
// $ExpectType string
webfontsGenerator.templates.html;
