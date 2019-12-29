import ccap = require('ccap');

const captcha1 = ccap();

const width = 0;
const height = 0;
const offset = 0;
const captcha2 = ccap(width, height, offset);

const captcha3 = ccap({
	width: 256,	// set width,default is 256
	height: 60,	// set height,default is 60
	offset: 40,	// set text spacing,default is 40
	quality: 100,	// set pic quality,default is 50
	fontsize: 57,	// set font size,default is 57
	// Custom the function to generate captcha text
	generate() {
		// generate captcha text here
		return 'text';	// return the captcha text
	}
});
