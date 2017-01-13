// Type definitions for joData v1.1
// Project: https://github.com/mccow002/joData
// Definitions by: Chris Wrench <https://github.com/cgwrench>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class jo
{
    constructor(baseUri: string);

    baseUri: string;
    ExpandSettings: jo.ExpandSettings;
    FilterSettings: jo.InlineCountSettings;
    FormatSettings: jo.FormatSettings;
    InlineCountSettings: jo.InlineCountSettings;
    OrderBySettings: jo.OrderBySettings;
    SelectSettings: jo.SelectSettings;
    SkipSettings: jo.SkipSettings;
    TopSettings: jo.TopSettings;

    currentHashRoute: string;
    updateHashRoute: (hashRoute: string) => void;

    // Order by
    setOrderByDefault(property: string, order?: string): jo;
    toggleOrderBy(property: string, callback?: Function): jo;
    orderBy(property: string): jo;
    desc(): jo;
    asc(): jo;
    resetOrderBy(): jo;

    // Top
    setTopDefault(top: number): jo;
    top(top: number): jo;
    resetTop(): jo;

    // Skip
    setSkipDefault(skip: number): jo;
    skip(skip: number): jo;
    resetSkip(): jo;

    // Select
    setSelectDefault(select: string[]): jo;
    select(select: string[]): jo;
    resetSelect(): jo;

    // Expand
    setExpandDefault(expand: string): jo;
    expand(expand: string): jo;
    resetExpand(): jo;

    // Format
    format(): jo.FormatOptions;
    formatDefault(): jo.FormatOptions;
    resetFormat(): void;

    // Inline count
    inlineCount(): jo.InlineCountOptions;
    inlineCountDefault(): jo.InlineCountOptions;
    resetInlineCount(): void;

    // Filter
    filter(filterClause: jo.FilterClause|jo.PrecedenceGroup): jo;
    andFilter(filterClause: jo.FilterClause|jo.PrecedenceGroup): jo;
    orFilter(filterClause: jo.FilterClause|jo.PrecedenceGroup): jo;
    removeFilter(property: string): jo;
    captureFilter(): void;
    resetFilter(): jo;
    resetToCapturedFilter(): jo;
    defaultFilter(filterClause: jo.FilterClause): jo;
    defaultAndFilter(filterClause: jo.FilterClause): jo;
    defaultOrFilter(filterClause: jo.FilterClause): jo;

    // Casts
    static literal: (stringLiteral: string) => string;
    static datetime: (stringLiteral: string) => string;
    static guid: (stringLiteral: string) => string;
    static decimal: (stringLiteral: number) => string;
    static double: (stringLiteral: number) => string;
    static single: (stringLiteral: number) => string;

    toString: () => string;
    toJson: () => string;
    saveLocal: (key?: string) => void;

    static loadLocal: (key?: string) => jo;
}

declare namespace jo {
    interface FormatOptions {
        atom(): jo;
        custom(value: string): jo;
        json(): jo;
        xml(): jo;
    }

    interface InlineCountOptions {
        allPages(): jo;
        none(): jo;
    }

    export class FilterClause {
        constructor();
        constructor(property: string);

        toString(): string;
        isEmpty(): Boolean;

        Property: string;
        Components: string[];
        IsClauseEmpty: Boolean;
        PropertyIncluded: Boolean;
        UsingNot: Boolean;
        Value: any;
        FuncReturnType: any;
        transformFunc: Function;

        // Logical operators
        eq(value: string|number|boolean): jo.FilterClause;
        ne(value: string|number|boolean): jo.FilterClause;
        gt(value: string|number|boolean): jo.FilterClause;
        ge(value: string|number|boolean): jo.FilterClause;
        lt(value: string|number|boolean): jo.FilterClause;
        le(value: string|number|boolean): jo.FilterClause;
        not(): jo.FilterClause;

        // Arithmetic methods
        add(amount: number): jo.FilterClause;
        sub(amount: number): jo.FilterClause;
        mul(amount: number): jo.FilterClause;
        div(amount: number): jo.FilterClause;
        mod(amount: number): jo.FilterClause;

        // String functions
        substringof(value: string): jo.FilterClause;
        substring(position: number, length?: number): jo.FilterClause;
        toLower(): jo.FilterClause;
        toUpper(): jo.FilterClause;
        trim(): jo.FilterClause;
        endswith(value: string): jo.FilterClause;
        startswith(value: string): jo.FilterClause;
        length(): jo.FilterClause;
        indexof(value: string): jo.FilterClause;
        replace(find: string, replace: string): jo.FilterClause;

        // Concat
        Concat(concat: jo.Concat): jo.FilterClause;

        // Date functions
        day(): jo.FilterClause;
        hour(): jo.FilterClause;
        minute(): jo.FilterClause;
        month(): jo.FilterClause;
        second(): jo.FilterClause;
        year(): jo.FilterClause;

        // Math functions
        round(): jo.FilterClause;
        floor(): jo.FilterClause;
        ceiling() : jo.FilterClause;
    }

    // Precedence groups
    export class PrecedenceGroup {
        constructor(filterClause: jo.FilterClause)
        andFilter(filterClause: jo.FilterClause): jo.FilterClause;
        orFilter(filterClause: jo.FilterClause): jo.FilterClause;
    }

    // Concat
    export class Concat {
        constructor(value1: string|jo.Concat, value2: string|jo.Concat)
        LeftSide: string|jo.Concat;
        RightSide: string|jo.Concat;
        toString(): string;
    }

    // TODO What is the most appropriate place for these interfaces?
    // They are only required by the `jo` class.
    interface ISettings {
    	toString: () => string;
        reset: () => void;
        isSet: () => Boolean;
    }

    interface OrderBySettings extends ISettings {
        Property: string;
        Order: string;
        DefaultProperty:string;
        DefaultOrder: string;
    }

    interface TopSettings extends ISettings {
        Top: number;
        DefaultTop: number;
    }

    interface SkipSettings extends ISettings {
        Skip: number;
        DefaultSkip: number;
    }

    interface SelectSettings extends ISettings {
        Select: string[];
        DefaultSelect: string[];
    }

    interface ExpandSettings extends ISettings {
        Expand: string;
        DefaultExpand: string;
    }

    interface FormatSettings extends ISettings {
        Format: string;
        DefaultFormat: string;
    }

    interface InlineCountSettings extends ISettings {
        InlineCount: string;
        DefaultInlineCount: string;
    }

    interface FilterSettings extends ISettings {
        Filters: FilterClause[];
        DefaultFilters: FilterClause[];
        CapturedFilter: FilterClause[];
        fullReset: () => void;
        loadFromJson: (filterSettings: any) => void;
    }
}
