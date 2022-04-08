// Type definitions for tweezer.js 1.4
// Project: https://github.com/jaxgeller/tweezer.js
// Definitions by: Lindsey Smith <https://github.com/praxxis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
  duration?: number;
  easing?(currentTime: number, beginningTime: number, changeInValue: number, duration: number): number;
  start: number;
  end: number;
}

declare class Tweezer {
  constructor(opts: Options);

  stop(): this;

  on(name: 'tick', handler: (v: number) => void): this;
  on(name: 'done', handler: () => void): this;

  begin(): this;
}

export = Tweezer;
