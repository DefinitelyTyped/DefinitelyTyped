// Type definitions for xterm.js 2.0.1
// Project: https://github.com/sourcelair/xterm.js/
// Definitions by: Steven Silvester <https://github.com/blink1073>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Typing for an xterm terminal object.
 */
interface Xterm {

  options: Xterm.IOptions;

  element: HTMLElement;

  textarea: HTMLElement;

  attachCustomKeydownHandler(callback: (event: KeyboardEvent) => boolean): void;

  blur(): void;

  clear(): void;

  destroy(): void;

  focus(): void;

  getOption(key: string): any;

  on(event: string, callback: (...args: any[]) => void): void;

  off(event: string, callback: (...args: any[]) => void): void;

  open(parent: HTMLElement): void;

  refresh(start: number, end: number, queue?: boolean): void;

  reset(): void;

  resize(x: number, y: number): void;

  scrollDisp(n: number): void;

  setOption(key: string, value: any): void;

  write(text: string): void;

  writeln(text: string): void;
}


interface XtermConstructor {
  new (options?: Xterm.IOptions): Xterm;
  (options?: Xterm.IOptions): Xterm;
}


/**
 * A terminal options.
 */
declare module Xterm {
  interface IOptions {
    colors?: string[];

    theme?: string;

    convertEol?: boolean;

    termName?: string;

    geometry?: number[];

    cursorBlink?: boolean;

    visualBell?: boolean;

    popOnBell?: boolean;

    scrollback?: number;

    debug?: boolean;

    cancelEvents?: boolean;
  }
}


declare var Xterm: XtermConstructor;


declare module 'xterm' {
  export = Xterm;
}
