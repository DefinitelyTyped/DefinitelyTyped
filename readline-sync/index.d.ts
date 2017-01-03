// Type definitions for readline-sync 1.4
// Project: https://github.com/anseki/readline-sync
// Definitions by: Tristan Jones <https://github.com/jonestristand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type optionType = string | number | RegExp | ((input:string) => boolean);

interface BasicOptions {
    prompt?: any;
    hideEchoBack?: boolean;
    mask?: string;
    limit?: optionType | Array<optionType>;
    limitMessage?: string;
    defaultInput?: string;
    trueValue?: optionType | Array<optionType>;
    falseValue?: optionType | Array<optionType>;
    caseSensitive?: boolean;
    keepWhitespace?: boolean;
    encoding?: string;
    bufferSize?: number;
    print?: ((display:string, encoding:string) => void);
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
    validate?: ((path:string) => boolean | string);
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

export function promptCL(commandHandler?: { [id:string]: ((...args:string[]) => void) } | ((command:string, ...args:string[]) => void), options?: BasicOptions): string[];
export function promptLoop(inputHandler: ((value:string) => boolean), options?: BasicOptions): void;
export function promptCLLoop(commandHandler?: { [id:string]: ((...args:string[]) => boolean | void) } | ((command:string, ...args:string[]) => boolean | void), options?: BasicOptions): void;
export function promptSimShell(options?: BasicOptions): string;

export function keyInYN(query?: any, options?: BasicOptions): boolean | string;
export function keyInYNStrict(query?: any, options?: BasicOptions): boolean;
export function keyInPause(query?: any, options?: BasicOptions): void;
export function keyInSelect(items: string[], query?: any, options?: BasicOptions): number;

export function getRawInput(): string;

// Deprecated
export function setBufferSize(value: number): void;
export function setEncoding(value: string): void;
export function setMask(value: string): void;
export function setPrint(value: ((display:string, encoding:string) => void)): void;
export function setPrompt(value: any): void;