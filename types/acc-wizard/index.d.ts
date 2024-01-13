interface AccWizardOptions {
    /**
     * @summary Add next/prev buttons to panels.
     */
    addButtons: boolean;

    /**
     * @summary Selector for task sidebar.
     */
    sidebar: string;

    /**
     * @summary Class to indicate the active task in sidebar.
     */
    activeClass: string;

    /**
     * @summary Class to indicate task is complete.
     */
    completedClass: string;

    /**
     * @summary Class to indicate task is still pending.
     */
    todoClass: string;

    /**
     * @summary Class for step buttons within panels.
     */
    stepClass: string;

    /**
     * @summary Text for next button.
     */
    nextText: string;

    /**
     * @summary Text for back button.
     */
    backText: string;

    /**
     * @summary HTML input type for next button. (default: "submit")
     */
    nextType: string;

    /**
     * @summary HTML input type for back button. (default: "reset")
     */
    backType: string;

    /**
     * @summary Class(es) for next button.
     */
    nextClasses: string;

    /**
     * @summary Class(es) for back button.
     */
    backClasses: string;

    /**
     * @summary Auto-scrolling.
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
