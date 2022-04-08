import ColorHash = require('color-hash');

const colorHash = new ColorHash();

const result1: [number, number, number] = colorHash.hsl('Hello World');
const result2: [number, number, number] = colorHash.rgb('Hello World');
const result3: string = colorHash.hex('Hello World');

// Custom Hash
const customHash = (str: string) => 5;

new ColorHash({ hash: customHash });

// Custom Hue
new ColorHash({ hue: 90 });
new ColorHash({ hue: { min: 90, max: 270 } });
new ColorHash({
    hue: [
        { min: 30, max: 90 },
        { min: 180, max: 210 },
        { min: 270, max: 285 },
    ],
});

// Custom Lightness
new ColorHash({ lightness: 0.5 });
new ColorHash({ lightness: [0.35, 0.5, 0.65] });

// Custom Saturation
new ColorHash({ saturation: 0.5 });
new ColorHash({ saturation: [0.35, 0.5, 0.65] });
