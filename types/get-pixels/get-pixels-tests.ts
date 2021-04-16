import getPixels from "get-pixels";
import ndarray from "ndarray";

getPixels("path/to/image.png", callback);
getPixels("path/to/image.png", "png", callback);
getPixels(new Uint8Array(1000), "png", callback);
getPixels(Buffer.from([0, 0, 0]), "png", callback);

function callback(error: Error | null, array: ndarray | null) {
    if (error) {
        const errorMsg: string = error.message.toUpperCase();
    }
    if (array) {
        const numPixels: number = array.shape[0] * array.shape[1];
    }
}
