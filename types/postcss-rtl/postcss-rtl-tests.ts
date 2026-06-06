import postcss = require("postcss");
import postcssRtl = require("postcss-rtl");

postcss([postcssRtl]);
postcss([postcssRtl()]);
postcss([postcssRtl({})]);
postcss([
    postcssRtl({
        addPrefixToSelector: (selector, string) => selector + string,
        onlyDirection: "ltr",
        prefixType: "attribute",
        prefix: "foo",
        removeComments: true,
        fromRTL: true,
        blacklist: ["foo"],
        whitelist: ["bar"],
        aliases: { "--spacing": "padding" },
    }),
]);
