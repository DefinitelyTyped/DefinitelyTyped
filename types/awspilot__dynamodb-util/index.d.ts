// Type definitions for @awspilot/dynamodb-util 1.0
// Project: https://github.com/awspilot/dynamodb-util
// Definitions by: Tyler Calder <https://github.com/Calder-Ty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace DynamodbUtil {
    interface DynamodbUtilConfig {
        stringset_parse_as_set: boolean;
        numberset_parse_as_set: boolean;
        empty_string_replace_as: string;
    }
    const config: DynamodbUtilConfig;

    // Taken from the AWS SDK definition dynamodb.d.ts
    type StringAttributeValue = string;
    type NumberAttributeValue = string;
    type BinaryAttributeValue = Uint8Array|string; // Buffer|Uint8Array|Blob|string;
    type BinarySetAttributeValue = BinaryAttributeValue[];
    type BooleanAttributeValue = boolean;
    type NumberSetAttributeValue = NumberAttributeValue[];
    interface MapAttributeValue {[key: string]: AttributeValue}
    type ListAttributeValue = AttributeValue[];
    type StringSetAttributeValue = StringAttributeValue[];
    type NullAttributeValue = boolean;
    interface AttributeValue {
        S?: StringAttributeValue;
        N?: NumberAttributeValue;
        B?: BinaryAttributeValue;
        SS?: StringSetAttributeValue;
        NS?: NumberSetAttributeValue;
        BS?: BinarySetAttributeValue;
        M?: MapAttributeValue;
        L?: ListAttributeValue;
        NULL?: NullAttributeValue;
        BOOL?: BooleanAttributeValue;
    }
    interface AnormalizedItem {[item_key: string]: AttributeValue}
    function Raw(data: any): void;

    function anormalizeList(list: any[]): AnormalizedItem[];
    function anormalizeItem(item: {[key: string]: any}): AnormalizedItem;
    function anormalizeType($value: boolean|number|string|[]|null): 'S'|'N'|'L'|'BOOL'|'NULL';

    function normalizeItem($item: AnormalizedItem): {[key: string]: any};

    function stringify($vaue: any): AttributeValue;
    function parse(v: AttributeValue): any;

    // Not quite sure the full functionality of this
    function buildExpected($expected: any): any;

    function expression_name_split(item: string): string[];
    function clone<T>(source: T): T;
}

declare function DynamodbUtil(): void;

export = DynamodbUtil;
