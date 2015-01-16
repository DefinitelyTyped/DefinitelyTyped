// Type definitions for Twitter Bootstrap Wizard Plugin.
// Project: https://github.com/VinceG/twitter-bootstrap-wizard
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * @summary Interface for event.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface TwitterBootstrapWizardEvent extends Function {
    (
        /**
         * @summary Active tab.
         * @type {jQuery}
         */
        activeTab: JQuery,

        /**
         * @summary Navigation.
         * @type {jQuery}
         */
        navigation: JQuery,

        /**
         * @summary Index.
         * @type {number}
         */
        index: number
    ): void;
}

/**
 * @summary Interface for events.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface TwitterBootstrapWizardEvents {
    /**
     * @summary Fired when back button is clicked (return false to disable moving backwards in navigation history).
     * @type {TwitterBootstrapWizardEvent}
     */
    onBack?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when finish button is clicked (return value is irrelevant).
     * @type {TwitterBootstrapWizardEvent}
     */
    onFinish?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when first button is clicked (return false to disable moving to the first step).
     * @type {TwitterBootstrapWizardEvent}
     */
    onFirst?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when last button is clicked (return false to disable moving to the last step).
     * @type {TwitterBootstrapWizardEvent}
     */
    onLast?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when plugin is initialized.
     * @type {TwitterBootstrapWizardEvent}
     */
    onInit?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when next button is clicked (return false to disable moving to the next step).
     * @type {TwitterBootstrapWizardEvent}
     */
    onNext?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when previous button is clicked (return false to disable moving to the previous step).
     * @type {TwitterBootstrapWizardEvent}
     */
    onPrevious?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when plugin data is shown.
     * @type {TwitterBootstrapWizardEvent}
     */
    onShow?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when a tab is changed (return false to disable moving to that tab and showing its contents).
     * @type {TwitterBootstrapWizardEvent}
     */
    onTabChange?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when a tab is clicked (return false to disable moving to that tab and showing its contents).
     * @type {TwitterBootstrapWizardEvent}
     */
    onTabClick?: TwitterBootstrapWizardEvent;
    
    /**
     * @summary Fired when a tab content is shown (return false to disable showing that tab content).
     * @type {TwitterBootstrapWizardEvent}
     */
    onTabShow?: TwitterBootstrapWizardEvent;
}

/**
 * @summary Interface for options.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface TwitterBootstrapWizardOptions {

    /**
     * @summary Back element selector.
     * @type {string}
     */
    backSelector?: string;

    /**
     * @summary Finish element selector.
     * @type {string}
     */
    finishSelector?: string;

    /**
     * @summary First element selector.
     * @type {string}
     */
    firstSelector?: string;

    /**
     * @summary Last element selector.
     * @type {string}
     */
    lastSelector?: string;

    /**
     * @summary Next element selector.
     * @type {string}
     */
    nextSelector?: string;

    /**
     * @summary Previous element selector.
     * @type {string}
     */
    previousSelector?: string;

    /**
     * @summary Navigation class.
     */
    tabClass?: string;
}

/**
 * @summary Interface for options.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface TwitterBootstrapWizard extends TwitterBootstrapWizardOptions, TwitterBootstrapWizardEvents {
    // to leave empty: it contains the other two interfaces: "TwitterBootstrapWizardOptions" and "TwitterBootstrapWizardEvents".
}

/**
 * @summary JQuery interface.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface JQuery {
    /**
     * Configure wizard.
     * @param {ITwitterBootstrapWizardOptions} options Options.
     */
    bootstrapWizard(options?: TwitterBootstrapWizard): void;
}