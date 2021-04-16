getPixels('path/to/image.png', callback);
getPixels('path/to/image.png', 'image/png', callback);
getPixels(new Uint8Array(1000), 'image/png', callback);
getPixels(Buffer.from([0, 0, 0]), 'image/png', callback);

function callback (error, array) {
	if (error) {
		const errorMsg: string = error.toUpperCase();
	}
	if (array) {
		const numPixels: number = array.width * array.height;
	}
}
