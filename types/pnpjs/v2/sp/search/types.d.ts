export declare type SearchQueryInit = string | ISearchQuery | ISearchBuilder;
export interface ISearchBuilder {
    query: any;
    readonly bypassResultTypes: this;
    readonly enableStemming: this;
    readonly enableInterleaving: this;
    readonly enableFql: this;
    readonly enableNicknames: this;
    readonly enablePhonetic: this;
    readonly trimDuplicates: this;
    readonly processBestBets: this;
    readonly enableQueryRules: this;
    readonly enableSorting: this;
    readonly generateBlockRankLog: this;
    readonly processPersonalFavorites: this;
    readonly enableOrderingHitHighlightedProperty: this;
    culture(culture: number): this;
    rowLimit(n: number): this;
    startRow(n: number): this;
    sourceId(id: string): this;
    text(queryText: string): this;
    template(template: string): this;
    trimDuplicatesIncludeId(n: number): this;
    rankingModelId(id: string): this;
    rowsPerPage(n: number): this;
    selectProperties(...properties: string[]): this;
    timeZoneId(id: number): this;
    refinementFilters(...filters: string[]): this;
    refiners(refiners: string): this;
    hiddenConstraints(constraints: string): this;
    sortList(...sorts: ISort[]): this;
    timeout(milliseconds: number): this;
    hithighlightedProperties(...properties: string[]): this;
    clientType(clientType: string): this;
    personalizationData(data: string): this;
    resultsURL(url: string): this;
    queryTag(tags: string): this;
    properties(...properties: ISearchProperty[]): this;
    queryTemplatePropertiesUrl(url: string): this;
    reorderingRules(...rules: IReorderingRule[]): this;
    hitHighlightedMultivaluePropertyLimit(limit: number): this;
    collapseSpecification(spec: string): this;
    uiLanguage(lang: number): this;
    desiredSnippetLength(len: number): this;
    maxSnippetLength(len: number): this;
    summaryLength(len: number): this;
    toSearchQuery(): ISearchQuery;
}
/**
 * Describes the SearchQuery interface
 */
export interface ISearchQuery {
    /**
     * A string that contains the text for the search query.
     */
    Querytext?: string;
    /**
     * A string that contains the text that replaces the query text, as part of a query transform.
     */
    QueryTemplate?: string;
    /**
     * A Boolean value that specifies whether the result tables that are returned for
     * the result block are mixed with the result tables that are returned for the original query.
     */
    EnableInterleaving?: boolean;
    /**
     * A Boolean value that specifies whether stemming is enabled.
     */
    EnableStemming?: boolean;
    /**
     * A Boolean value that specifies whether duplicate items are removed from the results.
     */
    TrimDuplicates?: boolean;
    /**
     * A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also.
     */
    EnableNicknames?: boolean;
    /**
     * A Boolean value that specifies whether the query uses the FAST Query Language (FQL).
     */
    EnableFQL?: boolean;
    /**
     * A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches.
     */
    EnablePhonetic?: boolean;
    /**
     * A Boolean value that specifies whether to perform result type processing for the query.
     */
    BypassResultTypes?: boolean;
    /**
     * A Boolean value that specifies whether to return best bet results for the query.
     * This parameter is used only when EnableQueryRules is set to true, otherwise it is ignored.
     */
    ProcessBestBets?: boolean;
    /**
     * A Boolean value that specifies whether to enable query rules for the query.
     */
    EnableQueryRules?: boolean;
    /**
     * A Boolean value that specifies whether to sort search results.
     */
    EnableSorting?: boolean;
    /**
     * Specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table.
     * A block rank log contains the textual information on the block score and the documents that were de-duplicated.
     */
    GenerateBlockRankLog?: boolean;
    /**
     * The result source ID to use for executing the search query.
     */
    SourceId?: string;
    /**
     * The ID of the ranking model to use for the query.
     */
    RankingModelId?: string;
    /**
     * The first row that is included in the search results that are returned.
     * You use this parameter when you want to implement paging for search results.
     */
    StartRow?: number;
    /**
     * The maximum number of rows overall that are returned in the search results.
     * Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall.
     */
    RowLimit?: number;
    /**
     * The maximum number of rows to return per page.
     * Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page,
     * and is used primarily when you want to implement paging for search results.
     */
    RowsPerPage?: number;
    /**
     * The managed properties to return in the search results.
     */
    SelectProperties?: string[];
    /**
     * The locale ID (LCID) for the query.
     */
    Culture?: number;
    /**
     * The set of refinement filters used when issuing a refinement query (FQL)
     */
    RefinementFilters?: string[];
    /**
     * The set of refiners to return in a search result.
     */
    Refiners?: string;
    /**
     * The additional query terms to append to the query.
     */
    HiddenConstraints?: string;
    /**
     * The list of properties by which the search results are ordered.
     */
    SortList?: ISort[];
    /**
     * The amount of time in milliseconds before the query request times out.
     */
    Timeout?: number;
    /**
     * The properties to highlight in the search result summary when the property value matches the search terms entered by the user.
     */
    HitHighlightedProperties?: string[];
    /**
     * The type of the client that issued the query.
     */
    ClientType?: string;
    /**
     * The GUID for the user who submitted the search query.
     */
    PersonalizationData?: string;
    /**
     * The URL for the search results page.
     */
    ResultsUrl?: string;
    /**
     * Custom tags that identify the query. You can specify multiple query tags
     */
    QueryTag?: string;
    /**
     * Properties to be used to configure the search query
     */
    Properties?: ISearchProperty[];
    /**
     *  A Boolean value that specifies whether to return personal favorites with the search results.
     */
    ProcessPersonalFavorites?: boolean;
    /**
     * The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries.
     */
    QueryTemplatePropertiesUrl?: string;
    /**
     * Special rules for reordering search results.
     * These rules can specify that documents matching certain conditions are ranked higher or lower in the results.
     * This property applies only when search results are sorted based on rank.
     */
    ReorderingRules?: IReorderingRule[];
    /**
     * The number of properties to show hit highlighting for in the search results.
     */
    HitHighlightedMultivaluePropertyLimit?: number;
    /**
     * A Boolean value that specifies whether the hit highlighted properties can be ordered.
     */
    EnableOrderingHitHighlightedProperty?: boolean;
    /**
     * The managed properties that are used to determine how to collapse individual search results.
     * Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications.
     * In a collapse specification, results are collapsed if their properties match all individual properties in the collapse specification.
     */
    CollapseSpecification?: string;
    /**
     * The locale identifier (LCID) of the user interface
     */
    UIlanguage?: number;
    /**
     * The preferred number of characters to display in the hit-highlighted summary generated for a search result.
     */
    DesiredSnippetLength?: number;
    /**
     * The maximum number of characters to display in the hit-highlighted summary generated for a search result.
     */
    MaxSnippetLength?: number;
    /**
     * The number of characters to display in the result summary for a search result.
     */
    SummaryLength?: number;
}
/**
 * Provides hints at the properties which may be available on the result object
 */
export interface ISearchResult {
    Rank?: number;
    DocId?: number;
    WorkId?: number;
    Title?: string;
    Author?: string;
    Size?: number;
    Path?: string;
    Description?: string;
    Write?: Date;
    LastModifiedTime?: Date;
    CollapsingStatus?: number;
    HitHighlightedSummary?: string;
    HitHighlightedProperties?: string;
    contentclass?: string;
    PictureThumbnailURL?: string;
    ServerRedirectedURL?: string;
    ServerRedirectedEmbedURL?: string;
    ServerRedirectedPreviewURL?: string;
    FileExtension?: string;
    ContentTypeId?: string;
    ParentLink?: string;
    ViewsLifetime?: number;
    ViewsRecent?: number;
    SectionNames?: string;
    SectionIndexes?: string;
    SiteLogo?: string;
    SiteDescription?: string;
    importance?: number;
    SiteName?: string;
    IsDocument?: boolean;
    FileType?: string;
    IsContainer?: boolean;
    WebTemplate?: string;
    SPWebUrl?: string;
    UniqueId?: string;
    ProgId?: string;
    OriginalPath?: string;
    RenderTemplateId?: string;
    PartitionId?: string;
    UrlZone?: number;
    Culture?: string;
}
export interface ISearchResponse {
    ElapsedTime: number;
    Properties?: {
        Key: string;
        Value: any;
        ValueType: string;
    }[];
    PrimaryQueryResult?: IResultTableCollection;
    SecondaryQueryResults?: IResultTableCollection;
    SpellingSuggestion?: string;
    TriggeredRules?: any[];
}
export interface IResultTableCollection {
    QueryErrors?: Map<string, any>;
    QueryId?: string;
    QueryRuleId?: string;
    CustomResults?: IResultTable;
    RefinementResults?: IResultTable;
    RelevantResults?: IResultTable;
    SpecialTermResults?: IResultTable;
}
export interface IRefiner {
    Name: string;
    Entries: {
        RefinementCount: string;
        RefinementName: string;
        RefinementToken: string;
        RefinementValue: string;
    }[];
}
export interface IResultTable {
    GroupTemplateId?: string;
    ItemTemplateId?: string;
    Properties?: {
        Key: string;
        Value: any;
        ValueType: string;
    }[];
    Table?: {
        Rows: {
            Cells: {
                Key: string;
                Value: any;
                ValueType: string;
            }[];
        }[];
    };
    Refiners?: IRefiner[];
    ResultTitle?: string;
    ResultTitleUrl?: string;
    RowCount?: number;
    TableType?: string;
    TotalRows?: number;
    TotalRowsIncludingDuplicates?: number;
}
/**
 * Defines how search results are sorted.
 */
export interface ISort {
    /**
     * The name for a property by which the search results are ordered.
     */
    Property: string;
    /**
     * The direction in which search results are ordered.
     */
    Direction: SortDirection;
}
/**
 * Defines one search property
 */
export interface ISearchProperty {
    Name: string;
    Value: ISearchPropertyValue;
}
/**
 * Defines one search property value. Set only one of StrlVal/BoolVal/IntVal/StrArray.
 */
export interface ISearchPropertyValue {
    StrVal?: string;
    BoolVal?: boolean;
    IntVal?: number;
    StrArray?: string[];
    QueryPropertyValueTypeIndex: QueryPropertyValueType;
}
/**
 * defines the SortDirection enum
 */
export declare enum SortDirection {
    Ascending = 0,
    Descending = 1,
    FQLFormula = 2
}
/**
 * Defines how ReorderingRule interface, used for reordering results
 */
export interface IReorderingRule {
    /**
     * The value to match on
     */
    MatchValue: string;
    /**
     * The rank boosting
     */
    Boost: number;
    /**
    * The rank boosting
    */
    MatchType: ReorderingRuleMatchType;
}
/**
 * defines the ReorderingRuleMatchType  enum
 */
export declare enum ReorderingRuleMatchType {
    ResultContainsKeyword = 0,
    TitleContainsKeyword = 1,
    TitleMatchesKeyword = 2,
    UrlStartsWith = 3,
    UrlExactlyMatches = 4,
    ContentTypeIs = 5,
    FileExtensionMatches = 6,
    ResultHasTag = 7,
    ManualCondition = 8
}
/**
 * Specifies the type value for the property
 */
export declare enum QueryPropertyValueType {
    None = 0,
    StringType = 1,
    Int32Type = 2,
    BooleanType = 3,
    StringArrayType = 4,
    UnSupportedType = 5
}
export declare class SearchBuiltInSourceId {
    static readonly Documents = "e7ec8cee-ded8-43c9-beb5-436b54b31e84";
    static readonly ItemsMatchingContentType = "5dc9f503-801e-4ced-8a2c-5d1237132419";
    static readonly ItemsMatchingTag = "e1327b9c-2b8c-4b23-99c9-3730cb29c3f7";
    static readonly ItemsRelatedToCurrentUser = "48fec42e-4a92-48ce-8363-c2703a40e67d";
    static readonly ItemsWithSameKeywordAsThisItem = "5c069288-1d17-454a-8ac6-9c642a065f48";
    static readonly LocalPeopleResults = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
    static readonly LocalReportsAndDataResults = "203fba36-2763-4060-9931-911ac8c0583b";
    static readonly LocalSharePointResults = "8413cd39-2156-4e00-b54d-11efd9abdb89";
    static readonly LocalVideoResults = "78b793ce-7956-4669-aa3b-451fc5defebf";
    static readonly Pages = "5e34578e-4d08-4edc-8bf3-002acf3cdbcc";
    static readonly Pictures = "38403c8c-3975-41a8-826e-717f2d41568a";
    static readonly Popular = "97c71db1-58ce-4891-8b64-585bc2326c12";
    static readonly RecentlyChangedItems = "ba63bbae-fa9c-42c0-b027-9a878f16557c";
    static readonly RecommendedItems = "ec675252-14fa-4fbe-84dd-8d098ed74181";
    static readonly Wiki = "9479bf85-e257-4318-b5a8-81a180f5faa1";
}
//# sourceMappingURL=types.d.ts.map