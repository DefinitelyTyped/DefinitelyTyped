/// <reference path="../knockout/knockout.d.ts" />

// build: ko.editables 0.9
// http://romanych.github.com/ko.editables/

// bestowed by ko.editable(target)
interface KnockoutEditable {
    addEditable(target: any): any;
    beginEdit(): void;
    commit(): void;
    rollback(): void;
    hasChanges(): bool;
}

interface KnockoutEditableStatic {
    (viewModel: any, autoInit?: bool): void;
    beginEdit(scope: string): void;
    commit(scope: string): void;
    rollback(scope: string): void;
    hasChanges(scope: string): bool;

    // INTERNAL
    //getHasChangesFlag(scope: string): any;
    //enable(object: any, scope: string); void;
}

// extend ko global
interface KnockoutStatic {
    editable: KnockoutEditableStatic;
}