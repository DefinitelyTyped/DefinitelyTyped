import ColorHash from "color-hash";

const colorHash = new ColorHash();

// $ExpectType ColorValueArray
const result1 = colorHash.hsl("Hello World");
// $ExpectType ColorValueArray
const result2 = colorHash.rgb("Hello World");
// $ExpectType string
const result3 = colorHash.hex("Hello World");

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
new ColorHash({ lightness: [0.2, 0.35, 0.5, 0.65, 0.8] });

// Custom Saturation
new ColorHash({ saturation: 0.5 });
new ColorHash({ saturation: [0.2, 0.35, 0.5, 0.65, 0.8] });

// bkdr Hash
new ColorHash({ hash: "bkdr" });
