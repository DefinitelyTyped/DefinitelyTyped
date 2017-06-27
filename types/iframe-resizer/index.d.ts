// Type definitions for iframe-resizer 3.5
// Project: https://github.com/davidjbradshaw/iframe-resizer
// Definitions by: Armin Baljic <https://github.com/arminbaljic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable:prefer-method-signature
// tslint:disable-next-line:no-single-declare-module
declare module 'iframe-resizer' {
    // tslint:disable-next-line:interface-name
    interface IFrameObject {
        close(): void;
        moveToAnchor(anchor: string): void;
        resize(): void;
        sendMessage(message: any): void;
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
        bodyMargin?: number;
        /**
         * When set to true, only allow incoming messages from the domain listed in the src property of the iFrame tag.
         * If your iFrame navigates between different domains, ports or protocols; then you will need to
         * provide an array of URLs or disable this option.
         */
        checkOrigin?: boolean;
        /**
         * When enabled in page linking inside the iFrame and from the iFrame to the parent page will be enabled.
         */
        inPageLinks?: boolean;
        /**
         * Height calculation method.
         */
        heightCalculationMethod?: string;
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
        resizeFrom?: string;
        /**
         * Enable scroll bars in iFrame.
         */
        scrolling?: boolean;
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
        widthCalculationMethod?: string;
        /**
         * Called when iFrame is closed via parentIFrame.close() or iframe.iframeResizer.close() methods.
         */
        closedCallback?: (iframeId?: string) => void;
        /**
         * Initial setup callback function.
         */
        initCallback?: (iframe?: IFrameComponent) => void;
        /**
         * Receive message posted from iFrame with the parentIFrame.sendMessage() method.
         */
        messageCallback?: (data: IFrameMessageData) => void;
        /**
         * Function called after iFrame resized. Passes in messageData object containing the iFrame, height, width
         * and the type of event that triggered the iFrame to resize.
         */
        resizedCallback?: (data: IFrameResizedData) => void;
        /**
         * Called before the page is repositioned after a request from the iFrame, due to either an in page link,
         * or a direct request from either parentIFrame.scrollTo() or parentIFrame.scrollToOffset().
         * If this callback function returns false, it will stop the library from repositioning the page, so that
         * you can implement your own animated page scrolling instead.
         */
        scrollCallback?: (data: IFrameScrollData) => boolean;
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
        messageCallback?: (message: any) => void;
        /**
         * This function is called once iFrame-Resizer has been initialized after receiving a call from the parent page.
         */
        readyCallback?: () => void;
        /**
         * These option can be used to override the option set in the parent page
         */
        heightCalculationMethod?: string;
        /**
         * These option can be used to override the option set in the parent page
         */
        widthCalculationMethod?: string;
    }

    // tslint:disable-next-line:interface-name
    interface IFramePage {
        autoResize(resize?: boolean): boolean;
        close(): void;
        getId(): string;
        getPageInfo(callback: (data: any) => void | false): void;
        scrollTo(x: number, y: number): void;
        scrollToOffset(x: number, y: number): void;
        sendMessage(message: any, targetOrigin: string): void;
        setHeightCalculationMethod(method: string): void;
        setWidthCalculationMethod(method: string): void;
        setTargetOrigin(targetOrigin: string): void;
        size(customHeight: string, customWidth: string): void;
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
        message: string;
    }

    // tslint:disable-next-line:interface-name
    interface IFrameScrollData {
        x: number;
        y: number;
    }

    function iframeResizer(options: IFrameOptions, target: HTMLElement): IFrameComponent[];
}
// tslint:enable:prefer-method-signature
