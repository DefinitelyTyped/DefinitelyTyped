// Type definitions for Angular JS (ui.scroll module) 1.3.1
// Project: https://github.com/angular-ui/ui-scroll
// Definitions by: Mark Nadig <https://github.com/marknadig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as ng from 'angular';

declare module 'angular' {
    export namespace ui {
        interface IScrollDatasource<T> {
            /**
             * The datasource object implements methods and properties to be used by the directive to access the data
             *
             * @param index indicates the first data row requested
             *
             * @param count indicates number of data rows requested
             *
             * @param success function to call when the data are retrieved. The implementation of the service has to call
             * this function when the data are retrieved and pass it an array of the items retrieved. If no items are
             * retrieved, an empty array has to be passed.
             *
             * Important: Make sure to respect the index and count parameters of the request. The array passed to the
             * success method should have exactly count elements unless it hit eof/bof
             */
            get(index: number, count: number, success: (results: Array<T>) => any): void;
        }

        interface IScrollAdapter {
            /**
             * a boolean value indicating whether there are any pending load requests.
             */
            isLoading: boolean;
            /**
             * a reference to the item currently in the topmost visible position.
             */
            topVisible: any;
            /**
             * a reference to the DOM element currently in the topmost visible position.
             */
            topVisibleElement: ng.IAugmentedJQueryStatic;
            /**
             * a reference to the scope created for the item currently in the topmost visible position.
             */
            topVisibleScope: ng.IRepeatScope;
            /**
             * calling this method reinitializes and reloads the scroller content.
             * @param startIndex is an integer indicating what item index the scroller will use to start the load process.
             */
            reload(startIndex?: number): void;
            /**
             * Replaces the item in the buffer at the given index with the new items.
             *
             * @param index provides position of the item to be affected in the dataset (not in the buffer). If the item with
             * the given index currently is not in the buffer no updates will be applied. $index property of the item $scope
             * can be used to access the index value for a given item
             *
             * @param newItems is an array of items to replace the affected item. If the array is empty ([]) the item will
             * be deleted, otherwise the items in the array replace the item. If the newItem array contains the old item,
             * the old item stays in place.
             */
            applyUpdates(index: number, newItems: any[]): void;
            /**
             * Replaces the item in the buffer at the given index with the new items.
             *
             * @param updater is a function to be applied to every item currently in the buffer. The function will receive
             * 3 parameters: item, scope, and element. Here item is the item to be affected, scope is the item $scope, and
             * element is the html element for the item. The return value of the function should be an array of items.
             * Similarly to the newItem parameter (see above), if the array is empty([]), the item is deleted, otherwise
             * the item is replaced by the items in the array. If the return value is not an array, the item remains
             * unaffected, unless some updates were made to the item in the updater function. This can be thought of as
             * in place update.
             */
            applyUpdates(updater: (item: any, scope: ng.IRepeatScope) => any): void;
            /**
             * Adds new items after the last item in the buffer
             *
             * @param newItems provides an array of items to be appended.
             */
            append(newItems: any[]): void;
            /**
             * Adds new items before the first item in the buffer
             *
             * @param newItems provides an array of items to be prepended.
             */
            prepend(newItems: any[]): void;
        }
    }
}
