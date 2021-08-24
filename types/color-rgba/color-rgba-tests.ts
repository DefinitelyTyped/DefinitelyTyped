import rgba = require('color-rgba');

// $ExpectType [number, number, number, number] | undefined
rgba('rgb(80, 120, 160)'); // [80, 120, 160, 1]
// $ExpectType [number, number, number, number] | undefined
rgba('rgba(80, 120, 160, .5)'); // [80, 120, 160, .5]
// $ExpectType [number, number, number, number] | undefined
rgba('hsla(109, 50%, 50%, .75)'); // [87.125, 191.25, 63.75, .75]
// $ExpectType [number, number, number, number] | undefined
rgba([10, 20, 30]);
// $ExpectType [number, number, number, number] | undefined
rgba({
    r: 10,
    g: 20,
    b: 30,
});
// $ExpectType [number, number, number, number] | undefined
rgba({
    red: 10,
    green: 0,
    blue: 30,
});
// $ExpectType [number, number, number, number] | undefined
rgba({
    h: 10,
    s: 0,
    l: 30,
});
// $ExpectType [number, number, number, number] | undefined
rgba('0x00ff00');
// $ExpectType [number, number, number, number] | undefined
rgba('yellow');
