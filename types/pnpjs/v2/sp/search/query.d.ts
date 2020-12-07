import { _SharePointQueryableInstance, ISharePointQueryable } from "../sharepointqueryable";
import { IConfigOptions } from "../../common";
import { ISearchQuery, ISearchResponse, ISearchResult, ISearchBuilder, SearchQueryInit } from "./types";
/**
 * Creates a new instance of the SearchQueryBuilder
 *
 * @param queryText Initial query text
 * @param _query Any initial query configuration
 */
export declare function SearchQueryBuilder(queryText?: string, _query?: {}): ISearchBuilder;
/**
 * Describes the search API
 *
 */
export declare class _Search extends _SharePointQueryableInstance {
    /**
     * @returns Promise
     */
    execute(queryInit: SearchQueryInit): Promise<SearchResults>;
    /**
     * Fix array property
     *
     * @param prop property to fix for container struct
     */
    private fixArrProp;
    /**
     * Translates one of the query initializers into a SearchQuery instance
     *
     * @param query
     */
    private parseQuery;
}
export interface ISearch {
    (queryInit: SearchQueryInit): Promise<SearchResults>;
}
export declare const Search: (baseUrl: string | ISharePointQueryable, options?: IConfigOptions) => ISearch;
export declare class SearchResults {
    private _url;
    private _query;
    private _raw;
    private _primary;
    constructor(rawResponse: any, _url: string, _query: ISearchQuery, _raw?: ISearchResponse, _primary?: ISearchResult[]);
    get ElapsedTime(): number;
    get RowCount(): number;
    get TotalRows(): number;
    get TotalRowsIncludingDuplicates(): number;
    get RawSearchResults(): ISearchResponse;
    get PrimarySearchResults(): ISearchResult[];
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    getPage(pageNumber: number, pageSize?: number): Promise<SearchResults>;
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    protected formatSearchResults(rawResults: any): ISearchResult[];
}
//# sourceMappingURL=query.d.ts.map