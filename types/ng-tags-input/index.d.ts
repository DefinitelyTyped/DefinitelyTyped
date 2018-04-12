// Type definitions for ngTagsInput
// Project: https://github.com/mbenford/ngTagsInput
// Definitions by: George Pap <https://github.com/GiorgosPap>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

export type ITagsInputParams = angular.ngTagsInput.ITagsInputParams;
export type IAutocompleteParams = angular.ngTagsInput.IAutocompleteParams;
export type ITagsInputConfigurationProvider = angular.ngTagsInput.ITagsInputConfigurationProvider;

declare module 'angular' {
    export namespace ngTagsInput {

        interface ITagsInputParams {
            ngModel?: string;
            useStrings?: boolean;
            template?: string | boolean;
            templateScope?: string | boolean;
            displayProperty?: string | boolean;
            keyProperty?: string | boolean;
            type?: string | boolean;
            text?: string | boolean;
            tabindex?: number | boolean;
            placeholder?: string | boolean;
            minLength?: number | boolean;
            maxLength?: number | boolean;
            minTags?: number | boolean;
            maxTags?: number | boolean;
            allowLeftoverText?: boolean;
            removeTagSymbol?: string | boolean;
            addOnEnter?: boolean;
            addOnSpace?: boolean;
            addOnComma?: boolean;
            addOnBlur?: boolean;
            addOnPaste?: boolean;
            pasteSplitPattern?: string | boolean;
            replaceSpacesWithDashes?: boolean;
            allowedTagsPattern?: string | boolean;
            enableEditingLastTag?: boolean;
            addFromAutocompleteOnly?: boolean;
            spellcheck?: boolean;
            tagClass?: any;
            onTagAdding?: any;
            onTagAdded?: any;
            onInvalidTag?: any;
            onTagRemoving?: any;
            onTagRemoved?: any;
            onTagClicked?: any;
        }

        interface IAutocompleteParams {
            source?: any;
            template?: string | boolean;
            displayProperty?: string | boolean;
            debounceDelay?: number | boolean;
            minLength?: number | boolean;
            highlightMatchedText?: boolean;
            maxResultsToShow?: number | boolean;
            loadOnDownArrow?: boolean;
            loadOnEmpty?: boolean;
            loadOnFocus?: boolean;
            selectFirstMatch?: boolean;
            matchClass?: any;
        }

        interface ITagsInputConfigurationProvider extends angular.IServiceProvider {
            /**
             * Sets the default configuration option for a directive.
             *
             * @param {string} directive Name of the directive to be configured. Must be either 'tagsInput' or 'autoComplete'.
             * @param {object} defaults Object containing options and their values.
             * 
             * @returns {object} The service itself for chaining purposes.
             */
            setDefaults(directive: string, defaults: ITagsInputParams | IAutocompleteParams): any;
            /**
             * Sets active interpolation for a set of options.
             *
             * @param {string} directive Name of the directive to be configured. Must be either 'tagsInput' or 'autoComplete'.
             * @param {object} options Object containing which options should have interpolation turned on at all times.
             *
             * @returns {object} The service itself for chaining purposes.
             */
            setActiveInterpolation(directive: string, options: ITagsInputParams | IAutocompleteParams): any;
            /**
             *Sets the threshold used by the tagsInput directive to re-size the inner input field element based on its contents.
             *
             * @param {number} threshold Threshold value, in pixels.
             *
             * @returns {object} The service itself for chaining purposes.
             */
            setTextAutosizeThreshold(threshold: number): any;
        }
    }
}