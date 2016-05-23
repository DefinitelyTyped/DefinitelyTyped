// Type definitions for deep-freeze
// Project: https://github.com/substack/deep-freeze
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var deepFreeze: DeepFreeze.DeepFreezeInterface;
export = deepFreeze;

declare namespace DeepFreeze {
   export interface DeepFreezeInterface {
      <T>(obj: T): T;
    }
}
