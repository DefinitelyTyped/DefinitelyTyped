// Type definitions for koji-tools 0.5.1
// Project: https://github.com/madewithkoji/koji-tools
// Definitions by: Jeff Peterson <github.com/bdjeffyp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:export-just-namespace
export = Koji;
export as namespace Koji;

declare namespace Koji {
  // index.js methods
  /**
   * Sets up Koji.config parameters for each client and handles communication
   * between the Koji live preview iframe and your app.
   * @param options ???
   */
  function pageLoad(options?: {}): void;

  function getConfig(): any;

  /**
   * Registers a callback on a Koji event.
   * @param event name of the event being called
   * @param callback method to execute when the event occurs
   */
  function on(event: string, callback: () => void): void;

  function callEvent(event: string, params?: []): void;
}
