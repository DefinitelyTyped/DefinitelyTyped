// Type definitions for Drupal-8.0.x Core-MachineName
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface DrupalSettingsMachineNameEntry {

            target: string;

            suffix: string;

            label: string;

            replace_pattern: string;

            replace: string;

            standalone: boolean;

            field_prefix: string;

            field_suffix: string;

            maxlength: number;

        }

        export interface DrupalSettingsMachineName {

            [key: string]: DrupalSettingsMachineNameEntry;

        }

        export interface EventDataMachineName {

            $source: JQuery;

            $target: JQuery;

            $suffix: JQuery;

            $wrapper: JQuery;

            $preview: JQuery;

            options:  DrupalSettingsMachineNameEntry;

        }

        export interface BehaviorMachineName extends Behavior {

            showMachineName: (
                machine: string,
                data: EventDataMachineName
            ) => void;

            transliterate: (
                source: string,
                settings: DrupalSettingsMachineNameEntry
            ) => string;

        }

        export interface Behaviors {

            machineName?: BehaviorMachineName;

        }

    }

    export interface DrupalSettings {

        machineName?: Core.DrupalSettingsMachineName;

    }

}
