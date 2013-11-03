/// <reference path="Point.d.ts" />
declare module L {

    export class DomUtil {

        /**
          * Returns an element with the given id if a string was passed, or just returns
          * the element if it was passed directly.
          */
        static get(id: string): HTMLElement;
    
        /**
          * Returns the value for a certain style attribute on an element, including
          * computed values or values set through CSS.
          */
        static getStyle(el: HTMLElement, style: string): string;
    
        /**
          * Returns the offset to the viewport for the requested element.
          */
        static getViewportOffset(el: HTMLElement): Point;
    
        /**
          * Creates an element with tagName, sets the className, and optionally appends
          * it to container element.
          */
        static create(tagName: string, className: string, container?: HTMLElement): HTMLElement;
    
        /**
          * Makes sure text cannot be selected, for example during dragging.
          */
        static disableTextSelection(): void;
    
        /**
          * Makes text selection possible again.
          */
        static enableTextSelection(): void;
    
        /**
          * Returns true if the element class attribute contains name.
          */
        static hasClass(el: HTMLElement, name: string): boolean;
    
        /**
          * Adds name to the element's class attribute.
          */
        static addClass(el: HTMLElement, name: string): void;
    
        /**
          * Removes name from the element's class attribute.
          */
        static removeClass(el: HTMLElement, name: string): void;
    
        /**
          * Set the opacity of an element (including old IE support). Value must be from
          * 0 to 1.
          */
        static setOpacity(el: HTMLElement, value: number): void;
    
        /**
          * Goes through the array of style names and returns the first name that is a valid
          * style name for an element. If no such name is found, it returns false. Useful
          * for vendor-prefixed styles like transform.
          */
        static testProp(props: string[]): any;
    
        /**
          * Returns a CSS transform string to move an element by the offset provided in
          * the given point. Uses 3D translate on WebKit for hardware-accelerated transforms
          * and 2D on other browsers.
          */
        static getTranslateString(point: Point): string;
    
        /**
          * Returns a CSS transform string to scale an element (with the given scale origin).
          */
        static getScaleString(scale: number, origin: Point): string;
    
        /**
          * Sets the position of an element to coordinates specified by point, using
          * CSS translate or top/left positioning depending on the browser (used by
          * Leaflet internally to position its layers). Forces top/left positioning
          * if disable3D is true.
          */
        static setPosition(el: HTMLElement, point: Point, disable3D?: boolean): void;
    
        /**
          * Returns the coordinates of an element previously positioned with setPosition.
          */
        static getPosition(el: HTMLElement): Point;
    
        /**
          * Vendor-prefixed transition style name (e.g. 'webkitTransition' for WebKit).
          */
        static TRANSITION: string;
    
        /**
          * Vendor-prefixed transform style name.
          */
        static TRANSFORM: string;
    
    }
}
