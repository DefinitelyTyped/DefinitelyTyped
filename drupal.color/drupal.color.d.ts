// Type definitions for Drupal-8.0.x Color
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../drupal.core/drupal.core.d.ts"/>

declare module drupal {

    export module Color {

        export interface IGradient {

            colors: string[];

            vertical: boolean;

        }

        export interface ICallbackSettings {

            gradients: {
                [key: string]: IGradient;
            };

        }

        export interface IDrupalStatic {

            callback: (
                context: Element,
                settings: ICallbackSettings,
                form: HTMLFormElement,
                farb: any,
                height: number,
                width:number
            ) => void;

        }

    }

    export module Core {

        export interface IBehaviors {

            color?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        color?: Color.IDrupalStatic;

    }

}
