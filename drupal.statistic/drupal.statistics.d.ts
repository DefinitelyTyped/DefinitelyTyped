// Type definitions for Drupal-8.0.x Statistics
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module drupal {

    export module Statistics {

        export interface DrupalSettingsData {

            nid?: number;

        }

        export interface DrupalSettings {

            url: string;

            data: DrupalSettingsData;

        }

    }

    export interface DrupalSettings {

        statistics?: Statistics.DrupalSettings;

    }

}
