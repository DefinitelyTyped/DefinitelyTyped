// Type definitions for angular.ui.sortable module v0.13+
// Project: https://github.com/angular-ui/ui-sortable
// Definitions by: Thodoris Greasidis <https://github.com/thgreasi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.ui {

    interface UISortableOptions<T> extends SortableOptions<T> {
        'ui-floating'?: string|boolean;
    }

    interface UISortableProperties<T> {
        /**
         * Holds the index of the drop target that the dragged item was dropped.
         */
        dropindex: number;

        /**
         * Holds the ui-sortable element that the dragged item was dropped on.
         */
        droptarget: number;

        /**
         * Holds the array that is specified by the `ng-model` attribute of the [`droptarget`](#droptarget) ui-sortable element.
         */
        droptargetModel: Array<T>;

        /**
         * Holds the original index of the item dragged.
         */
        index: number;

        /**
         * Holds the JavaScript object that is used as the model of the dragged item, as specified by the ng-repeat of the [`source`](#source) ui-sortable element and the item's [`index`](#index).
         */
        model: T;

        /**
         * Holds the model of the dragged item only when a sorting happens between two connected ui-sortable elements.
         * In other words: `'moved' in ui.item.sortable` will return false only when a sorting is withing the same ui-sortable element ([`source`](#source) equals to the [`droptarget`](#droptarget)).
         */
        moved?: T;

        /**
         * When sorting between two connected sortables, it will be set to true inside the `update` callback of the [`droptarget`](#droptarget).
         */
        received: Boolean;

        /**
         * Holds the ui-sortable element that the dragged item originated from.
         */
        source: ng.IAugmentedJQuery

        /**
         * Holds the array that is specified by the `ng-model` of the [`source`](#source) ui-sortable element.
         */
        sourceModel: Array<T>;

        /**
         * Can be called inside the `update` callback, in order to prevent/revert a sorting.
         * Should be used instead of the [jquery-ui-sortable cancel()](http://api.jqueryui.com/sortable/#method-cancel) method.
         */
        cancel(): void;

        /**
         * Returns whether the current sorting is marked as canceled, by an earlier call to [`ui.item.sortable.cancel()`](#cancel).
         */
        isCanceled(): Boolean;

        /**
         * Returns whether the [`helper`](http://api.jqueryui.com/sortable/#option-helper) element used for the current sorting, is one of the original ui-sortable list elements.
         */
        isCustomHelperUsed(): Boolean;
    }

    interface UISortableUIItem<T> extends ng.IAugmentedJQuery {
        sortable: UISortableProperties<T>;
    }

    interface UISortableUIParams<T> extends SortableUIParams {
        item: UISortableUIItem<T>;
    }

    // Base Sortable //////////////////////////////////////////////////

    interface SortableCursorAtOptions {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }

    interface SortableHelperFunctionOption {
        (event: JQueryEventObject, ui: ng.IAugmentedJQuery): JQuery;
    }

    interface SortableOptions<T> extends SortableEvents<T> {
        /**
         * jQuery, Element, Selector or string
         * Default: "parent"
         */
        appendTo?: any;
        /**
         * "X", "Y" or false
         * Default: false
         */
        axis?: string|boolean;
        /**
         * Selector
         * Default: "input,textarea,button,select,option"
         */
        cancel?: string;
        /**
         * Selector or false
         * Default: false
         */
        connectWith?: string|boolean;
        /**
         * Element, Selector, string or false
         * Default: false
         */
        containment?: any;
        cursor?: string;
        /**
         * Moves the sorting element or helper so the cursor always appears to drag from the same position. Coordinates can be given as a hash using a combination of one or two keys SortableCursorAtOptions: { top, left, right, bottom }
         * Default: false
         */
        cursorAt?: SortableCursorAtOptions|boolean;
        delay?: number;
        disabled?: boolean;
        distance?: number;
        dropOnEmpty?: boolean;
        forceHelperSize?: boolean;
        forcePlaceholderSize?: boolean;
        /**
         * Array of numbers or false
         * Default: false
         */
        grid?: number[]|boolean;
        /**
         * Selector or Element
         */
        handle?: any;
        /**
         * "original", "clone" or Function()
         * Default: "original"
         */
        helper?: string|SortableHelperFunctionOption;
        /**
         * Selector
         */
        items?: string;
        /**
         * Number or false
         * Default: false
         */
        opacity?: number|boolean;
        /**
         * string or false
         * Default: false
         */
        placeholder?: string|boolean;
        /**
         * boolean or number
         * Default: false
         */
        revert?: number|boolean;
        scroll?: boolean;
        scrollSensitivity?: number;
        scrollSpeed?: number;
        /**
         * "intersect" or "pointer"
         * Default: "intersect"
         */
        tolerance?: string;
        zIndex?: number;
    }

    interface SortableUIParams {
        helper: ng.IAugmentedJQuery;
        item: ng.IAugmentedJQuery;
        offset: any;
        position: any;
        originalPosition: any;
        sender: ng.IAugmentedJQuery;
        placeholder: ng.IAugmentedJQuery;
    }

    interface SortableEvent<T> {
        (event: JQueryEventObject, ui: UISortableUIParams<T>): void;
    }

    interface SortableEvents<T> {
        activate?: SortableEvent<T>;
        beforeStop?: SortableEvent<T>;
        change?: SortableEvent<T>;
        deactivate?: SortableEvent<T>;
        out?: SortableEvent<T>;
        over?: SortableEvent<T>;
        receive?: SortableEvent<T>;
        remove?: SortableEvent<T>;
        sort?: SortableEvent<T>;
        start?: SortableEvent<T>;
        stop?: SortableEvent<T>;
        update?: SortableEvent<T>;
    }

}
