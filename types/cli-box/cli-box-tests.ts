import Box = require('cli-box');

// Create a simple box
const b1: Box = Box("20x10");
// console.log(b1.toString());

// Set custom marks
const b2: Box = new Box({
    w: 10
  , h: 10
  , stringify: false
  , marks: {
        nw: "╔"
      , n:  "══"
      , ne: "╗"
      , e:  "║"
      , se: "╝"
      , s:  "══"
      , sw: "╚"
      , w:  "║"
      , b: "░░"
    }
});
// console.log(b2.stringify());

// Box with text and use the stringify
const b3: Box = Box("20x10", "I will be \u001b[31mdis\u001b[0mplayed inside! \n A\u001b[34mnd I'm in a\u001b[0m new line!");
// console.log(b3);

// Box with aligned text to top-right
const b4: Box = Box("30x20", {
    text: "Box content"
  , stretch: true
  , autoEOL: true
  , vAlign: "top"
  , hAlign: "right"
});
// console.log(b4);

// Full screen box
const b5: Box = Box({fullscreen: true, marks: {}}, "Hello World!");
// console.log(b5.toString());

const b5s: string = Box({stringify: true, fullscreen: true, marks: {}}, "Hello World!");
const b5ns: Box = Box({stringify: false, fullscreen: true, marks: {}}, "Hello World!");

const defaults = Box.defaults;
