import isSvg = require('is-svg');

const dataString = '<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>';
const dataBuffer = Buffer.from(dataString);

const resultString: boolean = isSvg(dataString);
const resultBuffer: boolean = isSvg(dataBuffer);
