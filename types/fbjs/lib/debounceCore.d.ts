/**
 * Invokes the given callback after a specified number of milliseconds have
 * elapsed, ignoring subsequent calls.
 *
 * For example, if you wanted to update a preview after the user stops typing
 * you could do the following:
 *
 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
 *
 * The returned function has a reset method which can be called to cancel a
 * pending invocation.
 *
 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
 *
 *   // later, to cancel pending calls
 *   debouncedUpdatePreview.reset();
 *
 * func - the function to debounce
 * wait - how long to wait in milliseconds
 * context - optional context to invoke the function in
 * setTimeoutFunc - an implementation of setTimeout
 *  if nothing is passed in the default setTimeout function is used
 * clearTimeoutFunc - an implementation of clearTimeout
 *  if nothing is passed in the default clearTimeout function is used
 */
declare function debounce(
    func: any,
    wait: number,
    context?: any,
    setTimeoutFunc?: typeof setTimeout,
    clearTimeoutFunc?: typeof clearTimeout,
): (...args: any) => void;

declare namespace debounce {}

export = debounce;
