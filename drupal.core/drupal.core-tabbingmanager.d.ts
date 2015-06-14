// Type definitions for Drupal-8.0.x Core-TabbingManager
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module drupal {

    export module Core {

        export interface ITabbingContextOptions {

            level: number;

            $tabbableElements: JQuery;

            $disabledElements: JQuery;

            released: boolean;

            active: boolean;

        }

        export interface ITabbingContext extends ITabbingContextOptions {

            new (
                options: ITabbingContextOptions
            ): ITabbingContext;

            release: () => void;

            activate: () => void;

            deactivate: () => void;

        }

        export interface ITabbingManager {

            new (): ITabbingManager;

            stack: ITabbingManager[];

            constrain: (elements: JQuery[]) => ITabbingContext;

            release: () => void;

            activate: (tabbingContext: ITabbingContext) => void;

            deactivate: (tabbingContext: ITabbingContext) => void;

            recordTabindex: ($el: JQuery, level: number) => void;

            restoreTabindex: ($el: JQuery, level: number) => void;

        }

    }

    export interface IDrupalStatic {

        tabbingManager: Core.ITabbingManager;

    }

}
