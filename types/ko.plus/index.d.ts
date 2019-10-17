// Type definitions for ko.plus v0.0.24
// Project: https://github.com/stevegreatrex/ko.plus
// Definitions by: Howard Richards <https://github.com/conficient>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

/**
 *
 * Extensions to KO to provide a command, editable and sortable patterns
 * - available at http://www.nuget.org/packages/ko.plus/
 *
 * (requires TypeScript version 3.2 or higher)
 *
 * Version 1.0 - initial commit
 *
 * Version 1.1 - fixed bug - makeEditable is now a function on .editable
 *               also refactored how the Editable classes inherit to simplify
 *
 * Version 1.2 - amended callback on commmand.fail() method - accepts response,
 *               status and message values
 *
 * Version 1.3 - added module declaration so it be used with node, requirejs etc.
 *               removed jquery reference as it is not required
 *
 */

declare namespace ko {
    //
    // Add methods to the 'ko' Knockout object
    //

    // create a command - two overloads
    const command: (param: Function | KoPlus.CommandOptions) => KoPlus.Command;

    const editable: KoPlus.EditableStatic;
    const editableArray: KoPlus.EditableArrayStatic;

    //#region Sortable type extensions

    //
    // extends the KnockoutObservableArray to add sorting methods
    // see https://github.com/stevegreatrex/ko.plus#properties-and-functions
    //
    interface ObservableArray<T> {
        sortKey: Observable<string>;

        sortDescending: Observable<boolean>;

        setSourceKey: (key: string) => void;
    }

    //#endregion

    //
    // declare new binding handlers in ko.plus
    //
    interface BindingHandlers {
        loadingWhen: BindingHandler;

        command: BindingHandler;

        sortBy: BindingHandler;
    }

    interface ExtendersOptions {
        sortable: boolean | { key: string; descending: boolean };

        editable: true;
    }
}

//
// namespace for ko.plus types
//
declare namespace KoPlus {
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
        isRunning: ko.Observable<boolean>;

        canExecute: ko.Computed<boolean>;

        failed: ko.Observable<boolean>;

        completed: ko.Observable<boolean>;

        //
        // functions
        // see https://github.com/stevegreatrex/ko.plus#functions
        //
        done: (callback: (data: any) => void) => Command;

        fail: (callback: (response: any, status?: string, statusText?: string) => void) => Command;

        always: (callback: Function) => Command;

        then: (resolve: Function, reject: Function) => Command;
    }

    //
    // options when defining a command using the option method
    // see https://github.com/stevegreatrex/ko.plus#options
    //
    export interface CommandOptions {
        // [required] sets the command action method
        action: Function;

        // [optional] function to determine if command can be executed
        canExecute?: () => boolean;

        // [optional] context to use in the command
        context?: any;
    }

    //#endregion

    //#region Editable types

    export interface EditableStatic {
        <T>(value?: T): Editable<T>;

        makeEditable(target: any): void;

        fn: ko.ObservableFunctions;
    }

    export interface EditableArrayStatic {
        <T>(value?: Array<T>): EditableArray<T>;

        makeEditable(target: any): void; //>

        fn: ko.ObservableArrayFunctions;
    }

    //
    // defines common editable functions and isEditing property
    // (used by both editable and editableArray
    //
    export interface EditableFunctions {
        isEditing: ko.Observable<boolean>;
        beginEdit(): void;
        endEdit(): void;
        cancelEdit(): void;
        rollback(): void;
    }

    //
    // extend the standard KnockoutObservable to add editable functions
    //
    export interface Editable<T> extends ko.Observable<T>, EditableFunctions {}

    //
    // extend the standard KnockoutObservableArray to add editable functions
    //
    export interface EditableArray<T> extends ko.ObservableArray<T>, EditableFunctions {}

    //#endregion
}

declare module 'ko.plus' {
    export = ko;
}
