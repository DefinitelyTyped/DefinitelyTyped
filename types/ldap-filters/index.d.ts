// Type definitions for ldap-filters 2.2
// Project: https://github.com/tapmodo/node-ldap-filters
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Filter {
    toString(indent?: boolean | number): string;
    simplify(): Filter;
    match(data: object): boolean;
}

declare namespace Filter {
    let escape_chars: string[];
    let indent: number;
    let indent_char: string;
    let collapse_not: boolean;

    function escape(value: string): string;
    function unescape(value: string): string;
    function parse(input: string): Filter;
    function matchString(data: string | string[], filter: Filter): boolean;
    function matchSubstring(data: string | string[], filter: Filter): boolean;
    function matchApprox(data: string | string[], filter: Filter): boolean;
    function matchGTE(data: string | string[], filter: Filter): boolean;
    function matchLTE(data: string | string[], filter: Filter): boolean;
    function attribute(name: string): Attribute;
    function AND(filters: Filter[]): Group;
    function OR(filters: Filter[]): Group;
    function NOT(filter: Filter): GroupNot;

    interface Group {
        type: string;
        comp: string;
        filters: Filter[];
        toString(indent?: boolean | number): string;
        match(data: object): boolean;
    }

    interface GroupNot extends Group {
        simplify(): Filter;
    }

    interface Attribute {
        name: string;
        escapeChars: string[];
        escape(value: string): string;
        present(): Filter;
        raw(value: string): Filter;
        equalTo(value: string): Filter;
        endsWith(value: string): Filter;
        startsWith(value: string): Filter;
        contains(value: string): Filter;
        approx(value: string): Filter;
        lte(value: string): Filter;
        gte(value: string): Filter;
    }
}

export = Filter;
