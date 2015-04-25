// Type definitions for ProgressJs v0.1.0
// Project: http://usablica.github.io/progress.js/
// Definitions by: Shunsuke Ohtani <https://github.com/zaneli>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ProgressJsStatic {

  /**
   * Creating an ProgressJS object.
   *
   * @param targetElm String (optional) Should be defined to start progress-bar for specific element.
   */
  (targetElm?: string): ProgressJs;
}

interface ProgressJs {

  /**
   * Start the progress-bar for defined element(s).
   */
  start(): ProgressJs;

  /**
   * Set specific percentage to progress-bar.
   *
   * @param percent Set to specific percentage.
   */
  set(percent: number): ProgressJs;

  /**
   * Set an auto-increase timer for the progress-bar.
   *
   * @param size The size of increment when timer elapsed.
   * @param millisecond Timer in milliseconds.
   */
  autoIncrease(size: number, millisecond: number): ProgressJs;

  /**
   * Increase the progress-bar bar specified size. Default size is 1.
   *
   * @param size The size of increment.
   */
  increase(size?: number): ProgressJs;

  /**
   * End the progress-bar and remove the elements from page.
   */
  end(): ProgressJs;

  /**
   * Set a single option to progressJs object.
   *
   * @param option Option key name.
   * @param value Value of the option.
   */
  setOption(option: string, value: string): ProgressJs;
  setOption(option: string, value: boolean): ProgressJs;

  /**
   * Set a group of options to the progressJs object.
   *
   * @param options Object that contains option keys with values.
   */
  setOptions(options: ProgressJsOptions): ProgressJs;

  /**
   * Set a callback function for before end of the progress-bar.
   *
   * @param providedCallback Callback function.
   */
  onbeforeend(providedCallback: () => any): ProgressJs;

  /**
   * Set a callback function to call before start the progress-bar.
   *
   * @param providedCallback Callback function.
   */
  onbeforestart(providedCallback: () => any): ProgressJs;

  /**
   * Set callback function to call for each change of progress-bar.
   *
   * @param providedCallback Callback function.
   */
  onprogress(providedCallback: (targetElement: string, percent: number) => any): ProgressJs;
}

interface ProgressJsOptions {
  /**
   * progress bar theme
   */
  theme?: string;
  /**
   * overlay mode makes an overlay layer in the target element
   */
  overlayMode?: boolean;
  /**
   * to consider CSS3 transitions in events
   */
  considerTransition?: boolean;
}

declare var progressJs: ProgressJsStatic
