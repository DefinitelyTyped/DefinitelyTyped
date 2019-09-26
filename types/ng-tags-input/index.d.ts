// Type definitions for ng-tags-input for 3.2
// Project: https://github.com/mbenford/ngTagsInput, http://mbenford.github.io/ngtagsinput
// Definitions by: George Pap <https://github.com/GiorgosPap>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

export type ITagsInputParams = angular.ngTagsInput.TagsInputParams;
export type IAutocompleteParams = angular.ngTagsInput.AutocompleteParams;
export type ITagsInputConfigurationProvider = angular.ngTagsInput.TagsInputConfigurationProvider;

declare module 'angular' {
    namespace ngTagsInput {
        interface TagsInputParams {
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

        interface AutocompleteParams {
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

        interface TagsInputConfigurationProvider extends IServiceProvider {
            /**
             * Sets the default configuration option for a directive.
             */
            setDefaults(directive: string, defaults: ITagsInputParams | IAutocompleteParams): any;
            /**
             * Sets active interpolation for a set of options.
             */
            setActiveInterpolation(directive: string, options: ITagsInputParams | IAutocompleteParams): any;
            /**
             * Sets the threshold used by the tagsInput directive to re-size the inner input field element based on its contents.
             */
            setTextAutosizeThreshold(threshold: number): any;
        }
    }
}
