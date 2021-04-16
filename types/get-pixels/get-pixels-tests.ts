import getPixels from 'get-pixels';
import * as ndarray from 'ndarray';

getPixels('path/to/image.png', callback);
getPixels('path/to/image.png', 'image/png', callback);
getPixels(new Uint8Array(1000), 'image/png', callback);
getPixels(Buffer.from([0, 0, 0]), 'image/png', callback);

function callback(error: string | null, array: ndarray | null) {
	if (error) {
		const errorMsg: string = error.toUpperCase();
	}
	if (array) {
		const numPixels: number = array.width * array.height;
	}
}
