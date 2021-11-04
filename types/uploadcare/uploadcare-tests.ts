import * as Uploadcare from "uploadcare";

const uploadcare = Uploadcare("", "");

uploadcare.file.fromUrl("", {}, (err, res) => {
    const file: Uploadcare.File = res;
});
