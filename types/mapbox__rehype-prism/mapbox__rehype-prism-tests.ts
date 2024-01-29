import rehypePrism = require("@mapbox/rehype-prism");
import { Root } from "hast";
import { Processor } from "unified";

declare const rehype: Processor<Root>;

rehype()
    .use(rehypePrism)
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypePrism, {
        alias: {
            javascript: "js",
            typescript: ["ts", "tsx"],
        },
    });
