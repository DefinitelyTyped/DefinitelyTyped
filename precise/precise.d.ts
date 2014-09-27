// Type definitions for precise
// Project: https://github.com/avoidwork/precise
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "precise" {
  /**
   * Precise factory
   */
  function _precise(): _precise.Precise;

  module _precise {
    class Precise {
      constructor();

      /**
       * Starts a timer
       */
      start(): Precise;

      /**
       * Stops a timer
       */
      stop(): Precise;

      /**
       * Returns the nanoseconds from `start()` to `stop()`
       */
      diff(): number;
    }
  }

  export = _precise;
}