// Type definitions for ngCordova dialogs plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Michel Vidailhet <https://github.com/mvidailhet>, Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface IDialogsPromptResult {
        input1: string;
        buttonIndex: number;
    }

    export interface IDialogsService {
        alert(message: string, title?: string, buttonName?: string): ng.IPromise<void>;
        confirm(message: string, title?: string, buttonArray?: Array<string>): ng.IPromise<number>;
        prompt(message: string, title?: string, buttonArray?: Array<string>, defaultText?: string): ng.IPromise<IDialogsPromptResult>;
        beep(repetitions: number): void;
    }

}
