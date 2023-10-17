/// <reference types="knockout" />

/**
 * Extensions to KO to provide a command, editable and sortable patterns
 * - available at http://www.nuget.org/packages/ko.plus/
 *
 * (requires TypeScript version 1.4 or higher)
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
 */

//
// Add methods to the 'ko' Knockout object
//
interface KnockoutStatic {
    // create a command - two overloads
    command: (param: Function | KoPlus.CommandOptions) => KoPlus.Command;

    editable: KoPlus.EditableStatic;
    editableArray: KoPlus.EditableArrayStatic;
}

// #region Sortable type extensions

//
// extends the KnockoutObservableArray to add sorting methods
// see https://github.com/stevegreatrex/ko.plus#properties-and-functions
//
interface KnockoutObservableArray<T> {
    sortKey: KnockoutObservable<string>;

    sortDescending: KnockoutObservable<boolean>;

    setSourceKey: (key: string) => void;
}

// #endregion

//
// declare new binding handlers in ko.plus
//
interface KnockoutBindingHandlers {
    loadingWhen: KnockoutBindingHandler;

    command: KnockoutBindingHandler;

    sortBy: KnockoutBindingHandler;
}

//
// namespace for ko.plus types
//
declare namespace KoPlus {
    // #region Command types

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
        canExecute?: (() => boolean) | undefined;

        // [optional] context to use in the command
        context?: any;
    }

    // #endregion

    // #region Editable types

    export interface EditableStatic extends KnockoutObservableStatic {
        <T>(value?: T): Editable<T>;

        makeEditable(target: any): void;
    }

    export interface EditableArrayStatic extends KnockoutObservableArrayStatic {
        <T>(value?: Array<T>): EditableArray<T>;

        makeEditable(target: any): void; // >
    }

    //
    // defines common editable functions and isEditing property
    // (used by both editable and editableArray
    //
    export interface EditableFunctions {
        isEditing: KnockoutObservable<boolean>;
        beginEdit(): void;
        endEdit(): void;
        cancelEdit(): void;
        rollback(): void;
    }

    //
    // extend the standard KnockoutObservable to add editable functions
    //
    export interface Editable<T> extends KnockoutObservable<T>, EditableFunctions {
    }

    //
    // extend the standard KnockoutObservableArray to add editable functions
    //
    export interface EditableArray<T> extends KnockoutObservableArray<T>, EditableFunctions {
    }

    // #endregion
}

declare var ko: KnockoutStatic;

declare module "ko.plus" {
    export = ko;
}
