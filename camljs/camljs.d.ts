// Type definitions for camljs
// Project: http://camljs.codeplex.com
// Definitions by: Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Sys {
    class StringBuilder {
        /** Appends a string to the string builder */
        public append(s: string): void;
        /** Appends a line to the string builder */
        public appendLine(s: string): void;
        /** Clears the contents of the string builder */
        public clear(): void;
        /** Indicates wherever the string builder is empty */
        public isEmpty(): boolean;
        /** Gets the contents of the string builder as a string */
        public toString(): string;
    }
}
declare module SP {
    /** Defines a writer that provides a set of methods to append text in XML format. Use the static SP.XmlWriter.create(sb) Method to create an SP.XmlWriter object with the Sys.StringBuilder object you pass in. */
    class XmlWriter {
        /** Creates a new instance of the XmlWriter class with the specified string builder. */
        static create(sb: Sys.StringBuilder): XmlWriter;
        /** Appends a start element tag with the specified name in XML format to the object?s string builder. */
        public writeStartElement(tagName: string): void;
        /** Appends an element with the specified tag name and value in XML format to the string builder. */
        public writeElementString(tagName: string, value: string): void;
        /** Appends an end element tag in XML format to the object?s string builder. This method appends the end element tag ?/>? if the start element tag is not closed; otherwise, it appends a full end element tag ?</tagName>? to the string builder. */
        public writeEndElement(): void;
        /** Appends an attribute with the specified name and value in XML format to the object?s string builder. */
        public writeAttributeString(localName: string, value: string): void;
        /** This method only appends the name of the attribute. You can append the value of the attribute by calling the SP.XmlWriter.writeString(value) Method, and close the attribute by calling the SP.XmlWriter.writeEndAttribute() Method. */
        public writeStartAttribute(localName: string): void;
        /** Appends an end of an attribute in XML format to the object?s string builder. */
        public writeEndAttribute(): void;
        /** Appends the specified value for an element tag or attribute to the object?s string builder. */
        public writeString(value: string): void;
        /** Appends the specified text to the object?s string builder. */
        public writeRaw(xml: string): void;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        public close(): void;
    }
}
declare class CamlBuilder {
    constructor();
    public Where(): CamlBuilder.IFieldExpression;
    /** Use for:
    1. SPServices CAMLQuery attribute
    2. Creating partial expressions
    3. In conjunction with Any & All clauses
    */
    static Expression(): CamlBuilder.IFieldExpression;
}
declare module CamlBuilder {
    interface IView {
        Query(): IQuery;
    }
    interface IQuery {
        Where(): IFieldExpression;
    }
    interface IFinalizable {
        /** Get the resulting CAML query as string */
        ToString(): string;
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
        GroupBy(fieldInternalName): IGroupedQuery;
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
        /** DEPRECATED. Please use LookupField(...).Id() instead */
        LookupIdField(internalName: string): INumberFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is LookupMulti */
        LookupMultiField(internalName: string): ILookupMultiFieldExpression;
        /** Specifies that a condition will be tested against the field with the specified internal name, and the type of this field is UserMulti */
        UserMultiField(internalName: string): ILookupMultiFieldExpression;
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
        /** Checks whether the value of the field is equal to the specified value */
        EqualTo(value: string): IExpression;
        /** Checks whether the value of the field is not equal to the specified value */
        NotEqualTo(value: string): IExpression;
        /** Checks whether the values of the field includes the specified value */
        Includes(value): IExpression;
        /** Checks whether the values of the field not includes the specified value */
        NotIncludes(value): IExpression;
    }
    enum DateRangesOverlapType {
        /** Returns events for today */
        Now,
        /** Returns events for one day, specified by CalendarDate in QueryOptions */
        Day,
        /** Returns events for one week, specified by CalendarDate in QueryOptions */
        Week,
        /** Returns events for one month, specified by CalendarDate in QueryOptions.
        Caution: usually also returns few days from previous and next months */
        Month,
        /** Returns events for one year, specified by CalendarDate in QueryOptions */
        Year,
    }
    class Internal {
        static createView(): IView;
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
