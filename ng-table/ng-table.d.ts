// Type definitions for ng-table 
// Project: https://github.com/esvit/ng-table
// Definitions by: Stanley Goldman <https://github.com/StanleyGoldman>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />\

declare class ngTableParams implements ngTable.ITableProvider{
    data: any[];
    parameters(): ngTable.IParams;
    parameters(newParameters: ngTable.IParams, parseParamsFromUrl?: boolean): ngTable.ITableProvider;
    settings(): ngTable.ISettings;
    settings(newSettings: ngTable.ISettings): ngTable.ITableProvider;
    page(): number;
    page(page: number): ngTable.ITableProvider;
    total(): number;
    total(total: number): ngTable.ITableProvider;
    count(): number;
    count(count: number): ngTable.ITableProvider;
    filter(): ngTable.IFilter;
    filter(filter: ngTable.IFilter): ngTable.ITableProvider;
    sorting(): ngTable.ISorting;
    sorting(sort: ngTable.ISorting): ngTable.ITableProvider;
    isSortBy(field: string, direction: string): boolean;
    orderBy(): string[];
    getData($defer: ng.IPromise<{}[]>, params: ngTable.IParams);
    getGroups($defer: ng.IPromise<{ value: {}; data: {}[] }[]>, column: string);
    getGroups($defer: ng.IPromise<{ value: {}; data: {}[] }[]>, column: (item: {}) => string);
    generatePagesArray(currentPage: number, totalItems: number, pageSize: number): ngTable.IPage[];
    url(): {};
    url(asString: boolean): {};
    reload(): void;
    reloadPages(): void;
    constructor(params: ngTable.IParams, settings: ngTable.ISettings);
}

declare module ngTable {
    export interface ISettings {
        $scope?: {};
        $loading?: boolean;
        data?: {}[];
        total?: Number;
        defaultSort?: string;
        filterDelay?: number;
        counts?: number[];
        getGroups? ($defer: ng.IDeferred<{ value: {}; data: {}[] }[]>, column: string);
        getGroups? ($defer: ng.IDeferred<{ value: {}; data: {}[] }[]>, column: (item: {}) => string);
        getData? ($defer: ng.IDeferred<{}[]>, params: ITableProvider);
    }

    export interface IFilter {
    }

    export interface IGrouping {
    }

    export interface IParams {
        page?: number;
        count?: number;
        filter?: IFilter;
        sorting?: ISorting;
        group?: IGrouping;
        groupBy?: any;
    }

    export interface ISorting { }

    export interface IPage { type: string; number: number; active: boolean }

    export interface ITableProvider {
        data: any[];

        /**
         * Get current parameters
         */
        parameters(): IParams;

        /**
         * Set new parameters
         */
        parameters(newParameters: IParams, parseParamsFromUrl?: boolean): ITableProvider;

        /**
         * Get current settings
         */
        settings(): ISettings;

        /**
         * Sets new settings
         */
        settings(newSettings: ISettings): ITableProvider;

        /**
         * Gets current page number
         */
        page(): number;

        /**
         * Sets page
         */
        page(page: number): ITableProvider;

        /**
         * Gets current quantity
         */
        total(): number;

        /**
         * Sets the quantity
         */
        total(total: number): ITableProvider;

        /**
         * Gets current count per page
         */
        count(): number;

        /**
         * Set count per page
         */
        count(count: number): ITableProvider;

        /**
         * Gets current count per page
         */
        filter(): IFilter;

        /**
         * Set count per page
         */
        filter(filter: IFilter): ITableProvider;

        /**
        * Gets current sorting
        */
        sorting(): ISorting;

        /**
         * Set sorting
         */
        sorting(sort: ISorting): ITableProvider;

        /**
         * Return true if field sorted by direction
         */
        isSortBy(field: string, direction: string): boolean;

        /**
         *  Return object of sorting parameters for angular filter
         */
        orderBy(): string[];

        /**
         * Called when updated some of parameters for get new data
         */
        getData($defer: ng.IPromise<{}[]>, params: IParams);

        /**
         * Return groups for table grouping
         */
        getGroups($defer: ng.IPromise<{ value: {}; data: {}[] }[]>, column: string);

        /**
         * Return groups for table grouping
         */
        getGroups($defer: ng.IPromise<{ value: {}; data: {}[] }[]>, column: (item: {}) => string);

        generatePagesArray(currentPage: number, totalItems: number, pageSize: number): IPage[];

        url(): {};

        url(asString: boolean): {};

        reload(): void;

        reloadPages(): void;
    }
}
