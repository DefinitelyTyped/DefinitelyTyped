// Type definitions for Drupal-8.0.x Core-States
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface Comparator {
            (
                reference: any,
                value: any
            ) : boolean;
        }

        export interface DependentArgs {

            element: JQuery;

            state: any;

            constraints: any;

        }

        export interface Dependent {

            new (args: DependentArgs): Dependent;

            comparisons?: {[key: string]: Comparator};

            initializeDependee?: (
                selector: string,
                dependeeStates: any
            ) => void;

            compare?: (
                reference: any,
                selector: string,
                state: any
            ) => void;

            update?: (
                selector: string,
                state: any,
                value: any
            ) => void;

            reevaluate?: () => any;

            verifyConstraints?: (
                constraints: any,
                selector: string
            ) => boolean;

            checkConstraints: (
                value: any,
                selector: string,
                state: any
            ) => boolean;

            getDependees?: () => any;

            Trigger?: StatesTrigger;

            State?: State;

        }

        export interface StatesTrigger {

            new (args: {[key: string]: any}): StatesTrigger;

            defaultTrigger: (
                event: JQueryEventObject,
                valueFn: () => any
            ) => void;

            states: {

                empty: {

                    keyup: () => boolean;

                }

                checked: {

                    change: () => boolean;

                }

                value: {

                    keyup: () => boolean;
                    change: () => boolean;

                }

                collapsed: {

                    collapsed: () => boolean;

                }

            }

        }

        export interface State {

            new (name: string): State;

            sanitize?: (name: string) => State;

            aliases: {[key: string]: string};

            invert: boolean;

        }

        export interface States {

            postponed: (() => any)[];

            Dependent?: Dependent;

            State: State;

        }

        export interface Behaviors {

            states?: Behavior;

        }

    }

    export interface DrupalStatic {

        states: Core.States;

    }

}
