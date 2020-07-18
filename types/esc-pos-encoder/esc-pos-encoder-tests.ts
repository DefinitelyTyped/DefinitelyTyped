import EscPosEncoder = require('esc-pos-encoder');

const encoder = new EscPosEncoder();

const result1 = encoder
    .initialize()
    .text('The quick brown fox jumps over the lazy dog')
    .newline()
    .qrcode('https://nielsleenheer.com')
    .encode();

const result2 = encoder
    .codepage('windows1251')
    .text('Iñtërnâtiônàlizætiøn')
    .codepage('cp936')
    .text('简体中文')
    .encode();

const result3 = encoder
    .line('The is the first line')
    .line('And this is the second')
    .encode();

const result4 = encoder
    .text('This is ')
    .underline()
    .text('underlined')
    .underline()
    .encode();

const result5 = encoder
    .align('right')
    .line('This line is aligned to the right')
    .align('center')
    .line('This line is centered')
    .align('left')
    .line('This line is aligned to the left')
    .encode();

const result6 = encoder
    .size('small')
    .line('A line of small text')
    .size('normal')
    .line('A line of normal text')
    .encode();

const result7 = encoder
    .barcode('3130630574613', 'ean13', 60)
    .encode();

const result8 = encoder
    .qrcode('https://nielsleenheer.com', 1, 8, 'h')
    .encode();

const img = new Image();
img.src = 'https://...';

const result9 = encoder
    .image(img, 300, 300, 'atkinson')
    .encode();

const result10 = encoder
    .cut('partial')
    .encode();

const result11 = encoder
    .raw([0x1c, 0x2e])
    .encode();
