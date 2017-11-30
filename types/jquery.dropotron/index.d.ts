// Type definitions for jquery.dropotron 1.4.3
// Project: https://github.com/n33/jquery.dropotron
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/
// TypeScript Version: 2.3

/**
 * @summary Interface for "dropotron" configurations.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface DropotronConfiguration {
    
    /**
     * @summary Alignment ("left", "center", "right").
     * @type {string}
     */
    alignment: string;
    
    /**
     * @summary Base Z-Index.
     * @type {number}
     */
    baseZIndex: number;
    
    /**
     * @summary If true and detach = true, leave original menu intact.
     * @type {boolean}
     */
    cloneOnDetach: boolean;
    
    /**
     * @summary Detach second level menus (prevents parent style bleed).
     * @type {boolean}
     */
    detach: boolean;
    
    /**
     * @summary Easing mode ("swing", "linear").
     * @type {string}
     */
    easing: string;
    
    /**
     * @summary IE Offset X.
     * @type {number}
     */
    IEOffsetX: number;
    
    /**
     * @summary IE Offset Y.
     * @type {number}
     */
    IEOffsetY: number;
    
    /**
     * @summary Expansion mode ("hover" or "click").
     * @type {string}
     */
    expandMode: string;
    
    /**
     * @summary Global offset Y.
     * @type {number}
     */
    globalOffsetY: number;
    
    /**
     * @summary Hide delay (in ms; 0 disables).
     * @type {number}
     */
    hideDelay: number;
    
    /**
     * @summary Hover delay (in ms).
     * @type {number}
     */
    hoverDelay: number;
    
    /**
     * @summary Menu class (assigned to every <ul>).
     * @type {string}
     */
    menuClass: string;
    
    /**
     * @summary Menu mode ("instant", "fade", "slide", "zoom").
     * @type {string}
     */
    mode: string;
    
    /**
     * @summary If true and mode = "fade", prevents top-level opener fade.
     * @type {boolean}
     */
    noOpenerFade: boolean;
    
    /**
     * @summary Submenu offset X.
     * @type {number}
     */
    offsetX: number;
    
    /**
     * @summary Submenu offset Y.
     * @type {number}
     */
    offsetY: number;
    
    /**
     * @summary Active opener class.
     * @type {string}
     */
    openerActiveClass: string;
    
    /**
     * @summary Opener class.
     * @type {string}
     */
    openerClass: string;
    
    /**
     * @summary Parent jQuery object.
     * @type {JQuery}
     */
    selectorParent: JQuery;
    
    /**
     * @summary Menu speed ("fast", "slow", or ms).
     * @type {string}
     */
    speed: string;
    
    /**
     * @summary Submenu class prefix.
     * @type {string}
     */
    submenuClassPrefix: string;
}

/**
 * @summary Interface for "dropotron".
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface Dropotron {
    /**
     * @summary Adds multilevel dropdown menus to jQuery.
     * @param {DropotronConfiguration} config Optional. Configuration.
     */
    (config?: DropotronConfiguration): void;
}

/**
 * @summary Interface for "JQuery".
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface JQuery {
    dropotron: Dropotron;
}
