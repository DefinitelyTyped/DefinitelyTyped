

declare module Ionic {
    /**
     * ionic.DomUtil
     */
    interface IDomUtil {
        /**
         * alias: ionic.requestAnimationFrame
         * 
         * Calls requestAnimationFrame, or a polyfill if not available.
         * 
         * @param callback The function to call when the next frame happens
         */
        requestAnimationFrame(callback: () => void): void;

        /**
         * alias: ionic.animationFrameThrottle
         * 
         * When given a callback, if that callback is called 100 times between animation frames, adding Throttle will make it only run the last of the 100 calls.
         * 
         * @param callback a function which will be throttled to requestAnimationFrame
         */
        animationFrameThrottle(callback: () => void): void;

        /**
         * Find an element's scroll offset within its container
         * 
         * @param element The element to find the offset of
         */
        getPositionInParent(element: Element): void;

        /**
         * The Window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser 
         * call a specified function to update an animation before the next repaint.
         * The method takes as an argument a callback to be invoked before the repaint.
         * 
         * @param callback The function to be called
         */
        ready(callback: () => void): void;

        /**
         * Get a rect representing the bounds of the given textNode.
         */
        getTextBounds(textNode: Element): {
            left: number;
            right: number;
            top: number;
            bottom: number;
            width: number;
            height: number;
        };

        /**
         * Get the first index of a child node within the given element of the specified type.
         * 
         * @param element The element to find the index of.
         * @param type The nodeName to match children of element against.
         */
        getChildIndex(element: Element, type: string): number;

        /**
         * Returns the closest parent of element matching the className, or null.
         * 
         * @param element
         * @param className
         */
        getParentWithClass(element: Element, className: string): Element

        /**
         * Returns the closest parent or self matching the className, or null.
         */
        getParentOrSelfWithClass(element: Element, className: string): Element;


        /**
         * Returns whether {x,y} fits within the rectangle defined by {x1,y1,x2,y2}.
         * 
         * @param x
         * @param y
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         */
        rectContains(x: number, y: number, x1: number, y1: number, x2: number, y2: number): boolean;
    }
}