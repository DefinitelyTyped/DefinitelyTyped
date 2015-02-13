// Type definitions for ko.plus v0.0.21
// Project: https://github.com/stevegreatrex/ko.plus
// Definitions by: Howard Richards <https://github.com/conficient>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

/**
 *
 * Extensions to KO to provide a command, editable and sortable patterns
 * - available at http://www.nuget.org/packages/ko.plus/
 *
 * (requires TypeScript version 1.4 or higher)
 *
 * Version 1.0 - initial commit
 *
 */


//
// Add methods to the 'ko' Knockout object
//
interface KnockoutStatic {

    // create a command - two overloads
    command: (param: KoPlus.Callback | KoPlus.CommandOptions) => KoPlus.Command;

    editable: KoPlus.EditableStatic;
    editableArray: KoPlus.EditableArrayStatic;
}


//#region Sortable type extensions

//
// extends the KnockoutObservableArray to add sorting methods
// see https://github.com/stevegreatrex/ko.plus#properties-and-functions
//
interface KnockoutObservableArray<T> {
    sortKey: KnockoutObservable<string>;

    sortDescending: KnockoutObservable<boolean>;

    setSourceKey: (key: string) => void;
}

//#endregion


//
// declare new binding handlers in ko-plus
//
interface KnockoutBindingHandlers {

    loadingWhen: KnockoutBindingHandler;

    command: KnockoutBindingHandler;

    sortBy: KnockoutBindingHandler;
}

//
// namespace for ko-plus types
//
declare module KoPlus {

    // predefine a callback type
    export type Callback = () => void;


    //#region Command types

    //
    // the Command interface - returned by ko.command(..)
    //
    export interface Command {
        // execute the command
        (): void;

        //
        // properties: https://github.com/stevegreatrex/ko.plus#properties 
        //
        isRunning: KnockoutObservable<boolean>;

        canExecute: KnockoutComputed<boolean>;

        failed: KnockoutObservable<boolean>;

        completed: KnockoutObservable<boolean>;

        //
        // functions 
        // see https://github.com/stevegreatrex/ko.plus#functions
        //
        done: (callback: (data: any) => void) => Command;

        fail: (callback: (error: string) => void) => Command;

        always: (callback: Callback) => Command;

        then: (resolve: Callback, reject: Callback) => Command;

    }

    //
    // options when defining a command using the option method
    // see https://github.com/stevegreatrex/ko.plus#options
    //
    export interface CommandOptions {

        // [required] sets the command action method
        action: Callback;

        // [optional] function to determine if command can be executed
        canExecute?: () => boolean;

        // [optional] context to use in the command
        context?: any;
    }

    //#endregion

    //#region Editable types

    export interface EditableArrayStatic {
        fn: KnockoutObservableArrayFunctions<any>;
        <T>(value?: Array<T>): EditableArray<T>;
    }

    export interface EditableStatic {
        fn: KnockoutObservableFunctions<any>;
        <T>(value?: T): Editable<T>;

        makeEditable(target: any): void;
    }

    //
    // defines common editable functions and isEditing property
    //
    export interface EditableBase<T> extends KnockoutObservableFunctions<T> {
        isEditing: KnockoutObservable<boolean>;
        beginEdit(): void;
        endEdit(): void;
        cancelEdit(): void;
        rollback(): void;
    }

    export interface Editable<T> extends EditableBase<T> {
        (): T;
        (value: T): void;

        subscribe(callback: (newValue: T) => void, target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: T, topic?: string): void;
    }

    export interface EditableArray<T> extends KnockoutObservableArrayFunctions<T>, EditableBase<T> {
        (): T[];
        (value: T[]): void;

        subscribe(callback: (newValue: T[]) => void, target?: any, topic?: string): KnockoutSubscription;
        notifySubscribers(valueToWrite: T[], topic?: string): void;
    }


    //#endregion

}