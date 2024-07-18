import * as angular from "angular";

export type ITagsInputParams = angular.ngTagsInput.TagsInputParams;
export type IAutocompleteParams = angular.ngTagsInput.AutocompleteParams;
export type ITagsInputConfigurationProvider = angular.ngTagsInput.TagsInputConfigurationProvider;

declare module "angular" {
    namespace ngTagsInput {
        interface TagsInputParams {
            ngModel?: string | undefined;
            useStrings?: boolean | undefined;
            template?: string | boolean | undefined;
            templateScope?: string | boolean | undefined;
            displayProperty?: string | boolean | undefined;
            keyProperty?: string | boolean | undefined;
            type?: string | boolean | undefined;
            text?: string | boolean | undefined;
            tabindex?: number | boolean | undefined;
            placeholder?: string | boolean | undefined;
            minLength?: number | boolean | undefined;
            maxLength?: number | boolean | undefined;
            minTags?: number | boolean | undefined;
            maxTags?: number | boolean | undefined;
            allowLeftoverText?: boolean | undefined;
            removeTagSymbol?: string | boolean | undefined;
            addOnEnter?: boolean | undefined;
            addOnSpace?: boolean | undefined;
            addOnComma?: boolean | undefined;
            addOnBlur?: boolean | undefined;
            addOnPaste?: boolean | undefined;
            pasteSplitPattern?: string | boolean | undefined;
            replaceSpacesWithDashes?: boolean | undefined;
            allowedTagsPattern?: string | boolean | undefined;
            enableEditingLastTag?: boolean | undefined;
            addFromAutocompleteOnly?: boolean | undefined;
            spellcheck?: boolean | undefined;
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
            template?: string | boolean | undefined;
            displayProperty?: string | boolean | undefined;
            debounceDelay?: number | boolean | undefined;
            minLength?: number | boolean | undefined;
            highlightMatchedText?: boolean | undefined;
            maxResultsToShow?: number | boolean | undefined;
            loadOnDownArrow?: boolean | undefined;
            loadOnEmpty?: boolean | undefined;
            loadOnFocus?: boolean | undefined;
            selectFirstMatch?: boolean | undefined;
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
