import localByDefault = require("postcss-modules-local-by-default");
import postcss from "postcss";

postcss([localByDefault()]);

postcss([localByDefault({
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
})]);
