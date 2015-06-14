// Type definitions for Drupal-8.0.x Statistics
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module drupal {

    export module Statistics {

        export interface IDrupalSettingsData {

            nid?: number;

        }

        export interface IDrupalSettings {

            url: string;

            data: IDrupalSettingsData;

        }

    }

    export interface IDrupalSettings {

        statistics?: Statistics.IDrupalSettings;

    }

}
