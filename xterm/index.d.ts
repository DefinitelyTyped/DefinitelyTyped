// Type definitions for xterm.js 2.0.1
// Project: https://github.com/sourcelair/xterm.js/
// Definitions by: Steven Silvester <https://github.com/blink1073>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare class Terminal {

  constructor(options?: Terminal.IOptions);

  options: Terminal.IOptions;

  element: HTMLElement;

  textarea: HTMLElement;

  attachCustomKeydownHandler(callback: (event: KeyboardEvent) => boolean): void;

  blur(): void;

  clear(): void;

  destroy(): void;

  focus(): void;

  getOption(key: string): number | boolean;
  getOption(key: 'rows'): number;
  getOption(key: 'cols'): number;
  getOption(key: 'cursorBlink'): boolean;

  on(event: string, callback: (...args: any[]) => void): void;

  off(event: string, callback: (...args: any[]) => void): void;

  open(parent: HTMLElement): void;

  refresh(start: number, end: number, queue?: boolean): void;

  reset(): void;

  resize(x: number, y: number): void;

  scrollDisp(n: number): void;

  setOption(key: string, value: number | boolean): void;
  setOption(key: 'rows', value: number): void;
  setOption(key: 'cols', value: number): void;
  setOption(key: 'cursorBlink', value: boolean): void;

  write(text: string): void;

  writeln(text: string): void;
}


declare namespace Terminal {
  export
  interface IOptions {
    cursorBlink?: boolean;

    rows?: number;

    cols?: number;
  }
}

export default Terminal;
