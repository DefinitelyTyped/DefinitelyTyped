// Type definitions for iframe-resizer 3.5
// Project: https://github.com/davidjbradshaw/iframe-resizer
// Definitions by: Armin Baljic <https://github.com/arminbaljic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace iframeResizer {
  // tslint:disable-next-line:interface-name
  interface IFrameObject {
    close(): void;

    moveToAnchor(anchor: string): void;

    resize(): void;

    sendMessage(
      message: any,
      targetOrigin?: string
    ): void;
  }

  // tslint:disable-next-line:interface-name
  interface IFrameComponent extends HTMLIFrameElement {
    iFrameResizer: IFrameObject;
  }

  // tslint:disable-next-line:interface-name
  interface IFrameOptions {
    /**
     * When enabled changes to the Window size or the DOM will cause the iFrame to resize to the new content size.
     * Disable if using size method with custom dimensions.
     */
    autoResize?: boolean;
    /**
     * Override the body background style in the iFrame.
     */
    bodyBackground?: string;
    /**
     * Override the default body margin style in the iFrame. A string can be any valid value for the
     * CSS margin attribute, for example '8px 3em'. A number value is converted into px.
     */
    bodyMargin?: number | string;
    /**
     * Override the default body padding style in the iFrame. A string can be any valid value for the
     * CSS margin attribute, for example '8px 3em'. A number value is converted into px.
     */
    bodyPadding?: number | string;
    /**
     * When set to true, only allow incoming messages from the domain listed in the src property of the iFrame tag.
     * If your iFrame navigates between different domains, ports or protocols; then you will need to
     * provide an array of URLs or disable this option.
     */
    checkOrigin?: boolean | string[];
    /**
     * When enabled in page linking inside the iFrame and from the iFrame to the parent page will be enabled.
     */
    inPageLinks?: boolean;
    /**
     * Height calculation method.
     */
    heightCalculationMethod?: HeightCalculationMethod;
    /**
     * Set iFrame Id
     */
    id?: string;
    /**
     * In browsers that don't support mutationObserver, such as IE10, the library falls back to using
     * setInterval, to check for changes to the page size.
     */
    interval?: number;
    /**
     * Setting the log option to true will make the scripts in both the host page and the iFrame output
     * everything they do to the JavaScript console so you can see the communication between the two scripts.
     */
    log?: boolean;
    /**
     * Set maximum height of iFrame.
     */
    maxHeight?: number;
    /**
     * Set maximum width of iFrame.
     */
    maxWidth?: number;
    /**
     * Set minimum height of iFrame.
     */
    minHeight?: number;
    /**
     * Set minimum width of iFrame.
     */
    minWidth?: number;
    /**
     * Listen for resize events from the parent page, or the iFrame. Select the 'child' value if the iFrame
     * can be resized independently of the browser window. Selecting this value can cause issues with some
     * height calculation methods on mobile devices.
     */
    resizeFrom?: 'parent' | 'child';
    /**
     * Enable scroll bars in iFrame.
     */
    scrolling?: boolean | 'auto';
    /**
     * Resize iFrame to content height.
     */
    sizeHeight?: boolean;
    /**
     * Resize iFrame to content width.
     */
    sizeWidth?: boolean;
    /**
     * Set the number of pixels the iFrame content size has to change by, before triggering a resize of the iFrame.
     */
    tolerance?: number;
    /**
     * Width calculation method.
     */
    widthCalculationMethod?: WidthCalculationMethod;

    /**
     * Called when iFrame is closed via parentIFrame.close() or iframe.iframeResizer.close() methods.
     */
    closedCallback?(iframeId: string): void;

    /**
     * Initial setup callback function.
     */
    initCallback?(iframe: IFrameComponent): void;

    /**
     * Receive message posted from iFrame with the parentIFrame.sendMessage() method.
     */
    messageCallback?(data: IFrameMessageData): void;

    /**
     * Function called after iFrame resized. Passes in messageData object containing the iFrame, height, width
     * and the type of event that triggered the iFrame to resize.
     */
    resizedCallback?(data: IFrameResizedData): void;

    /**
     * Called before the page is repositioned after a request from the iFrame, due to either an in page link,
     * or a direct request from either parentIFrame.scrollTo() or parentIFrame.scrollToOffset().
     * If this callback function returns false, it will stop the library from repositioning the page, so that
     * you can implement your own animated page scrolling instead.
     */
    scrollCallback?(data: IFrameScrollData): boolean;
  }

  // tslint:disable-next-line:interface-name
  interface IFramePageOptions {
    /**
     * This option allows you to restrict the domain of the parent page,
     * to prevent other sites mimicking your parent page.
     */
    targetOrigin?: string;

    /**
     * Receive message posted from the parent page with the iframe.iFrameResizer.sendMessage() method.
     */
    messageCallback?(message: any): void;

    /**
     * This function is called once iFrame-Resizer has been initialized after receiving a call from the parent page.
     */
    readyCallback?(): void;

    /**
     * These option can be used to override the option set in the parent page
     */
    heightCalculationMethod?: HeightCalculationMethod | (() => number);
    /**
     * These option can be used to override the option set in the parent page
     */
    widthCalculationMethod?: WidthCalculationMethod | (() => number);
  }

  type HeightCalculationMethod = 'bodyOffset' | 'bodyScroll' | 'documentElementOffset' | 'documentElementScroll' |
    'max' | 'min' | 'grow' | 'lowestElement' | 'taggedElement';

  type WidthCalculationMethod = 'bodyOffset' | 'bodyScroll' | 'documentElementOffset' | 'documentElementScroll' |
    'max' | 'min' | 'scroll' | 'rightMostElement' | 'taggedElement';

  // tslint:disable-next-line:interface-name
  interface IFramePage {
    /**
     * Turn autoResizing of the iFrame on and off. Returns bool of current state.
     */
    autoResize(resize?: boolean): boolean;

    /**
     * Remove the iFrame from the parent page.
     */
    close(): void;

    /**
     * Returns the ID of the iFrame that the page is contained in.
     */
    getId(): string;

    /**
     * Ask the containing page for its positioning coordinates.
     *
     * Your callback function will be recalled when the parent page is scrolled or resized.
     *
     * Pass false to disable the callback.
     */
    getPageInfo(callback: ((data: PageInfo) => void) | false): void;

    /**
     * Scroll the parent page to the coordinates x and y
     */
    scrollTo(
      x: number,
      y: number
    ): void;

    /**
     * Scroll the parent page to the coordinates x and y relative to the position of the iFrame.
     */
    scrollToOffset(
      x: number,
      y: number
    ): void;

    /**
     * Send data to the containing page, message can be any data type that can be serialized into JSON. The `targetOrigin`
     * option is used to restrict where the message is sent to; to stop an attacker mimicking your parent page.
     * See the MDN documentation on postMessage for more details.
     */
    sendMessage(
      message: any,
      targetOrigin?: string
    ): void;

    /**
     * Change the method use to workout the height of the iFrame.
     */
    setHeightCalculationMethod(method: HeightCalculationMethod): void;

    /**
     * Change the method use to workout the width of the iFrame.
     */
    setWidthCalculationMethod(method: WidthCalculationMethod): void;

    /**
     * Set default target origin.
     */
    setTargetOrigin(targetOrigin: string): void;

    /**
     * Manually force iFrame to resize. To use passed arguments you need first to disable the `autoResize` option to
     * prevent auto resizing and enable the `sizeWidth` option if you wish to set the width.
     */
    size(
      customHeight?: string,
      customWidth?: string
    ): void;
  }

  interface PageInfo {
    /**
     * The height of the iframe in pixels
     */
    iframeHeight: number;
    /**
     * The width of the iframe in pixels
     */
    iframeWidth: number;
    /**
     * The height of the viewport in pixels
     */
    clientHeight: number;
    /**
     * The width of the viewport in pixels
     */
    clientWidth: number;
    /**
     * The number of pixels between the left edge of the containing page and the left edge of the iframe
     */
    offsetLeft: number;
    /**
     * The number of pixels between the top edge of the containing page and the top edge of the iframe
     */
    offsetTop: number;
    /**
     * The number of pixels between the left edge of the iframe and the left edge of the iframe viewport
     */
    scrollLeft: number;
    /**
     * The number of pixels between the top edge of the iframe and the top edge of the iframe viewport
     */
    scrollTop: number;
  }

  // tslint:disable-next-line:interface-name
  interface IFrameResizedData {
    iframe: IFrameComponent;
    height: number;
    width: number;
    type: string;
  }

  // tslint:disable-next-line:interface-name
  interface IFrameMessageData {
    iframe: IFrameComponent;
    message: any;
  }

  // tslint:disable-next-line:interface-name
  interface IFrameScrollData {
    x: number;
    y: number;
  }
  function iframeResizer(options: IFrameOptions, target: string | HTMLElement): IFrameComponent[];
}
// leave this declaration outside the namespace so the 'require'd import is still callable
declare function iframeResizer(options: iframeResizer.IFrameOptions, target: string | HTMLElement): iframeResizer.IFrameComponent[];
export = iframeResizer;
export as namespace iframeResizer;
