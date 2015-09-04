/// <reference path="chroma-js.d.ts" />

function test_chroma() {
    chroma("red");
    chroma("#ff0000");
    chroma("#f00");
    chroma("FF0000");
    chroma(255, 0, 0);
    chroma([255, 0, 0]);
    chroma(0, 1, 0.5, 'hsl');
    chroma([0, 1, 0.5], 'hsl');
    chroma(0, 1, 1, 'hsv');
    chroma("rgb(255,0,0)");
    chroma("rgb(100%,0%,0%)");
    chroma("hsl(0,100%,50%)");
    chroma(53.24, 80.09, 67.20, 'lab');
    chroma(53.24, 104.55, 40, 'lch');
    chroma(1, 0, 0, 'gl');

    chroma.hex("#ff0000");
    chroma.hex("red");
    chroma.hex("rgb(255, 0, 0)");

    chroma.rgb(255, 0, 0);
    chroma.hsl(0, 1, 0.5);
    chroma.hsv(120, 0.5, 0.5);
    chroma.lab(53.24, 80.09, 67.20);
    chroma.lch(53.24, 104.55, 40);
    chroma.gl(1, 0, 0);

    chroma.interpolate('white', 'black', 0)  // #ffffff
    chroma.interpolate('white', 'black', 1)  // #000000
    chroma.interpolate('white', 'black', 0.5)  // #7f7f7f
    chroma.interpolate('white', 'black', 0.5, 'hsv')  // #808080
    chroma.interpolate('white', 'black', 0.5, 'lab')  // #777777

    chroma.interpolate('rgba(0,0,0,0)', 'rgba(255,0,0,1)', 0.5).css()  //"rgba(127.5,0,0,0.5)"

    var bezInterpolator = chroma.interpolate.bezier(['white', 'yellow', 'red', 'black']);
    bezInterpolator(0).hex()  // #ffffff
    bezInterpolator(0.33).hex()  // #ffcc67
    bezInterpolator(0.66).hex()  // #b65f1a
    bezInterpolator(1).hex()  // #000000

    chroma.luminance('black') // 0
    chroma.luminance('white') // 1
    chroma.luminance('#ff0000') // 0.2126

    chroma.contrast('white', 'navy')  // 16.00 – ok
    chroma.contrast('white', 'yellow')  // 1.07 – not ok!
}

function test_color() {
    chroma('red').hex()  // "#FF0000""
    chroma('red').rgb()  // [255, 0, 0]
    chroma('red').hsv()  // [0, 1, 1]
    chroma('red').hsl()  // [0, 1, 0.5]
    chroma('red').lab()  // [53.2407, 80.0924, 67.2031]
    chroma('red').lch()  // [53.2407, 104.5517, 39.9990]
    chroma('red').rgba() // [255, 0, 0, 1]
    chroma('red').css()  // "rgb(255,0,0)"
    chroma('red').alpha(0.7).css()  // "rgba(255,0,0,0.7)"
    chroma('red').css('hsl')        // "hsl(0,100%,50%)"
    chroma('red').alpha(0.7).css('hsl')  // "hsla(0,100%,50%,0.7)"
    chroma('blue').css('hsla') // "hsla(240,100%,50%,1)"

    var red = chroma('red');
    red.alpha(0.5);
    red.css();  // rgba(255,0,0,0.5);

    chroma('red').darken().hex()  // #BC0000
    chroma('red').brighten().hex()  // #FF603B
    chroma('#eecc99').saturate().hex() // #fcc973
    chroma('red').desaturate().hex() // #ec3d23

    chroma('black').luminance() // 0
    chroma('white').luminance() // 1
    chroma('red').luminance() // 0.2126
}

function test_scale() {
    var scale = chroma.scale(['lightyellow', 'navy']);
    scale(0.5);  // #7F7FB0

    chroma.scale('RdYlBu');

    var col = scale(0.5);
    col.hex();  // #7F7FB0
    col.rgb();  // [127.5, 127.5, 176]

    scale = chroma.scale(['lightyellow', 'navy']).out('hex');
    scale(0.5);  // "#7F7FB0"

    var scale = chroma.scale(['lightyellow', 'navy']);
    scale.mode('hsv')(0.5);  // #54C08A
    scale.mode('hsl')(0.5);  // #31FF98
    scale.mode('lab')(0.5);  // #967CB2
    scale.mode('lch')(0.5);  // #D26662

    var scale = chroma.scale(['lightyellow', 'navy']).domain([0, 400]);
    scale(200);  // #7F7FB0

    var scale = chroma.scale(['lightyellow', 'navy']).domain([0, 100, 200, 300, 400]);
    scale(98);  // #7F7FB0
    scale(99);  // #7F7FB0
    scale(100);  // #AAAAC0
    scale(101);  // #AAAAC0

    chroma.scale(['#eee', '#900']).domain([0, 400], 7);
    chroma.scale(['#eee', '#900']).domain([1, 1000000], 7, 'log');
    chroma.scale(['#eee', '#900']).domain([1, 1000000], 5, 'quantiles');
    chroma.scale(['#eee', '#900']).domain([1, 1000000], 5, 'k-means');
    chroma.scale(['white', 'red']).domain([0, 100], 4).domain() // [0, 25, 50, 75, 100]

    chroma.scale().range(['lightyellow', 'navy']);

    chroma.scale(['lightyellow', 'navy']).correctLightness(true);

    chroma.scale('RdYlGn').domain([0,1], 5).colors()
}
