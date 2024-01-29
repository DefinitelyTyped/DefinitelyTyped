export type OptionType = string | number | RegExp | ((input: string) => boolean);

export interface BasicOptions {
    prompt?: any;
    hideEchoBack?: boolean | undefined;
    mask?: string | undefined;
    limit?: OptionType | OptionType[] | undefined;
    limitMessage?: string | undefined;
    defaultInput?: string | undefined;
    trueValue?: OptionType | OptionType[] | undefined;
    falseValue?: OptionType | OptionType[] | undefined;
    caseSensitive?: boolean | undefined;
    keepWhitespace?: boolean | undefined;
    encoding?: string | undefined;
    bufferSize?: number | undefined;
    print?(display: string, encoding: string): void;
    history?: boolean | undefined;
    cd?: boolean | undefined;
    charlist?: string | undefined;
    min?: any;
    max?: any;
    confirmMessage?: any;
    unmatchMessage?: any;
    exists?: any;
    isFile?: boolean | undefined;
    isDirectory?: boolean | undefined;
    validate?(path: string): boolean | string;
    create?: boolean | undefined;
    guide?: boolean | undefined;
    cancel?: any;
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

export function promptCL(
    commandHandler?: { [id: string]: (...args: string[]) => void } | ((command: string, ...args: string[]) => void),
    options?: BasicOptions,
): string[];
export function promptLoop(inputHandler: (value: string) => boolean, options?: BasicOptions): void;
export function promptCLLoop(
    commandHandler?:
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        | { [id: string]: (...args: string[]) => boolean | void }
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        | ((command: string, ...args: string[]) => boolean | void),
    options?: BasicOptions,
): void;
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
