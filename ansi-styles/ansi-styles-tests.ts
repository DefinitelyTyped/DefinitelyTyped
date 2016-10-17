
import ansi = require('ansi-styles');


var styles = [
    ansi.reset, 

    ansi.bold, 
    ansi.dim, 
    ansi.italic, 
    ansi.underline, 
    ansi.inverse, 
    ansi.hidden, 
    ansi.strikethrough, 

    ansi.black, 
    ansi.red, 
    ansi.green, 
    ansi.yellow, 
    ansi.blue, 
    ansi.magenta, 
    ansi.cyan, 
    ansi.white, 
    ansi.gray, 

    ansi.bgBlack, 
    ansi.bgRed, 
    ansi.bgGreen, 
    ansi.bgYellow, 
    ansi.bgBlue, 
    ansi.bgMagenta, 
    ansi.bgCyan, 
    ansi.bgWhite
]

for (var key in styles) {
    check(key, styles[key])
}

function check(key:string, escapeCodes:ansi.EscapeCodePair): void {
    if (uninitialized(escapeCodes.open)) {
        throw new Error('key not found ~> ' + key + '.open')
    }
    if (uninitialized(escapeCodes.close)) {
        throw new Error('key not found ~> ' + key + '.close')
    }
}

function uninitialized(val:any): boolean {
    return val === null || val === undefined
}


