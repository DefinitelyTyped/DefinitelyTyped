import extractImports = require("postcss-modules-extract-imports");
import { Transformer } from "postcss";

const ap1: Transformer = extractImports();

const ap2: Transformer = extractImports({
    failOnWrongOrder: true,
    createImportedName: (importName, importPath) =>
        `i__imported_${importName.replace(/\W/g, "_")}_${importPath.replace(/\W/g, "_")}`
});
