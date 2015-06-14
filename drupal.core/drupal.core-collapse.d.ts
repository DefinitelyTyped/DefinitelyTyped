// Type definitions for Drupal-8.0.x Core-Collapse
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface CollapsibleDetails {

            new (
                node: HTMLElement
            ): CollapsibleDetails;

            instances?: CollapsibleDetails[];

            setupSummary?: () => void;

            setupLegend?: () => void;

            onLegendClick?: (e: Event) => void;

            onSummaryUpdated?: () => void;

            toggle?: () => void;

        }

        export interface Behaviors {

            collapse?: Behavior;

        }

    }

    export interface DrupalStatic {

        CollapsibleDetails?: Core.CollapsibleDetails;

    }
}
