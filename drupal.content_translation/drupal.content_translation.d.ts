// Type definitions for Drupal-8.0.x ContentTranslation
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module ContentTranslation {

        export interface IDrupalSettingsDependentOptions {

            dependent_selectors: {
                [key: string]: {
                    [key: string]: string
                }
            };

        }

    }

    export module Core {

        export interface IBehaviors {

            contentTranslation?: IBehavior;

            // @todo Define the "check" method.
            contentTranslationDependentOptions?: IBehavior;

        }

    }

    export interface IDrupalSettings {

        contentTranslationDependentOptions?: ContentTranslation.IDrupalSettingsDependentOptions;

    }

}
