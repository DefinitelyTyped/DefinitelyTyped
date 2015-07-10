// Type definitions for Drupal-8.0.x Core-Autocomplete
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface AutocompleteOptions extends JQueryUI.AutocompleteOptions {

            firstCharacterBlacklist?: string;

        }

        export interface Autocomplete {

            cache: any;

            splitValues: (value: string) => string[];

            extractLastTerm: (terms: string) => string;

            options: AutocompleteOptions;

            ajax: JQueryAjaxSettings;

        }

        export interface Behaviors {

            autocomplete?: Behavior;

        }

    }

    export interface DrupalStatic {

        autocomplete: Core.Autocomplete;

    }

}
