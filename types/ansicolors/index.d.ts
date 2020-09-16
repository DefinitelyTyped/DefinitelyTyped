// Type definitions for ansicolors
// Project: https://github.com/thlorenz/ansicolors
// Definitions by: Benjamin Arthur Lupton <https://github.com/balupton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Colors {
    (value: string): string
    [key: string]: this
    white: this
    black: this
    blue: this
    cyan: this
    green: this
    magenta: this
    red: this
    yellow: this
    brightBlack: this
    brightRed: this
    brightGreen: this
    brightYellow: this
    brightBlue: this
    brightMagenta: this
    brightCyan: this
    brightWhite: this
    bgBlack: this
    bgRed: this
    bgGreen: this
    bgYellow: this
    bgBlue: this
    bgMagenta: this
    bgCyan: this
    bgWhite: this
    bgBrightBlack: this
    bgBrightRed: this
    bgBrightGreen: this
    bgBrightYellow: this
    bgBrightBlue: this
    bgBrightMagenta: this
    bgBrightCyan: this
    bgBrightWhite: this
    open: this
    close: this
    colors: this
}
declare const colors: Colors
export default colors
