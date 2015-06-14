// Type definitions for Drupal-8.0.x Core-MachineName
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IDrupalSettingsMachineNameEntry {

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

        export interface IDrupalSettingsMachineName {

            [key: string]: IDrupalSettingsMachineNameEntry;

        }

        export interface IEventDataMachineName {

            $source: JQuery;

            $target: JQuery;

            $suffix: JQuery;

            $wrapper: JQuery;

            $preview: JQuery;

            options:  IDrupalSettingsMachineNameEntry;

        }

        export interface IBehaviorMachineName extends IBehavior {

            showMachineName: (
                machine: string,
                data: IEventDataMachineName
            ) => void;

            transliterate: (
                source: string,
                settings: IDrupalSettingsMachineNameEntry
            ) => string;

        }

        export interface IBehaviors {

            machineName?: IBehaviorMachineName;

        }

    }

    export interface IDrupalSettings {

        machineName?: Core.IDrupalSettingsMachineName;

    }

}
