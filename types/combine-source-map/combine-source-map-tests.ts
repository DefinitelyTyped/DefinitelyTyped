import combine = require("combine-source-map");

const sourcemap = combine.create();

sourcemap.addFile({ sourceFile: "file.js", source: "return 123" })
    .addFile({ sourceFile: "source.js", source: "return 'abc'" });

const res: string = sourcemap.base64();

const res2 = sourcemap.comment();

combine.removeComments("(123 | 'abc') // #sourceMappingURL=file.js.map");
