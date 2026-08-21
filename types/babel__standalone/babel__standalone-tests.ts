import * as babel from "@babel/standalone";

const options = {
    ast: true,
    sourceMaps: true,
};

babel.transform("code()", options);

const lolizer = () => ({
    visitor: {
        Identifier(path: { node: { name: string } }) {
            path.node.name = "LOL";
        },
    },
});

babel.registerPlugin("lolizer", lolizer);

babel.registerPreset("lulz", { plugins: [lolizer] });

// using packages
import { packages } from "@babel/standalone";
import { ImportDeclaration } from "@babel/types";

function transformImports(code: string) {
    const { parser, types, generator } = packages;
    const ast = parser.parse(code, {
        sourceType: "module",
        plugins: ["typescript"],
        sourceFilename: "example.ts",
    });

    const imports = ast.program.body.filter((it) => types.isImportDeclaration(it)) as ImportDeclaration[];
    if (imports.length === 0) {
        return code;
    }
    imports.forEach((it) => {
        (it as ImportDeclaration).source.value = `https://esm.sh/${(it as ImportDeclaration).source.value}`;
    });
    const newCode = generator.default(ast).code;
    return newCode;
}

transformImports(`
import { add } from 'lodash-es'
console.log(add(1, 2))
`);

packages.generator.default;
packages.parser.parse("code()", {
    sourceType: "module",
    plugins: ["typescript"],
    sourceFilename: "example.ts",
});
packages.template.expression("add(1, 2)");
packages.traverse.default;
const t = packages.types;
t.isImportDeclaration(t.importDeclaration([
    t.importSpecifier(t.identifier("add"), t.identifier("add")),
    t.importSpecifier(t.identifier("sum"), t.identifier("sum")),
], t.stringLiteral("lodash-es")));
