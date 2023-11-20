/// <reference types="knockout" />

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
    // getHasChangesFlag(scope: string): any;
    // enable(object: any, scope: string); void;
}

// extend ko global
interface KnockoutStatic {
    editable: KnockoutEditableStatic;
}
