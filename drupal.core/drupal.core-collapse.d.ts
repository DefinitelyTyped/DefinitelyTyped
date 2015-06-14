// Type definitions for Drupal-8.0.x Core-Collapse
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface ICollapsibleDetails {

            new (
                node: HTMLElement
            ): ICollapsibleDetails;

            instances?: ICollapsibleDetails[];

            setupSummary?: () => void;

            setupLegend?: () => void;

            onLegendClick?: (e: Event) => void;

            onSummaryUpdated?: () => void;

            toggle?: () => void;

        }

        export interface IBehaviors {

            collapse?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        CollapsibleDetails?: Core.ICollapsibleDetails;

    }
}
