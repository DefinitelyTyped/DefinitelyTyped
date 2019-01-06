// Type definitions for screenfull.js 3.3.3
// Project: https://github.com/sindresorhus/screenfull.js
// Definitions by: Ilia Choly <https://github.com/icholy>
//                 lionelb <https://github.com/lionelb>
//                 Joel Shepherd <https://github.com/joelshepherd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

declare var screenfull: IScreenfull | false;

interface IScreenfullRaw {
  requestFullscreen?: string;
  exitFullscreen?: string;
  fullscreenElement?: string;
  fullscreenEnabled?: string;
  fullscreenchange?: string;
  fullscreenerror?: string;
}

interface IScreenfull {
  isFullscreen: boolean;
  element: Element;
  enabled: boolean;
  raw: IScreenfullRaw;
  request(elem?: Element): void;
  toggle(elem?: Element): void;
  exit(): void;
  onchange(handler: () => void): void;
  onerror(handler: (event: Event) => void): void;
  on(name: EventNameMap, handler: (event: Event) => void): void;
  off(name: EventNameMap, handler: (event: Event) => void): void;
}

type EventNameMap = 'change' | 'error';

export = screenfull;
