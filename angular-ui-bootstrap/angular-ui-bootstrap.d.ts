// Type definitions for Angular UI Bootstrap 0.13.3
// Project: https://github.com/angular-ui/bootstrap
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

// Support for AMD require
declare module 'angular-bootstrap' {
    let _: string;
    export = _;
}

declare module 'angular-ui-bootstrap' {
    let _: string;
    export = _;
}

declare namespace angular.ui.bootstrap {

    interface IAccordionConfig {
        /**
         * Controls whether expanding an item will cause the other items to close.
         *
         * @default true
         */
        closeOthers?: boolean;
    }


    interface IButtonConfig {
        /**
         * @default: 'active'
         */
        activeClass?: string;

        /**
         * @default: 'Click'
         */
        toggleEvent?: string;
    }


    interface IDatepickerConfig {
        /**
         * Format of day in month.
         *
         * @default 'dd'
         */
        formatDay?: string;

        /**
         * Format of month in year.
         *
         * @default 'MMM'
         */
        formatMonth?: string;

        /**
         * Format of year in year range.
         *
         * @default 'yyyy'
         */
        formatYear?: string;

        /**
         * Format of day in week header.
         *
         * @default 'EEE'
         */
        formatDayHeader?: string;

        /**
         * Format of title when selecting day.
         *
         * @default 'MMM yyyy'
         */
        formatDayTitle?: string;

        /**
         * Format of title when selecting month.
         *
         * @default 'yyyy'
         */
        formatMonthTitle?: string;

        /**
         * Current mode of the datepicker (day|month|year). Can be used to initialize datepicker to specific mode.
         *
         * @default 'day'
         */
        datepickerMode?: string;

        /**
         * Set a lower limit for mode.
         *
         * @default 'day'
         */
        minMode?: string;

        /**
         * Set an upper limit for mode.
         *
         * @default 'year'
         */
        maxMode?: string;

        /**
         * Whether to display week numbers.
         *
         * @default true
         */
        showWeeks?: boolean;

        /**
         * Starting day of the week from 0-6 where 0=Sunday and 6=Saturday.
         *
         * @default 0
         */
        startingDay?: number;

        /**
         * Number of years displayed in year selection.
         *
         * @default 20
         */
        yearRange?: number;

        /**
         * Defines the minimum available date.
         *
         * @default null
         */
        minDate?: any;

        /**
         * Defines the maximum available date.
         *
         * @default null
         */
        maxDate?: any;

        /**
         * An option to disable or enable shortcut's event propagation
         *
         * @default false
         */
        shortcutPropagation?: boolean;
    }

    interface IDatepickerPopupConfig {
        /**
         * The format for displayed dates.
         *
         * @default 'yyyy-MM-dd'
         */
        datepickerPopup?: string;

        /**
         * Allows overriding of default template of the popup.
         *
         * @default 'template/datepicker/popup.html'
         */
        datepickerPopupTemplateUrl?: string;

        /**
         * Allows overriding of default template of the datepicker used in popup.
         *
         * @default 'template/datepicker/popup.html'
         */
        datepickerTemplateUrl?: string;

        /**
         * Allows overriding of the default format for html5 date inputs.
         */
        html5Types?: {
            date?: string;
            'datetime-local'?: string;
            month?: string;
        };

        /**
         * The text to display for the current day button.
         *
         * @default 'Today'
         */
        currentText?: string;

        /**
         * The text to display for the clear button.
         *
         * @default 'Clear'
         */
        clearText?: string;

        /**
         * The text to display for the close button.
         *
         * @default 'Done'
         */
        closeText?: string;

        /**
         * Whether to close calendar when a date is chosen.
         *
         * @default true
         */
        closeOnDateSelection?: boolean;

        /**
         * Append the datepicker popup element to `body`, rather than inserting after `datepicker-popup`.
         *
         * @default false
         */
        appendToBody?: boolean;

        /**
         * Whether to display a button bar underneath the datepicker.
         *
         * @default true
         */
        showButtonBar?: boolean;

        /**
         * Whether to focus the datepicker popup upon opening.
         *
         * @default true
         */
        onOpenFocus?: boolean;
    }


    interface IModalProvider {
        /**
         * Default options all modals will use.
         */
        options: IModalSettings;
    }

    interface IModalService {
        /**
         * @param {IModalSettings} options
         * @returns {IModalServiceInstance}
         */
        open(options: IModalSettings): IModalServiceInstance;
    }

    interface IModalServiceInstance {
        /**
         * A method that can be used to close a modal, passing a result. If `preventDefault` is called on the `modal.closing` event then the modal will remain open.
         */
        close(result?: any): void;

        /**
         * A method that can be used to dismiss a modal, passing a reason. If `preventDefault` is called on the `modal.closing` event then the modal will remain open.
         */
        dismiss(reason?: any): void;

        /**
         * A promise that is resolved when a modal is closed and rejected when a modal is dismissed.
         */
        result: angular.IPromise<any>;

        /**
         * A promise that is resolved when a modal gets opened after downloading content's template and resolving all variables.
         */
        opened: angular.IPromise<any>;

        /**
         * A promise that is resolved when a modal is rendered.
         */
        rendered: angular.IPromise<any>;

        /**
         * A promise that is resolved when a modal is closed and the animation completes.
         */
        closed: angular.IPromise<any>;
    }

    interface IModalScope extends angular.IScope {
        /**
         * Dismiss the dialog without assigning a value to the promise output. If `preventDefault` is called on the `modal.closing` event then the modal will remain open.
         *
         * @returns true if the modal was closed; otherwise false
         */
        $dismiss(reason?: any): boolean;

        /**
         * Close the dialog resolving the promise to the given value. If `preventDefault` is called on the `modal.closing` event then the modal will remain open.
         *
         * @returns true if the modal was closed; otherwise false
         */
        $close(result?: any): boolean;
    }

    interface IModalSettings {
        /**
         * a path to a template representing modal's content
         */
        templateUrl?: string | (() => string);

        /**
         * inline template representing the modal's content
         */
        template?: string;

        /**
         * a scope instance to be used for the modal's content (actually the $modal service is going to create a child scope of a provided scope).
         * Defaults to `$rootScope`.
         */
        scope?: angular.IScope|IModalScope;

        /**
         * a controller for a modal instance - it can initialize scope used by modal.
         * A controller can be injected with `$modalInstance`
         * If value is an array, it must be in Inline Array Annotation format for injection (strings followed by factory method)
         */
        controller?: string | Function | Array<string | Function>;

        /**
         *  an alternative to the controller-as syntax, matching the API of directive definitions.
         *  Requires the controller option to be provided as well
         */
        controllerAs?: string;

        /**
         * When used with controllerAs and set to true, it will bind the controller properties onto the $scope directly.
         *
         * @default false
         */
        bindToController?: boolean;

        /**
         * members that will be resolved and passed to the controller as locals; it is equivalent of the `resolve` property for AngularJS routes
         * If property value is an array, it must be in Inline Array Annotation format for injection (strings followed by factory method)
         */
        resolve?: { [ key: string ]: string | Function | Array<string | Function> | Object };

        /**
         * Set to false to disable animations on new modal/backdrop. Does not toggle animations for modals/backdrops that are already displayed.
         *
         * @default true
         */
        animation?: boolean;

        /**
         * controls the presence of a backdrop
         * Allowed values:
         *   - true (default)
         *   - false (no backdrop)
         *   - 'static' backdrop is present but modal window is not closed when clicking outside of the modal window
         *
         * @default true
         */
        backdrop?: boolean | string;

        /**
         * indicates whether the dialog should be closable by hitting the ESC key
         *
         * @default true
         */
        keyboard?: boolean;

        /**
         * additional CSS class(es) to be added to a modal backdrop template
         */
        backdropClass?: string;

        /**
         * additional CSS class(es) to be added to a modal window template
         */
        windowClass?: string;

        /**
         * Optional suffix of modal window class. The value used is appended to the `modal-` class, i.e. a value of `sm` gives `modal-sm`.
         */
        size?: string;

        /**
         * a path to a template overriding modal's window template
         */
        windowTemplateUrl?: string;

        /**
         * The  class added to the body element when the modal is opened.
         *
         * @default 'model-open'
         */
        openedClass?: string;
        
        /**
         * CSS class(es) to be added to the top modal window.
         */
        
        windowTopClass?: string;
        
        /**
         * Appends the modal to a specific element.
         * 
         * @default 'body'
         */
        appendTo?: angular.IAugmentedJQuery;
    }

    interface IModalStackService {
        /**
         * Opens a new modal instance.
         */
        open(modalInstance: IModalServiceInstance, modal: any): void;

        /**
         * Closes a modal instance with an optional result.
         */
        close(modalInstance: IModalServiceInstance, result?: any): void;

        /**
         * Dismisses a modal instance with an optional reason.
         */
        dismiss(modalInstance: IModalServiceInstance, reason?: any): void;

        /**
         * Dismiss all open modal instances with an optional reason that will be passed to each instance.
         */
        dismissAll(reason?: any): void;

        /**
         * Gets the topmost modal instance that is open.
         */
        getTop(): IModalStackedMapKeyValuePair;
    }

    interface IModalStackedMapKeyValuePair {
        key: IModalServiceInstance;
        value: any;
    }


    interface IPaginationConfig {
        /**
         * Total number of items in all pages.
         */
        totalItems?: number;

        /**
         * Maximum number of items per page. A value less than one indicates all items on one page.
         *
         * @default 10
         */
        itemsPerPage?: number;

        /**
         * Limit number for pagination size.
         *
         * @default: null
         */
        maxSize?: number;

        /**
         * An optional expression assigned the total number of pages to display.
         *
         * @default angular.noop
         */
        numPages?: number;

        /**
         * Whether to keep current page in the middle of the visible ones.
         *
         * @default true
         */
        rotate?: boolean;

        /**
         * Whether to display Previous / Next buttons.
         *
         * @default true
         */
        directionLinks?: boolean;

        /**
         * Text for Previous button.
         *
         * @default 'Previous'
         */
        previousText?: string;

        /**
         * Text for Next button.
         *
         * @default 'Next'
         */
        nextText?: string;

        /**
         * Whether to display First / Last buttons.
         *
         * @default false
         */
        boundaryLinks?: boolean;

        /**
         * Text for First button.
         *
         * @default 'First'
         */
        firstText?: string;

        /**
         * Text for Last button.
         *
         * @default 'Last'
         */
        lastText?: string;

        /**
         * Override the template for the component with a custom provided template.
         *
         * @default  'template/pagination/pagination.html'
         */
        templateUrl?: string;
    }

    interface IPagerConfig {
        /**
         * Whether to align each link to the sides.
         *
         * @default true
         */
        align?: boolean;

        /**
         * Maximum number of items per page. A value less than one indicates all items on one page.
         *
         * @default 10
         */
        itemsPerPage?: number;

        /**
         * Text for Previous button.
         *
         * @default '« Previous'
         */
        previousText?: string;

        /**
         * Text for Next button.
         *
         * @default 'Next »'
         */
        nextText?: string;
    }


    interface IPositionCoordinates {
        width?: number;
        height?: number;
        top?: number;
        left?: number;
    }

    interface IPositionService {
        /**
         * Provides a read-only equivalent of jQuery's position function.
         */
        position(element: JQuery): IPositionCoordinates;

        /**
         * Provides a read-only equivalent of jQuery's offset function.
         */
        offset(element: JQuery): IPositionCoordinates;
    }


    interface IProgressConfig {
        /**
         * Whether bars use transitions to achieve the width change.
         *
         * @default: true
         */
        animate?: boolean;

        /**
         * A number that specifies the total value of bars that is required.
         *
         * @default: 100
         */
        max?: number;
    }


    interface IRatingConfig {
        /**
         * Changes the number of icons.
         *
         * @default: 5
         */
        max?: number;

        /**
         * A variable used in the template to specify the state for selected icons.
         *
         * @default: null
         */
        stateOn?: string;

        /**
         * A variable used in the template to specify the state for unselected icons.
         *
         * @default: null
         */
        stateOff?: string;

        /**
         * An array of strings defining titles for all icons.
         *
         * @default: ["one", "two", "three", "four", "five"]
         */
        titles?: Array<string>;
    }


    interface ITimepickerConfig {
        /**
         * Number of hours to increase or decrease when using a button.
         *
         * @default 1
         */
        hourStep?: number;

        /**
         * Number of minutes to increase or decrease when using a button.
         *
         * @default 1
         */
        minuteStep?: number;

        /**
         * Whether to display 12H or 24H mode.
         *
         * @default true
         */
        showMeridian?: boolean;

        /**
         * Meridian labels based on locale. To override you must supply an array like ['AM', 'PM'].
         *
         * @default null
         */
        meridians?: Array<string>;

        /**
         * Whether the user can type inside the hours & minutes input.
         *
         * @default false
         */
        readonlyInput?: boolean;

        /**
         * Whether the user can scroll inside the hours & minutes input to increase or decrease it's values.
         *
         * @default true
         */
        mousewheel?: boolean;

        /**
         * Whether the user can use up/down arrowkeys inside the hours & minutes input to increase or decrease it's values.
         *
         * @default true
         */
        arrowkeys?: boolean;

        /**
         * Shows spinner arrows above and below the inputs.
         *
         * @default true
         */
        showSpinners?: boolean;
    }


    interface ITooltipOptions {
        /**
         * Where to place it? Defaults to 'top', but also accepts 'right', 'bottom', or 'left'.
         *
         * @default 'top'
         */
        placement?: string;

        /**
         * Should the modal fade in and out?
         *
         * @default true
         */
        animation?: boolean;

        /**
         * For how long should the user have to have the mouse over the element before the tooltip shows (in milliseconds)?
         *
         * @default 0
         */
        popupDelay?: number;

        /**
         * Should the tooltip be appended to `$body` instead of the parent element?
         *
         * @default false
         */
        appendToBody?: boolean;

        /**
         * What should trigger a show of the tooltip? Supports a space separated list of event names.
         *
         * @default 'mouseenter' for tooltip, 'click' for popover
         */
        trigger?: string;

        /**
         * Should an expression on the scope be used to load the content?
         *
         * @default false
         */
        useContentExp?: boolean;
    }

    interface ITooltipProvider {
        /**
         * Provide a set of defaults for certain tooltip and popover attributes.
         */
        options(value: ITooltipOptions): void;

        /**
         * Extends the default trigger mappings with mappings of your own. E.g. `{ 'openTrigger': 'closeTrigger' }`.
         */
        setTriggers(triggers: Object): void;
    }


    /**
     * WARNING: $transition is now deprecated. Use $animate from ngAnimate instead.
     */
    interface ITransitionService {
        /**
         * The browser specific animation event name.
         */
        animationEndEventName: string;

        /**
         * The browser specific transition event name.
         */
        transitionEndEventName: string;

        /**
         * Provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
         *
         * @param element The DOMElement that will be animated
         * @param trigger The thing that will cause the transition to start:
         *   - As a string, it represents the css class to be added to the element.
         *   - As an object, it represents a hash of style attributes to be applied to the element.
         *   - As a function, it represents a function to be called that will cause the transition to occur.
         * @param options Optional settings for the transition.
         *
         * @return A promise that is resolved when the transition finishes.
         */
        (element: angular.IAugmentedJQuery, trigger: any, options?: ITransitionServiceOptions): angular.IPromise<angular.IAugmentedJQuery>;
    }

    interface ITransitionServiceOptions {
        animation?: boolean;
    }

}
