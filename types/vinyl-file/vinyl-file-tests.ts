import vinylFile = require("vinyl-file");
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

const sanpleInfo = vinylFile.readSync(sample);
console.log(sanpleInfo.cwd);
console.log(sanpleInfo.isBuffer());
console.log(sanpleInfo.isDirectory());
