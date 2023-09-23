import { extractColors, Options } from "extract-colors";

const src = "my-image.jpg";

const options: Options = {
    pixels: 50,
    distance: 0.8,
    saturationImportance: 0.4,
    splitPower: 9,
};

extractColors(src)
    .then((color) => console.log(color))
    .catch((err) => console.error(err));

extractColors(src, options)
    .then((color) => console.log(color))
    .catch((err) => console.error(err));
