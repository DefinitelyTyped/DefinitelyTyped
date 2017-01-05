import qrcode = require('qrcode-generator');

let qr = qrcode(4,'M');

qr.addData('some arbitrary data');
qr.make();

let imgHtml = qr.createImageTag(5,5);
let svgHtml = qr.createSvgTag(5,5);
let tableHtml = qr.createTableTag(5,5);