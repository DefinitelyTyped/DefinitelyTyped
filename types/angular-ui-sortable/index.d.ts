/// <reference types="angular" />
/// <reference types="jqueryui" />

import * as ng from "angular";

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type Omit<T, K extends keyof T> = Pick<
    T,
    ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;

declare module "angular" {
    export namespace ui {
        interface UISortableOptions<T> extends SortableOptions<T> {
            "ui-floating"?: "auto" | boolean | undefined;
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
            moved?: T | undefined;

            /**
             * When sorting between two connected sortables, it will be set to true inside the `update` callback of the [`droptarget`](#droptarget).
             */
            received: Boolean;

            /**
             * Holds the ui-sortable element that the dragged item originated from.
             */
            source: ng.IAugmentedJQuery;

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

        interface UISortableUIItem<T> extends Omit<ng.IAugmentedJQuery, "sortable"> {
            sortable: UISortableProperties<T>;
        }

        interface UISortableUIParams<T> extends Omit<SortableUIParams, "item"> {
            item: UISortableUIItem<T>;
        }

        // Base Sortable //////////////////////////////////////////////////

        interface SortableCursorAtOptions {
            top?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
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
            axis?: string | boolean | undefined;
            /**
             * Selector
             * Default: "input,textarea,button,select,option"
             */
            cancel?: string | undefined;
            /**
             * Selector or false
             * Default: false
             */
            connectWith?: string | boolean | undefined;
            /**
             * Element, Selector, string or false
             * Default: false
             */
            containment?: any;
            cursor?: string | undefined;
            /**
             * Moves the sorting element or helper so the cursor always appears to drag from the same position. Coordinates can be given as a hash using a combination of one or two keys SortableCursorAtOptions: { top, left, right, bottom }
             * Default: false
             */
            cursorAt?: SortableCursorAtOptions | boolean | undefined;
            delay?: number | undefined;
            disabled?: boolean | undefined;
            distance?: number | undefined;
            dropOnEmpty?: boolean | undefined;
            forceHelperSize?: boolean | undefined;
            forcePlaceholderSize?: boolean | undefined;
            /**
             * Array of numbers or false
             * Default: false
             */
            grid?: number[] | boolean | undefined;
            /**
             * Selector or Element
             */
            handle?: any;
            /**
             * "original", "clone" or Function()
             * Default: "original"
             */
            helper?: string | SortableHelperFunctionOption | undefined;
            /**
             * Selector
             */
            items?: string | undefined;
            /**
             * Number or false
             * Default: false
             */
            opacity?: number | boolean | undefined;
            /**
             * string or false
             * Default: false
             */
            placeholder?: string | boolean | undefined;
            /**
             * boolean or number
             * Default: false
             */
            revert?: number | boolean | undefined;
            scroll?: boolean | undefined;
            scrollSensitivity?: number | undefined;
            scrollSpeed?: number | undefined;
            /**
             * "intersect" or "pointer"
             * Default: "intersect"
             */
            tolerance?: string | undefined;
            zIndex?: number | undefined;
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
            activate?: SortableEvent<T> | undefined;
            beforeStop?: SortableEvent<T> | undefined;
            change?: SortableEvent<T> | undefined;
            deactivate?: SortableEvent<T> | undefined;
            out?: SortableEvent<T> | undefined;
            over?: SortableEvent<T> | undefined;
            receive?: SortableEvent<T> | undefined;
            remove?: SortableEvent<T> | undefined;
            sort?: SortableEvent<T> | undefined;
            start?: SortableEvent<T> | undefined;
            stop?: SortableEvent<T> | undefined;
            update?: SortableEvent<T> | undefined;
        }
    }
}
