// Type definitions for @awspilot/dynamodb-util 1.0.0
// Project: https://github.com/awspilot/dynamodb-util
// Definitions by: Tyler Calder <https://github.com/Calder-Ty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace DynamodbUtil {

    export interface DynamodbUtilConfig {
        stringset_parse_as_set: boolean,
        numberset_parse_as_set: boolean,
        empty_string_replace_as: string
    }
    export var config:DynamodbUtilConfig;

    /** Taken from the AWS SDK definition dynamodb.d.ts **/
    export type StringAttributeValue = string;
    export type NumberAttributeValue = string;
    export type BinaryAttributeValue = Uint8Array|string; //Buffer|Uint8Array|Blob|string;
    export type BinarySetAttributeValue = BinaryAttributeValue[];
    export type BooleanAttributeValue = boolean;
    export type NumberSetAttributeValue = NumberAttributeValue[];
    export type MapAttributeValue = {[key: string]: AttributeValue};
    export type ListAttributeValue = AttributeValue[];
    export type StringSetAttributeValue = StringAttributeValue[];
    export type NullAttributeValue = boolean;
    export interface AttributeValue {
        /**
         * An attribute of type String. For example:  "S": "Hello" 
         */
        S?: StringAttributeValue;
        /**
         * An attribute of type Number. For example:  "N": "123.45"  Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
         */
        N?: NumberAttributeValue;
        /**
         * An attribute of type Binary. For example:  "B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk" 
         */
        B?: BinaryAttributeValue;
        /**
         * An attribute of type String Set. For example:  "SS": ["Giraffe", "Hippo" ,"Zebra"] 
         */
        SS?: StringSetAttributeValue;
        /**
         * An attribute of type Number Set. For example:  "NS": ["42.2", "-19", "7.5", "3.14"]  Numbers are sent across the network to DynamoDB as strings, to maximize compatibility across languages and libraries. However, DynamoDB treats them as number type attributes for mathematical operations.
         */
        NS?: NumberSetAttributeValue;
        /**
         * An attribute of type Binary Set. For example:  "BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="] 
         */
        BS?: BinarySetAttributeValue;
        /**
         * An attribute of type Map. For example:  "M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}} 
         */
        M?: MapAttributeValue;
        /**
         * An attribute of type List. For example:  "L": ["Cookies", "Coffee", 3.14159] 
         */
        L?: ListAttributeValue;
        /**
         * An attribute of type Null. For example:  "NULL": true 
         */
        NULL?: NullAttributeValue;
        /**
         * An attribute of type Boolean. For example:  "BOOL": true 
         */
        BOOL?: BooleanAttributeValue;
    }
    export type AnormalizedItem = {[item_key:string]:AttributeValue};
    export function Raw(data:any):void;

    export function anormalizeList(list:any[]):AnormalizedItem[];
    export function anormalizeItem(item:{[key:string]:any}):AnormalizedItem;
    export function anormalizeType($value:boolean|number|string|[]|null):'S'|'N'|'L'|'BOOL'|'NULL';

    export function normalizeItem($item:AnormalizedItem): {[key:string]:any};

    export function stringify($vaue:any):AttributeValue;
    export function parse(v:AttributeValue): any;

    // Not quite sure the full functionality of this
    export function buildExpected($expected:any):any;

    export function expression_name_split(item:string):string[];
    export function clone<T>(source:T):T;
}

export = DynamodbUtil;
