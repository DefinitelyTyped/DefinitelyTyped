// Type definitions for simpl-schema 1.10
// Project: https://github.com/aldeed/simpl-schema
// Definitions by: Andreas Richter <https://github.com/arichter83>
//                 Qkramer <https://github.com/Qkramer>
//                 Deskoh <https://github.com/deskoh>
//                 Nicusor Chiciuc <https://github.com/nicu-chiciuc>
//                 Rafa Horo <https://github.com/rafahoro>
//                 Stepan Yurtsiv <https://github.com/yurtsiv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import { check } from 'meteor/check';

export interface ValidationContext extends SimpleSchemaValidationContextStatic {
    addValidationErrors(errors: any): void;
    clean(...args: any[]): any;
    getErrorForKey(key: any, ...args: any[]): any;
    reset(): void;
    setValidationErrors(errors: any): void;
    validationErrors(): any;
}

interface CustomValidationContext {
    /** The name of the schema key (e.g., "addresses.0.street") */
    key: string;

    /** The generic name of the schema key (e.g., "addresses.$.street") */
    genericKey: string;

    /** True if we're traversing an object that's in an array */
    isInArrayItemObject: boolean;

    /** True if we're traversing an object that's somewhere within another object */
    isInSubObject: boolean;

    /** True if this is running on a MongoDB modifier object */
    isModifier: boolean;

    /** The schema definition object. */
    definition: SchemaDefinition;

    /** Does the object being validated have this key set? */
    isSet: boolean;

    /** Value to validate */
    value: any;

    /** The Mongo operator for which we're doing validation. Might be null. */
    operator?: string | null;

    /** The current validation context */
    validationContext: ValidationContext;

    /**
     * Use this method to get information about other fields. Pass a field name
     * (non-generic schema key) as the only argument. The return object will
     * have isSet, value, and operator properties for that field.
     */
    field(name: string): FieldInfo;
    /**
     * Use this method to get information about other fields that have the same
     * parent object. Works the same way as field(). This is helpful when you use
     * sub-schemas or when you're dealing with arrays of objects.
     */
    siblingField(name: string): FieldInfo;

    /**
     * Call this to add validation errors for any key. In general, you should use
     * this to add errors for other keys. To add an error for the current key,
     * return the error type string. If you do use this to add an error for the
     * current key, return false from your custom validation function.
     */
    addValidationErrors(errors: ReadonlyArray<SimpleSchemaValidationError>): any;
}

interface FieldInfo {
    isSet: boolean;
    value?: any;
    operator: string | null;
}

export interface AutoValueContext {
    closestSubschemaFieldName: string | null;
    field: (fieldName: string) => FieldInfo;
    isModifier: boolean;
    isUpsert: boolean;
    isSet: FieldInfo['isSet'];
    key: string;
    operator: FieldInfo['operator'];
    parentField: () => FieldInfo;
    siblingField: (fieldName: string) => FieldInfo;
    unset: () => void;
    value?: FieldInfo['value'];
}

type Validator = (this: CustomValidationContext) => undefined | string | SimpleSchemaValidationError;

export interface SchemaDefinition {
    type: any;
    label?: string | (() => string);
    optional?: boolean | (() => boolean);
    min?: number | boolean | Date | (() => number | boolean | Date);
    max?: number | boolean | Date | (() => number | boolean | Date);
    minCount?: number | (() => number);
    maxCount?: number | (() => number);
    allowedValues?: any[] | (() => any[]);
    decimal?: boolean;
    exclusiveMax?: boolean;
    exclusiveMin?: boolean;
    regEx?: RegExp | RegExp[];
    /**
     * For custom validation function. If you use an arrow function the context
     * for "this" will not be available. Use "custom: function() { return
     * something(this.value); }" instead.
     */
    custom?: Validator;
    blackbox?: boolean;
    autoValue?: (this: AutoValueContext) => any;
    defaultValue?: any;
    trim?: boolean;
}

interface CleanOption {
    filter?: boolean;
    autoConvert?: boolean;
    removeEmptyStrings?: boolean;
    trimStrings?: boolean;
    getAutoValues?: boolean;
    isModifier?: boolean;
    extendAutoValueContext?: boolean;
    removeNullsFromArrays?: boolean;
}

interface SimpleSchemaOptions {
  check?: typeof check;
  clean?: CleanOption;
  defaultLabel?: string;
  humanizeAutoLabels?: boolean;
  requiredByDefault?: boolean;
  tracker?: any;
}

interface SimpleSchemaValidationError {
  type: string;
  [key: string]: number | string;
}

type IntegerSchema = "SimpleSchema.Integer";

export type SimpleSchemaDefinition = {
    [key: string]:
      | SchemaDefinition
      | BooleanConstructor
      | StringConstructor
      | NumberConstructor
      | DateConstructor
      | ArrayConstructor
      | IntegerSchema
      | [StringConstructor]
      | [NumberConstructor]
      | [IntegerSchema]
      | [SimpleSchema]
      | string
      | RegExp
      | SimpleSchema;
  } | any[];

type SimpleSchemaCreateFunc = (options: { label: string; regExp: string }) => string;

interface SimpleSchemaMessageType {
  [key: string]: string | SimpleSchemaCreateFunc;
}

type SimpleSchemaMessagesDict = Record<string, SimpleSchemaMessageType>;

export class SimpleSchema {
  constructor(schema: SimpleSchemaDefinition, options?: SimpleSchemaOptions);
  namedContext(name?: string): SimpleSchemaValidationContextStatic;
  static isSimpleSchema(obj: any): boolean;
  static addValidator(validator: Validator): void;
  addValidator(validator: Validator): void;
  pick(...fields: string[]): SimpleSchema;
  omit(...fields: string[]): SimpleSchema;
  static oneOf(...types: Array<(RegExp | SchemaDefinition | BooleanConstructor | StringConstructor | NumberConstructor | DateConstructor | ArrayConstructor | IntegerSchema)>): SimpleSchema;
  clean(doc: any, options?: CleanOption): any;
  schema(key: string): SchemaDefinition;
  schema(): SchemaDefinition[];
  getDefinition(key: string, propList?: any, functionContext?: any): any;
  get(key: string, prop: string): any;
  keyIsInBlackBox(key: string): boolean;
  labels(labels: { [key: string]: string }): void;
  label(key: any): any;
  static Integer: IntegerSchema;
  messages(messages: any): any;
  messageForError(type: any, key: any, def: any, value: any): string;
  allowsKey(key: any): string;
  newContext(): ValidationContext;
  objectKeys(keyPrefix?: any): any[];
  validate(obj: any, options?: ValidationOption): void;
  static validate(obj: any, schema: SimpleSchema, options?: ValidationOption): void;
  validator(options?: ValidationOption): (obj: any) => boolean;
  extend(otherSchema: SimpleSchema | SimpleSchemaDefinition): SimpleSchema;
  static extendOptions(options: ReadonlyArray<string>): void;
  static RegEx: {
      Email: RegExp;
      EmailWithTLD: RegExp;
      Domain: RegExp;
      WeakDomain: RegExp;
      IP: RegExp;
      IPv4: RegExp;
      IPv6: RegExp;
      Url: RegExp;
      Id: RegExp;
      ZipCode: RegExp;
      Phone: RegExp;
  };
  static ErrorTypes: {
      REQUIRED: string;
      MIN_STRING: string;
      MAX_STRING: string;
      MIN_NUMBER: string;
      MAX_NUMBER: string;
      MIN_NUMBER_EXCLUSIVE: string;
      MAX_NUMBER_EXCLUSIVE: string;
      MIN_DATE: string;
      MAX_DATE: string;
      BAD_DATE: string;
      MIN_COUNT: string;
      MAX_COUNT: string;
      MUST_BE_INTEGER: string;
      VALUE_NOT_ALLOWED: string;
      EXPECTED_TYPE: string;
      FAILED_REGULAR_EXPRESSION: string;
      KEY_NOT_IN_SCHEMA: string;
  };
  static setDefaultMessages(messages: {messages: SimpleSchemaMessagesDict}): void;
}

interface ValidationOption {
    modifier?: boolean;
    upsert?: boolean;
    clean?: boolean;
    filter?: boolean;
    upsertextendedCustomContext?: boolean;
    keys?: string[];
}

interface SimpleSchemaValidationContextStaticKeys {
    name: string;
    type: string;
    value?: any;
}

interface SimpleSchemaError {
    name: string;
    type: string;
}

interface SimpleSchemaValidationContextStatic {
    validate(obj: any, options?: ValidationOption): boolean;
    validateOne(doc: any, keyName: string, options?: ValidationOption): boolean;
    resetValidation(): void;
    isValid(): boolean;
    invalidKeys(): SimpleSchemaValidationContextStaticKeys[];
    addInvalidKeys(errors: ReadonlyArray<SimpleSchemaError>): void;
    keyIsInvalid(name: any): boolean;
    keyErrorMessage(name: any): string;
    getErrorObject(): any;
}

interface MongoObjectStatic {
    forEachNode(func: () => void, options?: {endPointsOnly: boolean}): void;
    getValueForPosition(position: string): any;
    setValueForPosition(position: string, value: any): void;
    removeValueForPosition(position: string): void;
    getKeyForPosition(position: string): any;
    getGenericKeyForPosition(position: string): any;
    getInfoForKey(key: string): any;
    getPositionForKey(key: string): string;
    getPositionsForGenericKey(key: string): string[];
    getValueForKey(key: string): any;
    addKey(key: string, val: any, op: string): any;
    removeGenericKeys(keys: ReadonlyArray<string>): void;
    removeGenericKey(key: string): void;
    removeKey(key: string): void;
    removeKeys(keys: ReadonlyArray<string>): void;
    filterGenericKeys(test: () => boolean): void;
    setValueForKey(key: string, val: any): void;
    setValueForGenericKey(key: string, val: any): void;
    getObject(): any;
    getFlatObject(options?: {keepArrays?: boolean}): any;
    affectsKey(key: string): any;
    affectsGenericKey(key: string): any;
    affectsGenericKeyImplicit(key: string): any;
}

export const SimpleSchemaValidationContext: SimpleSchemaValidationContextStatic;
export const MongoObject: MongoObjectStatic;

export interface MongoObject {
  expandKey(val: any, key: string, obj: any): void;
}

export default SimpleSchema;
