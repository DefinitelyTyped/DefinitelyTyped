// Type definitions for Powerbi-visuals-tools 1.11
// Project: https://github.com/Microsoft/PowerBI-visuals-tools
// Definitions by:  Ilfat Galiev <https://github.com/zBritva>
//                  Microsoft <https://github.com/Microsoft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace powerbi {
    enum VisualDataRoleKind {
        /** Indicates that the role should be bound to something that evaluates to a grouping of values. */
        Grouping = 0,
        /** Indicates that the role should be bound to something that evaluates to a single value in a scope. */
        Measure = 1,
        /** Indicates that the role can be bound to either Grouping or Measure. */
        GroupingOrMeasure = 2,
    }
    enum VisualDataChangeOperationKind {
        Create = 0,
        Append = 1,
    }
    enum VisualUpdateType {
        Data = 2,
        Resize = 4,
        ViewMode = 8,
        Style = 16,
        ResizeEnd = 32,
        All = 62,
    }

    const enum CartesianRoleKind {
        X = 0,
        Y = 1,
    }
    const enum ViewMode {
        View = 0,
        Edit = 1,
        InFocusEdit = 2,
    }
    const enum EditMode {
        /** Default editing mode for the visual. */
        Default = 0,
        /** Indicates the user has asked the visual to display advanced editing controls. */
        Advanced = 1,
    }
    const enum AdvancedEditModeSupport {
        /** The visual doesn't support Advanced Edit mode. Do not display the 'Edit' button on this visual. */
        NotSupported = 0,
        /** The visual supports Advanced Edit mode, but doesn't require any further changes aside from setting EditMode=Advanced. */
        SupportedNoAction = 1,
        /** The visual supports Advanced Edit mode, and requires that the host pops out the visual when entering Advanced EditMode. */
        SupportedInFocus = 2,
    }
    const enum ResizeMode {
        Resizing = 1,
        Resized = 2,
    }
    const enum JoinPredicateBehavior {
        /** Prevent items in this role from acting as join predicates. */
        None = 0,
    }
    const enum PromiseResultType {
        Success = 0,
        Failure = 1,
    }
    /**
     * Defines actions to be taken by the visual in response to a selection.
     *
     * An undefined/null VisualInteractivityAction should be treated as Selection,
     * as that is the default action.
     */
    const enum VisualInteractivityAction {
        /** Normal selection behavior which should call onSelect */
        Selection = 0,
        /** No additional action or feedback from the visual is needed */
        None = 1,
    }
    /**
     * Defines various events Visuals can notify the host on.
     */
    const enum VisualEventType {
        /** Should be used at the beginning of a visual's rendering operation. */
        RenderStarted = 0,
        /** Should be used at the end of a visual's rendering operation. */
        RenderCompleted = 1,
        /** Should be used by visuals to trace information in PBI telemetry. */
        Trace = 2,
        /** Should be used by visuals to trace errors in PBI telemetry. */
        Error = 3,
    }
    const enum FilterAction {
        /** Merging filter into existing filters. */
        merge = 0,
        /** removing existing filter. */
        remove = 1,
    }
}

declare namespace powerbi.visuals.plugins {
    /** This IVisualPlugin interface is only used by the CLI tools when compiling */

    interface IVisualPlugin {
        /** The name of the plugin.  Must match the property name in powerbi.visuals. */
        name: string;

        /** Function to call to create the visual. */
        create: (options?: extensibility.VisualConstructorOptions) => extensibility.IVisual;

        /** The class of the plugin.  At the moment it is only used to have a way to indicate the class name that a custom visual has. */
        class: string;

        /** Check if a visual is custom */
        custom: boolean;

        /** The version of the api that this plugin should be run against */
        apiVersion: string;

        /** Human readable plugin name displayed to users */
        displayName: string;
    }
}

declare namespace jsCommon {
    interface IStringResourceProvider {
        get(id: string): string;
        getOptional(id: string): string;
    }
}

declare namespace powerbi {
    /**
     * An interface to promise/deferred,
     * which abstracts away the underlying mechanism (e.g., Angular, jQuery, etc.).
     */

    interface IPromiseFactory {
        /**
         * Creates a Deferred object which represents a task which will finish in the future.
         */
        // tslint:disable-next-line:no-unnecessary-generics
        defer<T>(): IDeferred<T>;

        /**
         * Creates a Deferred object which represents a task which will finish in the future.
         */
        // tslint:disable-next-line:no-unnecessary-generics
        defer<TSuccess, TError>(): IDeferred2<TSuccess, TError>;

        /**
         * Creates a promise that is resolved as rejected with the specified reason.
         * This api should be used to forward rejection in a chain of promises.
         * If you are dealing with the last promise in a promise chain, you don't need to worry about it.
         * When comparing deferreds/promises to the familiar behavior of try/catch/throw,
         * think of reject as the throw keyword in JavaScript.
         * This also means that if you "catch" an error via a promise error callback and you want
         * to forward the error to the promise derived from the current promise,
         * you have to "rethrow" the error by returning a rejection constructed via reject.
         *
         * @param reason Constant, message, exception or an object representing the rejection reason.
         */
        reject<TError>(reason?: TError): IPromise2<any, TError>;

        /**
         * Creates a promise that is resolved with the specified value.
         * This api should be used to forward rejection in a chain of promises.
         * If you are dealing with the last promise in a promise chain, you don't need to worry about it.
         *
         * @param value Object representing the promise result.
         */
        resolve<TSuccess>(value?: TSuccess): IPromise2<TSuccess, any>;

        /**
         * Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.
         * Rejects immediately if any of the promises fail
         */
        all(promises: Array<IPromise2<any, any>>): IPromise<any[]>;

        /**
         * Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.
         * Does not resolve until all promises finish (success or failure).
         */
        // tslint:disable-next-line:no-unnecessary-generics
        allSettled<T>(promises: Array<IPromise2<any, any>>): IPromise<Array<IPromiseResult<T>>>;

        /**
         * Wraps an object that might be a value or a then-able promise into a promise.
         * This is useful when you are dealing with an object that might or might not be a promise
         */
        when<T>(value: T | IPromise<T>): IPromise<T>;
    }

    /**
     * Represents an operation, to be completed (resolve/rejected) in the future.
     */
    interface IPromise<T> extends IPromise2<T, T> {
    }

    /**
     * Represents an operation, to be completed (resolve/rejected) in the future.
     * Success and failure types can be set independently.
     */
    interface IPromise2<TSuccess, TError> {
        /**
         * Regardless of when the promise was or will be resolved or rejected,
         * then calls one of the success or error callbacks asynchronously as soon as the result is available.
         * The callbacks are called with a single argument: the result or rejection reason.
         * Additionally, the notify callback may be called zero or more times to provide a progress indication,
         * before the promise is resolved or rejected.
         * This method returns a new promise which is resolved or rejected via
         * the return value of the successCallback, errorCallback.
         */
        then<TSuccessResult, TErrorResult>(
            successCallback: (promiseValue: TSuccess) => TSuccessResult | IPromise2<TSuccessResult, TErrorResult>,
            errorCallback?: (reason: TError) => TErrorResult):
        IPromise2<TSuccessResult, TErrorResult>;

        /**
         * Shorthand for promise.then(null, errorCallback).
         */
        catch<TErrorResult>(onRejected: (reason: any) => IPromise2<TSuccess, TErrorResult>): IPromise2<TSuccess, TErrorResult>;

        /**
         * Shorthand for promise.then(null, errorCallback).
         */
        catch<TErrorResult>(onRejected: (reason: any) => TErrorResult): IPromise2<TSuccess, TErrorResult>;

        /**
         * Allows you to observe either the fulfillment or rejection of a promise,
         * but to do so without modifying the final value.
         * This is useful to release resources or do some clean-up that needs to be done
         * whether the promise was rejected or resolved.
         * See the full specification for more information.
         * Because finally is a reserved word in JavaScript and reserved keywords
         * are not supported as property names by ES3, you'll need to invoke
         * the method like promise['finally'](callback) to make your code IE8 and Android 2.x compatible.
         */
        // tslint:disable-next-line:no-unnecessary-generics
        finally<T, U>(finallyCallback: () => any): IPromise2<T, U>;
    }

    interface IDeferred<T> extends IDeferred2<T, T> {
    }

    interface IDeferred2<TSuccess, TError> {
        resolve(value: TSuccess): void;
        reject(reason?: TError): void;
        promise: IPromise2<TSuccess, TError>;
    }

    interface RejectablePromise2<T, E> extends IPromise2<T, E> {
        reject(reason?: E): void;
        resolved(): boolean;
        rejected(): boolean;
        pending(): boolean;
    }

    interface RejectablePromise<T> extends RejectablePromise2<T, T> {
    }

    interface IResultCallback<T> {
        (result: T, done: boolean): void;
    }

    interface IPromiseResult<T> {
        type: PromiseResultType;
        value: T;
    }
}

declare namespace powerbi.visuals {
    import Selector = data.Selector;
    import SelectorsByColumn = data.SelectorsByColumn;

    interface ISelectionIdBuilder {
        withCategory(categoryColumn: DataViewCategoryColumn, index: number): this;
        withSeries(seriesColumn: DataViewValueColumns, valueColumn: DataViewValueColumn | DataViewValueColumnGroup): this;
        withMeasure(measureId: string): this;
        createSelectionId(): ISelectionId;
    }

    interface ISelectionId {
        equals(other: ISelectionId): boolean;
        includes(other: ISelectionId, ignoreHighlight?: boolean): boolean;
        getKey(): string;
        getSelector(): Selector;
        getSelectorsByColumn(): SelectorsByColumn;
        hasIdentity(): boolean;
    }
}

declare namespace powerbi {
    const enum SortDirection {
        Ascending = 1,
        Descending = 2,
    }
}

declare namespace powerbi {
    /** Represents views of a data set. */
    interface DataView {
        metadata: DataViewMetadata;
        categorical?: DataViewCategorical | undefined;
        single?: DataViewSingle | undefined;
        tree?: DataViewTree | undefined;
        table?: DataViewTable | undefined;
        matrix?: DataViewMatrix | undefined;
        scriptResult?: DataViewScriptResultData | undefined;
    }

    interface DataViewMetadata {
        columns: DataViewMetadataColumn[];

        /** The metadata repetition objects. */
        objects?: DataViewObjects | undefined;

        /** When defined, describes whether the DataView contains just a segment of the complete data set. */
        segment?: {} | undefined;

        /** Describes the data reduction applied to this data set when limits are exceeded. */
        dataReduction?: DataViewReductionMetadata | undefined;
    }

    interface DataViewMetadataColumn {
        /** The user-facing display name of the column. */
        displayName: string;

        /** The query name the source column in the query. */
        queryName?: string | undefined;

        /** The format string of the column. */
        format?: string | undefined; // TODO: Deprecate this, and populate format string through objects instead.

        /** Data type information for the column. */
        type?: ValueTypeDescriptor | undefined;

        /** Indicates that this column is a measure (aggregate) value. */
        isMeasure?: boolean | undefined;

        /** The position of the column in the select statement. */
        index?: number | undefined;

        /** The properties that this column provides to the visualization. */
        roles?: { [name: string]: boolean } | undefined;

        /** The metadata repetition objects. */
        objects?: DataViewObjects | undefined;

        /** The name of the containing group. */
        groupName?: PrimitiveValue | undefined;

        /** The sort direction of this column. */
        sort?: SortDirection | undefined;

        /** The order sorts are applied. Lower values are applied first. Undefined indicates no sort was done on this column. */
        sortOrder?: number | undefined;

        /** The KPI metadata to use to convert a numeric status value into its visual representation. */
        kpi?: DataViewKpiColumnMetadata | undefined;

        /** Indicates that aggregates should not be computed across groups with different values of this column. */
        discourageAggregationAcrossGroups?: boolean | undefined;

        /** The aggregates computed for this column, if any. */
        aggregates?: DataViewColumnAggregates | undefined;

        /** The SQExpr this column represents. */
        expr?: data.ISQExpr | undefined;

        /**
         * The set of expressions that define the identity for instances of this grouping field.
         * This must be a subset of the items in the DataViewScopeIdentity in the grouped items result.
         * This property is undefined for measure fields, as well as for grouping fields in DSR generated prior to the CY16SU08 or SU09 timeframe.
         */
        identityExprs?: data.ISQExpr[] | undefined;

        parameter?: {} | undefined;
    }

    interface DataViewReductionMetadata {
        categorical?: DataViewCategoricalReductionMetadata | undefined;
    }

    interface DataViewCategoricalReductionMetadata {
        categories?: DataViewReductionAlgorithmMetadata | undefined;
        values?: DataViewReductionAlgorithmMetadata | undefined;
        metadata?: DataViewReductionAlgorithmMetadata | undefined;
    }

    interface DataViewReductionAlgorithmMetadata {
        binnedLineSample?: {} | undefined;
    }

    interface DataViewColumnAggregates {
        subtotal?: PrimitiveValue | undefined;
        max?: PrimitiveValue | undefined;
        min?: PrimitiveValue | undefined;
        average?: PrimitiveValue | undefined;
        median?: PrimitiveValue | undefined;
        count?: number | undefined;
        percentiles?: DataViewColumnPercentileAggregate[] | undefined;

        /** Represents a single value evaluation, similar to a total. */
        single?: PrimitiveValue | undefined;

        /** Client-computed maximum value for a column. */
        maxLocal?: PrimitiveValue | undefined;

        /** Client-computed maximum value for a column. */
        minLocal?: PrimitiveValue | undefined;
    }

    interface DataViewColumnPercentileAggregate {
        exclusive?: boolean | undefined;
        k: number;
        value: PrimitiveValue;
    }

    interface DataViewCategorical {
        categories?: DataViewCategoryColumn[] | undefined;
        values?: DataViewValueColumns | undefined;
    }

    interface DataViewCategoricalColumn {
        source: DataViewMetadataColumn;

        /** The data repetition objects. */
        objects?: DataViewObjects[] | undefined;
    }

    interface DataViewValueColumns extends Array<DataViewValueColumn> {
        /** Returns an array that groups the columns in this group together. */
        grouped(): DataViewValueColumnGroup[];

        /** The set of expressions that define the identity for instances of the value group.  This must match items in the DataViewScopeIdentity in the grouped items result. */
        identityFields?: data.ISQExpr[] | undefined;

        source?: DataViewMetadataColumn | undefined;
    }

    interface DataViewValueColumnGroup {
        values: DataViewValueColumn[];
        identity?: DataViewScopeIdentity | undefined;

        /** The data repetition objects. */
        objects?: DataViewObjects | undefined;

        name?: PrimitiveValue | undefined;
    }

    interface DataViewValueColumn extends DataViewCategoricalColumn {
        values: PrimitiveValue[];
        highlights?: PrimitiveValue[] | undefined;
        identity?: DataViewScopeIdentity | undefined;
    }

    interface DataViewCategoryColumn extends DataViewCategoricalColumn {
        values: PrimitiveValue[];
        identity?: DataViewScopeIdentity[] | undefined;

        /** The set of expressions that define the identity for instances of the category.  This must match items in the DataViewScopeIdentity in the identity. */
        identityFields?: data.ISQExpr[] | undefined;
    }

    interface DataViewSingle {
        value: PrimitiveValue;
    }

    interface DataViewTree {
        root: DataViewTreeNode;
    }

    interface DataViewTreeNode {
        name?: PrimitiveValue | undefined;

        /**
         * When used under the context of DataView.tree, this value is one of the elements in the values property.
         *
         * When used under the context of DataView.matrix, this property is the value of the particular
         * group instance represented by this node (e.g. In a grouping on Year, a node can have value == 2016).
         *
         * DEPRECATED for usage under the context of DataView.matrix: This property is deprecated for objects
         * that conform to the DataViewMatrixNode interface (which extends DataViewTreeNode).
         * New visuals code should consume the new property levelValues on DataViewMatrixNode instead.
         * If this node represents a composite group node in matrix, this property will be undefined.
         */
        value?: PrimitiveValue | undefined;

        /**
         * This property contains all the values in this node.
         * The key of each of the key-value-pair in this dictionary is the position of the column in the
         * select statement to which the value belongs.
         */
        values?: { [id: number]: DataViewTreeNodeValue } | undefined;

        children?: DataViewTreeNode[] | undefined;
        identity?: DataViewScopeIdentity | undefined;

        /** The data repetition objects. */
        objects?: DataViewObjects | undefined;

        /** The set of expressions that define the identity for the child nodes.  This must match items in the DataViewScopeIdentity of those nodes. */
        childIdentityFields?: data.ISQExpr[] | undefined;
    }

    interface DataViewTreeNodeValue {
        value?: PrimitiveValue | undefined;
    }

    interface DataViewTreeNodeMeasureValue extends DataViewTreeNodeValue, DataViewColumnAggregates {
        highlight?: PrimitiveValue | undefined;
    }

    interface DataViewTreeNodeGroupValue extends DataViewTreeNodeValue {
        count?: PrimitiveValue | undefined;
    }

    interface DataViewTable {
        columns: DataViewMetadataColumn[];

        identity?: DataViewScopeIdentity[] | undefined;

        /** The set of expressions that define the identity for rows of the table.  This must match items in the DataViewScopeIdentity in the identity. */
        identityFields?: data.ISQExpr[] | undefined;

        rows?: DataViewTableRow[] | undefined;

        totals?: PrimitiveValue[] | undefined;
    }

    interface DataViewTableRow extends Array<PrimitiveValue> {
        /** The data repetition objects. */
        objects?: DataViewObjects[] | undefined;
    }

    interface DataViewMatrix {
        rows: DataViewHierarchy;
        columns: DataViewHierarchy;

        /**
         * The metadata columns of the measure values.
         * In visual DataView, this array is sorted in projection order.
         */
        valueSources: DataViewMetadataColumn[];
    }

    interface DataViewMatrixNode extends DataViewTreeNode {
        /** Indicates the level this node is on. Zero indicates the outermost children (root node level is undefined). */
        level?: number | undefined;

        children?: DataViewMatrixNode[] | undefined;

        /* If this DataViewMatrixNode represents the  inner-most dimension of row groups (i.e. a leaf node), then this property will contain the values at the
        * matrix intersection under the group. The valueSourceIndex property will contain the position of the column in the select statement to which the
        * value belongs.
        *
        * When this DataViewMatrixNode is used under the context of DataView.matrix.columns, this property is not used.
        */
        values?: { [id: number]: DataViewMatrixNodeValue } | undefined;

        /**
         * Indicates the source metadata index on the node's level. Its value is 0 if omitted.
         *
         * DEPRECATED: This property is deprecated and exists for backward-compatibility only.
         * New visuals code should consume the new property levelSourceIndex on DataViewMatrixGroupValue instead.
         */
        levelSourceIndex?: number | undefined;

        /**
         * The values of the particular group instance represented by this node.
         * This array property would contain more than one element in a composite group
         * (e.g. Year == 2016 and Month == 'January').
         */
        levelValues?: DataViewMatrixGroupValue[] | undefined;

        /** Indicates whether or not the node is a subtotal node. Its value is false if omitted. */
        isSubtotal?: boolean | undefined;
    }

    /**
     * Represents a value at a particular level of a matrix's rows or columns hierarchy.
     * In the hierarchy level node is an instance of a composite group, this object will
     * be one of multiple values
     */
    interface DataViewMatrixGroupValue extends DataViewTreeNodeValue {
        /**
         * Indicates the index of the corresponding column for this group level value
         * (held by DataViewHierarchyLevel.sources).
         *
         * @example
         * // For example, to get the source column metadata of each level value at a particular row hierarchy node:
         * let matrixRowsHierarchy: DataViewHierarchy = dataView.matrix.rows;
         * let targetRowsHierarchyNode = <DataViewMatrixNode>matrixRowsHierarchy.root.children[0];
         * // Use the DataViewMatrixNode.level property to get the corresponding DataViewHierarchyLevel...
         * let targetRowsHierarchyLevel: DataViewHierarchyLevel = matrixRows.levels[targetRowsHierarchyNode.level];
         * for (let levelValue in rowsRootNode.levelValues) {
         *   // columnMetadata is the source column for the particular levelValue.value in this loop iteration
         *   let columnMetadata: DataViewMetadataColumn =
         *     targetRowsHierarchyLevel.sources[levelValue.levelSourceIndex];
         * }
         */
        levelSourceIndex: number;
    }

    /** Represents a value at the matrix intersection, used in the values property on DataViewMatrixNode (inherited from DataViewTreeNode). */
    interface DataViewMatrixNodeValue extends DataViewTreeNodeValue {
        highlight?: PrimitiveValue | undefined;

        /** The data repetition objects. */
        objects?: DataViewObjects | undefined;

        /** Indicates the index of the corresponding measure (held by DataViewMatrix.valueSources). Its value is 0 if omitted. */
        valueSourceIndex?: number | undefined;
    }

    interface DataViewHierarchy {
        root: DataViewMatrixNode;
        levels: DataViewHierarchyLevel[];
    }

    interface DataViewHierarchyLevel {
        /**
         * The metadata columns of this hierarchy level.
         * In visual DataView, this array is sorted in projection order.
         */
        sources: DataViewMetadataColumn[];
    }

    interface DataViewKpiColumnMetadata {
        graphic: string;

        // When false, five state KPIs are in: { -2, -1, 0, 1, 2 }.
        // When true, five state KPIs are in: { -1, -0.5, 0, 0.5, 1 }.
        normalizedFiveStateKpiRange?: boolean | undefined;
    }

    interface DataViewScriptResultData {
        payloadBase64: string;
    }

    interface ValueRange<T> {
        min?: T | undefined;
        max?: T | undefined;
    }

    /** Defines the acceptable values of a number. */
    type NumberRange = ValueRange<number>;

    /** Defines the PrimitiveValue range. */
    type PrimitiveValueRange = ValueRange<PrimitiveValue>;
}

declare namespace powerbi {
    /** Represents evaluated, named, custom objects in a DataView. */
    interface DataViewObjects {
        [name: string]: DataViewObject;
    }

    /** Represents an object (name-value pairs) in a DataView. */
    interface DataViewObject {
        /** Map of property name to property value. */
        [propertyName: string]: DataViewPropertyValue | DataViewObjectMap;

        /** Instances of this object. When there are multiple instances with the same object name they will appear here. */
        // $instances?: DataViewObjectMap; - moved to indexed property as optional type
    }

    interface DataViewObjectWithId {
        id: string;
        object: DataViewObject;
    }

    interface DataViewObjectPropertyIdentifier {
        objectName: string;
        propertyName: string;
    }

    interface DataViewObjectMap {
        [id: string]: DataViewObject;
    }

    type DataViewPropertyValue = PrimitiveValue | StructuralObjectValue;
}

declare namespace powerbi.data {
    /** Defines a match against all instances of given roles. */
    interface DataViewRoleWildcard {
        kind: DataRepetitionKind.RoleWildcard;
        roles: string[];
        key: string;
    }
}

declare namespace powerbi {
    /** Encapsulates the identity of a data scope in a DataView. */
    interface DataViewScopeIdentity {
        kind: DataRepetitionKind.ScopeIdentity;

        /** Predicate expression that identifies the scope. */
        expr: data.ISQExpr;

        /** Key string that identifies the DataViewScopeIdentity to a string, which can be used for equality comparison. */
        key: string;
    }
}

declare namespace powerbi.data {
    /** Defines a match against all instances of a given DataView scope. Does not match Subtotals. */
    interface DataViewScopeWildcard {
        kind: DataRepetitionKind.ScopeWildcard;
        exprs: ISQExpr[];
        key: string;
    }
}

declare namespace powerbi.data {
    import IStringResourceProvider = jsCommon.IStringResourceProvider;

    type DisplayNameGetter = ((resourceProvider: IStringResourceProvider) => string) | string;
}

declare namespace powerbi.data {
    /** Defines a selector for content, including data-, metadata, and user-defined repetition. */
    interface Selector {
        /** Data-bound repetition selection. */
        data?: DataRepetitionSelector[] | undefined;

        /** Metadata-bound repetition selection.  Refers to a DataViewMetadataColumn queryName. */
        metadata?: string | undefined;

        /** User-defined repetition selection. */
        id?: string | undefined;
    }

    type DataRepetitionSelector =
        DataViewScopeIdentity |
        DataViewScopeWildcard |
        DataViewRoleWildcard |
        DataViewScopeTotal;

    interface SelectorsByColumn {
        key?: string | undefined;
    }
}

declare namespace powerbi.data {
    // intentionally blank interfaces since this is not part of the public API

    interface ISemanticFilter {
        whereItems?: {} | undefined;
    }

    interface ISQExpr {
        left?: ISQExpr | undefined;
        right?: ISQExpr | undefined;
        args?: ISQExpr | undefined;
    }

    interface ISQConstantExpr extends ISQExpr {
        kind?: number | undefined;
    }
}

declare namespace powerbi {
    /** Kind of the Data Repetition Selector */
    const enum DataRepetitionKind {
        RoleWildcard = 0,
        ScopeIdentity = 1,
        ScopeTotal = 2,
        ScopeWildcard = 3,
    }
}

declare namespace powerbi.data {
    /** Defines a match against any Total within a given DataView scope. */
    interface DataViewScopeTotal {
        kind: DataRepetitionKind.ScopeTotal;

        /* The exprs defining the scope that this Total has been evaluated for
         * It's an array to support expressing Total across a composite group
         * Example: If this represents Total sales of USA across States, the Exprs wil refer to "States"
        */
        exprs: ISQExpr[];

        key: string;
    }
}

declare namespace powerbi {
    interface DefaultValueDefinition {
        value: data.ISQConstantExpr;
        identityFieldsValues?: data.ISQConstantExpr[] | undefined;
    }

    interface DefaultValueTypeDescriptor {
        defaultValue: boolean;
    }
}

declare namespace powerbi {
    import DisplayNameGetter = data.DisplayNameGetter;

    type EnumMemberValue = string | number;

    interface IEnumMember {
        value: EnumMemberValue;
        displayName: DisplayNameGetter;
    }

    /** Defines a custom enumeration data type, and its values. */
    interface IEnumType {
        /** Gets the members of the enumeration, limited to the validMembers, if appropriate. */
        members(validMembers?: EnumMemberValue[]): IEnumMember[];
    }
}

declare namespace powerbi {
    interface Fill {
        solid?: {
            color?: string | undefined;
        } | undefined;
        gradient?: {
            startColor?: string | undefined;
            endColor?: string | undefined;
        } | undefined;
        pattern?: {
            patternKind?: string | undefined;
            color?: string | undefined;
        } | undefined;
    }

    interface FillTypeDescriptor {
        solid?: {
            color?: FillSolidColorTypeDescriptor | undefined;
        } | undefined;
        gradient?: {
            startColor?: boolean | undefined;
            endColor?: boolean | undefined;
        } | undefined;
        pattern?: {
            patternKind?: boolean | undefined;
            color?: boolean | undefined;
        } | undefined;
    }

    type FillSolidColorTypeDescriptor = boolean | FillSolidColorAdvancedTypeDescriptor;

    interface FillSolidColorAdvancedTypeDescriptor {
        /** Indicates whether the color value may be nullable, and a 'no fill' option is appropriate. */
        nullable: boolean;
    }
}

declare namespace powerbi {
    interface FillRule extends FillRuleGeneric<string, number, string> {
    }

    interface FillRuleGeneric<TColor, TValue, TStrategy> {
        linearGradient2?: LinearGradient2Generic<TColor, TValue, TStrategy> | undefined;
        linearGradient3?: LinearGradient3Generic<TColor, TValue, TStrategy> | undefined;

        // stepped2?
        // ...
    }

    interface LinearGradient2Generic<TColor, TValue, TStrategy> {
        max: RuleColorStopGeneric<TColor, TValue>;
        min: RuleColorStopGeneric<TColor, TValue>;
        nullColoringStrategy?: NullColoringStrategyGeneric<TStrategy, TColor> | undefined;
    }
    interface LinearGradient3Generic<TColor, TValue, TStrategy> {
        max: RuleColorStopGeneric<TColor, TValue>;
        mid: RuleColorStopGeneric<TColor, TValue>;
        min: RuleColorStopGeneric<TColor, TValue>;
        nullColoringStrategy?: NullColoringStrategyGeneric<TStrategy, TColor> | undefined;
    }

    interface RuleColorStopGeneric<TColor, TValue> {
        color: TColor;
        value?: TValue | undefined;
    }

    interface NullColoringStrategyGeneric<TStrategy, TColor> {
        strategy: TStrategy;
        /**
         * Only used if strategy is specificColor
         */
        color?: TColor | undefined;
    }
}

declare namespace powerbi {
    interface FilterTypeDescriptor {
        selfFilter?: boolean | undefined;
    }
}

declare namespace powerbi {
    type GeoJson = GeoJsonDefinitionGeneric<string>;

    interface GeoJsonDefinitionGeneric<T> {
        type: T;
        name: T;
        content: T;
    }
}

declare namespace powerbi {
    type ImageValue = ImageDefinitionGeneric<string>;

    interface ImageDefinitionGeneric<T> {
        name: T;
        url: T;
        scaling?: T | undefined;
    }
}

declare namespace powerbi {
    import ISQExpr = data.ISQExpr;

    type Paragraphs = Paragraph[];

    interface Paragraph {
        horizontalTextAlignment?: string | undefined;
        textRuns: TextRun[];
    }

    interface TextRunStyle {
        fontFamily?: string | undefined;
        fontSize?: string | undefined;
        fontStyle?: string | undefined;
        fontWeight?: string | undefined;
        color?: string | undefined;
        textDecoration?: string | undefined;
    }

    interface TextRun {
        textStyle?: TextRunStyle | undefined;
        url?: string | undefined;
        value: string;
        valueExpr?: ISQExpr | undefined;
    }
}

declare namespace powerbi {
    import SemanticFilter = data.ISemanticFilter;

    /** Defines instances of structural types. */
    type StructuralObjectValue =
        Fill |
        FillRule |
        SemanticFilter |
        DefaultValueDefinition |
        ImageValue |
        Paragraphs |
        GeoJson |
        DataBars;

    /** Describes a structural type in the client type system. Leaf properties should use ValueType. */
    interface StructuralTypeDescriptor {
        fill?: FillTypeDescriptor | undefined;
        fillRule?: {} | undefined;
        filter?: FilterTypeDescriptor | undefined;
        expression?: DefaultValueTypeDescriptor | undefined;
        image?: {} | undefined;
        paragraphs?: {} | undefined;
        geoJson?: {} | undefined;
        queryTransform?: {} | undefined;
        dataBars?: {} | undefined;
    }
}

declare namespace powerbi {
    /** Describes a data value type in the client type system. Can be used to get a concrete ValueType instance. */
    interface ValueTypeDescriptor {
        // Simplified primitive types
        readonly text?: boolean | undefined;
        readonly numeric?: boolean | undefined;
        readonly integer?: boolean | undefined;
        readonly bool?: boolean | undefined;
        readonly dateTime?: boolean | undefined;
        readonly duration?: boolean | undefined;
        readonly binary?: boolean | undefined;
        readonly none?: boolean | undefined; // TODO: 5005022 remove none type when we introduce property categories.

        // Extended types
        readonly temporal?: TemporalTypeDescriptor | undefined;
        readonly geography?: GeographyTypeDescriptor | undefined;
        readonly misc?: MiscellaneousTypeDescriptor | undefined;
        readonly formatting?: FormattingTypeDescriptor | undefined;
        /*readonly*/ enumeration?: IEnumType | undefined;
        readonly scripting?: ScriptTypeDescriptor | undefined;
        readonly operations?: OperationalTypeDescriptor | undefined;

        // variant types
        readonly variant?: ValueTypeDescriptor[] | undefined;
    }

    interface ScriptTypeDescriptor {
        readonly source?: boolean | undefined;
    }

    interface TemporalTypeDescriptor {
        readonly year?: boolean | undefined;
        readonly quarter?: boolean | undefined;
        readonly month?: boolean | undefined;
        readonly day?: boolean | undefined;
        readonly paddedDateTableDate?: boolean | undefined;
    }

    interface GeographyTypeDescriptor {
        readonly address?: boolean | undefined;
        readonly city?: boolean | undefined;
        readonly continent?: boolean | undefined;
        readonly country?: boolean | undefined;
        readonly county?: boolean | undefined;
        readonly region?: boolean | undefined;
        readonly postalCode?: boolean | undefined;
        readonly stateOrProvince?: boolean | undefined;
        readonly place?: boolean | undefined;
        readonly latitude?: boolean | undefined;
        readonly longitude?: boolean | undefined;
    }

    interface MiscellaneousTypeDescriptor {
        readonly image?: boolean | undefined;
        readonly imageUrl?: boolean | undefined;
        readonly webUrl?: boolean | undefined;
        readonly barcode?: boolean | undefined;
    }

    interface FormattingTypeDescriptor {
        readonly color?: boolean | undefined;
        readonly formatString?: boolean | undefined;
        readonly alignment?: boolean | undefined;
        readonly labelDisplayUnits?: boolean | undefined;
        readonly fontSize?: boolean | undefined;
        readonly fontFamily?: boolean | undefined;
        readonly labelDensity?: boolean | undefined;
        readonly bubbleSize?: boolean | undefined;
        readonly altText?: boolean | undefined;
    }

    interface OperationalTypeDescriptor {
        readonly searchEnabled?: boolean | undefined;
    }

    /** Describes instances of value type objects. */
    type PrimitiveValue = string | number | boolean | Date;
}

declare namespace powerbi {
    interface DataBars {
        minValue?: number | undefined;
        maxValue?: number | undefined;
        positiveColor: Fill;
        negativeColor: Fill;
        axisColor: Fill;
        reverseDirection: boolean;
        hideText: boolean;
    }
}

declare namespace powerbi {
    interface IViewport {
        height: number;
        width: number;
    }

    interface ScaledViewport extends IViewport {
        scale: number;
    }
}

declare namespace powerbi {
    import Selector = data.Selector;

    interface VisualObjectInstance {
        /** The name of the object (as defined in VisualCapabilities). */
        objectName: string;

        /** A display name for the object instance. */
        displayName?: string | undefined;

        /** The set of property values for this object.  Some of these properties may be defaults provided by the IVisual. */
        properties: {
            [propertyName: string]: DataViewPropertyValue;
        };

        /** The selector that identifies this object. */
        selector: Selector;

        /** (Optional) Defines the constrained set of valid values for a property. */
        validValues?: {
            [propertyName: string]: string[] | ValidationOptions;
        } | undefined;

        /** (Optional) VisualObjectInstanceEnumeration category index. */
        containerIdx?: number | undefined;

        /** (Optional) Set the required type for particular properties that support variant types. */
        propertyTypes?: {
            [propertyName: string]: ValueTypeDescriptor;
        } | undefined;
    }

    type VisualObjectInstanceEnumeration = VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;

    interface ValidationOptions {
        numberRange?: NumberRange | undefined;
    }

    interface VisualObjectInstanceEnumerationObject {
        /** The visual object instances. */
        instances: VisualObjectInstance[];

        /** Defines a set of containers for related object instances. */
        containers?: VisualObjectInstanceContainer[] | undefined;
    }

    interface VisualObjectInstanceContainer {
        displayName: data.DisplayNameGetter;
    }

    interface VisualObjectInstancesToPersist {
        /** Instances which should be merged with existing instances. */
        merge?: VisualObjectInstance[] | undefined;

        /** Instances which should replace existing instances. */
        replace?: VisualObjectInstance[] | undefined;

        /** Instances which should be deleted from the existing instances. */
        remove?: VisualObjectInstance[] | undefined;

        /** Instances which should be deleted from the existing objects. */
        removeObject?: VisualObjectInstance[] | undefined;
    }

    interface EnumerateVisualObjectInstancesOptions {
        objectName: string;
    }
}

declare namespace powerbi {
    import Selector = data.Selector;

    interface VisualObjectRepetition {
        /** The selector that identifies the objects. */
        selector: Selector;

        /** Used to group differernt repetitions into containers. That will be used as the container displayName in the PropertyPane */
        containerName?: string | undefined;

        /** The set of repetition descriptors for this object. */
        objects: {
            [objectName: string]: DataViewRepetitionObjectDescriptor;
        };
    }

    interface DataViewRepetitionObjectDescriptor {
        /** Properties used for formatting (e.g., Conditional Formatting). */
        formattingProperties?: string[] | undefined;
    }
}

declare namespace powerbi.extensibility {
    interface IVisualPluginOptions {
        transform?: IVisualDataViewTransform | undefined;
    }

    interface IVisualConstructor {
        __transform__?: IVisualDataViewTransform | undefined;
    }

    interface IVisualDataViewTransform {
        // tslint:disable-next-line:no-unnecessary-generics
        <T>(dataview: DataView[]): T;
    }

    // These are the base interfaces. These should remain empty
    // All visual versions should extend these for type compatability

    interface IVisual {
        /** Notifies the visual that it is being destroyed, and to do any cleanup necessary (such as unsubscribing event handlers). */
        destroy?(): void;
    }

    interface IVisualHost {
        instanceId: string;
    }

    interface VisualUpdateOptions {
        type: VisualUpdateType;
    }

    interface VisualConstructorOptions {
        /** The loaded module, if any, defined by the IVisualPlugin.module. */
        module?: any;
    }
}

declare namespace powerbi {
    interface IColorInfo extends IStyleInfo {
        value: string;
    }

    interface IStyleInfo {
        className?: string | undefined;
    }
}

declare namespace powerbi.extensibility {
    interface ISelectionManager {
        select(selectionId: visuals.ISelectionId | visuals.ISelectionId[], multiSelect?: boolean): IPromise<visuals.ISelectionId[]>;
        hasSelection(): boolean;
        clear(): IPromise<{}>;
        getSelectionIds(): visuals.ISelectionId[];
        applySelectionFilter(): void;
        registerOnSelectCallback(callback: (ids: visuals.ISelectionId[]) => void): void;
    }
}

declare namespace powerbi.extensibility {
    interface ISelectionIdBuilder {
        withCategory(categoryColumn: DataViewCategoryColumn, index: number): this;
        withSeries(seriesColumn: DataViewValueColumns, valueColumn: DataViewValueColumn | DataViewValueColumnGroup): this;
        withMeasure(measureId: string): this;
        createSelectionId(): visuals.ISelectionId;
    }
}

declare namespace powerbi.extensibility {
    interface IColorPalette {
        getColor(key: string): IColorInfo;
    }
}

declare namespace powerbi.extensibility {
    interface VisualTooltipDataItem {
        displayName: string;
        value: string;
        color?: string | undefined;
        header?: string | undefined;
        opacity?: string | undefined;
    }

    interface TooltipMoveOptions {
        coordinates: number[];
        isTouchEvent: boolean;
        dataItems?: VisualTooltipDataItem[] | undefined;
        identities: visuals.ISelectionId[];
    }

    interface TooltipShowOptions extends TooltipMoveOptions {
        dataItems: VisualTooltipDataItem[];
    }

    interface TooltipHideOptions {
        isTouchEvent: boolean;
        immediately: boolean;
    }

    interface ITooltipService {
        enabled(): boolean;
        show(options: TooltipShowOptions): void;
        move(options: TooltipMoveOptions): void;
        hide(options: TooltipHideOptions): void;
    }
}

declare namespace powerbi.extensibility {
    interface ITelemetryService {
        readonly instanceId: string;
        trace(type: VisualEventType, payload?: string): void;
    }
}

declare namespace powerbi.extensibility {
    function VisualPlugin(options: IVisualPluginOptions): ClassDecorator;
}

declare namespace powerbi.extensibility {
    interface ILocalizationManager {
        getDisplayName(key: string): string;
    }
}

declare namespace powerbi.extensibility {
    interface IAuthenticationService {
        getAADToken(visualId?: string): IPromise<string>;
    }
}

declare namespace powerbi {
    interface IFilter {
        conditions?: any;
    }
}

/**
 * Change Log Version 1.11.0
 * Added `selectionManager.registerOnSelectCallback()` method for Report Bookmarks support
 */

declare namespace powerbi.extensibility.visual {
    /**
     * Represents a visualization displayed within an application (PowerBI dashboards, ad-hoc reporting, etc.).
     * This interface does not make assumptions about the underlying JS/HTML constructs the visual uses to render itself.
     */
    interface IVisual extends extensibility.IVisual {
        /** Notifies the IVisual of an update (data, viewmode, size change). */
        // tslint:disable-next-line:no-unnecessary-generics
        update<T>(options: VisualUpdateOptions, viewModel?: T): void;

        /** Gets the set of objects that the visual is currently displaying. */
        enumerateObjectInstances?(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration;
    }

    interface IVisualHost extends extensibility.IVisualHost {
        createSelectionIdBuilder: () => visuals.ISelectionIdBuilder;
        createSelectionManager: () => ISelectionManager;
        colorPalette: IColorPalette;
        persistProperties: (changes: VisualObjectInstancesToPersist) => void;
        applyJsonFilter: (filter: IFilter, objectName: string, propertyName: string, action: FilterAction) => void;
        tooltipService: ITooltipService;
        telemetry: ITelemetryService;
        authenticationService: IAuthenticationService;
        locale: string;
        allowInteractions: boolean;
        launchUrl: (url: string) => void;
        refreshHostData: () => void;
        createLocalizationManager: () => ILocalizationManager;
    }

    interface VisualUpdateOptions extends extensibility.VisualUpdateOptions {
        viewport: IViewport;
        dataViews: DataView[];
        viewMode?: ViewMode | undefined;
        editMode?: EditMode | undefined;
    }

    interface VisualConstructorOptions extends extensibility.VisualConstructorOptions {
        element: HTMLElement;
        host: IVisualHost;
    }
}
// eslint-disable-next-line export-just-namespace
export = powerbi;
