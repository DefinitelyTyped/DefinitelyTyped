// Type definitions for Drupal-8.0.x Core-TabbingManager
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module drupal {

    export module Core {

        export interface TabbingContextOptions {

            level: number;

            $tabbableElements: JQuery;

            $disabledElements: JQuery;

            released: boolean;

            active: boolean;

        }

        export interface TabbingContext extends TabbingContextOptions {

            new (
                options: TabbingContextOptions
            ): TabbingContext;

            release: () => void;

            activate: () => void;

            deactivate: () => void;

        }

        export interface TabbingManager {

            new (): TabbingManager;

            stack: TabbingManager[];

            constrain: (elements: JQuery[]) => TabbingContext;

            release: () => void;

            activate: (tabbingContext: TabbingContext) => void;

            deactivate: (tabbingContext: TabbingContext) => void;

            recordTabindex: ($el: JQuery, level: number) => void;

            restoreTabindex: ($el: JQuery, level: number) => void;

        }

    }

    export interface DrupalStatic {

        tabbingManager: Core.TabbingManager;

    }

}
