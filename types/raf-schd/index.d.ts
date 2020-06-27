// Type definitions for raf-schd 4.0
// Project: https://github.com/alexreardon/raf-schd
// Definitions by: Adam Bergman <https://github.com/adambrgmn>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

namespace rafSchd {
  interface Schedule<T extends (...args: any[]) => void> {
    (...args: Parameters<T>): void;
    cancel(): void;
  }
}
declare function rafSchd<T extends (...args: any[]) => void>(fn: T): Schedule<T>;

export = rafSchd;
