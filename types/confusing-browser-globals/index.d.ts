// Type definitions for confusing-browser-globals 1.0
// Project: https://github.com/facebook/create-react-app/tree/master/packages/confusing-browser-globals#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ConfusingGlobal =
    | 'addEventListener'
    | 'blur'
    | 'close'
    | 'closed'
    | 'confirm'
    | 'defaultStatus'
    | 'defaultstatus'
    | 'event'
    | 'external'
    | 'find'
    | 'focus'
    | 'frameElement'
    | 'frames'
    | 'history'
    | 'innerHeight'
    | 'innerWidth'
    | 'length'
    | 'location'
    | 'locationbar'
    | 'menubar'
    | 'moveBy'
    | 'moveTo'
    | 'name'
    | 'onblur'
    | 'onerror'
    | 'onfocus'
    | 'onload'
    | 'onresize'
    | 'onunload'
    | 'open'
    | 'opener'
    | 'opera'
    | 'outerHeight'
    | 'outerWidth'
    | 'pageXOffset'
    | 'pageYOffset'
    | 'parent'
    | 'print'
    | 'removeEventListener'
    | 'resizeBy'
    | 'resizeTo'
    | 'screen'
    | 'screenLeft'
    | 'screenTop'
    | 'screenX'
    | 'screenY'
    | 'scroll'
    | 'scrollbars'
    | 'scrollBy'
    | 'scrollTo'
    | 'scrollX'
    | 'scrollY'
    | 'self'
    | 'status'
    | 'statusbar'
    | 'stop'
    | 'toolbar'
    | 'top';

declare const ConfusingGlobals: ConfusingGlobal[];

/**
 * A curated list of browser globals that commonly cause confusion
 * and are not recommended to use without an explicit window. qualifier.
 */
export = ConfusingGlobals;
