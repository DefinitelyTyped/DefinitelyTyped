import { BitmapText } from 'athenajs';

const bitmap: BitmapText = new BitmapText('myBitmap', {
    size: 'big',
    width: 180,
    height: 32,
    visible: false,
    scrollOffsetX: 0,
    scrollOffsetY: 0,
    text: 'pause',
    offsetX: 34,
    startY: 36,
    charWidth: 18,
    charHeight: 18,
    imageId: 'font'
});

bitmap.center();
