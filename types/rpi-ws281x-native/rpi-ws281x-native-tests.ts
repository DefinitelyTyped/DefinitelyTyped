import ws281x = require('rpi-ws281x-native');

// Usage Example
const channel = ws281x(100, { stripType: 'ws2812' });
channel.brightness = 255;

const colorsArray = channel.array;
for (let i = 0; i < channel.count; i++) {
    colorsArray[i] = 0xffcc22;
}

ws281x.render();

// ws281x(numLeds: number, options = {}): Channel
const channel2 = ws281x(20, {
    gpio: 18,
    invert: false,
    brightness: 255,
    stripType: ws281x.stripType.WS2812,
});
channel2.buffer[0] = 0xab;

// ws281x.init(options: Object): Channel[]
const channels = ws281x.init({
    dma: 10,
    freq: 800000,
    channels: [
        { count: 20, gpio: 18, invert: false, brightness: 255, stripType: 'ws2812' },
        { count: 20, gpio: 13, invert: false, brightness: 128, stripType: 'sk6812-rgbw' },
    ],
});
channels[0].array[0] = 0xaabbcc;

// Importing from the constants file works too
import * as constants from 'rpi-ws281x-native/lib/constants';
constants.stripType.SK6812_RGBW;

process.on('SIGINT', () => {
    ws281x.reset();
    ws281x.finalize();
});
