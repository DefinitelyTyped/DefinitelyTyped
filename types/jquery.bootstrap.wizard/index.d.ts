// Type definitions for twitter-bootstrap-wizard
// Project: https://github.com/VinceG/twitter-bootstrap-wizard
// Definitions by: Blake Niemyjski <https://github.com/niemyjski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface WizardOptions {
    tabClass?: string | undefined;
    nextSelector?: string | undefined;
    previousSelector?: string | undefined;
    firstSelector?: string | undefined;
    lastSelector?: string | undefined;
    onShow?: ((activeTab: any, navigation: any, nextIndex: number) => void) | undefined;
    onInit?: ((activeTab: any, navigation: any, currentIndex: number) => void) | undefined;
    onNext?: ((activeTab: any, navigation: any, nextIndex: number) => boolean) | undefined;
    onPrevious?: ((activeTab: any, navigation: any, previousIndex: number) => boolean) | undefined;
    onLast?: ((activeTab: any, navigation: any, lastIndex: number) => boolean) | undefined;
    onFirst?: ((activeTab: any, navigation: any, firstIndex: number) => boolean) | undefined;
    onTabClick?: ((activeTab: any, navigation: any, currentIndex: number) => boolean) | undefined;
    onTabShow?: ((activeTab: any, navigation: any, currentIndex: number) => boolean) | undefined;
}

interface Wizard {
    next(): void;
    previous(): void;
    first(): void;
    last(): void;
    currentIndex(): number;
    firstIndex(): number;
    lastIndex(): number;
    getIndex(element: any): number;
    nextIndex(): number;
    previousIndex(): number;
    navigationLength(): number;
    activeTab(): any;
    nextTab(): any;
    previousTab(): any;
    show(index: number): any;
}

interface JQuery {
    bootstrapWizard(method: 'next' | 'previous' | 'first' | 'last' | 'back' | 'finish'): void;
    bootstrapWizard(method: 'currentIndex' | 'navigationLength'): number;
    bootstrapWizard(method: 'show', indexOrId: number | string): void;
    bootstrapWizard(method: 'enable' | 'disable' | 'display' | 'hide', index: number): void;
    bootstrapWizard(method: 'remove', index: number, removeTabPane?: boolean): void;
    bootstrapWizard(options?: WizardOptions): Wizard;
}

interface JQueryStatic {
    bootstrapWizard: Wizard;
}
