// test as global script only

const qrcode = new QRCode('test', {
    text: 'http://jindo.dev.naver.com/collie',
    width: 128,
    height: 128,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
    useSVG: true,
});

qrcode.clear(); // $ExpectType void
qrcode.makeCode('https://github.com/llyys/qrcodejs'); // $ExpectType void
