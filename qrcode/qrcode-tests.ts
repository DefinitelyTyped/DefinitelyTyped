/// <reference path="qrcode.d.ts" />

import * as QRCode from 'qrcode';

QRCode.toDataURL('i am a pony!', function (err, url) {
    console.log(url);
});

var qrcodedraw = new QRCodeLib.QRCodeDraw();

qrcodedraw.draw(document.getElementById('test') as HTMLCanvasElement, "this text will be in the code!", function (error, canvas) {
    if (error) {
        return console.log('Error =( ', error);
    }
    console.log('success!');
});
