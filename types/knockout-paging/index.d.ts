// Type definitions for knockout-paging
// Project: https://github.com/ErikSchierboom/knockout-paging
// Definitions by: Erik Schierboom <https://github.com/ErikSchierboom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="knockout" />

interface KnockoutStatic {
    paging: KnockoutPagingOptions;
	pagedObservableArray<T>(initialValue?: T[], options?: KnockoutPagedOptions): KnockoutPagedObservableArray<T>;
}

interface KnockoutPagingOptions {
    defaults: KnockoutPagingDefaultOptions;
    generators: { 
    	[name: string]: KnockoutPageGenerator; 
		'sliding': KnockoutSlidingPageGenerator
    }
}

interface KnockoutPagingDefaultOptions {
    pageNumber: number;
    pageSize: number;
}

interface KnockoutPagedObservableArray<T> extends KnockoutObservableArray<T> {
    pageSize: KnockoutObservable<number>;
    pageNumber: KnockoutObservable<number>;

    pageItems: KnockoutComputed<T[]>;
    pageCount: KnockoutComputed<number>;
    itemCount: KnockoutComputed<number>;
    firstItemOnPage: KnockoutComputed<number>;
    lastItemOnPage: KnockoutComputed<number>;
    hasPreviousPage: KnockoutComputed<boolean>;
    hasNextPage: KnockoutComputed<boolean>;
    isFirstPage: KnockoutComputed<boolean>;
    isLastPage: KnockoutComputed<boolean>;
    pages: KnockoutComputed<number[]>;

    toNextPage(): void;
    toPreviousPage(): void;
    toLastPage(): void;
    toFirstPage(): void;
}

interface KnockoutPagedOptions {
    pageSize?: number;
    pageNumber?: number;
    pageGenerator?: string;
}

interface KnockoutObservableArray<T> {
    extend(requestedExtenders: { 'paged': any; }): KnockoutPagedObservableArray<T>;
}

interface KnockoutPageGenerator {
	generate<T>(pagedObservable: KnockoutPagedObservableArray<T>): number[];
}

interface KnockoutSlidingPageGenerator extends KnockoutPageGenerator {
	windowSize: KnockoutObservable<number>;
}

interface KnockoutExtenders {
    paged(target: KnockoutObservableArray<any>, options: KnockoutPagedOptions): KnockoutObservableArray<any>;
}