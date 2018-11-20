import localByDefault = require("postcss-modules-local-by-default");
import { Transformer } from "postcss";

const ap1: Transformer = localByDefault();

const ap2: Transformer = localByDefault({
    mode: "global",
    rewriteUrl: (global, url) => {
        url = url.trim();

        if (!url.replace(/\s/g, "").length) {
            return url;
        }

        if (global) {
            return url + "?request";
        }

        return url;
    }
});
