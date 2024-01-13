import $ = require("jquery");

declare global {
    /**
     * HTML segments for tip layout
     */
    interface JoyrideTemplate {
        /**
         * Link template
         * @member {string}
         */
        link?: string | undefined;

        /**
         * Timer template
         * @member {string}
         */
        timer?: string | undefined;

        /**
         * Tip template
         * @member {string}
         */
        tip?: string | undefined;

        /**
         * Wrapper template
         * @member {string}
         */
        wrapper?: string | undefined;

        /**
         * Button template
         * @member {string}
         */
        button?: string | undefined;

        /**
         * Modal template
         * @member {string}
         */
        modal?: string | undefined;

        /**
         * Exposed Cover template
         * @member {string}
         */
        exposeCover?: string | undefined;
    }

    interface JoyrideOptions {
        /**
         * Version
         * @member {string}
         */
        version?: string | undefined;

        /**
         * 'top' or 'bottom' in relation to parent
         * @member {string}
         */
        tipLocation?: string | undefined;

        /**
         * override on a per tooltip bases
         * @member {any}
         */
        nubPosition?: any;

        /**
         * whether to scroll to tips
         * @member {boolean}
         */
        scroll?: boolean | undefined;

        /**
         * Page scrolling speed in ms
         * @member {number}
         */
        scrollSpeed?: number | undefined;

        /**
         * 0 = off, all other numbers = time(ms)
         * @member {number}
         */
        timer?: number | undefined;

        /**
         * true or false - false tour starts when restart called
         * @member {boolean}
         */
        autoStart?: boolean | undefined;

        /**
         * true/false to start timer on first click
         * @member {boolean}
         */
        startTimerOnClick?: boolean | undefined;

        /**
         * the index of the tooltip you want to start on (index of the li)
         * @member {number}
         */
        startOffset?: number | undefined;

        /**
         * true/false for next button visibility
         * @member {boolean}
         */
        nextButton?: boolean | undefined;

        /**
         * 'pop' or 'fade' in each tip
         * @member {string}
         */
        tipAnimation?: string | undefined;

        /**
         * array of indexes where to pause the tour after
         * @member {any[]}
         */
        pauseAfter?: any[] | undefined;

        /**
         * if 'fade'- speed in ms of transition
         * @member {number}
         */
        tipAnimationFadeSpeed?: number | undefined;

        /**
         * true/false for whether cookies are used
         * @member {boolean}
         */
        cookieMonster?: boolean | undefined;

        /**
         * choose your own cookie name
         * member {string}
         */
        cookieName?: string | undefined;

        /**
         * Will this cookie be attached to a domain, ie. '.notableapp.com'
         * @member {any}
         */
        cookieDomain?: any;

        /**
         * Set to '/' if you want the cookie for the whole website
         * @member {any}
         */
        cookiePath?: any;

        /**
         * true or false to control whether localstorage is used
         * @member {boolean}
         */
        localStorage?: boolean | undefined;

        /**
         * Keyname in localstorage
         @member {string}
         */
        localStorageKey?: string | undefined;

        /**
         * Where the tip be attached if not inline
         * @member {HTMLElement}
         */
        tipContainer?: HTMLElement | undefined;

        /**
         * Whether to cover page with modal during the tour
         * @member {boolean}
         */
        modal?: boolean | undefined;

        /**
         *  Whether to expose the elements at each step in the tour (requires modal:true)
         * @member {boolean}
         */
        expose?: boolean | undefined;

        /**
         * A method to call after an element has been exposed
         * @method
         * @param {number} index Tip Index
         * @param {JQuery} nextTip Tip object
         * @param {JQuery} el Element
         */
        postExposeCallback?: ((index: number, nextTip: JQuery, el?: JQuery) => void) | undefined;

        /**
         * A method to call before the tour starts (passed index, tip, and cloned exposed element)
         * @method
         * @param {number} index Current Tip Index
         * @param {JQuery} currentTip Current Tip object
         * @param {JQuery} el Element
         */
        preRideCallback?: ((index: number, currentTip: JQuery, el?: JQuery) => void) | undefined;

        /**
         * a method to call once the tour closes
         * @method
         * @param {number} index Current Tip Index
         * @param {JQuery} currentTip Current Tip object
         * @param {boolean} isAborted Is Aborted?
         */
        postRideCallback?: ((index: number, currentTip: JQuery, isAborted?: boolean) => void) | undefined;

        /**
         * A method to call after each step
         * @method
         * @param {number} index Current Tip Index
         * @param {JQuery} currentTip Current Tip object
         * @param {boolean} isAborted Is Aborted?
         */
        postStepCallback?: ((index: number, currentTip: JQuery, isAborted?: boolean) => void) | undefined;

        /**
         * A method to call before each step
         * @method
         * @param {number} index Tip Index
         * @param {JQuery} nextTip Tip object
         * @param {JQuery} el Element
         */
        preStepCallback?: ((index: number, nextTip: JQuery, el?: JQuery) => void) | undefined;

        /**
         * HTML segments for tip layout
         * @member {JoyrideTemplate}
         */
        template?: JoyrideTemplate | undefined;
    }

    interface Joyride {
        /**
         * Default function, no options
         * @method
         * @return {JQuery} JQuery instance
         */
        (): JQuery;

        /**
         * Function with options
         * @method
         * @param {JoyrideOptions} options An object with all the joyride options you want to overwrite.
         * @return {JQuery} JQuery instance
         */
        (options: JoyrideOptions): JQuery;

        /**
         * Function with method name and params
         * @method
         * @param {string} methodName Name of method to call.
         * @param {any[]} params parameters for method
         * @return {JQuery} JQuery instance
         */
        (methodName: string, ...params: any[]): JQuery;
    }

    interface JQuery {
        /**
         * joyride function
         * @return {Joyride} Joyride instance.
         */
        joyride: Joyride;
    }
}
