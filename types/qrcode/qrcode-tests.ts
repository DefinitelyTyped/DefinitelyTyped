import * as QRCode from 'qrcode';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

QRCode.toCanvas(canvas, 'sample text', function (error) {
    if (error) console.error(error)
    console.log('success!');
});

QRCode.toDataURL('I am a pony!', function (err, url) {
    console.log(url);
});

QRCode.toDataURL('some text', { errorCorrectionLevel: 'H' }, function (err, url) {
    console.log(url);
});

QRCode.toDataURL('some text', { version: 2 }, function (err, url) {
    console.log(url);
});

QRCode.toDataURL([
    { data: 'ABCDEFG', mode: 'alphanumeric' },
    { data: '0123456', mode: 'numeric' }
], function (err, url) {
    console.log(url);
});

QRCode.toCanvas('text', { errorCorrectionLevel: 'H' }, function (err, canvas) {
    if (err) throw err;
});

QRCode.toDataURL('text', {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    rendererOpts: {
        quality: 0.3
    }
}, function (err, url) {
    if (err) throw err;
});

QRCode.toString('http://www.google.com', function (err, string) {
    if (err) throw err;
    console.log(string);
});

QRCode.toFile('path/to/filename.png', 'Some text', {
    color: {
        dark: '#00F',  // Blue dots
        light: '#0000' // Transparent background
    }
}, function (err) {
    if (err) throw err;
    console.log('done');
});
