import tinycolor = require('tinycolor2');
import gradient = require('gradient-string');

// $ExpectType string
gradient('cyan', 'pink')('Hello world!');

// $ExpectType Gradient
gradient('red', 'green', 'blue');
// $ExpectType Gradient
gradient(['#FF0000', '#00FF00', '#0000FF']);

// $ExpectType Gradient
gradient([
    tinycolor('#FFBB65'),       // tinycolor object
    {r: 0, g: 255, b: 0},       // RGB object
    {h: 240, s: 1, v: 1, a: 1}, // HSVa object
    'rgb(120, 120, 0)',         // RGB CSS string
    'gold'                      // named color
]);

// $ExpectType string
gradient.rainbow('I love gradient-strings!');

// $ExpectType string
gradient('orange', 'yellow').multiline([
    "  __",
    "<(o )___",
    " ( ._> /",
    "  `---'",
].join('\n'));

// $ExpectType string
gradient.atlas.multiline('Multi line\nstring');
// $ExpectType string
gradient('cyan', 'pink').multiline('Multi line\nstring', {interpolation: 'hsv'});

// $ExpectType Gradient
gradient([
    {color: '#d8e0de', pos: 0},
    {color: '#255B53', pos: 0.8},
    {color: '#000000', pos: 1},
]);
