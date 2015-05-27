// Type definitions for knockout-editables 0.9
// Project: http://romanych.github.com/ko.editables/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

// bestowed by ko.editable(target)
interface KnockoutEditable {
    addEditable(target: any): any;
    beginEdit(): void;
    commit(): void;
    rollback(): void;
    hasChanges(): boolean;
}

interface KnockoutEditableStatic {
    (viewModel: any, autoInit?: boolean): void;
    beginEdit(scope: string): void;
    commit(scope: string): void;
    rollback(scope: string): void;
    hasChanges(scope: string): boolean;

    // INTERNAL
    //getHasChangesFlag(scope: string): any;
    //enable(object: any, scope: string); void;
}

// extend ko global
interface KnockoutStatic {
    editable: KnockoutEditableStatic;
}
