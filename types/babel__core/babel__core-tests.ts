import * as babel from "@babel/core";

const options: babel.TransformOptions = {
    ast: true,
    sourceMaps: true
};

babel.transform("code();", options, (err, result) => {
    const { code, map, ast } = result!;
});

const transformSyncResult = babel.transformSync("code();", options);
if (transformSyncResult) {
    const { code, map, ast } = transformSyncResult;
}

babel.transformFile("filename.js", options, (err, result) => {
    const { code, map, ast } = result!;
});

babel.transformFileSync("filename.js", options)!.code;

const sourceCode = "if (true) return;";
const parsedAst = babel.parse(sourceCode, options);

babel.transformFromAst(parsedAst!, sourceCode, options, (err, result) => {
    const { code, map, ast } = result!;
});

const transformFromAstSyncResult = babel.transformFromAstSync(parsedAst!, sourceCode, options);
const { code, map, ast } = transformFromAstSyncResult!;
