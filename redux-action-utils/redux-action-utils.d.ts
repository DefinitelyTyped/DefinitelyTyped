// Type definitions for redux-action-utils 2.0.0
// Project: https://github.com/insin/redux-action-utils
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "redux-action-utils" {
    export interface Action {
        type: string;
    }

    export interface ActionCreator<T> {
        (...data: any[]): Action & T;
    }

    export interface OptionsActionCreator<T> {
        (data: T): Action & T;
    }

    /**
     * Creates an action creator which will create an action object with the given type.
     */
    export function actionCreator<T>(type: string, ...props: string[]): ActionCreator<T>;
    /**
     * Creates an action creator which will create an action object with the given type.
     */
    export function actionCreator<T>(type: string, props: string[]): ActionCreator<T>;

    /**
     * Creates an action creator which takes a single object argument and adds its properties to the action object.
     */
    export function optionsActionCreator<T>(type: string, ...props: string[]): OptionsActionCreator<T>;
    /**
     * Creates an action creator which takes a single object argument and adds its properties to the action object.
     */
    export function optionsActionCreator<T>(type: string, props: string[]): OptionsActionCreator<T>;
}

