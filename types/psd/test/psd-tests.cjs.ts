import PSD = require("psd");

const psd = PSD.fromFile("path/to/file.psd");
psd.parse();

console.log(psd.tree().export());
console.log(psd.tree().childrenAtPath("A/B/C")[0].export());

PSD.open("path/to/file.psd")
    .then(psd => {
        return psd.image!.saveAsPng("./output.png");
    })
    .then(() => {
        console.log("Finished!");
    });

psd.image!.saveAsPng("./image.png"); // $ExpectType Promise<void>
psd.image!.saveMaskAsPng("./image-mask.png"); // $ExpectType Promise<void>
