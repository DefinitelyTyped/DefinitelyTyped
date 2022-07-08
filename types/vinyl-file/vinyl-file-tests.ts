import vinylFile = require("vinyl-file");
import * as StarFile from "vinyl";
import File = require("vinyl");
import path = require("path");
const sample = path.join(__dirname, "./tsconfig.json");
vinylFile
    .read(sample, {
        buffer: true,
    })
    .then((file) => {
        console.log(file.contents?.toString());
        console.log(file.cwd);
    });

const file: vinylFile.VinylFile = {} as any;
// $ExpectType VinylFile
file.clone();

// This test proofs, that when having `esModuleInterop` enabled,
// importing `vinyl` using a `import * as File from "vinyl"` causes an error.
// @ts-expect-error
interface TestStarFile extends StarFile {
    clone(opts?: { contents?: boolean | undefined, deep?: boolean | undefined } | boolean): this;
}

interface TestFile extends File {
    clone(opts?: { contents?: boolean | undefined, deep?: boolean | undefined } | boolean): this;
}

const testFile: TestFile = {} as any;
// $ExpectType TestFile
testFile.clone();
const sanpleInfo = vinylFile.readSync(sample);
console.log(sanpleInfo.cwd);
console.log(sanpleInfo.isBuffer());
console.log(sanpleInfo.isDirectory());
