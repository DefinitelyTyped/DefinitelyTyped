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
            mouse?: "button" | "drag" | "motion" | undefined;
            safe?: boolean | undefined;
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

    table(tableCells: ReadonlyArray<ReadonlyArray<string>>, options?: TextTableOptions): void;

    spinner(options?: AnimatedTextOptions): Promise<AnimatedText>;

    spinner(animation: AnimationOption): Promise<AnimatedText>;
    wrapColumn(options?: {
      width: null | number;
      x: number;
      continue?: boolean | undefined;
      offset?: number | undefined;
    }): void;
    wrapColumn(x: undefined | number, width: number): void;

    yesOrNo(options: YesOrNoOptions, callback: Callback<boolean>): void;

    yesOrNo(
      options?: YesOrNoOptions
    ): {
      abort: () => void;
      promise?: Promise<boolean> | undefined;
    };

    inputField(options?: InputFieldOptions, callback?: Callback<string | undefined>): {
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
      options?: { innerSize?: number | undefined; barStyle?: CTerminal | undefined }
    ): void;

    slowTyping(
      str: string,
      options: {
        style?: CTerminal | undefined;
        flashStyle?: CTerminal | undefined;
        delay?: number | undefined;
        flashDelay?: number | undefined;
      },
      callback: Callback<void>
    ): void;
    slowTyping(str: string, callback: Callback<void>): void;

    slowTyping(
      str: string,
      options?: {
        style?: CTerminal | undefined;
        flashStyle?: CTerminal | undefined;
        delay?: number | undefined;
        flashDelay?: number | undefined;
      }
    ): Promise<void>;

    drawImage(
      url: string,
      options: {
        shrink?: {
          width: number;
          height: number;
        } | undefined;
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
        } | undefined;
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
    echoYes?: string | undefined;
    echoNo?: string | undefined;
  }

  type Autocompletion =
    | ((
        inputString: string,
        callback: Callback<string | AutocompletionArray<string>>
      ) => void)
    | ((inputString: string) => Promise<string | AutocompletionArray<string>>);

  interface CreateOptions {
    stdin?: NodeJS.Process | undefined;
    stdout?: NodeJS.Process | undefined;
    stderr?: NodeJS.Process | undefined;
    generic?: string | undefined;
    appId: string;
    appName: string;
    isTTY?: boolean | undefined;
    isSSH?: boolean | undefined;
    pid?: any;
    preferProcessSigwinch?: boolean | undefined;
    processSigwinch?: boolean | undefined;
  }

  class AutocompletionArray<T> extends Array<T> {
    prefix?: string | undefined;
    postfix?: string | undefined;
  }

  interface HookConfig {
    style?: CTerminal | undefined;
    hintStyle?: CTerminal | undefined;
    tokenRegExp?: RegExp | undefined;
    autoComplete?: string[] | Autocompletion | undefined;
    autoCompleteMenu?: boolean | Autocompletion | undefined;
    autoCompleteHint?: boolean | undefined;
  }

  interface InputFieldOptions {
    echo?: boolean | undefined;
    echoChar?: string | true | undefined;
    default?: string | undefined;
    cursorPosition?: number | undefined;
    cancelable?: boolean | undefined;
    style?: CTerminal | undefined;
    hintStyle?: CTerminal | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    history?: string[] | undefined;
    autoComplete?: string[] | Autocompletion | undefined;
    autoCompleteMenu?: boolean | Autocompletion | undefined;
    autoCompleteHint?: boolean | undefined;
    keyBindings?: { [key: string]: string } | undefined;
    tokenHook?: ((
      token: string,
      isEndOfInput: boolean,
      previousTokens: ReadonlyArray<string>,
      term: Terminal,
      config: HookConfig
    ) => string | CTerminal | null | void) | undefined;
    tokenResetHook?: ((
      term: Terminal,
      config?: HookConfig
    ) => string | CTerminal) | undefined;
    tokenRegExp?: RegExp | undefined;
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
    y?: number | undefined;
    separator?: string | undefined;
    nextPageHint?: string | undefined;
    previousPageHint?: string | undefined;
    style?: CTerminal | undefined;
    selectedStyle?: CTerminal | undefined;
    keyBindings?: { [key: string]: string } | undefined;
    cancelable?: boolean | undefined;
    exitOnUnexpectedKey?: boolean | undefined;
  }

  interface SingleColumnMenuOptions {
    y?: number | undefined;
    style?: CTerminal | undefined;
    selectedStyle?: CTerminal | undefined;
    submittedStyle?: CTerminal | undefined;
    leftPadding?: string | undefined;
    selectedLeftPadding?: string | undefined;
    submittedLeftPadding?: string | undefined;
    extraLines?: number | undefined;
    oneLineItem?: boolean | undefined;
    itemMaxWidth?: number | undefined;
    continueOnSubmit?: boolean | undefined;
    selectedIndex?: number | undefined;
    keyBindings?: { [key: string]: string } | undefined;
    cancelable?: boolean | undefined;
    exitOnUnexpectedKey?: boolean | undefined;
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
    y?: number | undefined;
    x?: number | undefined;
    width?: number | undefined;
    style?: CTerminal | undefined;
    selectedStyle?: CTerminal | undefined;
    leftPadding?: string | undefined;
    selectedLeftPadding?: string | undefined;
    rightPadding?: string | undefined;
    selectedRightPadding?: string | undefined;
    itemMaxWidth?: number | undefined;
    keyBindings?: { [key: string]: string } | undefined;
    exitOnUnexpectedKey?: boolean | undefined;
  }

  interface GridMenuResponse {
    selectedIndex: number;
    selectedText: string;
    x: number;
    y: number;
    unexpectedKey: string;
  }

  interface ProgressBarOptions {
    width?: number | undefined;
    percent?: boolean | undefined;
    eta?: boolean | undefined;
    items?: number | undefined;
    title?: string | undefined;
    barStyle?: CTerminal | undefined;
    barBracketStyle?: CTerminal | undefined;
    percentStyle?: CTerminal | undefined;
    etaStyle?: CTerminal | undefined;
    itemStyle?: CTerminal | undefined;
    titleStyle?: CTerminal | undefined;
    itemSize?: number | undefined;
    titleSize?: number | undefined;
    barChar?: string | undefined;
    barHeadChar?: string | undefined;
    maxRefreshTime?: number | undefined;
    minRefreshTime?: number | undefined;
    inline?: boolean | undefined;
    syncMode?: boolean | undefined;
  }

  interface ProgressBarController {
    update: (
      updateObject:
        | number
        | { progress: number | null; items?: number | undefined; title?: string | undefined }
    ) => void;
    startItem: (name: string) => void;
    itemDone: (name: string) => void;
    stop: () => void;
    resume: () => void;
    reset: () => void;
  }

  interface TextTableOptions {
    width?: number;
    cellContents?: ReadonlyArray<ReadonlyArray<string>>;
    contentHasMarkup?: boolean | string;
    textAttr?: object;
    voidAttr?: object;
    firstRowTextAttr?: object;
    firstRowVoidAttr?: object;
    evenRowTextAttr?: object;
    evenRowVoidAttr?: object;
    firstColumnTextAttr?: object;
    firstColumnVoidAttr?: object;
    evenColumnTextAttr?: object;
    evenColumnVoidAttr?: object;
    firstCellTextAttr?: object;
    firstCellVoidAttr?: object;
    evenCellTextAttr?: object;
    evenCellVoidAttr?: object;
    checkerEvenCellTextAttr?: object;
    checkerEvenCellVoidAttr?: object;
    expandToWidth?: boolean;
    shrinkToWidth?: boolean;
    expandToHeight?: boolean;
    shrinkToHeight?: boolean;
    lineWrap?: boolean;
    wordWrap?: boolean;
    fit?: boolean;
    hasBorder?: boolean;
    borderAttr?: object;
    borderChars?: CustomBorderObject | BuiltinBorder;
    textBoxKeyBindings?: object;
  }

  type AnimationOption = BuiltinAnimation | AnimationArray;

  // see https://github.com/cronvel/terminal-kit/blob/master/doc/spChars.md#ref.spChars.animation

  type BuiltinAnimation =
      | 'asciiSpinner'
      | 'lineSpinner'
      | 'dotSpinner'
      | 'bitDots'
      | 'impulse'
      | 'unboxing'
      | 'unboxing-color';

  type BuiltinBorder = 'plain' | 'empty' | 'ascii' | 'light' | 'lightRounded' | 'heavy' | 'double' | 'dotted';

  type AnimationArray = string[];
  interface CustomBorderObject {
      vertical: string;
      horizontal: string;
      topLeft: string;
      topRight: string;
      bottomLeft: string;
      bottomRight: string;
      topTee: string;
      bottomTee: string;
      leftTee: string;
      rightTee: string;
      cross: string;
  }

  interface AnimatedTextOptions {
      animation: AnimationOption;
      internal?: boolean;
      attr?: object;
  }

  interface AnimatedText {
      animate(speed: number | false): void;
  }
}
