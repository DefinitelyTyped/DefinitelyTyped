/**
 * This module provides an experimental implementation that brings browser
 * test automation to the k6 testing platform.
 */

/**
 * Page provides methods to interact with a single tab in a browser in Chromium.
 * One instance of the browser can have many page instances.
 */
export class Page {
  /**
   * Activates the browser tab so that it comes into focus and actions can be
   * performed against it.
   */
  bringToFront(): void;
}
