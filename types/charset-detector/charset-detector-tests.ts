import detect = require('charset-detector');

let r: detect.CharsetMatch[];

r = detect([1, 2, 3]);
r = detect([]);
r = detect(new Uint8Array(10));

r = detect([], detect.ALL_CS_RECOGNIZERS);
r = detect([], detect.DEFAULT_CS_RECOGNIZERS);
r = detect(
    [],
    [
        (input: ArrayLike<number>, stats: detect.InputStats): detect.CharsetMatch => {
            return {
                confidence: 10,
                lang: 'zh',
                charsetName: 'charset',
            };
        },
    ],
);
r = detect(
    [],
    [
        (input: ArrayLike<number>, stats: detect.InputStats): null => {
            return null;
        },
    ],
);
r = detect([], []);
