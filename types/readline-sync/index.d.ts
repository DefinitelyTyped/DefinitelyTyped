// Type definitions for readline-sync 1.4
// Project: https://github.com/anseki/readline-sync
// Definitions by: Tristan Jones <https://github.com/jonestristand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type OptionType = string | number | RegExp | ((input: string) => boolean);

export interface BasicOptions {
    prompt?: any;
    hideEchoBack?: boolean;
    mask?: string;
    limit?: OptionType | OptionType[];
    limitMessage?: string;
    defaultInput?: string;
    trueValue?: OptionType | OptionType[];
    falseValue?: OptionType | OptionType[];
    caseSensitive?: boolean;
    keepWhitespace?: boolean;
    encoding?: string;
    bufferSize?: number;
    print?(display: string, encoding: string): void;
    history?: boolean;
    cd?: boolean;
    charlist?: string;
    min?: any;
    max?: any;
    confirmMessage?: any;
    unmatchMessage?: any;
    exists?: any;
    isFile?: boolean;
    isDirectory?: boolean;
    validate?(path: string): boolean | string;
    create?: boolean;
    guide?: boolean;
}

// Basic Functions
export function question(query?: any, options?: BasicOptions): string;
export function prompt(options?: BasicOptions): string;
export function keyIn(query?: any, options?: BasicOptions): string;
export function setDefaultOptions(options?: BasicOptions): BasicOptions;

// Utility Functions
export function questionEMail(query?: any, options?: BasicOptions): string;
export function questionNewPassword(query?: any, options?: BasicOptions): string;
export function questionInt(query?: any, options?: BasicOptions): number;
export function questionFloat(query?: any, options?: BasicOptions): number;
export function questionPath(query?: any, options?: BasicOptions): string;

export function promptCL(commandHandler?: { [id: string]: (...args: string[]) => void } | ((command: string, ...args: string[]) => void), options?: BasicOptions): string[];
export function promptLoop(inputHandler: (value: string) => boolean, options?: BasicOptions): void;
export function promptCLLoop(commandHandler?: { [id: string]: (...args: string[]) => boolean | void } | ((command: string, ...args: string[]) => boolean | void), options?: BasicOptions): void;
export function promptSimShell(options?: BasicOptions): string;

export function keyInYN(query?: any, options?: BasicOptions): boolean | string;
export function keyInYNStrict(query?: any, options?: BasicOptions): boolean;
export function keyInPause(query?: any, options?: BasicOptions): void;
export function keyInSelect(items: string[], query?: any, options?: BasicOptions): number;

export function getRawInput(): string;

// Deprecated

/**
 * @deprecated Use the bufferSize option instead: readlineSync.setDefaultOptions({bufferSize: value});
 */
export function setBufferSize(value: number): void;

/**
 * @deprecated Use the encoding option instead: readlineSync.setDefaultOptions({encoding: value});
 */
export function setEncoding(value: string): void;

/**
 * @deprecated Use the mask option instead: readlineSync.setDefaultOptions({mask: value});
 */
export function setMask(value: string): void;

/**
 * @deprecated Use the print option instead: readlineSync.setDefaultOptions({print: value});
 */
export function setPrint(value: (display: string, encoding: string) => void): void;

/**
 * @deprecated Use the prompt option instead: readlineSync.setDefaultOptions({prompt: value});
 */
export function setPrompt(value: any): void;
