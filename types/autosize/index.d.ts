// Type definitions for autosize 3.0
// Project: http://www.jacklmoore.com/autosize/
// Definitions by: Aaron T. King <https://github.com/kingdango>, keika299 <https://github.com/keika299>, NeekSandhu <https://github.com/NeekSandhu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/**
 * Attach autosize to NodeList
 */
declare function autosize(elements: NodeList): NodeList;
/**
 * Attach autosize to Element
 */
declare function autosize(element: Element): Element;
/**
 * Attach autosize to JQuery collection
 */
declare function autosize(collection: JQuery): JQuery;

declare namespace autosize {
    /**
     * Triggers the height adjustment for an assigned textarea element.
     * Autosize will automatically adjust the textarea height on keyboard and window resize events.
     * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
     */
    function update(elements: NodeList): NodeList;
    /**
     * Triggers the height adjustment for an assigned textarea element.
     * Autosize will automatically adjust the textarea height on keyboard and window resize events.
     * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
     */
    function update(element: Element): Element;
    /**
     * Triggers the height adjustment for an assigned textarea element.
     * Autosize will automatically adjust the textarea height on keyboard and window resize events.
     * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
     */
    function update(collection: JQuery): JQuery;

    /**
     * Removes Autosize and reverts any changes it made to the textarea element.
     */
    function destroy(elements: NodeList): NodeList;
    /**
     * Removes Autosize and reverts any changes it made to the textarea element.
     */
    function destroy(element: Element): Element;
    /**
     * Removes Autosize and reverts any changes it made to the textarea element.
     */
    function destroy(collection: JQuery): JQuery;
}

export = autosize;
export as namespace autosize;
