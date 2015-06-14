// Type definitions for Drupal-8.0.x Core-States
// Project: https://www.drupal.org/project/drupal
// Definitions by: Andor Dávid <https://github.com/Sweetchuck>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core.d.ts"/>

declare module drupal {

    export module Core {

        export interface IComparator {
            (
                reference: any,
                value: any
            ) : boolean;
        }

        export interface IDependentArgs {

            element: JQuery;

            state: any;

            constraints: any;

        }

        export interface IDependent {

            new (args: IDependentArgs): IDependent;

            comparisons?: {[key: string]: IComparator};

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

            Trigger?: IStatesTrigger;

            State?: IState;

        }

        export interface IStatesTrigger {

            new (args: {[key: string]: any}): IStatesTrigger;

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

        export interface IState {

            new (name: string): IState;

            sanitize?: (name: string) => IState;

            aliases: {[key: string]: string};

            invert: boolean;

        }

        export interface IStates {

            postponed: (() => any)[];

            Dependent?: IDependent;

            State: IState;

        }

        export interface IBehaviors {

            states?: IBehavior;

        }

    }

    export interface IDrupalStatic {

        states: Core.IStates;

    }

}
