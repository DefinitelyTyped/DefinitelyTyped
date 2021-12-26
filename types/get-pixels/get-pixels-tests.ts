import getPixels = require("get-pixels");
import { NdArray } from "ndarray";

getPixels("path/to/image.png", callback);
getPixels("path/to/image.png", "image/png", callback);
getPixels(new Uint8Array(1000), "image/jpeg", callback);
getPixels(Buffer.from([0, 0, 0]), "image/gif", callback);

function callback(error: Error | null, array: NdArray<Uint8Array> | null) {
    if (error) {
        const errorMsg: string = error.message.toUpperCase();
    }
    if (array) {
        const numPixels: number = array.shape[0] * array.shape[1];
    }
}
