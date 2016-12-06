// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace Microsoft.SharePoint.Client.Search {
    namespace Query {

        /**Contains information common to all types of search queries.*/
        export class Query extends SP.ClientObject {
            get_blockDedupeMode: () => number;
            set_blockDedupeMode: (value: number) => void;

            get_bypassResultTypes: () => boolean;
            set_bypassResultTypes: (value: boolean) => void;

            get_clientType: () => string;
            set_clientType: (value: string) => void;

            get_culture: () => number;
            set_culture: (value: number) => void;

            get_desiredSnippetLength: () => number;
            set_desiredSnippetLength: (value: number) => void;

            get_enableInterleaving: () => boolean;
            set_enableInterleaving: (value: boolean) => void;

            get_enableNicknames: () => boolean;
            set_enableNicknames: (value: boolean) => void;

            get_enableOrderingHitHighlightedProperty: () => boolean;
            set_enableOrderingHitHighlightedProperty: (value: boolean) => void;

            get_enablePhonetic: () => boolean;
            set_enablePhonetic: (value: boolean) => void;

            get_enableQueryRules: () => boolean;
            set_enableQueryRules: (value: boolean) => void;

            get_enableStemming: () => boolean;
            set_enableStemming: (value: boolean) => void;

            get_generateBlockRankLog: () => boolean;
            set_generateBlockRankLog: (value: boolean) => void;

            get_hitHighlightedMultivaluePropertyLimit: () => number;
            set_hitHighlightedMultivaluePropertyLimit: (value: number) => void;

            get_hitHighlightedProperties: () => StringCollection;

            get_ignoreSafeQueryPropertiesTemplateUrl: () => boolean;
            set_ignoreSafeQueryPropertiesTemplateUrl: (value: boolean) => void;

            get_impressionID: () => string;
            set_impressionID: (value: string) => void;

            get_maxSnippetLength: () => number;
            set_maxSnippetLength: (value: number) => void;

            get_personalizationData: () => QueryPersonalizationData;
            set_personalizationData: (value: QueryPersonalizationData) => void;

            get_processBestBets: () => boolean;
            set_processBestBets: (value: boolean) => void;

            get_processPersonalFavorites: () => boolean;
            set_processPersonalFavorites: (value: boolean) => void;

            get_queryTag: () => string;
            set_queryTag: (value: string) => void;

            get_queryTemplate: () => string;
            set_queryTemplate: (value: string) => void;

            get_queryTemplateParameters: () => { [key: string]: boolean; };

            get_queryText: () => string;
            set_queryText: (value: string) => void;

            get_rankingModelId: () => string;
            set_rankingModelId: (value: string) => void;

            get_resultsUrl: () => string;
            set_resultsUrl: (value: string) => void;

            get_rowLimit: () => number;
            set_rowLimit: (value: number) => void;

            get_rowsPerPage: () => number;
            set_rowsPerPage: (value: number) => void;

            get_safeQueryPropertiesTemplateUrl: () => string;
            set_safeQueryPropertiesTemplateUrl: (value: string) => void;

            get_showPeopleNameSuggestions: () => boolean;
            set_showPeopleNameSuggestions: (value: boolean) => void;

            get_sourceId: () => SP.Guid;
            set_sourceId: (value: SP.Guid) => void;

            get_startRow: () => number;
            set_startRow: (value: number) => void;

            get_summaryLength: () => number;
            set_summaryLength: (value: number) => void;

            get_timeout: () => number;
            set_timeout: (value: number) => void;

            get_totalRowsExactMinimum: () => number;
            set_totalRowsExactMinimum: (value: number) => void;

            get_trimDuplicates: () => boolean;
            set_trimDuplicates: (value: boolean) => void;


            get_uiLanguage: () => number;
            set_uiLanguage: (value: number) => void;



            getQuerySuggestionsWithResults: (iNumberOfQuerySuggestions: number,
                iNumberOfResultSuggestions: number,
                fPreQuerySuggestions: boolean,
                fHitHighlighting: boolean,
                fCapitalizeFirstLetters: boolean,
                fPrefixMatchAllTerms: boolean) => QuerySuggestionResults;


        }

        /**Contains information about a keyword based search query.*/
        export class KeywordQuery extends Query {
            constructor(context: SP.ClientContext);

            get_collapseSpecification: () => string;
            set_collapseSpecification: (value: string) => void;

            get_enableSorting: () => boolean;
            set_enableSorting: (value: boolean) => void;

            get_hiddenConstraints: () => string;
            set_hiddenConstraints: (value: string) => void;

            get_properties: () => KeywordQueryProperties;

            get_refinementFilters: () => StringCollection;
            set_refinementFilters: (value: StringCollection) => void;

            get_refiners: () => string;
            set_refiners: (value: string) => void;

            get_reorderingRules: () => ReorderingRuleCollection;
            set_reorderingRules: (value: ReorderingRuleCollection) => void;

            /**Specifies the list of managed properties to be returned for each search result.*/
            get_selectProperties: () => StringCollection;

            get_sortList: () => SortCollection;

            get_trimDuplicatesIncludeId: () => number;
            set_trimDuplicatesIncludeId: (value: number) => void;
        }

        /**Executes queries against a search server.*/
        export class SearchExecutor extends SP.ClientObject {
            constructor(context: SP.ClientContext);

            /**Runs a query.*/
            executeQuery: (query: Query) => SP.JsonObjectResult;
            executeQueries: (queryIds: string[], queries: Query[], handleExceptions: boolean) => SP.JsonObjectResult;
            recordPageClick: (
                pageInfo: string,
                clickType: string,
                blockType: number,
                clickedResultId: string,
                subResultIndex: number,
                immediacySourceId: string,
                immediacyQueryString: string,
                immediacyTitle: string,
                immediacyUrl: string) => void;
            exportPopularQueries: (web: SP.Web, sourceId: SP.Guid) => SP.JsonObjectResult;
        }


        export class StringCollection extends SP.ClientObjectCollection<string> {
            constructor(context: SP.ClientContext);
            itemAt: (index: number) => string;
            get_item: (index: number) => string;
            get_childItemType: () => Object;
            add: (property: string) => void;
            clear: () => void;
        }

        export class QueryPersonalizationData extends SP.ClientObject {
            //It's really empty;
        }

        export class QuerySuggestionResults extends SP.ClientValueObject {
            get_peopleNames: () => string[];
            set_peopleNames: (value: string[]) => void;

            get_personalResults: () => PersonalResultSuggestion[];
            set_personalResults: (value: PersonalResultSuggestion[]) => void;

            get_queries: () => QuerySuggestionQuery[];
            set_queries: (value: QuerySuggestionQuery[]) => void;
        }

        export class PersonalResultSuggestion extends SP.ClientValueObject {
            get_highlightedTitle: () => string;
            set_highlightedTitle: (value: string) => void;

            get_isBestBet: () => boolean;
            set_isBestBet: (value: boolean) => void;

            get_title: () => string;
            set_title: (value: string) => void;

            get_url: () => string;
            set_url: (value: string) => void;
        }

        export class QuerySuggestionQuery extends SP.ClientValueObject {
            get_isPersonal: () => boolean;
            set_isPersonal: (value: boolean) => void;

            get_query: () => string;
            set_query: (value: string) => void;
        }

        export class KeywordQueryProperties extends SP.ClientObject {
            get_item: (key: string) => any;
            set_item: (key: string, value: any) => void;
            setQueryPropertyValue: (name: string) => QueryPropertyValue;
            getQueryPropertyValue: (name: string, value: QueryPropertyValue) => void;
        }

        export enum QueryPropertyValueType {
            none,
            stringType,
            int32TYpe,
            booleanType,
            stringArrayType,
            unSupportedType
        }

        export class QueryPropertyValue extends SP.ClientValueObject {
            get_boolVal: () => boolean;
            set_boolVal: (value: boolean) => boolean;

            get_intVal: () => number;
            set_intVal: (value: number) => number;
            get_queryPropertyValueTypeIndex: () => number;
            set_queryPropertyValueTypeIndex: (value: number) => void;
            get_strArray: () => string[];
            set_strArray: (value: string[]) => string[];
            get_strVal: () => string;
            set_strVal: (value: string) => string;
        }

        export class QueryUtility {
            static create: (name: string, val: any) => QueryPropertyValue;
            static getQueryPropertyValueType: (val: QueryPropertyValue) => QueryPropertyValueType;
            static queryPropertyValueToObject: (val: QueryPropertyValue) => any;
        }
        export class ReorderingRuleCollection extends SP.ClientObjectCollection<ReorderingRule> {
            itemAt: (index: number) => ReorderingRule;
            get_item: (index: number) => ReorderingRule;
            get_childItemType: () => Object;
            add: (property: ReorderingRule) => void;
            clear: () => void;
        }

        export enum ReorderingRuleMatchType {
            resultContainsKeyword,
            titleContainsKeyword,
            titleMatchesKeyword,
            urlStartsWith,
            urlExactlyMatches,
            contentTypeIs,
            fileExtensionMatches,
            resultHasTag,
            manualCondition
        }

        export class ReorderingRule extends SP.ClientValueObject {
            get_boost: () => number;
            set_boost: (value: number) => void;

            get_matchType: () => ReorderingRuleMatchType;
            set_matchType: (value: ReorderingRuleMatchType) => void;

            get_matchValue: () => string;
            set_matchValue: (value: string) => void;
        }

        export class SortCollection extends SP.ClientObjectCollection<Sort> {
            itemAt: (index: number) => Sort;
            get_item: (index: number) => Sort;
            get_childItemType: () => Object;
            add: (strProperty: string, sortDirection: SortDirection) => void;
            clear: () => void;
        }

        enum SortDirection {
            ascending,
            descending,
            fqlFormula
        }
        export class Sort extends SP.ClientValueObject {
            get_direction: () => SortDirection;
            set_direction: (value: SortDirection) => void;

            get_property: () => string;
            set_property: (value: string) => void;
        }


        export class ResultTableCollection extends SP.ClientValueObjectCollection<ResultTable> {
            get_item: (index: number) => ResultTable;

            get_elapsedTime: () => number;
            set_elapsedTime: (value: number) => void;

            get_properties: () => { [key: string]: any; };

            get_queryErrors: () => { [key: string]: WebControls.ControlMessage; };

            get_queryId: () => string;

            get_spellingSuggestion: () => string;

            get_triggeredRules: () => SP.Guid[];

            initPropertiesFromJson: (parentNode: any) => void;

        }

        export class ResultTable extends SP.ClientValueObject {
            get_groupTemplateId: () => string;

            get_itemTemplateId: () => string;

            get_properties: () => { [key: string]: any; };

            get_queryId: () => string;

            get_queryRuleId: () => string;

            get_resultRows: () => { [key: string]: any; }[];

            get_resultTitle: () => string;

            get_resultTitleUrl: () => string;

            get_rowCount: () => number;

            get_tableType: () => string;

            get_totalRows: () => number;

            get_totalRowsIncludingDuplicates: () => number;

            initPropertiesFromJson: (parentNode: any) => void;
        }

        export class RankingLabeling extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            getJudgementsForQuery: (query: string) => SP.JsonObjectResult;
            addJudgment: (userQuery: string, url: string, labelId: number) => void;
            normalizeResultUrl: (url: string) => SP.JsonObjectResult;
        }

        export class PopularQuery extends SP.ClientValueObject {
            get_clickCount: () => number;
            set_clickCount: (value: number) => void;

            get_LCID: () => number;
            set_LCID: (value: number) => void;

            get_queryCount: () => number;
            set_queryCount: (value: number) => void;

            get_queryText: () => string;
            set_queryText: (value: string) => void;
        }

        export class QueryPropertyNames {
            static blockDedupeMode: string; // 'BlockDedupeMode';
            static bypassResultTypes: string; // 'BypassResultTypes';
            static clientType: string; // 'ClientType';
            static culture: string; // 'Culture';
            static desiredSnippetLength: string; // 'DesiredSnippetLength';
            static enableInterleaving: string; // 'EnableInterleaving';
            static enableNicknames: string; // 'EnableNicknames';
            static enableOrderingHitHighlightedProperty: string; // 'EnableOrderingHitHighlightedProperty';
            static enablePhonetic: string; // 'EnablePhonetic';
            static enableQueryRules: string; // 'EnableQueryRules';
            static enableStemming: string; // 'EnableStemming';
            static generateBlockRankLog: string; // 'GenerateBlockRankLog';
            static hitHighlightedMultivaluePropertyLimit: string; // 'HitHighlightedMultivaluePropertyLimit';
            static ignoreSafeQueryPropertiesTemplateUrl: string; // 'IgnoreSafeQueryPropertiesTemplateUrl';
            static impressionID: string; // 'ImpressionID';
            static maxSnippetLength: string; // 'MaxSnippetLength';
            static processBestBets: string; // 'ProcessBestBets';
            static processPersonalFavorites: string; // 'ProcessPersonalFavorites';
            static queryTag: string; // 'QueryTag';
            static queryTemplate: string; // 'QueryTemplate';
            static queryTemplateParameters: string; // 'QueryTemplateParameters';
            static queryText: string; // 'QueryText';
            static rankingModelId: string; // 'RankingModelId';
            static resultsUrl: string; // 'ResultsUrl';
            static rowLimit: string; // 'RowLimit';
            static rowsPerPage: string; // 'RowsPerPage';
            static safeQueryPropertiesTemplateUrl: string; // 'SafeQueryPropertiesTemplateUrl';
            static showPeopleNameSuggestions: string; // 'ShowPeopleNameSuggestions';
            static sourceId: string; // 'SourceId';
            static startRow: string; // 'StartRow';
            static summaryLength: string; // 'SummaryLength';
            static timeout: string; // 'Timeout';
            static totalRowsExactMinimum: string; // 'TotalRowsExactMinimum';
            static trimDuplicates: string; // 'TrimDuplicates';
            static uiLanguage: string; // 'UILanguage';
        }

        export class QueryObjectPropertyNames {
            static hitHighlightedProperties: string; // = 'HitHighlightedProperties';
            static personalizationData: string; // = 'PersonalizationData';
        }

        export class KeywordQueryPropertyNames {
            static collapseSpecification: string; // 'CollapseSpecification';
            static enableSorting: string; // 'EnableSorting';
            static hiddenConstraints: string; // 'HiddenConstraints';
            static refiners: string; // 'Refiners';
            static trimDuplicatesIncludeId: string; // 'TrimDuplicatesIncludeId';
        }

        export class KeywordQueryObjectPropertyNames {
            static properties: string; // 'Properties';
            static refinementFilters: string; // 'RefinementFilters';
            static reorderingRules: string; // 'ReorderingRules';
            static selectProperties: string; // 'SelectProperties';
            static sortList: string; // 'SortList';
        }
    }

    namespace WebControls {
        export class ControlMessage extends SP.ClientValueObject {
            get_code: () => number;

            get_correlationID: () => string;

            get_encodeDetails: () => boolean;

            get_header: () => string;

            get_level: () => MessageLevel;

            get_messageDetails: () => string;

            get_messageDetailsForViewers: () => string;

            get_serverTypeId: () => string;

            get_showForViewerUsers: () => boolean;

            get_showInEditModeOnly: () => boolean;

            get_stackTrace: () => string;

            get_type: () => string;
        }

        export enum MessageLevel {
            information,
            warning,
            error
        }
    }

    namespace Administration {
        export class DocumentCrawlLog extends SP.ClientObject {
            constructor(context: SP.ClientContext, site: SP.Site);
            getCrawledUrls: (getCountOnly: boolean,
                maxRows: { High: number; Low: number; },
                queryString: string,
                isLike: boolean,
                contentSourceID: number,
                errorLevel: number,
                errorID: number,
                startDateTime: Date,
                endDateTime: Date) => SP.JsonObjectResult;
        }

        export class SearchObjectOwner extends SP.ClientObject {
            constructor(context: SP.ClientContext, lowestCurrentLevelToUse: SearchObjectLevel);
        }

        export enum SearchObjectLevel {
            spWeb,
            spSite,
            spSiteSubscription,
            ssa
        }
    }

    namespace Portability {
        export class SearchConfigurationPortability extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            get_importWarnings: () => string;

            exportSearchConfiguration: (owningScope: Administration.SearchObjectOwner) => SP.JsonObjectResult;

            importSearchConfiguration: (owningScope: Administration.SearchObjectOwner, searchConfiguration: string) => void;

            deleteSearchConfiguration: (owningScope: Administration.SearchObjectOwner, searchConfiguration: string) => void;
        }

        export class SearchConfigurationPortabilityPropertyNames {
            static importWarnings: string;// = 'ImportWarnings'
        }
    }

    /**Located in sp.search.apps.js*/
    namespace Analytics {
        export class AnalyticsItemData extends SP.ClientObject {
            get_lastProcessingTime: () => Date;

            get_totalHits: () => number;

            get_totalUniqueUsers: () => number;

            getHitCountForDay: (day: Date) => number;

            getUniqueUsersCountForDay: (day: Date) => number;

            getHitCountForMonth: (day: Date) => number;

            getUniqueUsersCountForMonth: (day: Date) => number;
        }

        export class UsageAnalytics extends SP.ClientObject {
            getAnalyticsItemData: (eventType: number, listItem: SP.ListItem) => AnalyticsItemData;

            getAnalyticsItemDataForApplicationEventType: (appEventType: SP.Guid, listItem: SP.ListItem) => AnalyticsItemData;

            deleteStandardEventUsageData: (eventType: number) => void;

            deleteCustomEventUsageData: (appEventTypeId: SP.Guid) => void;
        }



    }
}