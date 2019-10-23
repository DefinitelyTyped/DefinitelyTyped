// Type definitions for acc-wizard
// Project: https://github.com/sathomas/acc-wizard
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface AccWizardOptions {
    /**
     * @summary Add next/prev buttons to panels.
     * @type {boolean}
     */
    addButtons: boolean;
    
    /**
     * @summary Selector for task sidebar.
     * @type {string}
     */
    sidebar: string;
    
    /**
     * @summary Class to indicate the active task in sidebar.
     * @type {string}
     */
    activeClass: string;
    
    /**
     * @summary Class to indicate task is complete.
     * @type {string}
     */
    completedClass: string;
    
    /**
     * @summary Class to indicate task is still pending.
     * @type {string}
     */
    todoClass: string;
    
    /**
     * @summary Class for step buttons within panels.
     * @type {string}
     */
    stepClass: string;
    
    /**
     * @summary Text for next button.
     * @type {string}
     */
    nextText: string;
    
    /**
     * @summary Text for back button.
     * @type {string}
     */
    backText: string;
    
    /**
     * @summary HTML input type for next button. (default: "submit")
     * @type {string}
     */
    nextType: string;

    /**
     * @summary HTML input type for back button. (default: "reset")
     * @type {string}
     */
    backType: string;
    
    /**
     * @summary Class(es) for next button.
     * @type {string}
     */
    nextClasses: string;
    
    /**
     * @summary Class(es) for back button.
     * @type {string}
     */
    backClasses: string;
    
    /**
     * @summary Auto-scrolling.
     * @type {boolean}
     */
    autoScrolling: boolean;
    
    /**
     * @summary Function to call on next step.
     */
    onNext: Function;
    
    /**
     * @summary Function to call on back up.
     */
    onBack: Function;

    /**
     * @summary A chance to hook initialization.
     */
    onInit: Function;
    
    /**
     * @summary A chance to hook destruction.
     */
    onDestroy: Function;
}

/**
 * @summary Interface for "acc-wizard" JQuery plugin.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface JQuery {
    accwizard(options?: AccWizardOptions): void;
}
