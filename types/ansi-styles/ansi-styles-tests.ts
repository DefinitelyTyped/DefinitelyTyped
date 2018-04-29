import ansiStyles = require('ansi-styles');
import { EscapeCode } from './EscapeCode';

let
    modifier = [
        'reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough'
    ],
    color = [
        'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray',
        // Bright Color
        'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright'
    ],
    bgColor = [
        'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan',
        // Bright bgColor
        'bgBlackBright', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright'
    ],
    styles = [...modifier, ...color, ...bgColor],
    codeTypes = [
        'ansi', 'ansi256', 'ansi16m'
    ],
    colorFormats = [
        'ansi', 'rgb', 'hsl', 'hsv', 'hwb', 'cmyk', 'xyz', 'lab', 'lch', 'hex', 'keyword', 'ansi256', 'hcg', 'apple', 'gray'
    ],
    namespaces = [
        'modifier', 'color', 'bgColor'
    ],
    codesMap = 'codes';


checkStyle(styles, ansiStyles as any);
checkStyle(modifier, (ansiStyles as any)['modifier']);
checkStyle(color, (ansiStyles as any)['color']);
checkStyle(bgColor, (ansiStyles as any)['bgColor']);

if (!((ansiStyles as any)[codesMap] instanceof Map)) {
    throw new Error(`ansiStyles.${codesMap} not a Map.`);
}
for (let namespace of namespaces) {
    if (isUninitialized((ansiStyles as any)[namespace])) {
        throw new Error('key not found ~> ansiStyles.' + namespace);
    }
}

checkColorFormatConverter(colorFormats, 'color', (ansiStyles as any)['color']);
checkColorFormatConverter(colorFormats, 'bgColor', (ansiStyles as any)['bgColor']);

function checkStyle(styleList: string[], namespace: any) {
    for (let style of styleList) {
        checkCodePair(style, namespace[style]);
    }
}
function checkCodePair(styleName: string, pair: EscapeCode.CodePair): void {
    if (isUninitialized(pair.open)) {
        throw new Error('key not found ~> ' + styleName + '.open');
    }
    if (isUninitialized(pair.close)) {
        throw new Error('key not found ~> ' + styleName + '.close');
    }
}
function checkColorFormatConverter(formatList: string[], name: string, namespace: any) {
    for (let format of formatList) {
        for (let type of codeTypes) {
            if (typeof namespace[type][format] != 'function') {
                throw new Error(`ansiStyles.${name}.${type}.${format} not a function.`);
            }
        }
    }
    if (isUninitialized(namespace.close)) {
        throw new Error(`key not found ~> ansiStyles.${name}.close .`);
    }
}

function isUninitialized(val: any): boolean {
    return val === null || val === undefined;
}
