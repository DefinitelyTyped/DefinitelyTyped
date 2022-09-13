import scope = require("postcss-modules-scope");
import postcss from "postcss";

postcss([scope()]);

postcss([scope({
    generateScopedName(exportedName, path, css) {
        if (css.substring(0, 7) === "@ignore") {
            return exportedName;
        }

        const sanitisedPath = path.replace(/\.[^\.\/\\]+$/, "").replace(/[\W_]+/g, "_").replace(/^_|_$/g, "");
return `_${sanitisedPath}__${exportedName}`;
    }
})]);
