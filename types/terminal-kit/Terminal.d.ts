import EventEmitter = require("nextgen-events");

type Terminal = Terminal.Impl & EventEmitter;

export = Terminal;

type Callback<T> = (err: any, arg: T) => void;

declare namespace Terminal {
  interface Impl {
    width: number;
    height: number;
    appName: string;
    app: string;
    generic: string;
    termconfigFile: string;

    (str?: string): Terminal;
    (...args: any[]): Terminal;

    defaultColor: CTerminal;
    black: CTerminal;
    red: CTerminal;
    green: CTerminal;
    yellow: CTerminal;
    blue: CTerminal;
    magenta: CTerminal;
    cyan: CTerminal;
    white: CTerminal;
    brightBlack: CTerminal;
    gray: CTerminal;
    grey: CTerminal;
    brightRed: CTerminal;
    brightGreen: CTerminal;
    brightYellow: CTerminal;
    brightBlue: CTerminal;
    brightMagenta: CTerminal;
    brightCyan: CTerminal;
    brightWhite: CTerminal;
    color: (color: number | string, str?: string) => Terminal;
    darkColor: (color: number | string, str?: string) => Terminal;
    brightColor: (color: number | string, str?: string) => Terminal;
    color256: (color: number | string, str?: string) => Terminal;
    colorRgb: (r: number, g: number, b: number, str?: string) => Terminal;
    colorRgbHex: (rgb: string, str?: string) => Terminal;
    colorGrayscale: (I: number, str?: string) => Terminal;

    bgDefaultColor: CTerminal;
    bgBlack: CTerminal;
    bgRed: CTerminal;
    bgGreen: CTerminal;
    bgYellow: CTerminal;
    bgBlue: CTerminal;
    bgMagenta: CTerminal;
    bgCyan: CTerminal;
    bgWhite: CTerminal;
    bgBrightBlack: CTerminal;
    bgGray: CTerminal;
    bgGrey: CTerminal;
    bgBrightRed: CTerminal;
    bgBrightGreen: CTerminal;
    bgBrightYellow: CTerminal;
    bgBrightBlue: CTerminal;
    bgBrightMagenta: CTerminal;
    bgBrightCyan: CTerminal;
    bgBrightWhite: CTerminal;
    bgColor: (color: number | string, str?: string) => Terminal;
    bgDarkColor: (color: number | string, str?: string) => Terminal;
    bgBrightColor: (color: number | string, str?: string) => Terminal;
    bgColor256: (color: number | string, str?: string) => Terminal;
    bgColorRgb: (r: number, g: number, b: number, str?: string) => Terminal;
    bgColorRgbHex: (rgb: string, str?: string) => Terminal;
    bgColorGrayscale: (I: number, str?: string) => Terminal;

    styleReset: CTerminal;
    bold: CTerminal;
    dim: CTerminal;
    italic: CTerminal;
    underline: CTerminal;
    blink: CTerminal;
    inverse: CTerminal;
    hidden: CTerminal;
    strike: CTerminal;

    saveCursor: Terminal;
    restoreCursor: Terminal;
    up: ((n: number) => Terminal) | ((n: number, ...args: any[]) => Terminal);
    down: (n: number) => Terminal;
    right: (n: number) => Terminal;
    left: (n: number) => Terminal;
    nextLine: (n: number) => Terminal;
    previousLine: (n: number) => Terminal;
    column: (x: number) => Terminal;
    scrollUp: (n: number) => Terminal;
    scrollDown: (n: number) => Terminal;
    scrollingRegion: (top: number, bottom: number) => Terminal;
    resetScrollingRegion: Terminal;
    moveTo: CTerminal;
    move: (x: number, y: number) => Terminal;
    hideCursor: Terminal;
    tabSet: Terminal;
    tabClear: Terminal;
    tabClearAll: Terminal;
    forwardTab: (n: number) => Terminal;
    backwardTab: (n: number) => Terminal;

    clear: Terminal;
    eraseDisplayBelow: Terminal;
    eraseDisplayAbove: Terminal;
    eraseDisplay: Terminal;
    eraseScrollback: Terminal;
    eraseLineAfter: Terminal;
    eraseLineBefore: Terminal;
    eraseLine: Terminal;
    eraseArea: (
      x: number,
      y: number,
      width?: number,
      height?: number
    ) => Terminal;
    insertLine: (n: number) => Terminal;
    deleteLine: (n: number) => Terminal;
    insert: (n: number) => Terminal;
    delete: (n: number) => Terminal;
    backDelete: Terminal;
    alternateScreenBuffer: Terminal;

    requestCursorLocation: Terminal;
    requestScreenSize: Terminal;
    requestColor: (n: number) => Terminal;
    applicationKeypad: Terminal;

    mouseButton: Terminal;
    mouseDrag: Terminal;
    mouseMotion: Terminal;
    mouseSGR: Terminal;
    focusEvent: Terminal;
    cwd: (uri: string) => Terminal;
    windowTitle: (str: string) => Terminal;
    iconName: (str: string) => Terminal;
    notify: (title: string, text: string) => Terminal;

    error: Terminal;
    str: Terminal;
    noFormat: CTerminal;
    markupOnly: CTerminal;
    wrap: CTerminal;
    bindArgs: (...args: any[]) => Terminal;

    reset: Terminal;
    bell: Terminal;
    setCursorColor: (register: number) => Terminal;
    setCursorColorRgb: (r: number, g: number, b: number) => Terminal;
    resetCursorColorRgb: Terminal;
    setDefaultColorRgb: (r: number, g: number, b: number) => Terminal;
    resetDefaultColorRgb: Terminal;
    setDefaultBgColorRgb: (r: number, g: number, b: number) => Terminal;
    resetDefaultBgColorRgb: Terminal;
    setHighlightBgColorRgb: (r: number, g: number, b: number) => Terminal;
    resetHighlightBgColorRgb: Terminal;

    fullscreen: (options: boolean | { noAlternate: boolean }) => void;
    processExit: (code: number) => void;
    asyncCleanup: () => Promise<void>;
    grabInput(
      options:
        | boolean
        | {
            mouse?: "button" | "drag" | "motion";
            safe?: boolean;
          },
      safeCallback?: boolean
    ): void;

    getCursorLocation: (
      callback: (error: any, x?: number, y?: number) => void
    ) => void;
    getColor(
      register: number,
      callback?: Callback<{ r: number; g: number; b: number }>
    ): void;
    setColor(
      register: number,
      r: number,
      g: number,
      b: number,
      names?: ReadonlyArray<string>
    ): void;
    setColor(
      register: number,
      rgb: { r: number; g: number; b: number },
      names?: ReadonlyArray<string>
    ): void;
    getPalette(register: number, callback?: Callback<Palette>): void;
    setPalette(palette: string | Palette): void;

    wrapColumn(options?: {
      width: null | number;
      x: number;
      continue?: boolean;
      offset?: number;
    }): void;
    wrapColumn(x: undefined | number, width: number): void;

    yesOrNo(options: YesOrNoOptions, callback: Callback<boolean>): void;

    yesOrNo(
      options?: YesOrNoOptions
    ): {
      abort: () => void;
      promise?: Promise<boolean>;
    };

    inputField(options: InputFieldOptions, callback?: Callback<string | undefined>): {
      abort: () => void;
      promise: Promise<string | undefined>;
    };
    inputField(callback: Callback<string | undefined>): {
      abort: () => void;
      promise: Promise<string | undefined>;
    };

    fileInput(options: IFileInputOptions, callback: Callback<string>): void;
    fileInput(options?: IFileInputOptions): Promise<string>;

    singleLineMenu(
      menuItems: ReadonlyArray<string>,
      options: SingleLineMenuOptions,
      callback: Callback<SingleLineMenuResponse>
    ): void;

    singleLineMenu(
      menuItems: ReadonlyArray<string>,
      callback: Callback<SingleLineMenuResponse>
    ): void;

    singleLineMenu(
      menuItems: ReadonlyArray<string>,
      options?: SingleLineMenuOptions
    ): {
      promise: Promise<SingleLineMenuResponse>;
    };

    singleRowMenu(
      menuItems: ReadonlyArray<string>,
      options: SingleLineMenuOptions,
      callback: Callback<SingleLineMenuResponse>
    ): void;

    singleRowMenu(
      menuItems: ReadonlyArray<string>,
      callback: Callback<SingleLineMenuResponse>
    ): void;

    singleRowMenu(
      menuItems: ReadonlyArray<string>,
      options?: SingleLineMenuOptions
    ): {
      promise: Promise<SingleLineMenuResponse>;
    };

    singleColumnMenu(
      menuItems: ReadonlyArray<string>,
      options: SingleColumnMenuOptions,
      callback: Callback<SingleColumnMenuResponse>
    ): void;

    singleColumnMenu(
      menuItems: ReadonlyArray<string>,
      callback: Callback<SingleColumnMenuResponse>
    ): void;

    singleColumnMenu(
      menuItems: ReadonlyArray<string>,
      options?: SingleColumnMenuOptions
    ): {
      promise: Promise<SingleColumnMenuResponse>;
    };

    gridMenu(
      menuItems: ReadonlyArray<string>,
      options: GridMenuOptions,
      callback: Callback<GridMenuResponse>
    ): void;

    gridMenu(
      menuItems: ReadonlyArray<string>,
      callback: Callback<GridMenuResponse>
    ): void;

    gridMenu(
      menuItems: ReadonlyArray<string>,
      options?: GridMenuOptions
    ): {
      promise: Promise<GridMenuResponse>;
    };

    progressBar(options?: ProgressBarOptions): ProgressBarController;

    bar(
      value: number,
      options?: { innerSize?: number; barStyle?: CTerminal }
    ): void;

    slowTyping(
      str: string,
      options: {
        style?: CTerminal;
        flashStyle?: CTerminal;
        delay?: number;
        flashDelay?: number;
      },
      callback: Callback<void>
    ): void;
    slowTyping(str: string, callback: Callback<void>): void;

    slowTyping(
      str: string,
      options?: {
        style?: CTerminal;
        flashStyle?: CTerminal;
        delay?: number;
        flashDelay?: number;
      }
    ): Promise<void>;

    drawImage(
      url: string,
      options: {
        shrink?: {
          width: number;
          height: number;
        };
      },
      callback: Callback<void>
    ): void;

    drawImage(url: string, callback: Callback<void>): void;

    drawImage(
      url: string,
      options?: {
        shrink?: {
          width: number;
          height: number;
        };
      }
    ): Promise<void>;
  }

  interface ChainableInterface<T> {
    (str: string, ...args: any[]): T;
    (...args: any[]): T;
  }

  type Chainable<T> = T & ChainableInterface<T>;

  type CTerminal = Terminal & ((...args: any[]) => Terminal);

  type Palette = Array<{
    r: number;
    g: number;
    b: number;
    names: ReadonlyArray<string>;
  }>;

  interface YesOrNoOptions {
    yes: string | ReadonlyArray<string>;
    no: string | ReadonlyArray<string>;
    echoYes?: string;
    echoNo?: string;
  }

  type Autocompletion =
    | ((
        inputString: string,
        callback: Callback<string | AutocompletionArray<string>>
      ) => void)
    | ((inputString: string) => Promise<string | AutocompletionArray<string>>);

  interface CreateOptions {
    stdin?: NodeJS.Process;
    stdout?: NodeJS.Process;
    stderr?: NodeJS.Process;
    generic?: string;
    appId: string;
    appName: string;
    isTTY?: boolean;
    isSSH?: boolean;
    pid?: any;
    preferProcessSigwinch?: boolean;
    processSigwinch?: boolean;
  }

  class AutocompletionArray<T> extends Array<T> {
    prefix?: string;
    postfix?: string;
  }

  interface HookConfig {
    style?: CTerminal;
    hintStyle?: CTerminal;
    tokenRegExp?: RegExp;
    autoComplete?: string[] | Autocompletion;
    autoCompleteMenu?: boolean | Autocompletion;
    autoCompleteHint?: boolean;
  }

  interface InputFieldOptions {
    echo?: boolean;
    echoChar?: string | true;
    default?: string;
    cursorPosition?: number;
    cancelable?: boolean;
    style?: CTerminal;
    hintStyle?: CTerminal;
    maxLength?: number;
    minLength?: number;
    history?: string[];
    autoComplete?: string[] | Autocompletion;
    autoCompleteMenu?: boolean | Autocompletion;
    autoCompleteHint?: boolean;
    keyBindings?: { [key: string]: string };
    tokenHook?: (
      token: string,
      isEndOfInput: boolean,
      previousTokens: ReadonlyArray<string>,
      term: Terminal,
      config: HookConfig
    ) => string | CTerminal | null | void;
    tokenResetHook?: (
      term: Terminal,
      config?: HookConfig
    ) => string | CTerminal;
    tokenRegExp?: RegExp;
  }

  type IFileInputOptions = InputFieldOptions & { baseDir: string };

  interface SingleLineMenuResponse {
    selectedIndex: number;
    selectedText: string;
    x: number;
    y: number;
    canceled: boolean;
    unexpectedKey: string;
  }

  interface SingleLineMenuOptions {
    y?: number;
    separator?: string;
    nextPageHint?: string;
    previousPageHint?: string;
    style?: CTerminal;
    selectedStyle?: CTerminal;
    keyBindings?: { [key: string]: string };
    cancelable?: boolean;
    exitOnUnexpectedKey?: boolean;
  }

  interface SingleColumnMenuOptions {
    y?: number;
    style?: CTerminal;
    selectedStyle?: CTerminal;
    submittedStyle?: CTerminal;
    leftPadding?: string;
    selectedLeftPadding?: string;
    submittedLeftPadding?: string;
    extraLines?: number;
    oneLineItem?: boolean;
    itemMaxWidth?: number;
    continueOnSubmit?: boolean;
    selectedIndex?: number;
    keyBindings?: { [key: string]: string };
    cancelable?: boolean;
    exitOnUnexpectedKey?: boolean;
  }

  interface SingleColumnMenuResponse {
    selectedIndex: number;
    selectedText: string;
    submitted: boolean;
    x: number;
    y: number;
    canceled: boolean;
    unexpectedKey: string;
  }

  interface GridMenuOptions {
    y?: number;
    x?: number;
    width?: number;
    style?: CTerminal;
    selectedStyle?: CTerminal;
    leftPadding?: string;
    selectedLeftPadding?: string;
    rightPadding?: string;
    selectedRightPadding?: string;
    itemMaxWidth?: number;
    keyBindings?: { [key: string]: string };
    exitOnUnexpectedKey?: boolean;
  }

  interface GridMenuResponse {
    selectedIndex: number;
    selectedText: string;
    x: number;
    y: number;
    unexpectedKey: string;
  }

  interface ProgressBarOptions {
    width?: number;
    percent?: boolean;
    eta?: boolean;
    items?: number;
    title?: string;
    barStyle?: CTerminal;
    barBracketStyle?: CTerminal;
    percentStyle?: CTerminal;
    etaStyle?: CTerminal;
    itemStyle?: CTerminal;
    titleStyle?: CTerminal;
    itemSize?: number;
    titleSize?: number;
    barChar?: string;
    barHeadChar?: string;
    maxRefreshTime?: number;
    minRefreshTime?: number;
    inline?: boolean;
    syncMode?: boolean;
  }

  interface ProgressBarController {
    update: (
      updateObject:
        | number
        | { progress: number | null; items?: number; title?: string }
    ) => void;
    startItem: (name: string) => void;
    itemDone: (name: string) => void;
    stop: () => void;
    resume: () => void;
    reset: () => void;
  }
}
