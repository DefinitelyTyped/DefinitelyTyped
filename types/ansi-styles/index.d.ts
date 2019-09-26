// Type definitions for ansi-styles 3.2.1
// Project: https://github.com/sindresorhus/ansi-styles
// Definitions by: bryn austin bellomy <https://github.com/brynbellomy>
//                 plylrnsdy <https://github.com/plylrnsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { EscapeCode } from './escape-code';


export const reset: EscapeCode.CodePair;
export const bold: EscapeCode.CodePair;
export const dim: EscapeCode.CodePair;
/**
 * Not widely supported
 */
export const italic: EscapeCode.CodePair;
export const underline: EscapeCode.CodePair;
export const inverse: EscapeCode.CodePair;
export const hidden: EscapeCode.CodePair;
/**
 * Not widely supported
 */
export const strikethrough: EscapeCode.CodePair;

export const black: EscapeCode.CodePair;
export const red: EscapeCode.CodePair;
export const green: EscapeCode.CodePair;
export const yellow: EscapeCode.CodePair;
export const blue: EscapeCode.CodePair;
export const magenta: EscapeCode.CodePair;
export const cyan: EscapeCode.CodePair;
export const white: EscapeCode.CodePair;
/**
 * bright black
 */
export const gray: EscapeCode.CodePair;
export const grey: EscapeCode.CodePair;

export const redBright: EscapeCode.CodePair;
export const greenBright: EscapeCode.CodePair;
export const yellowBright: EscapeCode.CodePair;
export const blueBright: EscapeCode.CodePair;
export const magentaBright: EscapeCode.CodePair;
export const cyanBright: EscapeCode.CodePair;
export const whiteBright: EscapeCode.CodePair;

export const bgBlack: EscapeCode.CodePair;
export const bgRed: EscapeCode.CodePair;
export const bgGreen: EscapeCode.CodePair;
export const bgYellow: EscapeCode.CodePair;
export const bgBlue: EscapeCode.CodePair;
export const bgMagenta: EscapeCode.CodePair;
export const bgCyan: EscapeCode.CodePair;
export const bgWhite: EscapeCode.CodePair;

export const bgBlackBright: EscapeCode.CodePair;
export const bgRedBright: EscapeCode.CodePair;
export const bgGreenBright: EscapeCode.CodePair;
export const bgYellowBright: EscapeCode.CodePair;
export const bgBlueBright: EscapeCode.CodePair;
export const bgMagentaBright: EscapeCode.CodePair;
export const bgCyanBright: EscapeCode.CodePair;
export const bgWhiteBright: EscapeCode.CodePair;

/**
 * Raw escape codes (i.e. without the CSI escape prefix \u001B[ and render mode postfix m) are available.
 *
 * This is a Map with the open codes as keys and close codes as values.
 */
export const codes: Map<number, number>
export const modifier: EscapeCode.Modifier
export const color: EscapeCode.Color & EscapeCode.ColorType & { close: string }
export const bgColor: EscapeCode.BackgroundColor & EscapeCode.ColorType & { close: string }
