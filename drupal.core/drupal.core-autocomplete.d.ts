// Type definitions for Drupal-8.0.x Core-Autocomplete
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IAutocompleteOptions extends JQueryUI.AutocompleteOptions {

            firstCharacterBlacklist?: string;

        }

        export interface IAutocomplete {

            cache: any;

            splitValues: (value: string) => string[];

            extractLastTerm: (terms: string) => string;

            options: IAutocompleteOptions;

            ajax: JQueryAjaxSettings;

        }

        export interface IBehaviors {

            autocomplete?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        autocomplete: Core.IAutocomplete;

    }

}
