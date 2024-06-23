import bare = require("./bare.cjs.js");
import full = require("./full.cjs.js");
import light = require("./light.cjs.js");
import { Options as Options_ } from "./bare.cjs.js";

declare namespace MarkdownItEmoji {
    type Options = Options_;
}

declare const MarkdownItEmoji: {
    bare: typeof bare;
    full: typeof full;
    light: typeof light;
};

export = MarkdownItEmoji;
