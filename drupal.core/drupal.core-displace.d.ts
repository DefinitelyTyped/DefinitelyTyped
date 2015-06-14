// Type definitions for Drupal-8.0.x Core-Displace
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IDisplace {

            new (): IDisplace;

            (broadcast: boolean): IOffsets;

            offsets: IOffsets;

            calculateOffset?: (edge: string) => number;

        }

        export interface IBehaviors {

            drupalDisplace?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        displace?: Core.IDisplace;

    }
}
