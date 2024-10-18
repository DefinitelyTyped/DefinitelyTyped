import * as Backbone from "backbone";

declare module "backbone" {
    interface PageableState {
        firstPage?: number | undefined;
        lastPage?: number | undefined;
        currentPage?: number | undefined;
        pageSize?: number | undefined;
        totalPages?: number | undefined;
        totalRecords?: number | undefined;
        sortKey?: string | undefined;
        order?: number | undefined;
    }

    interface PageableQueryParams {
        currentPage?: string | undefined;
        pageSize?: string | undefined;
        totalPages?: string | undefined;
        totalRecords?: string | undefined;
        sortKey?: string | undefined;
        order?: string | undefined;
        directions?: any;
    }

    interface PageableInitialOptions {
        comparator?: ((...options: any[]) => number) | undefined;
        full?: boolean | undefined;
        state?: PageableState | undefined;
        queryParam?: PageableQueryParams | undefined;
    }

    interface PageableParseLinksOptions {
        xhr?: JQueryXHR | undefined;
    }

    interface PageableSetSortingOptions<TModel extends Model> {
        side?: string | undefined;
        full?: boolean | undefined;
        sortValue?: ((model: TModel, sortKey: string) => any | string) | undefined;
    }

    interface PageableSwitchModeOptions {
        fetch?: boolean | undefined;
        resetState?: boolean | undefined;
    }

    type PageableGetPageOptions = CollectionFetchOptions | Silenceable;

    class PageableCollection<TModel extends Model> extends Collection<TModel> {
        fullCollection: Collection<TModel>;
        mode: string;
        queryParams: PageableQueryParams;
        state: PageableState;

        constructor(models?: TModel[], options?: PageableInitialOptions);

        fetch(options?: CollectionFetchOptions): JQueryXHR;

        getFirstPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;

        getLastPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;

        getNextPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;

        getPage(index: number | string, options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;

        getPageByOffset(offset: number, options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;

        getPreviousPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;

        hasNextPage(): boolean;

        hasPreviousPage(): boolean;

        parse(resp: any, options?: any): any[];

        parseLinks(resp: any, options?: PageableParseLinksOptions): any;

        parseRecords(resp: any, options?: any): any[];

        parseState(resp: any, queryParams: PageableQueryParams, state: PageableState, options?: any): PageableState;

        setPageSize(pageSize: number, options?: CollectionFetchOptions): JQueryXHR | PageableCollection<TModel>;

        setSorting(
            sortKey: string,
            order?: number,
            options?: PageableSetSortingOptions<TModel>,
        ): PageableCollection<TModel>;

        switchMode(mode?: string, options?: PageableSwitchModeOptions): JQueryXHR | PageableCollection<TModel>;

        sync(method: string, model: TModel | Collection<TModel>, options?: any): JQueryXHR;

        static noConflict(): typeof PageableCollection;
    }
}
