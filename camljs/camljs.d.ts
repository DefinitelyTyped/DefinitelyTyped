// Type definitions for camljs
// Project: http://camljs.codeplex.com
// Definitions by: Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare class CamlBuilder {
    constructor();
    /** Generate CAML Query, starting from <Where> tag */
    public Where(): CamlBuilder.IFieldExpression;
    /** Generate <View> tag for SP.CamlQuery
    @param viewFields If omitted, default view fields are requested; otherwise, only values for the fields with the specified internal names are returned.
    Specifying view fields is a good practice, as it decreases traffic between server and client. */
    public View(viewFields?: string[]): CamlBuilder.IView;
    /** Use for:
    1. SPServices CAMLQuery attribute
    2. Creating partial expressions
    3. In conjunction with Any & All clauses
    */
    static Expression(): CamlBuilder.IFieldExpression;
}
declare module CamlBuilder {
    interface IView extends IJoinable, IFinalizable {
        Query(): IQuery;
        RowLimit(limit: number, paged?: boolean): IView;
        Scope(scope: ViewScope): IView;
    }
    interface IJoinable {
        /** Join the list you're querying with another list.
        Joins are only allowed through a lookup field relation.
        @param lookupFieldInternalName Internal name of the lookup field, that points to the list you're going to join in.
        @alias alias for the joined list */
        InnerJoin(lookupFieldInternalName: string, alias: string): IJoin;
        /** Join the list you're querying with another list.
        Joins are only allowed through a lookup field relation.
        @param lookupFieldInternalName Internal name of the lookup field, that points to the list you're going to join in.
        @alias alias for the joined list */
        LeftJoin(lookupFieldInternalName: string, alias: string): IJoin;
    }
    interface IJoin extends IJoinable {
        /** Select projected field for using in the main Query body
        @param remoteFieldAlias By this alias, the field can be used in the main Query body. */
        Select(remoteFieldInternalName: string, remoteFieldAlias: string): IProjectableView;
    }
    interface IProjectableView extends IView {
        /** Select projected field for using in the main Query body
        @param remoteFieldAlias By this alias, the field can be used in the main Query body. */
        Select(remoteFieldInternalName: string, remoteFieldAlias: string): IProjectableView;
    }
    enum ViewScope {
        /**  */
        Recursive = 0,
        /**  */
        RecursiveAll = 1,
        /**  */
        FilesOnly = 2,
    }
    interface IQuery {
        Where(): IFieldExpression;
    }
    interface IFinalizable {
        /** Get the resulting CAML query as string */
        ToString(): string;
        /** Get the resulting CAML query as SP.CamlQuery object */
        ToCamlQuery(): any;
    }
    interface ISortable extends IFinalizable {
        /** Adds OrderBy clause to the query
        @param fieldInternalName Internal field of the first field by that the data will be sorted (ascending)
        @param override This is only necessary for large lists. DON'T use it unless you know what it is for!
        @param useIndexForOrderBy This is only necessary for large lists. DON'T use it unless you know what it is for!
        */
        OrderBy(fieldInternalName: string, override?: boolean, useIndexForOrderBy?: boolean): ISortedQuery;
        /** Adds OrderBy clause to the query (using descending order for the first field).
        @param fieldInternalName Internal field of the first field by that the data will be sorted (descending)
        @param override This is only necessary for large lists. DON'T use it unless you know what it is for!
        @param useIndexForOrderBy This is only necessary for large lists. DON'T use it unless you know what it is for!
        */
        OrderByDesc(fieldInternalName: string, override?: boolean, useIndexForOrderBy?: boolean): ISortedQuery;
    }
    interface IGroupable extends ISortable {
        /** Adds GroupBy clause to the query.
        @param collapse If true, only information about the groups is retrieved, otherwise items are also retrieved. */
        GroupBy(fieldInternalName: any): IGroupedQuery;
    }
    interface IExpression extends IGroupable {
        /** Adds And clause to the query. */
        And(): IFieldExpression;
        /** Adds Or clause to the query. */
        Or(): IFieldExpression;
    }
    interface IGroupedQuery extends ISortable {
    }
    interface ISortedQuery extends IFinalizable {
        /** Specifies next order field (ascending) */
        ThenBy(fieldInternalName: string): any;
        /** Specifies next order field (descending) */
        ThenByDesc(fieldInternalName: string): any;
    }
    interface IFieldExpression {
        /** Adds And clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression(). */
        All(...conditions: IExpression[]): IExpression;
        /** Adds Or clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression(). */
        Any(...conditions: IExpression[]): IExpression;
        /** Adds And clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression(). */
        All(conditions: IExpression[]): IExpression;
        /** Adds Or clauses to the query. Use for creating bracket-expressions in conjuction with CamlBuilder.Expression(). */
        Any(conditions: IExpression[]): IExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Text */
        TextField(internalName: string): ITextFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Boolean */
        BooleanField(internalName: string): IBooleanFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is URL */
        UrlField(internalName: string): ITextFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Number */
        NumberField(internalName: string): INumberFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Counter (usually ID fields) */
        CounterField(internalName: string): INumberFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Integer */
        IntegerField(internalName: string): INumberFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is User */
        UserField(internalName: string): IUserFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Lookup */
        LookupField(internalName: string): ILookupFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is LookupMulti */
        LookupMultiField(internalName: string): ILookupMultiFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is UserMulti */
        UserMultiField(internalName: string): IUserMultiFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is Date */
        DateField(internalName: string): IDateTimeFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is DateTime */
        DateTimeField(internalName: string): IDateTimeFieldExpression;
        /** Used in queries for retrieving recurring calendar events.
        NOTICE: DateRangesOverlap with overlapType other than Now cannot be used with SP.CamlQuery, because it doesn't support
        CalendarDate and ExpandRecurrence query options. Lists.asmx, however, supports them, so you can still use DateRangesOverlap
        with SPServices.
        @param overlapType Defines type of overlap: return all events for a day, for a week, for a month or for a year
        @param calendarDate Defines date that will be used for determining events for which exactly day/week/month/year will be returned.
        This value is ignored for overlapType=Now, but for the other overlap types it is mandatory.
        @param eventDateField Internal name of "Start Time" field (default: "EventDate" - all OOTB Calendar lists use this name)
        @param endDateField Internal name of "End Time" field (default: "EndDate" - all OOTB Calendar lists use this name)
        @param recurrenceIDField Internal name of "Recurrence ID" field (default: "RecurrenceID" - all OOTB Calendar lists use this name)
        */
        DateRangesOverlap(overlapType: DateRangesOverlapType, calendarDate: string, eventDateField?: string, endDateField?: string, recurrenceIDField?: string): IExpression;
    }
    interface IBooleanFieldExpression {
        /** Checks whether the value of the field is True */
        IsTrue(): IExpression;
        /** Checks whether the value of the field is False */
        IsFalse(): IExpression;
        /** Checks whether the value of the field is equal to the specified value */
        EqualTo(value: boolean): IExpression;
        /** Checks whether the value of the field is not equal to the specified value */
        NotEqualTo(value: boolean): IExpression;
        /** Checks whether the value of the field was specified by user */
        IsNull(): IExpression;
        /** Checks whether the value of the field was not specified by user */
        IsNotNull(): IExpression;
    }
    interface INumberFieldExpression {
        /** Checks whether the value of the field is equal to the specified value */
        EqualTo(value: number): IExpression;
        /** Checks whether the value of the field is not equal to the specified value */
        NotEqualTo(value: number): IExpression;
        /** Checks whether the value of the field is greater than the specified value */
        GreaterThan(value: number): IExpression;
        /** Checks whether the value of the field is less than the specified value */
        LessThan(value: number): IExpression;
        /** Checks whether the value of the field is greater than or equal to the specified value */
        GreaterThanOrEqualTo(value: number): IExpression;
        /** Checks whether the value of the field is less than or equal to the specified value */
        LessThanOrEqualTo(value: number): IExpression;
        /** Checks whether the value of the field was specified by user */
        IsNull(): IExpression;
        /** Checks whether the value of the field was not specified by user */
        IsNotNull(): IExpression;
        /** Checks whether the value of the field is equal to one of the specified values */
        In(arrayOfValues: number[]): IExpression;
    }
    interface IDateTimeFieldExpression {
        /** Checks whether the value of the field was specified by user */
        IsNull(): IExpression;
        /** Checks whether the value of the field was not specified by user */
        IsNotNull(): IExpression;
        /** Checks whether the value of the field is equal to the specified value */
        EqualTo(value: Date): IExpression;
        /** Checks whether the value of the field is not equal to the specified value */
        NotEqualTo(value: Date): IExpression;
        /** Checks whether the value of the field is greater than the specified value */
        GreaterThan(value: Date): IExpression;
        /** Checks whether the value of the field is less than the specified value */
        LessThan(value: Date): IExpression;
        /** Checks whether the value of the field is greater than or equal to the specified value */
        GreaterThanOrEqualTo(value: Date): IExpression;
        /** Checks whether the value of the field is less than or equal to the specified value */
        LessThanOrEqualTo(value: Date): IExpression;
        /** Checks whether the value of the field is equal to one of the specified values */
        In(arrayOfValues: Date[]): IExpression;
        /** Checks whether the value of the field is equal to the specified value.
        The datetime value should be defined in ISO 8601 format! */
        EqualTo(value: string): IExpression;
        /** Checks whether the value of the field is not equal to the specified value.
        The datetime value should be defined in ISO 8601 format! */
        NotEqualTo(value: string): IExpression;
        /** Checks whether the value of the field is greater than the specified value.
        The datetime value should be defined in ISO 8601 format! */
        GreaterThan(value: string): IExpression;
        /** Checks whether the value of the field is less than the specified value.
        The datetime value should be defined in ISO 8601 format! */
        LessThan(value: string): IExpression;
        /** Checks whether the value of the field is greater than or equal to the specified value.
        The datetime value should be defined in ISO 8601 format! */
        GreaterThanOrEqualTo(value: string): IExpression;
        /** Checks whether the value of the field is less than or equal to the specified value.
        The datetime value should be defined in ISO 8601 format! */
        LessThanOrEqualTo(value: string): IExpression;
        /** Checks whether the value of the field is equal to one of the specified values.
        The datetime value should be defined in ISO 8601 format! */
        In(arrayOfValues: string[]): IExpression;
    }
    interface ITextFieldExpression {
        /** Checks whether the value of the field is equal to the specified value */
        EqualTo(value: string): IExpression;
        /** Checks whether the value of the field is not equal to the specified value */
        NotEqualTo(value: string): IExpression;
        /** Checks whether the value of the field contains the specified substring */
        Contains(value: string): IExpression;
        /** Checks whether the value of the field begins with the specified substring */
        BeginsWith(value: string): IExpression;
        /** Checks whether the value of the field was specified by user */
        IsNull(): IExpression;
        /** Checks whether the value of the field was not specified by user */
        IsNotNull(): IExpression;
        /** Checks whether the value of the field is equal to one of the specified values */
        In(arrayOfValues: string[]): IExpression;
    }
    interface IUserFieldExpression {
        /** DEPRECATED. Please use IsIn* methods instead. This property will be removed in next release(!!) */
        Membership: IMembership;
        /** Checks whether the value of the User field is equal to id of the current user */
        EqualToCurrentUser(): IExpression;
        /** Checks whether the group specified by the value of the field includes the current user. */
        IsInCurrentUserGroups(): IExpression;
        /** Checks whether the user specified by the value of the field is member of the specified SharePoint Group. */
        IsInSPGroup(groupId: number): IExpression;
        /** Checks whether the user specified by the value of the field is member of current SPWeb groups. */
        IsInSPWebGroups(): IExpression;
        /** Checks whether the user specified by the value of the field is in current SPWeb users. */
        IsInSPWebAllUsers(): IExpression;
        /** Checks whether the user specified by the value of the field has received the rights to the site directly (not through a group). */
        IsInSPWebUsers(): IExpression;
        /** Specifies that id of the user will be used for further comparisons. */
        Id(): INumberFieldExpression;
        /** Specifies that lookup target field value will be used for further comparisons. */
        ValueAsText(): ITextFieldExpression;
    }
    /** DEPRECATED!! Please use UserField(...).IsIn* methods instead. This interface will be removed in the next release */
    interface IMembership {
        /** DEPRECATED. Please use UserField(...).IsInCurrentUserGroups() instead */
        CurrentUserGroups(): IExpression;
        /** DEPRECATED. Please use UserField(...).IsInSPGroup() instead */
        SPGroup(groupId: number): IExpression;
        /** DEPRECATED. Please use UserField(...).IsInSPWeb* methods instead */
        SPWeb: IMembershipSPWeb;
    }
    /** DEPRECATED!! Please use UserField(...).IsInSPWeb* methods instead. This interface will be removed in the next release */
    interface IMembershipSPWeb {
        /** DEPRECATED. Please use UserField(...).IsInSPWebAllUsers() instead */
        AllUsers(): IExpression;
        /** DEPRECATED. Please use UserField(...).IsInSPWebUsers() instead */
        Users(): IExpression;
        /** DEPRECATED. Please use UserField(...).IsInSPWebGroups() instead */
        Groups(): IExpression;
    }
    interface ILookupFieldExpression {
        /** Specifies that lookup id value will be used. */
        Id(): INumberFieldExpression;
        /** Specifies that lookup value will be used and this value is of type Text */
        ValueAsText(): ITextFieldExpression;
        /** Specifies that lookup value will be used and this value is of type Number */
        ValueAsNumber(): INumberFieldExpression;
        /** Specifies that lookup value will be used and this value is of type Date */
        ValueAsDate(): IDateTimeFieldExpression;
        /** Specifies that lookup value will be used and this value is of type DateTime */
        ValueAsDateTime(): IDateTimeFieldExpression;
        /** Specifies that lookup value will be used and this value is of type Boolean */
        ValueAsBoolean(): IBooleanFieldExpression;
    }
    interface ILookupMultiFieldExpression {
        /** Checks a condition against every item in the multi lookup value */
        IncludesSuchItemThat(): ILookupFieldExpression;
        /** Checks whether the field values collection is empty */
        IsNull(): IExpression;
        /** Checks whether the field values collection is not empty */
        IsNotNull(): IExpression;
        /** DEPRECATED: use "IncludesSuchItemThat().ValueAsText().EqualTo(value)" instead. */
        Includes(value: any): IExpression;
        /** DEPRECATED: use "IncludesSuchItemThat().ValueAsText().NotEqualTo(value)" instead. */
        NotIncludes(value: any): IExpression;
        /** DEPRECATED: "Eq" operation in CAML works exactly the same as "Includes". To avoid confusion, please use Includes. */
        EqualTo(value: any): IExpression;
        /** DEPRECATED: "Neq" operation in CAML works exactly the same as "NotIncludes". To avoid confusion, please use NotIncludes. */
        NotEqualTo(value: any): IExpression;
    }
    interface IUserMultiFieldExpression {
        /** Checks a condition against every item in the multi lookup value */
        IncludesSuchItemThat(): IUserFieldExpression;
        /** Checks whether the field values collection is empty */
        IsNull(): IExpression;
        /** Checks whether the field values collection is not empty */
        IsNotNull(): IExpression;
        /** DEPRECATED: use "IncludesSuchItemThat().ValueAsText().EqualTo(value)" instead. */
        Includes(value: any): IExpression;
        /** DEPRECATED: use "IncludesSuchItemThat().ValueAsText().NotEqualTo(value)" instead. */
        NotIncludes(value: any): IExpression;
        /** DEPRECATED: "Eq" operation in CAML works exactly the same as "Includes". To avoid confusion, please use Includes. */
        EqualTo(value: any): IExpression;
        /** DEPRECATED: "Neq" operation in CAML works exactly the same as "NotIncludes". To avoid confusion, please use NotIncludes. */
        NotEqualTo(value: any): IExpression;
    }
    enum DateRangesOverlapType {
        /** Returns events for today */
        Now = 0,
        /** Returns events for one day, specified by CalendarDate in QueryOptions */
        Day = 1,
        /** Returns events for one week, specified by CalendarDate in QueryOptions */
        Week = 2,
        /** Returns events for one month, specified by CalendarDate in QueryOptions.
        Caution: usually also returns few days from previous and next months */
        Month = 3,
        /** Returns events for one year, specified by CalendarDate in QueryOptions */
        Year = 4,
    }
    class Internal {
        static createView(viewFields?: string[]): IView;
        static createWhere(): IFieldExpression;
        static createExpression(): IFieldExpression;
    }
    class CamlValues {
        /** Dynamic value that represents Id of the current user */
        static UserID: string;
        /** Dynamic value that represents current date */
        static Today: string;
        /** Dynamic value that represents current date with specified offset (may be negative) */
        static TodayWithOffset(offsetDays: number): string;
        static Now: string;
        /** Dynamic value that represents a property of the current list */
        static ListProperty: {
            Created: string;
            DefaultViewUrl: string;
            Description: string;
            EnableSyndication: string;
            ItemCount: string;
            LinkTitle: string;
            MajorVersionLimit: string;
            MajorWithMinorVersionsLimit: string;
            RelativeFolderPath: string;
            Title: string;
            ViewSelector: string;
        };
        /** Dynamic value that represents a property of the current SPWeb */
        static ProjectProperty: {
            BlogCategoryTitle: string;
            BlogPostTitle: string;
            Description: string;
            RecycleBinEnabled: string;
            SiteOwnerName: string;
            SiteUrl: string;
            Title: string;
            Url: string;
        };
    }
}
