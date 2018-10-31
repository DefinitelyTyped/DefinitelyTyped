/// <reference types="node" />
import ansi = require('ansi');
const cursor = ansi(process.stdout);

Object.keys({
    white: 37
  , black: 30
  , blue: 34
  , cyan: 36
  , green: 32
  , magenta: 35
  , red: 31
  , yellow: 33
  , grey: 90
  , brightBlack: 90
  , brightRed: 91
  , brightGreen: 92
  , brightYellow: 93
  , brightBlue: 94
  , brightMagenta: 95
  , brightCyan: 96
  , brightWhite: 97
}).forEach((color) => {
    cursor[color]().bold().write(`Hello, bold ${color.replace(/([a-z])([A-Z])/g, (_: string, l: string, u: string): string => `${l} ${u.toLowerCase()}`)} world!\n`).reset();
});
