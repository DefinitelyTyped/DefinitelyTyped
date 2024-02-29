import extractImports = require("postcss-modules-extract-imports");
import postcss from "postcss";

postcss([extractImports()]);

postcss([
    extractImports({
        failOnWrongOrder: true,
        createImportedName: (importName, importPath) =>
            `i__imported_${importName.replace(/\W/g, "_")}_${importPath.replace(/\W/g, "_")}`,
    }),
]);
