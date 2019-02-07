import * as babel from "@babel/core";

const options: babel.TransformOptions = {
    ast: true,
    sourceMaps: true
};

babel.transform("code();", options, (err, result) => {
    const { code, map, ast } = result!;
    const { body } = ast!.program;
});

const transformSyncResult = babel.transformSync("code();", options);
if (transformSyncResult) {
    const { code, map, ast } = transformSyncResult;
    const { body } = ast!.program;
}

babel.transformFile("filename.js", options, (err, result) => {
    const { code, map, ast } = result!;
    const { body } = ast!.program;
});

babel.transformFileSync("filename.js", options)!.code;

const sourceCode = "if (true) return;";
const parsedAst = babel.parse(sourceCode, options);

babel.transformFromAst(parsedAst!, sourceCode, options, (err, result) => {
    const { code, map, ast } = result!;
    const { body } = ast!.program;
});

const transformFromAstSyncResult = babel.transformFromAstSync(parsedAst!, sourceCode, options);
const { code, map, ast } = transformFromAstSyncResult!;
const { body } = ast!.program;

babel.transformFromAstAsync(parsedAst!, sourceCode, options).then(transformFromAstAsyncResult => {
    const { code, map, ast } = transformFromAstAsyncResult!;
    const { body } = ast!.program;
});
