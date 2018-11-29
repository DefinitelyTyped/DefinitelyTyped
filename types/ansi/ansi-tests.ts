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
    const cname = color.replace(/([a-z])([A-Z])/g, (_: string, l: string, u: string): string => `${l} ${u.toLowerCase()}`);

    ((cursor[color] as (...anything: any[]) => ansi.Cursor)()
        .bold()
        .bg)[color === 'blue' || color === 'brightBlue' ? 'black' : 'blue']()
        .write(
            `Hello, bold ${cname} world!\n`
        )
        .reset();
});
