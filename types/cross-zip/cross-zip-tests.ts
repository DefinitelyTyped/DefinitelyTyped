import * as zip from "cross-zip";

const inPath = "myFolder";
const outPath = "myFile.zip";

zip.zipSync(inPath, outPath);
zip.zip(inPath, outPath);
zip.zip(inPath, outPath, error => {
    error; // $ExpectType Error | undefined
});

zip.unzip(inPath, outPath);

zip.unzip(inPath, outPath, error => {
    error; // $ExpectType Error | undefined
});
