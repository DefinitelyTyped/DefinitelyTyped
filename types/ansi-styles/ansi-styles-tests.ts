import { EscapeCode } from './EscapeCode';
import AnsiStyles = require('ansi-styles');

let
    ansiStyles = AnsiStyles as any,
    nsNames = ['modifier', 'color', 'bgColor'],
    namespaces = {
        modifier: ['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough'],
        color: ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray',
            'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright'],
        bgColor: ['bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan',
            'bgBlackBright', 'bgRedBright', 'bgGreenBright', 'bgYellowBright', 'bgBlueBright', 'bgMagentaBright', 'bgCyanBright', 'bgWhiteBright'],
    } as any,
    styles = [...namespaces.modifier, ...namespaces.color, ...namespaces.bgColor],
    codePair = ['open', 'close'],
    codeTypes = ['ansi', 'ansi256', 'ansi16m'],
    colorFormats = ['ansi', 'rgb', 'hsl', 'hsv', 'hwb', 'cmyk', 'xyz', 'lab', 'lch', 'hex', 'keyword', 'ansi256', 'hcg', 'apple', 'gray'],
    codesMap = 'codes';


checkStyle(ansiStyles, styles);
nsNames.map(ns => checkStyle(ansiStyles[ns], namespaces[ns]));

checkIsMap(ansiStyles[codesMap], `ansiStyles.${codesMap} not a Map.`);
nsNames.map(ns => checkExist(ansiStyles[ns], `ansiStyles.${ns} is not exist.`));

['color', 'bgColor'].map(ns => checkConverter(ns, ansiStyles[ns], colorFormats));


function checkStyle(namespace: any, styles: string[]) {
    styles.map(s => checkCodePair(s, namespace[s]));
}
function checkCodePair(styleName: string, pair: any): void {
    codePair.map(p => checkExist(pair[p], `${styleName}.${p} is not exist.`));
}

function checkConverter(nsName: string, namespace: any, formats: string[]) {
    formats.map(f => codeTypes.map(t => checkIsFunction(namespace[t][f], `ansiStyles.${nsName}.${t}.${f} is not a function.`)));
    checkExist(namespace.close, `${namespace}.close is not exist.`);
}

function checkExist(val: any, failMsg: string): void {
    if (val == null) throw new Error(failMsg);
}
function checkIsFunction(fn: any, failMsg: string): void {
    if (typeof fn != 'function') throw new Error(failMsg);
}
function checkIsMap(map: any, failMsg: string): void {
    if (!(map instanceof Map)) throw new Error(failMsg);
}
