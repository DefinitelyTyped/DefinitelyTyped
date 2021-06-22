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
     */
    alignment: string;
    
    /**
     * @summary Base Z-Index.
     */
    baseZIndex: number;
    
    /**
     * @summary If true and detach = true, leave original menu intact.
     */
    cloneOnDetach: boolean;
    
    /**
     * @summary Detach second level menus (prevents parent style bleed).
     */
    detach: boolean;
    
    /**
     * @summary Easing mode ("swing", "linear").
     */
    easing: string;
    
    /**
     * @summary IE Offset X.
     */
    IEOffsetX: number;
    
    /**
     * @summary IE Offset Y.
     */
    IEOffsetY: number;
    
    /**
     * @summary Expansion mode ("hover" or "click").
     */
    expandMode: string;
    
    /**
     * @summary Global offset Y.
     */
    globalOffsetY: number;
    
    /**
     * @summary Hide delay (in ms; 0 disables).
     */
    hideDelay: number;
    
    /**
     * @summary Hover delay (in ms).
     */
    hoverDelay: number;
    
    /**
     * @summary Menu class (assigned to every <ul>).
     */
    menuClass: string;
    
    /**
     * @summary Menu mode ("instant", "fade", "slide", "zoom").
     */
    mode: string;
    
    /**
     * @summary If true and mode = "fade", prevents top-level opener fade.
     */
    noOpenerFade: boolean;
    
    /**
     * @summary Submenu offset X.
     */
    offsetX: number;
    
    /**
     * @summary Submenu offset Y.
     */
    offsetY: number;
    
    /**
     * @summary Active opener class.
     */
    openerActiveClass: string;
    
    /**
     * @summary Opener class.
     */
    openerClass: string;
    
    /**
     * @summary Parent jQuery object.
     */
    selectorParent: JQuery;
    
    /**
     * @summary Menu speed ("fast", "slow", or ms).
     */
    speed: string;
    
    /**
     * @summary Submenu class prefix.
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
     * @param config Optional. Configuration.
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
