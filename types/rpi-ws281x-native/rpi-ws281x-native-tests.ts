import ws281x = require('rpi-ws281x-native');

const NUM_LEDS = 100;

const channel = ws281x(NUM_LEDS, { stripType: ws281x.stripType.WS2811_RGB });
channel.brightness = 255;

for (let i = 0; i < NUM_LEDS; i++) {
    channel.array[i] = 0;
}
ws281x.render();

process.on('SIGINT', () => {
    ws281x.reset();
    ws281x.finalize();
});
