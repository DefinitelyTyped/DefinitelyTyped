// Type definitions for Breeze 1.6.3
// Project: http://www.breezejs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, IdeaBlade <https://github.com/IdeaBlade/Breeze/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Updated Jan 14 2011 - Jay Traband ( www.ideablade.com).
// Updated Aug 13 2013 - Steve Schmitt ( www.ideablade.com).
// Updated Sep 26 2013 for Breeze 1.4.3 - Steve Schmitt ( www.ideablade.com).
// Updated Jul 22 2014 for Breeze 1.4.16 - Steve Schmitt ( www.ideablade.com)
// Updated Aug 22 2014 for Breeze 1.4.17 and removing Q dependency - Steve Schmitt ( www.ideablade.com)
// Updated Jan 16 2015 for Breeze 1.4.17 to add support for noimplicitany - Kevin Wilson ( www.kwilson.me.uk )
// Updated Jan 20 2015 for Breeze 1.5.2 and merging changes from DefinitelyTyped
// Updated Feb 28 2015 add any/all clause on Predicate
// Updated Jun 27 2016 - Marcel Good (www.ideablade.com)
// Updated Jun 29 2016 - Marcel Good (www.ideablade.com)
// Updated Jul 15 2016 - Added methods to JsonResultsAdapter - Steve Schmitt
// Updated Sep 23 2016 - Added core methods
// Updated March 5 2017 - Eliminate promises.IPromise<T> and replace with Promise<T>
// Updated Apr 28 2017 - Fixed DataType
declare namespace breeze.core {

    export interface ErrorCallback {
        (error: Error): void;
    }

    export interface IEnum {
        contains(object: any): boolean;
        fromName(name: string): EnumSymbol;
        getNames(): string[];
        getSymbols(): EnumSymbol[];
    }

    export class Enum implements IEnum {
        constructor(name: string, methodObj?: any);

        addSymbol(propertiesObj?: any): EnumSymbol;
        contains(object: any): boolean;
        fromName(name: string): EnumSymbol;
        getNames(): string[];
        getSymbols(): EnumSymbol[];
        static isSymbol(object: any): boolean;
        resolveSymbols(): void;
    }

    export class EnumSymbol {
        parentEnum: IEnum;

        getName(): string;
        toString(): string;
    }

    export class Event {
        constructor(name: string, publisher: any, defaultErrorCallback?: ErrorCallback);

        static enable(eventName: string, target: any): void;
        static enable(eventName: string, target: any, isEnabled: boolean): void;
        static enable(eventName: string, target: any, isEnabled: Function): void;

        static isEnabled(eventName: string, target: any): boolean;
        publish(data: any, publishAsync?: boolean, errorCallback?: ErrorCallback): void;
        publishAsync(data: any, errorCallback?: ErrorCallback): void;
        subscribe(callback?: (data: any) => void): number;
        unsubscribe(unsubKey: number): boolean;
        clear(): void;
    }

    export function objectForEach(obj: Object, kvfn: (key: string, value: any) => void): void;

    export function extend(target: Object, source: Object): Object;
    export function propEq(propertyName: string, value: any): (obj: Object) => boolean;
    export function pluck(propertyName: string): (obj: Object) => any;
    export function arrayEquals(a1: any[], a2: any[], equalsFn: (e1: any, e2: any) => boolean): boolean;
    export function arrayFirst(a1: any[], predicate: (e: any) => boolean): any;
    export function arrayIndexOf(a1: any[], predicate: (e: any) => boolean): number;
    export function arrayRemoveItem(array: any[], item: any, shouldRemoveMultiple: boolean): any;
    export function arrayRemoveItem(array: any[], predicate: (e: any) => boolean, shouldRemoveMultiple: boolean): any;
    export function arrayZip(a1: any[], a2: any[], callback: (e1: any, e2: any) => any): any[];

    export function requireLib(libnames: string, errMessage: string): Object;
    export function using(obj: Object, property: string, tempValue: any, fn: () => any): any;
    export function memoize(fn: (...any: any[]) => any): any;
    export function getUuid(): string;
    export function durationToSeconds(duration: string): number;

    export function isDate(o: any): boolean;
    export function isGuid(o: any): boolean;
    export function isDuration(o: any): boolean;
    export function isFunction(o: any): boolean;
    export function isEmpty(o: any): boolean;
    export function isNumeric(o: any): boolean;

    export function stringStartsWith(str: string, prefix: string): boolean;
    export function stringEndsWith(str: string, suffix: string): boolean;
    export function formatString(format: string, ...args: any[]): string;

    /** Change text to title case with spaces, e.g. 'myPropertyName12' to 'My Property Name 12' */
    export function titleCase(str: string): string;

    /** Return the ES5 property descriptor for the property, which may be on a prototype of the object */
    export function getPropertyDescriptor(obj: any, propertyName: string): PropertyDescriptor

    /** safely perform toJSON logic on objects with cycles.  Replacer function can map or exclude properties. */
    export function toJSONSafe(obj: any, replacer: (prop: string, val: any) => any): any

    /** Default value replacer for toJSONSafe.  Replaces entityAspect and other internal properties with undefined. */
    export function toJSONSafeReplacer(prop: string, val: any): any
    
}

declare namespace breeze {

    export interface Entity {
        entityAspect: EntityAspect;
        entityType: EntityType;
    }

    export interface ComplexObject {
        complexAspect: ComplexAspect;
        complexType: ComplexType;
    }

    export interface IProperty {
        name: string;
        nameOnServer: string;
        displayName: string;
        parentType: IStructuralType;
        validators: Validator[];
        isDataProperty: boolean;
        isNavigationProperty: boolean;
    }

    export interface IStructuralType {
        complexProperties: DataProperty[];
        dataProperties: DataProperty[];
        name: string;
        namespace: string;
        shortName: string;
        unmappedProperties: DataProperty[];
        validators: Validator[];
    }

    export class AutoGeneratedKeyType {
        static Identity: AutoGeneratedKeyType;
        static KeyGenerator: AutoGeneratedKeyType;
        static None: AutoGeneratedKeyType;
    }

    export class ComplexAspect {
        complexObject: ComplexObject;
        getEntityAspect(): EntityAspect;
        parent: Object;
        parentProperty: DataProperty;
        getPropertyPath(propName: string): string;
        originalValues: Object;
    }

    export class ComplexType implements IStructuralType {
        complexProperties: DataProperty[];
        dataProperties: DataProperty[];
        name: string;
        namespace: string;
        shortName: string;
        unmappedProperties: DataProperty[];
        validators: Validator[];
        addProperty(dataProperty: DataProperty): ComplexType;
        getProperties(): DataProperty[];
    }

    export class DataProperty implements IProperty {
        complexTypeName: string;
        concurrencyMode: string;
        dataType: DataTypeSymbol;
        defaultValue: any;
        isComplexProperty: boolean;
        isDataProperty: boolean;
        isInherited: boolean;
        isNavigationProperty: boolean;
        isNullable: boolean;
        isPartOfKey: boolean;
        isUnmapped: boolean;

        maxLength: number;
        name: string;
        nameOnServer: string;
        displayName: string;
        parentType: IStructuralType;
        relatedNavigationProperty: NavigationProperty;
        validators: Validator[];
        constructor(config: DataPropertyOptions);
    }

    export interface DataPropertyOptions {
        complexTypeName?: string;
        concurrencyMode?: string;
        custom?: any;
        dataType?: DataTypeSymbol;
        defaultValue?: any;
        displayName?: string;
        isNullable?: boolean;
        isPartOfKey?: boolean;
        isScalar?: boolean;
        isUnmapped?: boolean;
        maxLength?: number;
        name?: string;
        nameOnServer?: string;
        validators?: Validator[];
    }

    export class DataService {
        adapterInstance: DataServiceAdapter;
        adapterName: string;
        hasServerMetadata: boolean;
        serviceName: string;
        uriBuilderName: string;
        jsonResultsAdapter: JsonResultsAdapter;
        useJsonp: boolean;
        constructor(config: DataServiceOptions);
        using(config: DataServiceOptions): DataService;
    }

    export interface DataServiceOptions {
        serviceName?: string;
        adapterName?: string;
        uriBuilderName?: string;
        hasServerMetadata?: boolean;
        jsonResultsAdapter?: JsonResultsAdapter;
        useJsonp?: boolean;
    }

    export class DataServiceAdapter {
        checkForRecomposition(interfaceInitializedArgs: { interfaceName: string; isDefault: boolean }): void;
        initialize(): void;
        fetchMetadata(metadataStore: MetadataStore, dataService: DataService): Promise<any>;
        executeQuery(mappingContext: { getUrl: () => string; query: EntityQuery; dataService: DataService }): Promise<any>;
        saveChanges(saveContext: { resourceName: string; dataService: DataService }, saveBundle: Object): Promise<SaveResult>;
        JsonResultsAdapter: JsonResultsAdapter;
    }

    export class JsonResultsAdapter {
        name: string;
        extractResults: (data: {}) => {};
        extractSaveResults: (data: {}) => any[];
        extractKeyMappings: (data: {}) => KeyMapping[];
        visitNode: (node: {}, queryContext: QueryContext, nodeContext: NodeContext) => { entityType?: EntityType; nodeId?: any; nodeRefId?: any; ignore?: boolean; };
        constructor(config: {
            name: string;
            extractResults?: (data: {}) => {};
            extractSaveResults?: (data: {}) => any[];
            extractKeyMappings?: (data: {}) => KeyMapping[];
            visitNode: (node: {}, queryContext: QueryContext, nodeContext: NodeContext) => { entityType?: EntityType; nodeId?: any; nodeRefId?: any; ignore?: boolean; };
        });
    }

    export interface QueryContext {
        url: string;
        query: EntityQuery | string;
        entityManager: EntityManager;
        dataService: DataService;
        queryOptions: QueryOptions;
    }

    export interface NodeContext {
        nodeType: string;
        propertyName: string;
    }

    export class DataTypeSymbol extends breeze.core.EnumSymbol {
        defaultValue: any;
        isDate?: boolean;
        isFloat?: boolean;
        isInteger?: boolean;
        isNumeric?: boolean;
        quoteJsonOData?: boolean;

        validatorCtor: (context: any) => Validator;

        /** Function to convert a value from string to this DataType.  Note that this will be called each time a property is changed, so make it fast. */
        parse?: (val: any, sourceTypeName?: string) => any;

        /** Function to format this DataType for OData queries. */
        fmtOData: (val: any) => any;

        /** Optional function to get the next value for key generation, if this datatype is used as a key.  Uses an internal table of previous values. */
        getNext?: () => any;

        /** Optional function to normalize a data value for comparison, if its value cannot be used directly.  Note that this will be called each time a property is changed, so make it fast. */
        normalize?: (val: any) => any;

        /** Optional function to get the next value when the datatype is used as a concurrency property. */
        getConcurrencyValue?: (val: any) => any;

        /** Optional function to convert a raw (server) value from string to this DataType. */
        parseRawValue?: (val: any) => any;
    }

    export interface DataType extends breeze.core.IEnum {
        Binary: DataTypeSymbol;
        Boolean: DataTypeSymbol;
        Byte: DataTypeSymbol;
        DateTime: DataTypeSymbol;
        DateTimeOffset: DataTypeSymbol;
        Decimal: DataTypeSymbol;
        Double: DataTypeSymbol;
        Guid: DataTypeSymbol;
        Int16: DataTypeSymbol;
        Int32: DataTypeSymbol;
        Int64: DataTypeSymbol;
        Single: DataTypeSymbol;
        String: DataTypeSymbol;
        Time: DataTypeSymbol;
        Undefined: DataTypeSymbol;
        
        constants: { nextNumber: number, nextNumberIncrement: number, stringPrefix: string };
        
        fromEdmDataType(typeName: string): DataTypeSymbol;
        fromValue(val: any): DataTypeSymbol;
        getComparableFn(dataType: DataTypeSymbol): (value: any) => any;
        parseDateAsUTC(source: any): Date;
        parseDateFromServer(date: any): Date;
        parseRawValue(val: any, dataType?: DataTypeSymbol): any;
        parseTimeFromServer(source: any): string;
    }
    export var DataType: DataType;

    export class EntityActionSymbol extends breeze.core.EnumSymbol {
    }
    export interface EntityAction extends breeze.core.IEnum {
        AcceptChanges: EntityActionSymbol;
        Attach: EntityActionSymbol;
        AttachOnImport: EntityActionSymbol;
        AttachOnQuery: EntityActionSymbol;
        Clear: EntityActionSymbol;
        Detach: EntityActionSymbol;
        EntityStateChange: EntityActionSymbol;
        MergeOnImport: EntityActionSymbol;
        MergeOnSave: EntityActionSymbol;
        MergeOnQuery: EntityActionSymbol;
        PropertyChange: EntityActionSymbol;
        RejectChanges: EntityActionSymbol;
    }
    export var EntityAction: EntityAction;

    export class EntityAspect {
        entity: Entity;
        entityManager: EntityManager;
        entityState: EntityStateSymbol;
        isBeingSaved: boolean;
        originalValues: Object;
        extraMetadata: Object;

        propertyChanged: PropertyChangedEvent;
        validationErrorsChanged: ValidationErrorsChangedEvent;

        acceptChanges(): void;
        addValidationError(validationError: ValidationError): void;
        clearValidationErrors(): void;
        getKey(forceRefresh?: boolean): EntityKey;

        getValidationErrors(): ValidationError[];
        getValidationErrors(property: string): ValidationError[];
        getValidationErrors(property: IProperty): ValidationError[];
        hasValidationErrors: boolean;

        isNavigationPropertyLoaded(navigationProperty: string): boolean;
        isNavigationPropertyLoaded(navigationProperty: NavigationProperty): boolean;

        loadNavigationProperty(navigationProperty: string, callback?: Function, errorCallback?: Function): Promise<QueryResult>;
        loadNavigationProperty(navigationProperty: NavigationProperty, callback?: Function, errorCallback?: Function): Promise<QueryResult>;

        rejectChanges(): void;

        removeValidationError(validator: Validator): void;
        removeValidationError(validator: Validator, property: DataProperty): void;
        removeValidationError(validator: Validator, property: NavigationProperty): void;
        removeValidationError(validationError: ValidationError): void;

        setAdded(): void;
        setDeleted(): void;
        setDetached(): void;
        setModified(): void;
        setUnchanged(): void;
        setEntityState(entityState: EntityStateSymbol): void;
        validateEntity(): boolean;

        validateProperty(property: string, context?: any): boolean;
        validateProperty(property: DataProperty, context?: any): boolean;
        validateProperty(property: NavigationProperty, context?: any): boolean;
    }

    export class PropertyChangedEventArgs {
        entity: Entity;
        property: IProperty;
        propertyName: string;
        oldValue: any;
        newValue: any;
        parent: any;
    }

    export class PropertyChangedEvent extends breeze.core.Event {
        subscribe(callback?: (data: PropertyChangedEventArgs) => void): number;
    }

    export class ValidationErrorsChangedEventArgs {
        entity: Entity;
        added: ValidationError[];
        removed: ValidationError[];
    }

    export class ValidationErrorsChangedEvent extends breeze.core.Event {
        subscribe(callback?: (data: ValidationErrorsChangedEventArgs) => void): number;
    }

    export class EntityKey {
        constructor(entityType: EntityType, keyValue: any);
        constructor(entityType: EntityType, keyValues: any[]);

        equals(entityKey: EntityKey): boolean;
        static equals(k1: EntityKey, k2: EntityKey): boolean;
        entityType: EntityType;
        values: any[];
    }

    export interface EntityByKeyResult {
        entity: Entity;
        entityKey: EntityKey;
        fromCache: boolean;
    }
    export interface ExportEntitiesOptions {
        asString: boolean;  // default true
        includeMetadata: boolean;  // default true
    }

    export class EntityManager {
        dataService: DataService;
        keyGeneratorCtor: Function;
        metadataStore: MetadataStore;
        queryOptions: QueryOptions;
        saveOptions: SaveOptions;
        serviceName: string;
        validationOptions: ValidationOptions;

        entityChanged: EntityChangedEvent;
        hasChangesChanged: HasChangesChangedEvent;
        validationErrorsChanged: ValidationErrorsChangedEvent;

        constructor(config?: EntityManagerOptions);
        constructor(config?: string);

        acceptChanges(): void;
        addEntity(entity: Entity): Entity;
        attachEntity(entity: Entity, entityState?: EntityStateSymbol, mergeStrategy?: MergeStrategySymbol): Entity;
        clear(): void;
        createEmptyCopy(): EntityManager;
        createEntity(typeName: string, config?: {}, entityState?: EntityStateSymbol, mergeStrategy?: MergeStrategySymbol): Entity;
        createEntity(entityType: EntityType, config?: {}, entityState?: EntityStateSymbol, mergeStrategy?: MergeStrategySymbol): Entity;
        detachEntity(entity: Entity): boolean;
        executeQuery(query: string, callback?: ExecuteQuerySuccessCallback, errorCallback?: ExecuteQueryErrorCallback): Promise<QueryResult>;
        executeQuery(query: EntityQuery, callback?: ExecuteQuerySuccessCallback, errorCallback?: ExecuteQueryErrorCallback): Promise<QueryResult>;

        executeQueryLocally(query: EntityQuery): Entity[];
        exportEntities(entities?: Entity[], includeMetadata?: boolean): string;
        exportEntities(entities?: Entity[], options?: ExportEntitiesOptions): any; // string | Object
        fetchEntityByKey(typeName: string, keyValue: any, checkLocalCacheFirst?: boolean): Promise<EntityByKeyResult>;
        fetchEntityByKey(typeName: string, keyValues: any[], checkLocalCacheFirst?: boolean): Promise<EntityByKeyResult>;
        fetchEntityByKey(entityKey: EntityKey): Promise<EntityByKeyResult>;
        fetchMetadata(callback?: (schema: any) => void, errorCallback?: breeze.core.ErrorCallback): Promise<any>;
        generateTempKeyValue(entity: Entity): any;
        getChanges(): Entity[];
        getChanges(entityTypeName: string): Entity[];
        getChanges(entityTypeNames: string[]): Entity[];
        getChanges(entityType: EntityType): Entity[];
        getChanges(entityTypes: EntityType[]): Entity[];

        getEntities(entityTypeName: string, entityState?: EntityStateSymbol): Entity[];
        getEntities(entityTypeNames?: string[], entityState?: EntityStateSymbol): Entity[];
        getEntities(entityTypeName?: string, entityStates?: EntityStateSymbol[]): Entity[];
        getEntities(entityTypeNames?: string[], entityStates?: EntityStateSymbol[]): Entity[];

        getEntities(entityType: EntityType, entityState?: EntityStateSymbol): Entity[];
        getEntities(entityTypes?: EntityType[], entityState?: EntityStateSymbol): Entity[];
        getEntities(entityType?: EntityType, entityStates?: EntityStateSymbol[]): Entity[];
        getEntities(entityTypes?: EntityType[], entityStates?: EntityStateSymbol[]): Entity[];

        getEntityByKey(typeName: string, keyValue: any): Entity;
        getEntityByKey(typeName: string, keyValues: any[]): Entity;
        getEntityByKey(entityKey: EntityKey): Entity;

        hasChanges(): boolean;
        hasChanges(entityTypeName: string): boolean;
        hasChanges(entityTypeNames: string[]): boolean;
        hasChanges(entityType: EntityType): boolean;
        hasChanges(entityTypes: EntityType[]): boolean;

        static importEntities(exportedString: string, config?: { mergeStrategy?: MergeStrategySymbol; metadataVersionFn?: (any: any) => void }): EntityManager;
        static importEntities(exportedData: Object, config?: { mergeStrategy?: MergeStrategySymbol; metadataVersionFn?: (any: any) => void }): EntityManager;
        importEntities(exportedString: string, config?: { mergeStrategy?: MergeStrategySymbol; metadataVersionFn?: (any: any) => void }): { entities: Entity[]; tempKeyMapping: { [key: string] : EntityKey } };
        importEntities(exportedData: Object, config?: { mergeStrategy?: MergeStrategySymbol; metadataVersionFn?: (any: any) => void }): { entities: Entity[]; tempKeyMapping: { [key: string]: EntityKey } };

        rejectChanges(): Entity[];
        saveChanges(entities?: Entity[], saveOptions?: SaveOptions, callback?: SaveChangesSuccessCallback, errorCallback?: SaveChangesErrorCallback): Promise<SaveResult>;
        setProperties(config: EntityManagerProperties): void;
    }

    export interface EntityManagerOptions {
        serviceName?: string;
        dataService?: DataService;
        metadataStore?: MetadataStore;
        queryOptions?: QueryOptions;
        saveOptions?: SaveOptions;
        validationOptions?: ValidationOptions;
        keyGeneratorCtor?: Function;
    }

    export interface EntityManagerProperties {
        serviceName?: string;
        dataService?: DataService;
        metadataStore?: MetadataStore;
        queryOptions?: QueryOptions;
        saveOptions?: SaveOptions;
        validationOptions?: ValidationOptions;
        keyGeneratorCtor?: Function;
    }

    export interface ExecuteQuerySuccessCallback {
        (data: QueryResult): void;
    }

    export interface ExecuteQueryErrorCallback {
        (error: { query: EntityQuery; httpResponse: HttpResponse; entityManager: EntityManager; message?: string; stack?:string }): void;
    }

    export interface SaveChangesSuccessCallback {
        (saveResult: SaveResult): void;
    }

    export interface EntityError {
        entity: Entity;
        errorMessage: string;
        errorName: string;
        isServerError: boolean;
        propertyName: string;
    }

    export interface SaveChangesErrorCallback {
        (error: {
            entityErrors: EntityError[];
            httpResponse: HttpResponse;
            message: string;
            stack?: string;
            status?: number
        }): void;
    }

    export class EntityChangedEventArgs {
        entity: Entity;
        entityAction: EntityActionSymbol;
        args: Object;
    }

    export class EntityChangedEvent extends breeze.core.Event {
        subscribe(callback?: (data: EntityChangedEventArgs) => void): number;
    }

    export class HasChangesChangedEventArgs {
        entityManager: EntityManager;
        hasChanges: boolean;
    }

    export class HasChangesChangedEvent extends breeze.core.Event {
        subscribe(callback?: (data: HasChangesChangedEventArgs) => void): number;
    }

    export class EntityQuery {
        entityManager: EntityManager;
        orderByClause: OrderByClause;
        parameters: Object;
        queryOptions: QueryOptions;
        resourceName: string;
        resultEntityType: EntityType;
        skipCount: number;
        takeCount: number;
        wherePredicate: Predicate;

        constructor(resourceName?: string);
        /** Create query from an expression tree */
        constructor(tree: Object);

        execute(callback?: ExecuteQuerySuccessCallback, errorCallback?: ExecuteQueryErrorCallback): Promise<QueryResult>;
        executeLocally(): Entity[];
        expand(propertyPaths: string[]): EntityQuery;
        expand(propertyPaths: string): EntityQuery;
        static from(resourceName: string): EntityQuery;
        from(resourceName: string): EntityQuery;
        static fromEntities(entity: Entity): EntityQuery;
        static fromEntities(entities: Entity[]): EntityQuery;
        static fromEntityKey(entityKey: EntityKey): EntityQuery;
        static fromEntityNavigation(entity: Entity, navigationProperty: NavigationProperty): EntityQuery;
        inlineCount(enabled?: boolean): EntityQuery;
        noTracking(enabled?: boolean): EntityQuery;
        orderBy(propertyPaths: string, isDescending?: boolean): EntityQuery;
        orderBy(propertyPaths: string[], isDescending?: boolean): EntityQuery;
        orderByDesc(propertyPaths: string): EntityQuery;
        orderByDesc(propertyPaths: string[]): EntityQuery;
        select(propertyPaths: string): EntityQuery;
        select(propertyPaths: string[]): EntityQuery;
        skip(count: number): EntityQuery;
        take(count: number): EntityQuery;
        top(count: number): EntityQuery;
        toType(typeName: string): EntityQuery;
        toType(type: EntityType): EntityQuery;

        using(obj: EntityManager): EntityQuery;
        using(obj: DataService): EntityQuery;
        using(obj: JsonResultsAdapter): EntityQuery;
        using(obj: QueryOptions): EntityQuery;
        using(obj: MergeStrategySymbol): EntityQuery;
        using(obj: FetchStrategySymbol): EntityQuery;

        where(predicate: Predicate): EntityQuery;
        where(property: string, operator: string, value: any): EntityQuery;
        where(property: string, operator: FilterQueryOpSymbol, value: any): EntityQuery;
        where(property: string, filterop: FilterQueryOpSymbol, property2: string, filterop2: FilterQueryOpSymbol, value: any): EntityQuery;  // for any/all clauses
        where(property: string, filterop: string, property2: string, filterop2: string, value: any): EntityQuery;  // for any/all clauses
        where(predicate: FilterQueryOpSymbol): EntityQuery;
        where(anArray: IRecursiveArray<string | number | FilterQueryOpSymbol | Predicate>): EntityQuery;

        withParameters(params: Object): EntityQuery;

        toJSON(): string;
    }

    export interface OrderByClause {
    }

    export class EntityStateSymbol extends breeze.core.EnumSymbol {
        isAdded(): boolean;
        isAddedModifiedOrDeleted(): boolean;
        isDeleted(): boolean;
        isDetached(): boolean;
        isModified(): boolean;
        isUnchanged(): boolean;
        isUnchangedOrModified(): boolean;
    }
    export interface EntityState extends breeze.core.IEnum {
        Added: EntityStateSymbol;
        Deleted: EntityStateSymbol;
        Detached: EntityStateSymbol;
        Modified: EntityStateSymbol;
        Unchanged: EntityStateSymbol;
    }
    export var EntityState: EntityState;

    export class EntityType implements IStructuralType {
        autoGeneratedKeyType: AutoGeneratedKeyType;
        baseEntityType: EntityType;
        complexProperties: DataProperty[];
        concurrencyProperties: DataProperty[];
        dataProperties: DataProperty[];
        defaultResourceName: string;
        foreignKeyProperties: DataProperty[];
        isAbstract: boolean;
        keyProperties: DataProperty[];
        metadataStore: MetadataStore;
        name: string;
        namespace: string;
        navigationProperties: NavigationProperty[];
        shortName: string;
        unmappedProperties: DataProperty[];
        validators: Validator[];

        constructor(config: MetadataStore);
        constructor(config: EntityTypeOptions);

        addProperty(property: IProperty): void;
        addValidator(validator: Validator, property?: IProperty): void;
        createEntity(initialValues?: Object): Entity;
        getCtor(): Function;
        getDataProperty(propertyName: string): DataProperty;
        getNavigationProperty(propertyName: string): NavigationProperty;
        getProperties(): IProperty[];
        getProperty(propertyPath: string, throwIfNotFound?: boolean): IProperty;
        getPropertyNames(): string[];
        getSelfAndSubtypes(): EntityType[];
        isSubtypeOf(entityType: EntityType): boolean;
        setProperties(config: EntityTypeProperties): void;
        toString(): string;
    }

    export interface EntityTypeOptions {
        shortName?: string;
        namespace?: string;
        autoGeneratedKeyType?: AutoGeneratedKeyType;
        defaultResourceName?: string;
        dataProperties?: DataProperty[];
        navigationProperties?: NavigationProperty[];
    }

    export interface EntityTypeProperties {
        autoGeneratedKeyType?: AutoGeneratedKeyType;
        defaultResourceName?: string;
        serializerFn?: (dataProperty: DataProperty, value: any) => any;
    }

    export class FetchStrategySymbol extends breeze.core.EnumSymbol {
        private foo; // to distinguish this class from MergeStrategySymbol
    }
    export interface FetchStrategy extends breeze.core.IEnum {
        FromLocalCache: FetchStrategySymbol;
        FromServer: FetchStrategySymbol;
    }
    export var FetchStrategy: FetchStrategy;

    export class FilterQueryOpSymbol extends breeze.core.EnumSymbol {
    }
    export interface FilterQueryOp extends breeze.core.IEnum {
        Contains: FilterQueryOpSymbol;
        EndsWith: FilterQueryOpSymbol;
        Equals: FilterQueryOpSymbol;
        GreaterThan: FilterQueryOpSymbol;
        GreaterThanOrEqual: FilterQueryOpSymbol;
        IsTypeOf: FilterQueryOpSymbol;
        LessThan: FilterQueryOpSymbol;
        LessThanOrEqual: FilterQueryOpSymbol;
        NotEquals: FilterQueryOpSymbol;
        StartsWith: FilterQueryOpSymbol;
        Any: FilterQueryOpSymbol;
        All: FilterQueryOpSymbol;
    }
    export var FilterQueryOp: FilterQueryOp;

    export class LocalQueryComparisonOptions {
        static caseInsensitiveSQL: LocalQueryComparisonOptions;
        static defaultInstance: LocalQueryComparisonOptions;

        constructor(config: { name?: string; isCaseSensitive?: boolean; usesSql92CompliantStringComparison?: boolean; });

        setAsDefault(): void;
    }

    export class MergeStrategySymbol extends breeze.core.EnumSymbol {
    }
    export interface MergeStrategy extends breeze.core.IEnum {
        OverwriteChanges: MergeStrategySymbol;
        PreserveChanges: MergeStrategySymbol;
        SkipMerge: MergeStrategySymbol;
        Disallowed: MergeStrategySymbol;
    }
    export var MergeStrategy: MergeStrategy;

    export class MetadataStore {
        constructor();
        constructor(config?: MetadataStoreOptions);
        namingConvention: NamingConvention;
        addDataService(dataService: DataService, shouldOverwrite?: boolean): void;
        addEntityType(structuralType: IStructuralType): void;
        exportMetadata(): string;
        fetchMetadata(dataService: string, callback?: (data: any) => void, errorCallback?: breeze.core.ErrorCallback): Promise<any>;
        fetchMetadata(dataService: DataService, callback?: (data: any) => void, errorCallback?: breeze.core.ErrorCallback): Promise<any>;
        getDataService(serviceName: string): DataService;
        getEntityType(entityTypeName: string, okIfNotFound?: boolean): IStructuralType;
        getEntityTypes(): IStructuralType[];
        hasMetadataFor(serviceName: string): boolean;
        static importMetadata(exportedString: string): MetadataStore;
        static normalizeTypeName(typeName: string): string;
        importMetadata(exportedString: string, allowMerge?: boolean): MetadataStore;
        isEmpty(): boolean;
        registerEntityTypeCtor(entityTypeName: string, entityCtor: Function, initializationFn?: (entity: Entity) => void, noTrackingFn?: (node: Object, entityType: EntityType) => Object): void;
        trackUnmappedType(entityCtor: Function, interceptor?: Function): void;
        setEntityTypeForResourceName(resourceName: string, entityType: EntityType): void;
        setEntityTypeForResourceName(resourceName: string, entityTypeName: string): void;
        getEntityTypeNameForResourceName(resourceName: string): string;
        setProperties(config: { name?: string; serializerFn?: Function }): void;
    }

    export interface MetadataStoreOptions {
        namingConvention?: NamingConvention;
        localQueryComparisonOptions?: LocalQueryComparisonOptions;
    }

    export class NamingConvention {
        static camelCase: NamingConvention;
        static defaultInstance: NamingConvention;
        static none: NamingConvention;

        constructor(config: NamingConventionOptions);

        clientPropertyNameToServer(clientPropertyName: string): string;
        clientPropertyNameToServer(clientPropertyName: string, property: IProperty): string;

        serverPropertyNameToClient(serverPropertyName: string): string;
        serverPropertyNameToClient(serverPropertyName: string, property: IProperty): string;

        setAsDefault(): NamingConvention;
    }

    export interface NamingConventionOptions {
        serverPropertyNameToClient?: (name: string) => string;
        clientPropertyNameToServer?: (name: string) => string;
    }

    export class NavigationProperty implements IProperty {
        associationName: string;
        entityType: EntityType;
        foreignKeyNames: string[];
        inverse: NavigationProperty;
        isDataProperty: boolean;
        isNavigationProperty: boolean;
        isScalar: boolean;
        name: string;
        nameOnServer: string;
        displayName: string;
        parentType: IStructuralType;
        relatedDataProperties: DataProperty[];
        validators: Validator[];

        constructor(config: NavigationPropertyOptions);
    }

    export interface NavigationPropertyOptions {
        name?: string;
        nameOnServer?: string;
        entityTypeName: string;
        isScalar?: boolean;
        associationName?: string;
        foreignKeyNames?: string[];
        foreignKeyNamesOnServer?: string[];
        validators?: Validator[];
    }

    export interface IRecursiveArray<T> {
        [i: number]: T | IRecursiveArray<T>;
    }

    export class Predicate {
        constructor();
        constructor(property: string, operator: string, value: any);
        constructor(property: string, operator: FilterQueryOpSymbol, value: any);
        constructor(property: string, operator: string, value: { value: any; isLiteral?: boolean; dataType?: breeze.DataType });
        constructor(property: string, operator: FilterQueryOpSymbol, value: { value: any; isLiteral?: boolean; dataType?: breeze.DataType });
        constructor(property: string, filterop: FilterQueryOpSymbol, property2: string, filterop2: FilterQueryOpSymbol, value: any);  // for any/all clauses
        constructor(property: string, filterop: string, property2: string, filterop2: string, value: any);  // for any/all clauses
        constructor(passthru: string);
        constructor(predicate: Predicate);
        constructor(anArray: IRecursiveArray<string | number | FilterQueryOpSymbol | Predicate>);

        and: PredicateMethod;
        static and: PredicateMethod;

        static create: PredicateMethod;

        static isPredicate(o: any): boolean;

        static not(predicate: Predicate): Predicate;
        not(): Predicate;

        static or: PredicateMethod;
        or: PredicateMethod;

        toFunction(): Function;
        toString(): string;
        validate(entityType: EntityType): void;

        toJSON(): string;
    }

    export interface PredicateMethod {
        (predicates: Predicate[]): Predicate;
        (...predicates: Predicate[]): Predicate;
        (property: string, operator: string, value: any, valueIsLiteral?: boolean): Predicate;
        (property: string, operator: FilterQueryOpSymbol, value: any, valueIsLiteral?: boolean): Predicate;
        (property: string, filterop: FilterQueryOpSymbol, property2: string, filterop2: FilterQueryOpSymbol, value: any): Predicate;  // for any/all clauses
        (property: string, filterop: string, property2: string, filterop2: string, value: any): Predicate;  // for any/all clauses
    }

    export class QueryOptions {
        static defaultInstance: QueryOptions;
        fetchStrategy: FetchStrategySymbol;
        mergeStrategy: MergeStrategySymbol;
        /** Whether query should return cached deleted entities (false by default) */
        includeDeleted: boolean

        constructor(config?: QueryOptionsConfiguration);

        setAsDefault(): void;
        using(config: QueryOptionsConfiguration): QueryOptions;
        using(config: MergeStrategySymbol): QueryOptions;
        using(config: FetchStrategySymbol): QueryOptions;
    }

    export interface QueryOptionsConfiguration {
        fetchStrategy?: FetchStrategySymbol;
        mergeStrategy?: MergeStrategySymbol;
    }

    export interface HttpResponse {
        config: any;
        data: Entity[];
        error?: any;
        saveContext?: any;
        status: number;
        getHeaders(headerName: string): string
    }

    export interface QueryResult {
        /** Top level entities returned */
        results: Entity[];
        /** Query that was executed */
        query: EntityQuery;
        /** Raw response from the server */
        httpResponse: HttpResponse;
        /** EntityManager that executed the query */
        entityManager?: EntityManager;
        /** Total number of results available on the server */
        inlineCount?: number;
        /** All entities returned by the query.  Differs from results when an expand is used. */
        retrievedEntities?: Entity[]
    }

    export class SaveOptions {
        allowConcurrentSaves: boolean;
        resourceName: string;
        dataService: DataService;
        tag: Object;
        static defaultInstance: SaveOptions;

        constructor(config?: { allowConcurrentSaves?: boolean; resourceName?: string; dataService?: DataService; tag?: any });

        setAsDefault(): SaveOptions;
        using(config: SaveOptionsConfiguration): SaveOptions;
    }

    export interface SaveOptionsConfiguration {
        allowConcurrentSaves?: boolean;
        resourceName?: string;
        dataService?: DataService;
        tag?: Object;
    }

    export interface SaveResult {
        entities: Entity[];
        keyMappings: KeyMapping[];
        XHR: XMLHttpRequest;
    }

    export interface KeyMapping {
        entityTypeName: string;
        tempValue: any;
        realValue: any;
    }

    export class ValidationError {
        key: string;
        context: any;
        errorMessage: string;
        property: IProperty;
        propertyName: string;
        validator: Validator;
        getKey: (validator: Validator, property: string) => string;

        constructor(validator: Validator, context: any, errorMessage: string, key: string);
    }

    export class ValidationOptions {
        static defaultInstance: ValidationOptions;
        validateOnAttach: boolean;
        validateOnPropertyChange: boolean;
        validateOnQuery: boolean;
        validateOnSave: boolean;

        constructor(config?: ValidationOptionsConfiguration);

        setAsDefault(): ValidationOptions;
        using(config: ValidationOptionsConfiguration): ValidationOptions;
    }

    export interface ValidationOptionsConfiguration {
        validateOnAttach?: boolean;
        validateOnSave?: boolean;
        validateOnQuery?: boolean;
        validateOnPropertyChange?: boolean;
    }

    export class Validator {
        /** Map of standard error message templates keyed by validator name.*/
        static messageTemplates: any;
        context: any;
        name: string;

        constructor(name: string, validatorFn: ValidatorFunction, context?: any);

        static bool(): Validator;
        /** integer between 0 and 255 inclusive */
        static byte(context?: { messageTemplate?: string }): Validator;
        static date(): Validator;
        /** Returns a ISO 8601 duration string Validator. */
        static duration(): Validator;
        /** Validators number, double, and single are all the same */
        static number(context?: { messageTemplate?: string }): Validator;
        /** Validators number, double, and single are all the same */
        static double(context?: { messageTemplate?: string }): Validator;
        /** Validators number, double, and single are all the same */
        static single(context?: { messageTemplate?: string }): Validator;

        static guid(): Validator;
        static int16(context?: { messageTemplate?: string }): Validator;
        static int32(context?: { messageTemplate?: string }): Validator;
        static int64(context?: { messageTemplate?: string }): Validator;
        /** Same as int64 */
        static integer(context?: { messageTemplate?: string }): Validator;
        static maxLength(context: { maxLength: number; messageTemplate?: string }): Validator;
        static required(context?: { messageTemplate?: string }): Validator;
        static string(): Validator;
        static stringLength(context: { maxLength: number; minLength: number; messageTemplate?: string }): Validator;
        /** Returns a credit card number validator that performs a Luhn algorithm checksum test for plausability */
        static creditCard(context?: { messageTemplate?: string }): Validator;
        /** Returns a regular expression validator; the expression must be specified in the context parameter */
        static regularExpression(context: { expression: RegExp; messageTemplate?: string }): Validator;
        /** Returns the email address validator */
        static emailAddress(context?: { messageTemplate?: string }): Validator;
        /** Returns the phone validator, which handles prefix, country code, area code, and local number, with [-/. ] break characters. */
        static phone(context?: { messageTemplate?: string }): Validator;
        /** Returns the URL (protocol required) validator */
        static url(context?: { messageTemplate?: string }): Validator;
        /** Always returns true */
        static none(): Validator;

        /** Creates a validator instance from a JSON object or an array of instances from an array of JSON objects. */
        static fromJSON(json: string): Validator;
        /** Register a validator instance so that any deserialized metadata can reference it. */
        static register(validator: Validator): void;
        /** Register a validator factory so that any deserialized metadata can reference it.  */
        static registerFactory(fn: () => Validator, name: string): void;
        /** Creates a regular expression validator with a fixed expression. */
        static makeRegExpValidator(validatorName: string, expression: RegExp, defaultMessage: string, context?: any): Validator;

        /** Run this validator against the specified value.
            @param value {Object} Value to validate
            @param additionalContext {Object} Any additional contextual information that the Validator can make use of.
            @return {ValidationError|null} A ValidationError if validation fails, null otherwise        */
        validate(value: any, context?: any): ValidationError;

        /** Returns the message generated by the most recent execution of this Validator. */
        getMessage(): string;
    }

    export interface ValidatorFunction {
        (value: any, context: ValidatorFunctionContext): void;
    }

    export interface ValidatorFunctionContext {
        value: any;
        validatorName: string;
        displayName: string;
        messageTemplate: string;
        message?: string;
    }

    export var metadataVersion: string;
    export var remoteAccess_odata: string;
    export var remoteAccess_webApi: string;
    export var version: string;

}

declare namespace breeze.config {

    export var ajax: string;
    export var dataService: string;
    export var functionRegistry: Object;
    /**
    Returns the ctor function used to implement a specific interface with a specific adapter name.
    @param interfaceName {String} One of the following interface names "ajax", "dataService" or "modelLibrary"
    @param adapterName {String} The name of any previously registered adapter. If this parameter is omitted then
    this method returns the "default" adapter for this interface. If there is no default adapter, then a null is returned.
    @returns {Function|null} Returns either a ctor function or null.
    **/
    export function getAdapter(interfaceName: string, adapterName?: string): Function;
    /**
    Returns the adapter instance corresponding to the specified interface and adapter names.
    @param interfaceName {String} The name of the interface.
    @param adapterName {String} - The name of a previously registered adapter.  If this parameter is
    omitted then the default implementation of the specified interface is returned. If there is
    no defaultInstance of this interface, then the first registered instance of this interface is returned.
    @return {an instance of the specified adapter}
    **/
    export function getAdapterInstance(interfaceName: string, adapterName?: string): Object;
    /**
    Initializes a single adapter implementation. Initialization means either newing a instance of the
    specified interface and then calling "initialize" on it or simply calling "initialize" on the instance
    if it already exists.
    @param interfaceName {String} The name of the interface to which the adapter to initialize belongs.
    @param adapterName {String} - The name of a previously registered adapter to initialize.
    @param isDefault=true {Boolean} - Whether to make this the default "adapter" for this interface.
    @return {an instance of the specified adapter}
    **/
    export function initializeAdapterInstance(interfaceName: string, adapterName: string, isDefault?: boolean): Object;

    export interface AdapterInstancesConfig {
        /** the name of a previously registered "ajax" adapter */
        ajax?: string;
        /** the name of a previously registered "dataService" adapter */
        dataService?: string;
        /** the name of a previously registered "modelLibrary" adapter */
        modelLibary?: string;
        /** the name of a previously registered "uriBuilder" adapter */
        uriBuilder?: string;
    }
    /**
    Initializes a collection of adapter implementations and makes each one the default for its corresponding interface.
    @param config {AdapterInstancesConfig}
    @return [array of instances]
    **/
    export function initializeAdapterInstances(config: AdapterInstancesConfig): Object[];
    export var interfaceInitialized: Event;
    export var interfaceRegistry: Object;
    export var objectRegistry: Object;
    /**
    Method use to register implementations of standard breeze interfaces.  Calls to this method are usually
    made as the last step within an adapter implementation.
    @param interfaceName {String} - one of the following interface names "ajax", "dataService" or "modelLibrary"
    @param adapterCtor {Function} - an ctor function that returns an instance of the specified interface.
    **/
    export function registerAdapter(interfaceName: string, adapterCtor: Function): void;
    export function registerFunction(fn: Function, fnName: string): void;
    export function registerType(ctor: Function, typeName: string): void;
    //static setProperties(config: Object): void; //deprecated
    /**
    Set the promise implementation, if Q.js is not found.
    @param q - implementation of promise.  @see http://wiki.commonjs.org/wiki/Promises/A
    */
    export function setQ(q: breeze.promises.IPromiseService): void;
    export var stringifyPad: string;
    export var typeRegistry: Object;

}

/** Promises interface used by Breeze.  Usually implemented by Q (https://github.com/kriskowal/q) or angular.$q using breeze.config.setQ(impl) */
declare namespace breeze.promises {

    export interface IDeferred<T> {
        promise: Promise<T>;
        resolve(value: T): void;
        reject(reason: any): void;
    }

    export interface IPromiseService {
        defer<T>(): IDeferred<T>;
        reject(reason?: any): Promise<any>;
        resolve<T>(object: T): Promise<T>;
        resolve<T>(object: Promise<T>): Promise<T>;
    }
}

declare module "breeze" {
    export = breeze;
}
