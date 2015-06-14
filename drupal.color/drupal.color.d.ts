// Type definitions for Drupal-8.0.x Color
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Color {

        export interface Gradient {

            colors: string[];

            vertical: boolean;

        }

        export interface CallbackSettings {

            gradients: {
                [key: string]: Gradient;
            };

        }

        export interface DrupalStatic {

            callback: (
                context: Element,
                settings: CallbackSettings,
                form: HTMLFormElement,
                farb: any,
                height: number,
                width:number
            ) => void;

        }

    }

    export module Core {

        export interface Behaviors {

            color?: Behavior;

        }

    }

    export interface DrupalStatic {

        color?: Color.DrupalStatic;

    }

}
