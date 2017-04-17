// Type definitions for bLazy v1.5.2
// Project: https://github.com/dinbror/blazy
// Definitions by: Julien Paroche <https://github.com/julienpa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/blazy
// Definitions based on: http://dinbror.dk/blog/blazy

declare var Blazy: Blazy;

interface Blazy {

  new (options: IBlazyOptions): IBlazyInstance;

}

interface IBlazyOptions {

  breakpoints: IBreakpoint[];

  container: string;

  error: (ele: Element|HTMLElement|JQueryStatic, msg: string) => void;

  errorClass: string;

  loadInvisible: boolean;

  offset: number;

  saveViewportOffsetDelay: number;

  selector: string;

  separator: string;

  src: string;

  success: (ele: Element|HTMLElement|JQueryStatic) => void;

  successClass: string;

  validateDelay: number;

}

interface IBlazyInstance {

  /**
   * Revalidates document for visible images. Useful if you add images with scripting or ajax.
   */
  revalidate(): void;

  /**
   * Forces the given element(s) to load if not collapsed. If you also want to load a collapsed/hidden elements you can add true as the second parameter.
   * You can pass a single element or a list of elements. Tested with getElementById, getElementsByClassName, querySelectorAll, querySelector and jQuery selector.
   */
  load(elements: Element|Element[]|HTMLElement|HTMLElement[]|JQueryStatic|JQueryStatic[], force: boolean): void;

  /**
   * Unbind events and resets image array.
   */
  destroy(): void;

}

interface IBreakpoint {
  width: number;
  src: string;
}

declare module 'Blazy' {
  export = Blazy;
}
