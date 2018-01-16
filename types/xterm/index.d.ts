// Type definitions for xterm.js 2.0.1
// Project: https://github.com/sourcelair/xterm.js/
// Definitions by: Steven Silvester <https://github.com/blink1073>
//                 Lucian Buzzo <https://github.com/LucianBuzzo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Typing for an xterm terminal object.
 */
interface Xterm {

  cols: number;

  rows: number;

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

  open(parent: HTMLElement, focus?: boolean): void;

  refresh(start: number, end: number, queue?: boolean): void;

  reset(): void;

  resize(x: number, y: number): void;

  scrollDisp(n: number): void;

  setOption(key: string, value: any): void;

  write(text: string): void;

  writeln(text: string): void;

  fit?(): void;
}


interface XtermConstructor {
  new (options?: Xterm.IOptions): Xterm;
  (options?: Xterm.IOptions): Xterm;
}


/**
 * A terminal options.
 */
declare namespace Xterm {
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
export = Xterm;
export as namespace Xterm;
