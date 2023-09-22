import TextToSVG, { Metrics } from "text-to-svg";

// $ExpectType TextToSVG
TextToSVG.loadSync();

const textToSVG = TextToSVG.loadSync("../abc.woff2");

// $ExpectType void
TextToSVG.load("../abc.woff2", (error, textToSVG) => {
    if (!error && textToSVG) {
        textToSVG.getHeight(72);
    }
});

// $ExpectType number
textToSVG.getWidth("Hello world.");

// $ExpectType number
textToSVG.getHeight(72);

// $ExpectType Metrics
textToSVG.getMetrics("Hello world.", {
    kerning: false,
});

// $ExpectType string
textToSVG.getD("Hello world.", {
    x: 10,
    y: 20,
});

// $ExpectType string
textToSVG.getPath("Hello world.", {
    attributes: {
        fill: "red",
    },
});

// $ExpectType string
textToSVG.getSVG("Hello world.", {
    letterSpacing: -1,
    attributes: {},
});
