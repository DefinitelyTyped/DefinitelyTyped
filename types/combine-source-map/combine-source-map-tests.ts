
import combine = require("combine-source-map");

var sourcemap = combine.create();

sourcemap.addFile({ sourceFile: "file.js", source: "return 123" })
    .addFile({ sourceFile: "source.js", source: "return 'abc'" });

var res: string = sourcemap.base64();

res = sourcemap.comment();

combine.removeComments("(123 | 'abc') // #sourceMappingURL=file.js.map");
