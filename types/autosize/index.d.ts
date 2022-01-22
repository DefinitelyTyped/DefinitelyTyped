// Type definitions for autosize 4.0
// Project: http://www.jacklmoore.com/autosize/
// Definitions by: Aaron T. King <https://github.com/kingdango>
//                 NeekSandhu <https://github.com/NeekSandhu>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = autosize;
export as namespace autosize;

/**
 * Attach Autosize to NodeList/Element/JQuery.
 *
 * @example
 * import autosize = require('autosize');
 *
 * // from a NodeList
 * autosize(document.querySelectorAll('textarea'));
 *
 * // from a single Node
 * autosize(document.querySelector('textarea'));
 *
 * // from a jQuery collection
 * autosize($('textarea'));
 */
declare function autosize<T extends ArrayLike<Element> | Element>(elements: T): T;

declare namespace autosize {
    /**
     * Triggers the height adjustment for an assigned textarea element.
     * Autosize will automatically adjust the textarea height on keyboard and window resize events.
     * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
     */
    function update<T extends ArrayLike<Element> | Element>(elements: T): T;

    /**
     * Removes Autosize and reverts any changes it made to the textarea element.
     */
    function destroy<T extends ArrayLike<Element> | Element>(elements: T): T;
}
