// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../microsoft-ajax/Microsoft.Ajax.d.ts"/>
/// <reference path="SP.d.ts"/>
/// <reference path="SP.Search.d.ts"/>

declare namespace Srch {
    export enum EventType {
        none,
        queryReady,
        queryIssuing,
        batchQueryIssuing,
        resultReady,
        batchResultReady,
        queryStateChanged,
        resultRendered,
        preLoad,
        load,
        postLoad
    }

    export enum MessageLevel {
        information,
        warning,
        error
    }

    export enum UserActionType {
        search,
        pageNext,
        pagePrev,
        refine,
        sort,
        filterLanguage
    }

    export enum DateTimeKind {
        unspecified,
        utc,
        local
    }

    export class ClientControl extends Sys.UI.Control {
        constructor(elem: Element);

        /** toggles visibility of children controls of the messageContainer */
        static toggleMessageDetails(messageContainer: Element): void;
        alternateRenderer: any;
        alternateRenderContext: any;
        loaded: boolean;
        /** returns next unique identifier for nested controls */
        get_nextUniqueId(): string;
        /** Gets the id of View display template that is used to render this control.
          * Example: '~sitecollection/_catalogs/masterpage/Display Templates/Search/Control_SearchResults.js'
          */
        get_renderTemplateId(): string;
        set_renderTemplateId(value: string): string;
        /** Returns true if control will load scripts defined by the serverTemplateScriptsToLoad field after control load. True by default. */
        get_delayLoadTemplateScripts(): boolean;
        /** If set to true, control will load scripts defined by the serverTemplateScriptsToLoad field after control load. True by default. */
        set_delayLoadTemplateScripts(value: boolean): boolean;
        get_states(): any;
        set_states(value: any): any;
        get_messages(): any[];
        set_messages(value: any[]): any[];
        get_showDataErrors(): boolean;
        /** False by default. */
        set_showDataErrors(value: boolean): boolean;
        get_alternateErrorMessage(): string;
        set_alternateErrorMessage(value: string): string;
        /** returns true if control has already been loaded at least once */
        get_isInitialLoad(): boolean;
        initialize(): void;
        dispose(): void;
        renderControl(listData: any, dataProvider: any): void;
        processDataProviderErrors(dataProviderToProcess: any): void;
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_Load(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        loadServerTemplateScripts(): void;
        serverTemplateScriptsToLoad: any[];
        serverTemplateScriptsCallback(): void;
        loadRenderTemplateScripts(scriptReferences: any, success: any, failure: any, timeout: any, loadStandAloneCustomScripts: any): boolean;
        invokeAlternateRender(callback: any, container: any, ctx: any): any;
        invokeClientRenderer(node: any, ctx: any): any;
        processDataErrorMessages(dataErrorsList: any): any;
        processRenderingErrorMessages(ctx: any): any;
        hasMessages(): any;
        updateDisplayControlWithNewMessages(): any;
        /** show/hide the DOM element associated with control */
        setControlElementVisibility(showElement: boolean): any;
        clickHandler(e: Event): any;
    }

    export class DataProvider extends ClientControl {
        constructor(elem: Element);
        get_currentQueryState(): any;
        get_sourceID(): string;
        set_sourceID(value: string): string;
        get_sourceName(): string;
        set_sourceName(value: string): string;
        get_sourceLevel(): string;
        set_sourceLevel(value: string): string;
        get_collapseSpecification(): string;
        set_collapseSpecification(value: string): string;
        get_queryGroupName(): string;
        set_queryGroupName(value: string): string;
        get_queryPropertiesTemplateUrl(): string;
        set_queryPropertiesTemplateUrl(value: string): string;
        get_queryTemplate(): any;
        set_queryTemplate(value: any): any;
        get_fallbackSort(): any;
        set_fallbackSort(value: any): any;
        get_rankRules(): any;
        set_rankRules(value: any): any;
        get_initialQueryState(): any;
        set_initialQueryState(value: any): any;
        get_initialResult(): string;
        set_initialResult(value: string): string;
        get_initialResultRef(): any;
        set_initialResultRef(value: any): any;
        get_initialResultObject(): any;
        get_batched(): boolean;
        set_batched(value: boolean): boolean;
        get_active(): boolean;
        set_active(value: boolean): boolean;
        get_bypassResultTypes(): boolean;
        set_bypassResultTypes(value: boolean): boolean;
        get_processBestBets(): boolean;
        set_processBestBets(value: boolean): boolean;
        get_processPersonalFavorites(): boolean;
        set_processPersonalFavorites(value: boolean): boolean;
        /** Number of results displayed per page. 10 by default */
        get_resultsPerPage(): number;
        /** Number of results displayed per page. 10 by default */
        set_resultsPerPage(value: number): number;
        get_selectedRefiners(): any;
        set_selectedRefiners(value: any): any;
        get_selectedProperties(): any;
        set_selectedProperties(value: any): any;
        get_hitHighlightedProperties(): any;
        set_hitHighlightedProperties(value: any): any;
        get_fallbackLanguage(): any;
        set_fallbackLanguage(value: any): any;
        get_fallbackRankingModelID(): string;
        set_fallbackRankingModelID(value: string): string;
        get_fallbackRefinementFilters(): any;
        set_fallbackRefinementFilters(value: any): any;
        get_availableSorts(): any;
        set_availableSorts(value: any): any;
        get_contextualScopeUrl(): string;
        set_contextualScopeUrl(value: string): string;
        get_totalRows(): number;
        set_totalRows(value: number): number;
        get_rowCount(): number;
        set_rowCount(value: number): number;
        get_refinementInfo(): any;
        get_entityInfo(): any;
        get_enableStemming(): boolean;
        set_enableStemming(value: boolean): boolean;
        get_enablePhonetic(): boolean;
        set_enablePhonetic(value: boolean): boolean;
        get_enableNicknames(): boolean;
        set_enableNicknames(value: boolean): boolean;
        get_trimDuplicates(): boolean;
        set_trimDuplicates(value: boolean): boolean;
        get_enableInterleaving(): boolean;
        set_enableInterleaving(value: boolean): boolean;
        get_enableQueryRules(): boolean;
        set_enableQueryRules(value: boolean): boolean;
        get_enableOrderingHitHighlightedProperty(): boolean;
        set_enableOrderingHitHighlightedProperty(value: boolean): boolean;
        get_hitHighlightedMultivaluePropertyLimit(): number;
        set_hitHighlightedMultivaluePropertyLimit(value: number): number;
        get_properties(): any;
        set_properties(value: any): any;
        get_clientType(): string;
        set_clientType(value: string): string;
        get_maxPagesAfterCurrent(): number;
        set_maxPagesAfterCurrent(value: number): number;
        get_userAction(): any;
        set_userAction(value: any): any;
        get_queryCount(): number;
        set_queryCount(value: number): number;
        get_resultsUrl(): any;
        set_resultsUrl(value: any): any;
        get_upScopeUrl(): any;
        get_effectiveQueryLanguage(): any;
        get_parentImpressionID(): any;
        set_parentImpressionID(value: any): any;
        get_updateAjaxNavigate(): boolean;
        set_updateAjaxNavigate(value: boolean): boolean;
        get_summaryLength(): number;
        set_summaryLength(value: number): number;
        get_desiredSnippetLength(): number;
        set_desiredSnippetLength(value: number): number;
        get_personalizedQuery(): boolean;
        set_personalizedQuery(value: boolean): boolean;
        initialize(): void;
        dispose(): void;
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_Load(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        serverTemplateScriptsCallback(): void;
        add_queryIssuing(value: any): void;
        remove_queryIssuing(value: any): void;
        raiseQueryIssuingEvent(arg: any): void;
        add_resultReady(value: any): void;
        remove_resultReady(value: any): void;
        raiseResultReadyEvent(arg: any): void;
        add_queryStateChanged(value: any): void;
        raiseQueryStateChangedEvent(arg: any): void;
        displayControl_QueryReady(sender: any, e: any): void;
        searchBox_QueryReady(sender: any, e: any): void;
        searchBox_BatchQueryIssuing(sender: any, e: any): void;
        searchBox_BatchResultReady(sender: any, e: any): void;
        processInitial(): void;
        issueQuery(): void;
        displayControlMessages(): void;
        raiseEmptyResultReadyEvent(): void;
        getSortRankName(): string;
        getSortName(): string;
    }

    export class DisplayControl extends ClientControl {
        get_queryGroupName(): string;
        set_queryGroupName(value: string): string;
        get_dataProvider(): DataProvider;
        get_renderedResult(): boolean;
        set_renderedResult(value: boolean): boolean;
        get_shouldShowNoResultMessage(): boolean;
        set_shouldShowNoResultMessage(value: boolean): boolean;
        get_currentResultTableCollection(): any;
        set_currentResultTableCollection(value: any): any;
        get_emptyMessage(): string;
        set_emptyMessage(value: string): string;
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        serverTemplateScriptsCallback(): void;
        add_queryReady(value: any): void;
        remove_queryReady(value: any): void;
        raiseQueryReadyEvent(arg: any): void;
        add_resultRendered(value: any): void;
        remove_resultRendered(value: any): void;
        raiseResultRenderedEvent(arg: any): void;
        add_oneTimeResultRendered(value: any): void;
        remove_oneTimeResultRendered(value: any): void;
        raiseOneTimeResultRenderedEvent(arg: any): void;
        refresh(queryState: any): void;
        dataProvider_QueryIssuing(sender: any, e: any): void;
        dataProvider_ResultReady(sender: any, e: any): void;
        processQueryIssuing(queryState: any): void;
        processResultReady(resultTableCollection: any): void;
        render(): void;
    }

    export class Refinement extends DisplayControl {
        static createRefinementTextbox(name: string): Element;
        static submitMultiRefinement(name: string, control: Refinement, useContains: boolean, useKQL: boolean): void;
        static ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes(inputText: string): string;
        static getRefinementLocalizedTitle(propertyName: string): string;
        static getRefinementTitle(currentRefinemntControl: Refinement): string;
        /** Gets expanded state of the specified filter from cookie */
        static getExpanded(filterName: string): string;
        /** Save expanded state of the specified filter to cookie */
        static setExpanded(filterName: string, value: string): void;
        static multiRefinerSpecifyOtherFilterValue(refinerName: string, clientControl: Refinement, useContains: boolean, useKQL: boolean): void;

        constructor(elem: Element);

        get_selectedRefinementControls(): RefinementControl[];
        set_selectedRefinementControls(value: RefinementControl[]): RefinementControl[];
        get_useManagedNavigationRefiners(): boolean;
        set_useManagedNavigationRefiners(value: boolean): boolean;
        get_emptyRefinementMessageId(): string;
        set_emptyRefinementMessageId(value: string): string;

        scriptApplication_PreLoad(sender: any, e: any): void;
        render(): void;
        addRefinementFilter(filterName: string, filterToken: any): void;
        addRefinementFiltersJSON(refinersJSON: string): void;
        addRefinementFiltersJSONWithOr(refinersJSON: string): void;
        addRefinementFilters(refiners: any[]): void;
        addRefinementFiltersWithOp(refiners: any[], op: string): void;
        removeRefinementFilter(filterName: string, filterToken: string): void;
        removeRefinementFiltersJSON(refinersJSON: string): void;
        updateRefinementFilters(filterName: string, filterTokens: string[], op: string, useKQL: boolean, tokenToDisplayValueMap: any): void;
        updateRefinersJSON(refinersJSON: string): void;
        updateRefiners(refiners: any[], op: string, useKQL: boolean, tokenToDisplayValueMap: any): void;
        removeRefinementCategory(rcs: any, filterName: string): void;
        replaceRefinementFilter(oldRefinementFilter: any, newRefinementFilter: any): void;
        hasRefinementFilter(filterName: string, filterToken: string): boolean;
        hasAllRefinementFilters(filterName: string, filterTokens: string[]): boolean;
        hasRefinementCategory(refinementName: string): boolean;
        getCurrentRefinementCategory(refinementName: string): any;
        /** Gets refinement control with the specified propertyName */
        getRefinementControl(refinerName: string): RefinementControl;
        /** Returns true if selected refinement controls collection contains a control with the specified propertyName */
        hasRefiner(refinerName: string): boolean;
        /** Replaces the refinement controls */
        updateRefinementControls(newControls: RefinementControl[]): void;
    }

    export class RefinementControl {
        constructor(propertyName: string, spec: string, renderTemplateId: string);

        propertyName: string;
        spec: string;
        renderTemplateId: string;
        overrideDisplayName: string;
        useDefaultDateIntervals: boolean;
        containerId: string;
        alternateRenderer: any;
        alternateRenderContext: any;
        countDisplay: string;
        deepHits: number;
    }

    export class Result extends DisplayControl {
        static parsePropertyMappingWithSlotDisplayNames(mappings: any): { [key: string]: any };
        static parsePropertyMappingsString(mappings: any): { [key: string]: any };
        static getSelectedPropertiesFromMappingDictionary(propMappings: any): any[];

        constructor(elem: Element);

        get_itemTemplateId(): string;
        set_itemTemplateId(value: string): string;
        get_groupTemplateId(): string;
        set_groupTemplateId(value: string): string;
        get_itemBodyTemplateId(): string;
        set_itemBodyTemplateId(value: string): string;
        get_maxPagesBeforeCurrent(): number;
        set_maxPagesBeforeCurrent(value: number): number;
        get_maxPagesAfterCurrent(): number;
        set_maxPagesAfterCurrent(value: number): number;
        get_currentPageNumber(): number;
        set_currentPageNumber(value: number): number;
        get_showSortOptions(): boolean;
        set_showSortOptions(value: boolean): boolean;
        get_showLanguageOptions(): boolean;
        set_showLanguageOptions(value: boolean): boolean;
        get_repositionLanguageDropDown(): boolean;
        set_repositionLanguageDropDown(value: boolean): boolean;
        get_showPaging(): boolean;
        set_showPaging(value: boolean): boolean;
        get_showResults(): boolean;
        set_showResults(value: boolean): boolean;
        get_showBestBets(): boolean;
        set_showBestBets(value: boolean): boolean;
        get_showPersonalFavorites(): boolean;
        set_showPersonalFavorites(value: boolean): boolean;
        get_showDefinitions(): boolean;
        set_showDefinitions(value: boolean): boolean;
        get_showDidYouMean(): boolean;
        set_showDidYouMean(value: boolean): boolean;
        get_showAdvancedLink(): boolean;
        set_showAdvancedLink(value: boolean): boolean;
        get_showPreferencesLink(): boolean;
        set_showPreferencesLink(value: boolean): boolean;
        get_showResultCount(): boolean;
        set_showResultCount(value: boolean): boolean;
        get_showAlertMe(): boolean;
        set_showAlertMe(value: boolean): boolean;
        get_showViewDuplicates(): boolean;
        set_showViewDuplicates(value: boolean): boolean;
        get_pagingInfo(): any;
        get_shouldShowNoResultMessage(): boolean;
        get_advancedUrl(): string;
        set_advancedUrl(value: string): string;
        get_showUpScopeMessage(): boolean;
        set_showUpScopeMessage(value: boolean): boolean;
        get_scrollToTopOnRedraw(): boolean;
        set_scrollToTopOnRedraw(value: boolean): boolean;
        get_useSimplifiedQueryBuilder(): boolean;
        set_useSimplifiedQueryBuilder(value: boolean): boolean;
        get_preloadedItemTemplateIds(): string[];
        set_preloadedItemTemplateIds(value: string[]): string[];
        processResultReady(resultTableCollection: Microsoft.SharePoint.Client.Search.Query.ResultTableCollection): void;
        render(): void;
        scriptApplication_PreLoad(sender: any, e: any): void;
        sortOrRank(sortRankName: string): void;
        sort(sortName: string): void;
        changeQueryLanguage(queryLanguage: number): void;
        page(startAt: number): void;
        changeQueryTerm(queryTerm: any): void;
        viewDuplicates(docId: number): void;
        /** Returns true if the specified table has results and is enabled to be shown by this control */
        shouldShowTable(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
    }

    /** Represents the search box control */
    export class SearchBox extends ClientControl {
        constructor(elem: Element);

        /** Returns the current search term */
        get_currentTerm(): string;
        /** Sets the current search term.
          * Does not update results or even re-render control automatically, only sets the value.
          * You can call .renderControl() method to re-render control.
          */
        set_currentTerm(value: string): string;

        get_queryGroupNames(): string[];
        set_queryGroupNames(value: any): string[];

        /** Gets the results page address, e.g. '~site/_layouts/15/osssearchresults.aspx?u={contexturl}' */
        get_resultsPageAddress(): string;
        /** Sets the results page address, e.g. '~site/_layouts/15/osssearchresults.aspx?u={contexturl}'
          * Parameter u is used for setting the url filter for the search, so that only results within
          * e.g. specified site are returned. Omit this parameter if you want to search everywhere.
          */
        set_resultsPageAddress(value: string): string;

        get_showAdvancedLink(): boolean;
        set_showAdvancedLink(value: boolean): boolean;

        get_showQuerySuggestions(): boolean;
        set_showQuerySuggestions(value: boolean): boolean;

        get_showNavigation(): boolean;
        set_showNavigation(value: boolean): boolean;

        get_showPeopleNameSuggestions(): boolean;
        set_showPeopleNameSuggestions(value: boolean): boolean;

        /** Gets the interval in milliseconds, if user is idle during this interval, suggestions retrieval will be initiated.
         * Default value is 250.
         */
        get_querySuggestionCompletionInterval(): number;
        /** Sets the interval in milliseconds, if user is idle during this interval, suggestions retrieval will be initiated.
         * Default value is 250.
         */
        set_querySuggestionCompletionInterval(value: number): number;

        /** Gets minimum length of the search term for suggestions to be retrieved. Default is 2 letters. */
        get_querySuggestionMinimumPrefixLength(): number;
        /** Sets minimum length of the search term for suggestions to be retrieved. Default is 2 letters. */
        set_querySuggestionMinimumPrefixLength(value: number): number;

        /** Gets number of suggestions to display. Default is 5. */
        get_querySuggestionCount(): number;
        /** Sets number of suggestions to display. Default is 5. */
        set_querySuggestionCount(value: number): number;

        get_personalResultCount(): number;
        set_personalResultCount(value: number): number;

        get_advancedSearchPageAddress(): string;
        set_advancedSearchPageAddress(value: string): string;

        get_showPreferencesLink(): boolean;
        set_showPreferencesLink(value: boolean): boolean;

        get_serverInitialRender(): boolean;
        set_serverInitialRender(value: boolean): boolean;

        get_setFocusOnPageLoad(): boolean;
        set_setFocusOnPageLoad(value: boolean): boolean;

        get_allowEmptySearch(): boolean;
        set_allowEmptySearch(value: boolean): boolean;

        get_updatePageTitle(): boolean;
        set_updatePageTitle(value: boolean): boolean;

        get_pageTitlePrefix(): string;
        set_pageTitlePrefix(value: string): string;

        /** Gets the search input placeholder text */
        get_currentPrompt(): string;
        /** Sets the search input placeholder text */
        set_currentPrompt(value: string): string;

        get_initialPrompt(): string;
        set_initialPrompt(value: string): string;

        /** Gets the css class/classes of the placeholder text. Default is 'ms-srch-sb-prompt ms-helperText' */
        get_promptCssClass(): string;
        /** Sets the css class/classes of the placeholder text. Default is 'ms-srch-sb-prompt ms-helperText' */
        set_promptCssClass(value: string): string;

        get_tryInplaceQuery(): boolean;
        set_tryInplaceQuery(value: boolean): boolean;

        /** Gets the id of the search box input element */
        get_searchBoxInputId(): string;
        /** Sets the id of the search box input element */
        set_searchBoxInputId(value: string): string;

        get_searchBoxContainerId(): string;
        set_searchBoxContainerId(value: string): string;

        get_navigationButtonId(): string;
        set_navigationButtonId(value: string): string;

        get_suggestionsListId(): string;
        set_suggestionsListId(value: string): string;

        get_navigationListId(): string;
        set_navigationListId(value: string): string;

        get_searchBoxInputElement(): Element;

        get_searchBoxProgressClass(): string;
        set_searchBoxProgressClass(value: string): string;

        get_searchBoxContainerElement(): Element;

        get_searchBoxLinkId(): string;
        set_searchBoxLinkId(value: string): string;

        get_searchBoxLinkElement(): Element;

        get_navigationNodes(): any;
        set_navigationNodes(value: any): any;

        get_msBeforeShowingProgress(): number;
        set_msBeforeShowingProgress(value: number): number;

        get_maintainQueryState(): boolean;
        set_maintainQueryState(value: boolean): boolean;

        get_querySuggestionsSourceID(): string;
        set_querySuggestionsSourceID(value: string): string;

        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        serverTemplateScriptsCallback(): any;

        add_queryReady(value: any): void;
        remove_queryReady(value: any): void;
        raiseQueryReadyEvent(arg: any): void;

        add_batchQueryIssuing(value: any): void;
        remove_batchQueryIssuing(value: any): void;
        raiseBatchQueryIssuingEvent(arg: any): void;

        add_batchResultReady(value: any): void;
        remove_batchResultReady(value: any): void;
        raiseBatchResultReadyEvent(arg: any): void;

        dataProvider_QueryStateChanged(sender: any, e: any): void;
        dataProvider_QueryIssuing(sender: any, e: any): void;
        dataProvider_ResultReady(sender: any, e: any): void;

        search(term: string): void;
        hidePrompt(): void;
        showPrompt(): void;
        focus(): void;
        setBorder(focused: boolean): void;

        activate(prompt: string, searchBoxInputId: string, searchBoxContainerId: string, navigationButtonId: string, suggestionsListId: string, navigationListId: string, searchBoxLinkId: string, searchBoxProgressClass: string, searchBoxPromptClass: string): void;
        activateDefaultNavigationBehavior(): void;
        activateDefaultQuerySuggestionBehavior(): void;

    }

    export class U {
        /** Returns true if the value parameter is null or empty string */
        static e(value: string): boolean;
        /** Returns true if the value parameter is empty string */
        static w(value: any): boolean;
        /** Returns true if the value parameter is null or undefined */
        static n(value: any): boolean;
        /** Returns true if current page is in edit mode */
        static isPageInEditMode(): boolean;
        /** Returns true if current page is displayed in the Minimal Download Strategy (MDS) mode */
        static isPageInMdsMode(): boolean;

        static isPagePartialLoad(): boolean;
        /** Returns true if the current page uses right-to-left mode (RTL) */
        static isRTL(): boolean;

        /** Ensures that the given value is not null or undefined; throws an exception otherwise. */
        static ensureNotNullOrUndefined(value: any, context: any, methodName: string, paraName: string): void;
        /** Ensures that the given value is not null, undefined or empty; throws an exception otherwise. */
        static ensureNotNullOrEmptyString(value: string, context: any, methodName: string, paraName: string): void;
        /** Returns copy of the passed source dictionary */
        static copyDictionary(source: { [key: string]: any }): { [key: string]: any };
        /** Returns true if the obj parameter is null, undefined, number or string */
        static isPrimitive(obj: any): boolean;
        /** Returns true if the obj parameter is array */
        static isArray(obj: any): boolean;
        /** Safely pushes item to array (does nothing if the array is null or undefined) */
        static appendArray(array: any[], item: any): void;
        /** Safely sets field of an object (does nothing if either object or fieldName is null/empty); returns true if value was set */
        static setFieldOnObject(targetObject: any, fieldName: string, fieldValue: any): boolean;
        /** Safely gets field of an object (returns null if object is null or undefined) */
        static getFieldOnObject(targetObject: any, fieldName: string): any;
        /** Safely gets field of an object or creates it if it is null or undefined */
        static getOrCreateFieldOnObject(targetObject: any, fieldName: string, defaultValue: any): any;
        /** Safely gets field of an object (returns empty string instead of null as "getFieldOnObject") */
        static getStringFieldOnObject(targetObject: any, fieldName: string): string;
        /** Returns true if the specified item is found in the specified array (uses '===' for comparing) */
        static isInArray(array: any[], item: any): boolean;
        /** Removes the specified item from the specified array and returns array that has the deleted item */
        static removeArray(array: any[], item: any): any[];
        /** Removes trailing spaces and also replaces double spaces inside string to single spaces */
        static trimExtraSpaces(value: string): string;
        /** Adds the specified CSS class to element (if not there already) */
        static ensureCSSClassNameExist(e: Element, className: string): void;
        /** Removes the specified CSS class from the element */
        static ensureCSSClassNameNotExist(e: Element, className: string): void;
        /** Adds cookie with specified parameters */
        static setCookie(name: string, value: string, expires?: Date, domain?: string, path?: string): void;
        /** Gets cookie by name */
        static getCookie(name: string): string;
        /** Returns true if the specified URL belongs to the specified host name */
        static isSameHost(url: string, hostName: string): boolean;
        /** Returns the hostname of current page */
        static getHostName(): string;

        static trace(c: Srch.ClientControl, method: string, message: string): void;
        static traceFormatted(c: Srch.ClientControl, method: string, format: string, ...values: string[]): void;

        /** Same as $addHandler with safety checks */
        static addHandler(element: Element, eventName: string, handler: Function): void;
        /** Same as $removeHandler with safety checks */
        static removeHandler(element: Element, eventName: string, handler: Function): void

        /** Returns true if the specified element is a descendant of the container element */
        static isDescendant(element: Element, container: Element): boolean;
        /** Returns the closest to startingElement parent of the specified tag name */
        static getParentElementByName(startingElement: Element, tagName: string): Element;
        /** Returns the #s4-workspace element or if not found, then the fallback element */
        static getWorkspace(fallback: Element): Element;
        /** Returns specified by attributeName attribute of startingElement or of it's closest parent who has it */
        static getParentAttributeByName(startingElement: Element, attributeName: string): string;
        /** Returns the ClientControl associated with specified DOM element */
        static getClientComponent(e: Element): ClientControl;

        static getResultObject(id: string): any;
        static setResultObject(id: string, resultObject: any): any;
        static findResultObjectFromDOM(e: Element, type: string): any;

        /** Appends specified parameter key and value string to the specified URL */
        static appendUrlParameter(url: string, keyAndValue: string): string

        /** Ensures that the given URL protocol value is allowed. Returns the specified URL value if the protocol is allowed; empty string otherwise. */
        static ensureAllowedProtocol(value: string): string;
        /** Indicates whether the specified protocol is allowed. */
        static isProtocolAllowed(value: string, allowRelativeUrl: boolean): boolean;

        /** Returns true if the URL is a relative URL */
        static isUrlRelative(url: string): boolean;
        /** Returns true if the URL is a server-relative URL (i.e. starts with '/') */
        static isUrlServerRelative(url: string): boolean;
        /** Returns true if the URL is a relative URL, but not a server-relative URL */
        static isUrlPagelRelative(url: string): boolean;

        static logClick(e: any, clickType: any): void;
        static fillKeywordQuery(query: any, dp: any): void;

        /** Parses username out from SharePoint user field value */
        static getUsernameFromAuthorField(authorField: string): string;
        /** Parses user display name out from SharePoint user field value */
        static getDisplayNameFromAuthorField(authorField: string): string;
        /** Parses SharePoint array field value and returns array of strings */
        static getArray(value: string): string[];
        /** Converts file extension to a more friendly representation, e.g. 'doc' => 'file_Word' */
        static getFriendlyNameForFileExtension(fileExtension: string): string;
        /** Returns true if the fileExtension belongs to a webpage, e.g. 'ascx', 'aspx', 'html', 'php', etc.  */
        static isWebPage(fileExtension: string): boolean;
        /** Truncates the string to specified maximum allowed amount of characters (if max amount is not exceeded - does nothing) */
        static truncateEnd(original: string, maxChars: number): string;
        /** Returns true if specified by logoUrl image is one of default site logos */
        static isDefaultSiteLogo(logoUrl: string): boolean;
        /** Returns formatted date */
        static toFormattedDate(dateValue: Date, dateTimeFormatId?: string): string;
        /** Returns formatted number */
        static toFormattedNumber(num: number, defaultDecimalPlacesIfNotInt: number): string;
        /** If number is more than 1000, rounds up three last digits, e.g. 72389 => '72,000+'. If number is more than 100000, returns '100,000+' */
        static toFriendlyNumber(num: number): string;
        /** Returns human-readable size in kilobytes/megabytes etc. (the captions are localized) */
        static toFileSizeDisplay(numberOfBytes: number, showDecimalPart: boolean): string;

        static getVideoImageWithFallbackSource(valueObject: any, width: number, height: number): string;
        static getImageSourceWithRendition(imageInfo: any, width: number, height: number): string;
        static parseTypedRangeToken(rangeFilterToken: string, objToStoreFilterTokenType: any): any;
        static modifyMediaDurationRefinementName(resultRow: any): void;
        static getDeepLinks(deeplinks: string, maxRows: number): string;
        static truncateUrl(url: string, maxChars: number): string;
        static truncateHighlightedUrl(url: string, maxChars: number): string;

        /** Copies the specified string to clipboard, if possible */
        static copyLink(link: string): void;

        /** Registers display template function in the system.
         *  @param name Identifier of the template. Usually template is registered twice: by URL and by name.
         *  @param template The display template. It can be either string, or function, that gets the CSR context object and returns HTML string
          */
        static registerRenderTemplateByName(name: string, templateFunction: string | { (ctx: any): string }): void;
        /** Returns display template registered (can be either string or function) */
        static getRenderTemplateByName(name: string, renderCtx: any): string | { (ctx: any): string };

        static addRenderContextCallback(renderCtx: any, callbackType: any, callbackFunction: any, enforceUnique: any, templateFunction: any): void;
        static setItemRenderWrapper(renderCtx: any, itemRenderWrapperFunction: any, templateFunction: any): any;
        static logRenderingErrorMessageToContext(renderCtx: any, messageText: any, operationName: any): void;
        /** Gets the URL of template based on display template function or the rendering context */
        static getTemplateUrlFromFunctionOrRenderCtx(templateFunctionOrRenderCtx: any): string;
        static createErrorObjectWithExecContext(messageText: any, operationName: any, templateFuncOrRenderCtx: any): any;
        /** Returns the CSR template that was previously registered using 'registerRenderTemplateByName' based on CSR template level */
        static resolveRenderTemplate(renderCtx: any, component: ClientControl, level: 'Item' | 'Group' | 'View' | 'Body'): string | { (ctx: any): string };

        /** Returns formatted time string from seconds string, which contains a number that represents amount of seconds passed since 00:00:00 today */
        static getFormattedTimeFromSeconds(secondsStr: string): string;
        /** Returns true if the keyCode is \n or \r */
        static isEnterKey(keyCode: any): boolean;

        /** Prevents default event action and stops further propagation of the event in the DOM */
        static cancelEvent(e: Event): void;
        /** Prevents default event action or/and stops further propagation of the event in the DOM */
        static cancelEventEx(e: Event, preventDefault: boolean, stopPropagation: boolean): void;
        /** Gets a value from 'Properties' field object of the specified parent object */
        static getTableProperty(parent: any, propName: string): any;
        /** Concatenates two URL fragments and returns resulting URL */
        static concatUrl(firstPart: string, secondPart: string): string;
        /** Returns URL to the html16.png image */
        static getIconUrl(): string;
        /** Returns URL to the folder.gif image */
        static getFolderIconUrl(): string;
        /** Returns URL of the appropriate file image based on the file type identifier (see getFriendlyNameForFileExtension) */
        static getIconUrlByFileExtension(item: string, defaultIconPath?: string): string;

        /** Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying true for wide parameter. */
        static getShowHoverPanelCallbackWide(itemId: string, hpContainerId: string, templateUrl: string): string;
        /** Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying false for wide parameter. */
        static getShowHoverPanelCallback(itemId: string, hpContainerId: string, templateUrl: string): string;
        /** Returns string that contains safe call to HP.Hide */
        static getHideHoverPanelCallback(): string;

        static getHighlightedProperty(key: string, result: any, property: string): any;
        static processHHXML(pre: string): string;
        static createXMLDocument(xml: string): XMLDocument;
        static getUnEncodedMultiValuedResults(multiValue: string, maxItems: number, rawDelimiter: string): string;
        static getTrimmedString(value: string, cutOff: number): string;
        static trimTitle(title: string, maximumLengthInChars: number, numberOfTermsToUse: number): string;
        static extractReplyTitleFromSummary(hitHighlightedSummary: string, titleLength: number): string;
        static getTrimmedProcessedHHXMLString(value: string, cutOff: number): string;
        static getMultipleHHXMLNodeValues(xmlDoc: XMLDocument, nodeName: string, numItems: number, rawDelimiter: string): string;
        static getSingleHHXMLNodeValue(xmlDoc: XMLDocument, nodeName: string): string;
        static isTableTypeof(resultTable: any, tableTypeName: string): boolean;
        static isSubstrateTable(resultTable: any): boolean;
        static getTableOfType(tableCollection: Microsoft.SharePoint.Client.Search.Query.ResultTableCollection, tableTypeName: string): Microsoft.SharePoint.Client.Search.Query.ResultTable;
        static isFirstPromotedBlock(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
        static isFirstRankedBlock(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
        static isIntentTable(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
        static createBehavior(id: string, type: any, properties: any, targetElementId: string): any;

        /** Uses SPAnimation to animate an element */
        static animate(element: Element, animationID: any, finishFunc: any): void;
        static hideElement(element: Element): void;
        static showElement(element: Element): void;
        static positionElement(element: Element, offset: string): void;
        static resetElement(element: Element): void;
        static shouldAnimate(dp: any): boolean;
        static animateResults(result: Result, userAction: any): void;

        static loadScripts(scriptReferences: string[], success: any, failure: any, timeout: number): void;
        static appendScriptsToLoad(scripts: string[], script: string): void;
        static registerLoadedScripts(scripts: string[]): void;

        /** Returns HTML for collapsible refiner title */
        static collapsibleRefinerTitle(propertyName: string, idPrefix: string, title: string, iconClass: string, customOnClick: string): string;
        /** Returns true if current page is osssearchresults.aspx */
        static isDefaultSiteSearchPage(): boolean;
        /** Replaces tokens {searchcenterurl}, {contexturl}, {resultsurl}, {defaultpageslistname}, {Locale} and others, and converts URL to server-relative */
        static replaceUrlTokens(url: string): string;
        /** Adds ctag parameter to the URL and replaces URL tokens */
        static urlTokenExpansion(jsLink: string): string;

        static includeCSS(templateLink: string, relativeLink: string): void;
        static includeScript(templateLink: string, scriptLink: string): void;
        static includeLanguageScript(templateLink: string, scriptLink: string): void;

        static isSPFSKU(): boolean;
        /** Retrieves localized string with the specified id */
        static loadResource(id: string): string;
        /** Retrieves localized string with the specified id */
        static loadResourceForTemplate(id: string, templateFunc: { (ctx: any): string }): string;
        /** Registers in system resources defined by the dictionary object */
        static registerResourceDictionary(locale: string, dict: { [key: string]: string }): void;

        static restorePath(el: Element, originalText: string, selectText: string): void;
        static selectPath(text: string, el: Element): void;
        static setPath(e: Event, el: Element, text: string, originalText: string): void;
        static restoreText(el: Element, originalText: string, selectText: string): void;
        static selectText(text: string, el: Element): void;

        /** Renders datetime value in friendly format into element specified by targetElementID */
        static renderFriendlyTimeIntervalString(dateTimeSinceUTC: Date, targetElementID: string, calendarType?: number): void;
        /** Returns human-friendly representation of the datetime value, e.g. "A few seconds ago"" */
        static getFriendlyTimeInterval(dateTimeSince: Date, calendarType: number): string;
        /** Gets calendar type according to the current regional settings */
        static getCalendarType(): any;

        static htmlEncodeNonBase64ImageUrl(url: string): string;

        static hitHighlightingOpenTag: string;
        static hitHighlightingCloseTag: string;
        static titleTruncationLength: number;
        static titleTruncationLengthWithMetadata: number;
        static titleTruncationLengthWithPreview: number;
        static summaryTruncationLength: number;
        static summaryTruncationLengthWithPreview: number;
        static pathTruncationLength: number;
        static pathTruncationLengthWithPreview: number;
        static pathTruncationLengthWithMetadata: number;
        static personaControlRenderedThreshold: number;
        static maximumSocialMetadataValue: number;
        static contentFixedWidthLength: number;
    }

    export module U {
        export class PropNames {
            static renderTemplates: 'RenderTemplates';
            static renderTemplateId: 'RenderTemplateId';
            static tableType: 'TableType';
            static queryErrors: 'QueryErrors';
            static resultTables: 'ResultTables';
            static resultRows: 'ResultRows';
            static queryId: 'QueryId';
            static properties: 'Properties';
            static rowCount: 'RowCount';
            static totalRows: 'TotalRows';
            static totalRowsIncludingDuplicates: 'TotalRowsIncludingDuplicates';
            static queryRuleId: 'QueryRuleId';
            static parentTableReference: 'ParentTableReference';
            static isFirstPinnedBlock: 'IsFirstPinnedResultBlock';
            static isFirstRankedBlock: 'IsFirstRankedResultBlock';
        }

        export class Ids {
            static group: '_group';
            static groupTitle: '_groupTitle';
            static groupLink: '_groupLink';
            static groupContent: '_groupContent';
            static item: '_item';
            static body: '_itemBody';
            static title: '_itemTitle';
            static icon: '_itemIcon';
            static titleLink: '_itemTitleLink';
            static summary: '_itemSummary';
            static path: '_itemPath';
            static hover: '_hover';
            static visualBestBet: '_visualBestBet';
            static preview: '_itemPreview';
            static deepLinks: '_deepLinks';
            static members: '_members';
            static replies: '_replies';
            static discussions: '_discussions';
            static likes: '_likes';
            static postInfo: '_postInfo';
        }

        export class LoadScriptsState {
            scriptsToLoad: any;
            progress: number;
            timeoutHandle: any;
        }

        export enum LoadScriptsProgress {
            loading,
            success,
            failure
        }
    }

    export class ScriptApplicationManager {
        static get_current(): ScriptApplicationManager;
        static get_clientRuntimeContext(): SP.ClientRuntimeContext;
        /** Returns server-relative link to _layouts/EditUserPref.aspx */
        get_preferencesUrl(): string;
        /** Returns server-relative link to _layouts/manageresulttypes.aspx */
        get_resultTypesUrl(): string;
        /** Returns server-relative link to _layouts/DesignDisplayTemplates.aspx */
        get_displayTemplatesUrl(): string;
        /** Returns server-relative link to _layouts/listqueryrules.aspx */
        get_queryRulesUrl(): string;
        /** Returns server-relative link to _layouts/manageresultsources.aspx */
        get_resultSourcesUrl(): string;
        /** Returns absolute URL of the current page (without ? and # parts) */
        get_pagePath(): string;

        /** Adds handler for the preload event */
        add_preLoad(handlerFunction: Function): void;
        /** Removes handler for the preload event */
        remove_preLoad(handlerFunction: Function): void;
        /** Raises the preload event */
        raisePreLoadEvent(): void;

        /** Adds handler for the load event */
        add_load(handlerFunction: Function): void;
        /** Removes handler for the load event */
        remove_load(handlerFunction: Function): void;
        /** Raises the load event */
        raiseLoadEvent(): void;

        /** Adds handler for the postload event */
        add_postLoad(handlerFunction: Function): void;
        /** Removes handler for the postload event */
        remove_postLoad(handlerFunction: Function): void;
        /** Raises the postload event */
        raisePostLoadEvent(): void;

        initialize(): void;
        dispose(): void;

        /** Registers DisplayControl, DataProvider or SearchBox in the system.
         * After registration the controls will be correctly processed in the page search context.
         */
        registerClientControl(clientControl: DisplayControl | DataProvider | SearchBox): void;

        /** Puts specified hash-key address into the current page location.
         * @param url The hash-key, e.g. '#k=test'
         */
        navigateTo(url: string): void;

        /** Gets the current search session ID from the cookies (if session ID does not exist in the cookies yet - it will be added) */
        get_searchSessionID(): void;
    }

    export class Res {
        static sb_ResultsPageTitle: string;
        static sb_EmptyQueryWarning: string;
        static sb_InvalidResultPageURL: string;
        static sb_SitePrompt: string;
        static sb_Prompt: string;
        static sb_Prompt_NavNode: string;
        static sb_GoSearch: string;
        static sb_GoNav: string;
        static sb_AdvancedLink: string;
        static sb_PreferencesLink: string;
        static sb_AccessKey: string;
        static sb_SearchInProgress: string;
        static qs_PersonalResultTitleSingular: string;
        static qs_PersonalResultTitlePlural: string;
        static qs_NameSuggestionsTitle: string;
        static dp_ScriptLoadFailed: string;
        static rf_EmptyRefinement: string;
        static rf_RefinementTitle: string;
        static rf_RefineBy: string;
        static rf_All: string;
        static rf_RefineByAuthorGoButton: string;
        static rf_Apply: string;
        static rf_AddProperty: string;
        static rs_ResultsTitle: string;
        static rs_MoveToPage: string;
        static rs_MoveToPrevPage: string;
        static rs_MoveToNextPage: string;
        static rs_GroupMoreLink: string;
        static rs_Hide_Results: string;
        static qb_GetRecItems: string;
        static qb_ScopeRecItems: string;
        static qb_GetFillIn: string;
        static qb_ShowRecsOnly: string;
        static qb_FillInPopular: string;
        static qb_FillInPopularScope: string;
        static qb_FillInKeywords: string;
        static qb_NoCollapseString: string;
        static qb_ShowAllCollapseString: string;
        static qb_ShowRefinersOnly: string;
        static qb_RecsFromURLToken: string;
        static qb_Remove: string;
        static qb_FallbackResultTitle: string;
        static rf_DefaultNumberLabels_min: string;
        static rf_DefaultNumberLabels_max: string;
        static rf_DefaultNumberLabels_range: string;
        static rf_DefaultNumberLabels_value: string;
        static rf_DefaultDateRangeLabels_min: string;
        static rf_DefaultDateRangeLabels_max: string;
        static rf_DefaultDateRangeLabels_range: string;
        static rf_DefaultDateRangeLabels_value: string;
        static rf_DefaultDateBoundaryLabels_0: string;
        static rf_DefaultDateBoundaryLabels_1: string;
        static rf_DefaultDateBoundaryLabels_2: string;
        static rf_DefaultDateBoundaryLabels_3: string;
        static rf_RangeBoundariesAnyValue: string;
        static rf_RefinementTitle_Author: string;
        static rf_RefinementTitle_AuthorOWSUSER: string;
        static rf_RefinementTitle_Write: string;
        static rf_RefinementTitle_LastModifiedTime: string;
        static rf_RefinementTitle_owstaxidmetadataalltagsinfo: string;
        static rf_RefinementTitle_owsmetadatafacetinfo: string;
        static rf_RefinementTitle_languages: string;
        static rf_RefinementTitle_ContentType: string;
        static rf_RefinementTitle_Size: string;
        static rf_RefinementTitle_UrlDepth: string;
        static rf_RefinementTitle_People: string;
        static rf_RefinementTitle_FileType: string;
        static rf_RefinementTitle_FileExtension: string;
        static rf_RefinementLabel_More: string;
        static rf_ShowMoreResults_Tooltip: string;
        static rf_RefinementLabel_Less: string;
        static rf_RefinementLabel_EnterName: string;
        static rf_RefinementTitle_CreatedBy: string;
        static rf_RefinementTitle_from: string;
        static rf_RefinementTitle_recipients: string;
        static rf_RefinementTitle_subject: string;
        static rf_RefinementTitle_Kind: string;
        static rf_RefinementTitle_ContentClass: string;
        static rf_RefinementTitle_WebTemplate: string;
        static rf_RefinementTitle_participants: string;
        static rf_RefinementTitle_AttachmentType: string;
        static rf_RefinementTitle_BaseOfficeLocation: string;
        static rf_RefinementTitle_companies: string;
        static rf_RefinementTitle_ContentTypeId: string;
        static rf_RefinementTitle_Created: string;
        static rf_RefinementTitle_Department: string;
        static rf_RefinementTitle_PeopleKeywords: string;
        static rf_RefinementTitle_DisplayAuthor: string;
        static rf_RefinementTitle_format: string;
        static rf_RefinementTitle_ImageDateCreated: string;
        static rf_RefinementTitle_JobTitle: string;
        static rf_RefinementTitle_Location: string;
        static rf_RefinementTitle_locations: string;
        static rf_RefinementTitle_ManagedProperties: string;
        static rf_RefinementTitle_MediaDuration: string;
        static rf_RefinementTitle_PeopleInMedia: string;
        static rf_RefinementTitle_personnames: string;
        static rf_RefinementTitle_PictureHeight: string;
        static rf_RefinementTitle_PictureWidth: string;
        static rf_RefinementTitle_PostAuthor: string;
        static rf_RefinementTitle_recommendedfor: string;
        static rf_RefinementTitle_Responsibilities: string;
        static rf_RefinementTitle_SharedWithInternal: string;
        static rf_RefinementTitle_Site: string;
        static rf_RefinementTitle_sitename: string;
        static rf_RefinementTitle_Tags: string;
        static rf_RefinementTitle_Title: string;
        static rf_ResultTypeRefinerValue_MSAccess: string;
        static rf_ResultTypeRefinerValue_AdobePDF: string;
        static rf_ResultTypeRefinerValue_Assignment: string;
        static rf_ResultTypeRefinerValue_Archive: string;
        static rf_ResultTypeRefinerValue_Blog: string;
        static rf_ResultTypeRefinerValue_Book: string;
        static rf_ResultTypeRefinerValue_Community: string;
        static rf_ResultTypeRefinerValue_Course: string;
        static rf_ResultTypeRefinerValue_Discussion: string;
        static rf_ResultTypeRefinerValue_Email: string;
        static rf_ResultTypeRefinerValue_MSExcel: string;
        static rf_ResultTypeRefinerValue_Image: string;
        static rf_ResultTypeRefinerValue_Lesson: string;
        static rf_ResultTypeRefinerValue_LotusNotes: string;
        static rf_ResultTypeRefinerValue_NewsfeedPost: string;
        static rf_ResultTypeRefinerValue_MSOneNote: string;
        static rf_ResultTypeRefinerValue_MSPowerPoint: string;
        static rf_ResultTypeRefinerValue_MSProject: string;
        static rf_ResultTypeRefinerValue_MSPublisher: string;
        static rf_ResultTypeRefinerValue_SharePointSite: string;
        static rf_ResultTypeRefinerValue_Task: string;
        static rf_ResultTypeRefinerValue_TeamSite: string;
        static rf_ResultTypeRefinerValue_Text: string;
        static rf_ResultTypeRefinerValue_Video: string;
        static rf_ResultTypeRefinerValue_Visio: string;
        static rf_ResultTypeRefinerValue_Wiki: string;
        static rf_ResultTypeRefinerValue_Webpage: string;
        static rf_ResultTypeRefinerValue_MSWord: string;
        static rf_ResultTypeRefinerValue_XML: string;
        static rf_OtherValue: string;
        static rf_ClearAll: string;
        static cc_err_WebPartErrorMessageDisplayHeader: string;
        static cc_err_DataErrorMessageDisplayHeader: string;
        static cc_err_RenderingErrorMessageDisplayHeader: string;
        static cc_err_TemplateNotFoundMessage: string;
        static cc_err_HiddenWithNoResultsWarningMessage: string;
        static cc_err_ShowMessageDetails: string;
        static cc_err_HideMessageDetails: string;
        static cc_err_CorrelationIdMessage: string;
        static cc_err_CustomLocStringWarningDisplayHeaderFormat: string;
        static cc_err_NoCustomLoadedLocStringWarningDisplayHeaderFormat: string;
        static cc_err_MalformedHeader: string;
        static cc_err_QueryThrottledDetailsHeader: string;
        static cc_ValueRenderer_FileSizeKilobyte: string;
        static cc_ValueRenderer_FileSizeMegabyte: string;
        static cc_ValueRenderer_FileSizeGigabyte: string;
        static cc_ValueRenderer_BooleanYes: string;
        static cc_ValueRenderer_BooleanNo: string;
        static qb_SortTab_ThenBy: string;
        static qb_SortTab_ChangeRankingWhen: string;
        static qb_SortTab_OrWhen: string;
        static qb_TestQueryTab_ShowAdvanced: string;
        static qb_TestQueryTab_HideAdvanced: string;
        static recs_ControlTitle: string;
        static recs_ShowDetails: string;
        static recs_SaveLink: string;
        static recs_Open: string;
        static recs_Recommended: string;
        static recs_Fillin: string;
        static recs_LastEditedBy: string;
        static recs_Location: string;
        static recs_AltIcon: string;
        static pkr_CatalogPickerMoreLink: string;
        static pkr_CatalogPickerMoreLinkToolTip: string;
        static pkr_CatalogPickerSelectLinkToolTip: string;
        static item_CopyLink: string;
        static item_Tooltip_CopyLink: string;
        static item_Alt_Preview: string;
        static hp_Tooltip_Close: string;
        static hp_Size: string;
        static hp_Views_Singular: string;
        static hp_Views_Plural: string;
        static hp_ViewsLifeTime: string;
        static hp_Popularity: string;
        static hp_PopularityLifeTimePlural: string;
        static hp_PopularityLifeTimePluralAndRecentPlural: string;
        static hp_PopularityLifeTimeSingular: string;
        static hp_PopularityLifeTimeSingularAndRecentSingular: string;
        static hp_PopularityLifeTimePluralAndRecentSingular: string;
        static hp_Tooltip_ViewsLifeTime: string;
        static hp_Tooltip_ViewsRecent: string;
        static hp_ChangedByAuthorDate: string;
        static hp_Tooltip_Views: string;
        static hp_LastModified: string;
        static hp_Tooltip_LastModified: string;
        static hp_RecentlyEdited: string;
        static hp_Tooltip_Contributors: string;
        static hp_Authors2: string;
        static hp_Authors3: string;
        static hp_Authors4: string;
        static hp_Authors5Singular: string;
        static hp_Authors5Plural: string;
        static hp_RecentlyEdited_eDiscovery: string;
        static hp_Tooltip_RecentlyEdited_More: string;
        static hp_RecentlyEdited_More: string;
        static hp_ViewDuplicates: string;
        static hp_Tooltip_ViewDuplicates: string;
        static hp_ViewLibrary: string;
        static hp_Tooltip_ViewLibrary: string;
        static hp_Send_Title: string;
        static hp_Send_Open: string;
        static hp_Send_OpenInClient: string;
        static hp_Send_OpenInWeb: string;
        static hp_Send_ViewRelated: string;
        static hp_Send: string;
        static hp_Tooltip_Send: string;
        static hp_OpenInClient: string;
        static hp_Edit: string;
        static hp_Follow: string;
        static hp_NoData: string;
        static hp_Tooltip_OpenInClient: string;
        static hp_Alt_ImagePreview: string;
        static hp_PictureDimensions: string;
        static hp_PictureHeightWidth: string;
        static hp_DateTaken: string;
        static hp_SectionHeadings: string;
        static hp_Alt_SiteLogo: string;
        static hp_SiteDescription: string;
        static hp_Open: string;
        static hp_Tooltip_Open: string;
        static hp_Tooltip_Follow: string;
        static hp_Tooltip_StopFollowing: string;
        static tprprt_Recent: string;
        static tprprt_Lifetime: string;
        static tprprt_excel_report_entrypoint: string;
        static qb_token_Equals: string;
        static qb_token_NotEquals: string;
        static qb_token_GreaterThan: string;
        static qb_token_LessThan: string;
        static qb_token_Contains: string;
        static qb_token_NotContains: string;
        static qb_token_ContainsStartsWith: string;
        static qb_token_StartsWith: string;
        static qb_token_NotStartsWith: string;
        static qb_token_SiteColletion: string;
        static qb_token_Site: string;
        static qb_token_Page: string;
        static qb_token_Topic: string;
        static qb_token_TopicIdWithChildren: string;
        static qb_token_UserName: string;
        static qb_token_PreferredContentLanguage: string;
        static qb_token_Date: string;
        static qb_token_SearchBoxQuery: string;
        static qb_token_SearchTerms: string;
        static qb_token_QueryString: string;
        static qb_token_URLToken: string;
        static qb_token_PageField: string;
        static qb_token_SiteLocale: string;
        static qb_token_DisplayLanguage: string;
        static qb_token_OnlySites: string;
        static qb_token_OnlyLists: string;
        static qb_token_OnlyListItems: string;
        static qb_path_SiteCollection: string;
        static qb_path_Site: string;
        static qb_path_Page: string;
        static qb_path_List: string;
        static qb_path_Catalog: string;
        static qb_path_QueryString: string;
        static qb_path_URL_token: string;
        static qb_path_URL: string;
        static qb_path_None: string;
        static qb_ContentType_Article: string;
        static qb_ContentType_Audio: string;
        static qb_ContentType_DocSet: string;
        static qb_ContentType_Page: string;
        static qb_ContentType_Picture: string;
        static qb_ContentType_Report: string;
        static qb_ContentType_Task: string;
        static qb_ContentType_Video: string;
        static qb_ContentType_WikiPage: string;
        static qb_PathControl_ChooseQueryString: string;
        static qb_PathControl_ChooseURL: string;
        static qb_PathControl_ChooseTag: string;
        static qb_PathControl_ChooseTag_None: string;
        static qb_PathControl_ChooseTag_ThisTag: string;
        static qb_PathControl_ChooseTag_Topic: string;
        static qb_PathControl_ChooseTag_SubTopic: string;
        static qb_UserQuery_TypeQuery: string;
        static qb_UserQuery_Properties: string;
        static qb_UserQuery_AddToken: string;
        static qb_UserQuery_ChooseContentType: string;
        static qb_UserQuery_AddAdditionalFilter: string;
        static qb_UserQuery_ChooseSort: string;
        static qb_UserQuery_PickCatalog2: string;
        static qb_UserQuery_ConfigureCatalog: string;
        static qb_UserQuery_ManualValue: string;
        static qb_UserQuery_SelectProperty: string;
        static qb_UserQuery_SelectValue: string;
        static qb_UserQuery_ShowAllProperties: string;
        static qb_QueryType_UserQuery: string;
        static qb_QueryType_Latest: string;
        static qb_QueryType_ContentType: string;
        static qb_QueryType_RecommendedItems: string;
        static qb_QueryType_Popular: string;
        static qb_QueryType_Video: string;
        static qb_QueryType_Catalog: string;
        static qb_Error_SourceIdInvalid: string;
        static qb_Tab_FilterBy: string;
        static qb_Tab_QueryHelper: string;
        static qb_Tab_SortBy: string;
        static qb_Tab_TestQuery: string;
        static qb_Tab_Settings: string;
        static qb_NotApplicable: string;
        static qb_ComplexObject: string;
        static qb_PreviewResult_NoTemplateVariables: string;
        static qb_PreviewResult_CouldNotResolveTemplateVariables: string;
        static qb_PreviewResult_ErrorExpandTokens: string;
        static qb_PreviewResult_EmptyQuery: string;
        static searchResult_NoResult: string;
        static qb_CatalogPicker_Title: string;
        static qb_UseDefinedSort: string;
        static hp_Duration: string;
        static hp_PeopleInVideo: string;
        static hp_PostedBy: string;
        static hp_VideoDescription: string;
        static hp_GoToVideoPage: string;
        static item_Community_Member: string;
        static item_Community_Members: string;
        static item_Community_MemberLabel: string;
        static item_Community_MembersLabel: string;
        static item_Reply: string;
        static item_Replies: string;
        static item_ReplyLabel: string;
        static item_RepliesLabel: string;
        static item_NoReplies: string;
        static item_Like: string;
        static item_Likes: string;
        static item_NoLikes: string;
        static item_RepliesAndLikes: string;
        static item_MoreThan: string;
        static item_DefaultTitle: string;
        static item_BestReply: string;
        static item_postDate: string;
        static item_postAuthor: string;
        static item_postAuthorDate: string;
        static item_replyDate: string;
        static item_replyAuthor: string;
        static item_replyAuthorDate: string;
        static item_Community_Discussion: string;
        static item_Community_Discussions: string;
        static item_Community_DiscussionLabel: string;
        static item_Community_DiscussionsLabel: string;
        static hp_Discussion: string;
        static hp_DiscussionCategory: string;
        static hp_Reply: string;
        static hp_ReplyCategory: string;
        static hp_PopularDiscussions: string;
        static hp_OriginalPost: string;
        static hp_RecentReplies: string;
        static hp_ViewDiscussion: string;
        static hp_ViewConversation: string;
        static hp_Community: string;
        static hp_VisitCommunity: string;
        static hp_MicroBlog: string;
        static item_MicroBlog_Reply: string;
        static item_MicroBlog_Replies: string;
        static item_MicroBlog_Like: string;
        static item_MicroBlog_Likes: string;
        static item_MicroBlog_NoReplies: string;
        static item_MicroBlog_SeeFullConversation: string;
        static item_MicroBlog_RootPostTitle: string;
        static item_People_Responsibilities: string;
        static item_People_Skills: string;
        static item_People_PastProjects: string;
        static item_People_Interests: string;
        static item_People_Schools: string;
        static item_People_Memberships: string;
        static item_People_EditProfileLink: string;
        static item_People_SelfSearchFrequency: string;
        static item_People_SelfSearchFrequency_ViewsMonths_Singular: string;
        static item_People_SelfSearchFrequency_ViewsMonths_Plural: string;
        static item_People_SelfSearchFrequency_ViewsWeeks_Singular: string;
        static item_People_SelfSearchFrequency_ViewsWeeks_Plural: string;
        static item_People_SelfSearchKeywords: string;
        static item_People_LastModified: string;
        static item_People_NoPresenceAvailable: string;
        static hp_PeopleItem_Skills: string;
        static hp_PeopleItem_PastProjects: string;
        static hp_PeopleItem_Interests: string;
        static hp_PeopleItem_Schools: string;
        static hp_PeopleItem_Summary: string;
        static hp_PeopleItem_Memberships: string;
        static hp_PeopleItem_Authorship: string;
        static hp_PeopleItem_RelatedThrough: string;
        static hp_PeopleItem_MoreItems: string;
        static hp_PeopleItem_Related: string;
        static hp_PeopleItem_NoInformationAvailable: string;
        static hp_PeopleItem_ViewProfile: string;
        static hp_WebPageItem_Results: string;
        static hp_WebPageItem_MoreResults_Label: string;
        static rs_Preferences: string;
        static rs_Advanced: string;
        static rs_NoResult: string;
        static rs_SingleResultCount: string;
        static rs_ResultCount: string;
        static rs_ApproximateResultCount: string;
        static rs_EdiscoveryTopResultCount: string;
        static rs_UpscopeTitle: string;
        static rs_Upscope: string;
        static rs_DidYouMean: string;
        static rs_Edit_ResultSourcesTitle: string;
        static rs_Edit_ResultTypesTitle: string;
        static rs_Edit_QueryRulesTitle: string;
        static rs_Edit_ResultSourcesDescription: string;
        static rs_Edit_ResultSources: string;
        static rs_Edit_ResultTypesDescription: string;
        static rs_Edit_ResultType: string;
        static rs_Edit_DisplayTemplate: string;
        static rs_Edit_QueryRulesDescription: string;
        static rs_Edit_QueryRules: string;
        static rs_Edit_PromotedTitle: string;
        static rs_Edit_RankedTitle: string;
        static rs_Edit_PromotedDescription: string;
        static rs_Edit_RankedDescription: string;
        static rs_Edit_ConfigureSearchResults: string;
        static rs_Edit_ConfigureSearchResults_Link: string;
        static rs_NoResultsTitle: string;
        static rs_NoResultsMessageWhenSearchSkipped: string;
        static rs_NoResultsSuggestions: string;
        static rs_NoResultsSpelling: string;
        static rs_NoResultsDifferentTerms: string;
        static rs_NoResultsGeneralTerms: string;
        static rs_NoResultsFewerTerms: string;
        static rs_NoResultsRefiners: string;
        static rs_NoResultsTips: string;
        static rs_NoResultsTips_Link: string;
        static us_NoTerm_Error: string;
        static u_ScriptLoadFail: string;
        static u_ScriptLoadFailForViewer: string;
        static item_NoImageMessage: string;
        static control_NoResultsDisplayMode: string;
        static control_NoResultsEditMode: string;
        static file_CSS: string;
        static file_Help: string;
        static file_Installer: string;
        static file_JavaScript: string;
        static file_Log: string;
        static file_Mail: string;
        static file_Access: string;
        static file_Excel: string;
        static file_InfoPath: string;
        static file_OneNote: string;
        static file_PowerPoint: string;
        static file_Project: string;
        static file_Publisher: string;
        static file_SPDesigner: string;
        static file_Visio: string;
        static file_Word: string;
        static file_XPS: string;
        static file_Audio: string;
        static file_RTF: string;
        static file_Text: string;
        static file_WebPage: string;
        static file_XML: string;
        static file_XSL: string;
        static file_Zip: string;
        static ct_Folder: string;
        static ct_Image: string;
        static file_Document: string;
        static cc_sts_list_announcements: string;
        static cc_sts_list_events: string;
        static cc_sts_list_contacts: string;
        static cc_sts_list_discussionboard: string;
        static cc_sts_list_documentlibrary: string;
        static cc_sts_listitem_documentlibrary: string;
        static cc_sts_list_links: string;
        static cc_sts_list: string;
        static cc_sts_listitem: string;
        static cc_sts_list_picturelibrary: string;
        static cc_sts_listitem_picturelibrary: string;
        static cc_sts_web: string;
        static cc_sts_site: string;
        static cc_sts_list_survey: string;
        static cc_sts_list_tasks: string;
        static cc_sts_list_xmlform: string;
        static rs_SortDescription: string;
        static rs_SocialDistanceSort: string;
        static rs_LanguageDescription: string;
        static rs_LanguagePreferences: string;
        static rs_PreferredSearchLanguage: string;
        static rs_MoreLanguages: string;
        static rs_SearchScope: string;
        static rs_SearchScopeTooltip: string;
        static rs_SelectPreferredSearchLanguage: string;
        static rs_SelectPreferredSearchLanguage_Language: string;
        static edu_BookAuthor: string;
        static edu_BookCategory: string;
        static edu_BookRights: string;
        static edu_BookReleaseDate: string;
        static edu_BookHomePageLink: string;
        static edu_Class: string;
        static edu_AssignmentCategory: string;
        static edu_AssignmentFormat: string;
        static edu_AssignmentFormatNone: string;
        static edu_AssignmentFormatOnlineFile: string;
        static edu_AssignmentFormatOnlineQuiz: string;
        static edu_AssignmentFormatInClass: string;
        static edu_AssignmentFormatUnknown: string;
        static edu_AssignmentMaxPoints: string;
        static edu_DueDate: string;
        static edu_ReadPermission: string;
        static edu_PrintPermission: string;
        static edu_WritePermission: string;
        static edu_EnableScriptPermission: string;
        static edu_AssignmentLabel: string;
        static edu_LessonLabel: string;
        static edu_BookLabel: string;
        static rf_RefinementTitle_DMSDocAuthor: string;
        static rf_RefinementTitle_DMSCategory: string;
        static rf_RefinementTitle_EDiscSpecifyProperty: string;
        static refconf_NoSampleValues: string;
        static refconf_SortBy_Name: string;
        static refconf_SortBy_Number: string;
        static refconf_SortBy_Count: string;
        static refconf_SortDirection_Ascending: string;
        static refconf_SortDirection_Descending: string;
        static refconf_Error_FailedToRestoreConfiguration: string;
        static refconf_Section_SuggestedRefiners: string;
        static refconf_Section_OtherRefiners: string;
        static refconf_Section_Separator: string;
        static refconf_SampleValuesDialog_Title: string;
        static refconf_ResultsWithValues: string;
        static refconf_TotalResults: string;
        static refconf_FNT_ConfigurationLoadFailure: string;
        static refconf_FNT_ConfigurationLoadWarning: string;
        static refconf_FNT_ConfigurationLoadWarningNullResponse: string;
        static refconf_FNT_InheritModeTermInfoSingularFormatString: string;
        static refconf_FNT_DCR_InheritModeAnotherTermset: string;
        static refconf_FNT_DCR_CustomRefiners: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsTotal: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsNotInheriting: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheriting: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheritingLinkAnchor: string;
        static refconf_FNT_DCR_StopInheritingPopupTitle: string;
        static refconf_FNT_DCR_InheritPopupTitle: string;
        static refconf_FNT_DCR_RefinementConfigurationDialogTitle: string;
        static refconf_FNT_DCR_LoadingConfiguration: string;
        static refconf_FNT_DCR_DescendantStoppingInheritancePopupTitle: string;
        static refconf_FNT_DCR_UseManualIntervals: string;
        static refconf_FNT_DCR_RefinementPreviewPopupTitle: string;
        static refconf_FNT_DCR_PropertiesForFriendly: string;
        static refconf_FNT_DCR_PropertiesFor: string;
        static refconf_FNT_DCR_TotalResultsTooltip: string;
        static refconf_FNT_DCR_GeneratingPreview: string;
        static refconf_DCR_Yes: string;
        static refconf_DCR_No: string;
        static refconf_DCR_FacetedNavigationProgressTitle: string;
        static refconf_DCR_RefinementConfigurationDialogProgressTitle: string;
        static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltip: string;
        static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipNoAliases: string;
        static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipSeparator: string;
        static refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Warning: string;
        static refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Error: string;
        static refconf_DCR_RefinementConfigurationDialog_NoSuggestedRefiners_Warning: string;
        static refconf_DCR_RefinementConfigurationDialog_InvalidSelectedRefiner_Warning: string;
        static edisc_MultiValueFormat: string;
        static edisc_NoSubject: string;
        static edisc_ControlPagingFormat: string;
        static hp_Summary: string;
        static rf_DefaultMinutesLabels_min: string;
        static rf_DefaultMinutesLabels_max: string;
        static rf_DefaultMinutesLabels_range: string;
        static rf_DefaultMinutesLabels_value: string;
        static hp_NowDateTime_Today: string;
        static hp_NowDateTime_Yesterday: string;
        static hp_NowDateTime_MonthAgo: string;
        static hp_NowDateTime_YearAgo: string;
        static hp_NowDateTime_DaysAgo: string;
        static hp_NowDateTime_MonthsAgo: string;
        static hp_NowDateTime_YearsAgo: string;
        static rs_UpScopeActionPhrase: string;
        static control_Content_NoResultsDisplayMode: string;
        static control_RollupPage_NoResultsDisplayMode: string;
        static control_Content_NoResultsEditMode: string;
        static item_Diagnostic_PictureSlot: string;
        static item_Diagnostic_PathSlot: string;
        static item_Diagnostic_Preview: string;
        static item_Diagnostic_Value: string;
        static item_Diagnostic_MappedManagedProperty: string;
        static item_Diagnostic_PropertyMappings: string;
        static item_Diagnostic_SlotNameFormat: string;
        static item_Diagnostic_ItemTitleFormat: string;
        static hp_Preview_LoadingImgAlt: string;
        static rf_EDiscExTypeRefinerValue_Email: string;
        static rf_EDiscExTypeRefinerValue_Contacts: string;
        static rf_EDiscExTypeRefinerValue_Meetings: string;
        static rf_EDiscExTypeRefinerValue_Tasks: string;
        static rf_EDiscExTypeRefinerValue_Notes: string;
        static rf_EDiscExTypeRefinerValue_Documents: string;
        static rf_EDiscExTypeRefinerValue_Journal: string;
        static rf_EDiscExTypeRefinerValue_IM: string;
        static control_EDisc_Subject: string;
        static control_EDisc_Recipients: string;
        static control_EDisc_Sender: string;
        static control_EDisc_DateSent: string;
        static control_EDisc_Title: string;
        static control_EDisc_Author: string;
        static control_EDisc_DateModified: string;
        static hp_EDisc_Cc: string;
        static hp_EDisc_Bcc: string;
        static item_Content_GenericNoImageSymbol: string;
        static hp_EDisc_From: string;
        static hp_EDisc_To: string;
        static hp_EDisc_AttachmentsTooltip: string;
        static control_EDisc_DateSentTooltip: string;
        static rs_AlertMe: string;
        static item_Generic_OpenCalloutTooltip: string;
        static item_CommunityPortal_DetailsIntervals: string;
        static item_CommunityPortal_DetailsMembers: string;
        static item_CommunityPortal_DetailsDiscussions: string;
        static item_CommunityPortal_DetailsReplies: string;
        static item_CommunityPortal_Date: string;
        static item_CommunityPortal_MoreDetails: string;
        static ar_htv_Follow: string;
        static ar_htv_StartFollowing: string;
        static ar_htv_StopFollowing: string;
        static ar_rec_NoResults: string;
        static ar_Explanation: string;
        static ar_htv_IsFollowed: string;
        static ar_htv_IsNotFollowed: string;
        static hp_Post: string;
        static hp_Tooltip_Post: string;
        static rs_PartialResultWarning_Line1: string;
        static rs_PartialResultWarning_Line2: string;
        static rs_HasParseExceptionWarning_Line1: string;
        static rs_HasParseExceptionWarning_Line2: string;
    }

}

/** Returns true if the value parameter is null or empty string */
declare function $isEmptyString(value: string): boolean;
/** Returns true if the value parameter is null or undefined */
declare function $isNull(value: any): boolean;
/** Returns true if the specified item is found in the specified array (uses '===' for comparing) */
declare function $isInArray(array: any[], item: any): boolean;
/** Returns true if the specified array is null or empty */
declare function $isEmptyArray(array: any[]): boolean;
/** (alias for SP.Utilities.HttpUtility.htmlEncode) */
declare function $htmlEncode(s: string): string;
/** (alias for SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode) */
declare function $scriptEncode(s: string): string;
/** (alias for SP.Utilities.HttpUtility.urlKeyValueEncode) */
declare function $urlKeyValueEncode(s: string): string;
/** (alias for SP.Utilities.HttpUtility.urlPathEncode) */
declare function $urlPathEncode(s: string): string;
/** Ensures that url has correct protocol or is a relative URL, and html-encodes it.
 * If URL is incorrect, returns empty string. */
declare function $urlHtmlEncode(s: string): string;

declare function $imgSrcUrl(p: any): string;
declare function $contentLineText(p: any): any;

/** Returns the ClientControl associated with specified DOM element (alias for Srch.U.getClientComponent) */
declare function $getClientControl(e: Element): Srch.ClientControl;

/** (alias for Srch.U.getResultObject) */
declare function $getResultItem(id: string): any;
/** (alias for Srch.U.setResultObject) */
declare function $setResultItem(id: string, resultObject: any): void;
/** (alias for Srch.U.getResultObject) */
declare function $getResultObject(id: string): any;
/** (alias for Srch.U.setResultObject) */
declare function $setResultObject(id: string, resultObject: any): void;
/** (alias for Srch.U.findResultObjectFromDOM) */
declare function $findResultObjectFromDOM(e: Element, type: string): void;

declare function $getItemValue(ctx: any, nameToLookup: string): any;
declare function $getCachedItemValue(ctx: any, nameToLookup: string): any;

declare function $includeScript(templateLink: string, relativeLink: string): void;
declare function $includeCSS(templateLink: string, scriptLink: string): void;
declare function $includeLanguageScript(templateLink: string, scriptLink: string): any;
/** Registers in system resources defined by the dictionary object (alias for Srch.U.registerResourceDictionary) */
declare function $registerResourceDictionary(locale: string, dict: { [key: string]: string }): void;
/** Retrieves localized string with the specified id */
declare function $resource(id: string): string;
/** (calls Srch.U.setItemRenderWrapper) */
declare function $setItemWrapperCallback(renderCtx: any, itemWrapperFunction: any): void;
/** (calls Srch.U.addRenderContextCallback) */
declare function $addRenderContextCallback(renderCtx: any, itemWrapperFunction: any): void;

