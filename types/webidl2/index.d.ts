// Type definitions for webidl2 23.13
// Project: https://github.com/w3c/webidl2.js#readme
// Definitions by: Kagama Sascha Rosylight <https://github.com/saschanaz>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace WebIDL2;
export {};

export function parse(str: string, options?: ParseOptions): IDLRootType[];

export type IDLRootType =
    | CallbackType
    | CallbackInterfaceType
    | DictionaryType
    | EnumType
    | IncludesType
    | InterfaceMixinType
    | InterfaceType
    | NamespaceType
    | TypedefType;

export type IDLCallbackInterfaceMemberType = ConstantMemberType | OperationMemberType;

export type IDLInterfaceMemberType =
    | AttributeMemberType
    | ConstantMemberType
    | ConstructorMemberType
    | DeclarationMemberType
    | OperationMemberType;

export type IDLInterfaceMixinMemberType = AttributeMemberType | ConstantMemberType | OperationMemberType;

export type IDLNamespaceMemberType = AttributeMemberType | OperationMemberType;

export type IDLTypeDescription = GenericTypeDescription | SingleTypeDescription | UnionTypeDescription;

export interface ParseOptions {
    /** Boolean indicating whether the result should include EOF node or not. */
    concrete?: boolean;
    /** The source name, typically a filename. Errors and validation objects can indicate their origin if you pass a value. */
    sourceName?: string;
}

export class WebIDLParseError extends Error {
    constructor(options: {
        message: string;
        bareMessage: string;
        context: string;
        line: number;
        sourceName?: string;
        input: string;
        tokens: Token[];
    });

    name: "WebIDLParseError";

    /** the error message */
    message: string;
    bareMessage: string;

    context: string;
    /** the line at which the error occurred. */
    line: number;
    sourceName: string | undefined;

    /** a short peek at the text at the point where the error happened */
    input: string;
    /** the five tokens at the point of error, as understood by the tokeniser */
    tokens: Token[];
}

export interface Token {
    type: string;
    value: string;
    trivia: string;
    line: number;
    index: number;
}

export interface AbstractBase {
    /** String indicating the type of this node. */
    type: string | null;
    /** The container of this type. */
    parent: AbstractBase | null;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface AbstractTypeDescription extends AbstractBase {
    /** Boolean indicating whether this is nullable or not. */
    nullable: boolean;
    /** The container of this type. */
    parent:
        | Argument
        | AttributeMemberType
        | CallbackType
        | ConstantMemberType
        | DeclarationMemberType
        | FieldType
        | OperationMemberType
        | TypedefType
        | UnionTypeDescription;
}

interface AbstractNonUnionTypeDescription extends AbstractTypeDescription {
    /** String indicating the generic type (e.g. "Promise", "sequence"). The empty string otherwise. */
    generic: IDLTypeDescription["generic"];
    /** Boolean indicating whether this is a union type or not. */
    union: false;
}

interface AbstractGenericTypeDescription extends AbstractNonUnionTypeDescription {
    /**
     * Contains the IDL type description for the type in the sequence,
     * the eventual value of the promise, etc.
     */
    idlType: IDLTypeDescription[];
}

export type GenericTypeDescription =
    | FrozenArrayTypeDescription
    | ObservableArrayTypeDescription
    | PromiseTypeDescription
    | RecordTypeDescription
    | SequenceTypeDescription;

export interface FrozenArrayTypeDescription extends AbstractGenericTypeDescription {
    generic: "FrozenArray";
    idlType: [IDLTypeDescription];
}

export interface ObservableArrayTypeDescription extends AbstractGenericTypeDescription {
    generic: "ObservableArray";
    idlType: [IDLTypeDescription];
}

export interface PromiseTypeDescription extends AbstractGenericTypeDescription {
    generic: "Promise";
    idlType: [IDLTypeDescription];
}

export interface RecordTypeDescription extends AbstractGenericTypeDescription {
    generic: "record";
    idlType: [IDLTypeDescription, IDLTypeDescription];
}

export interface SequenceTypeDescription extends AbstractGenericTypeDescription {
    generic: "sequence";
    idlType: [IDLTypeDescription];
}

export interface SingleTypeDescription extends AbstractNonUnionTypeDescription {
    generic: "";
    /**
     * In most cases, this will just be a string with the type name.
     * If the type is a union, then this contains an array of the types it unites.
     * If it is a generic type, it contains the IDL type description for the type in the sequence,
     * the eventual value of the promise, etc.
     */
    idlType: string;
}

export interface UnionTypeDescription extends AbstractTypeDescription {
    /** String indicating the generic type (e.g. "Promise", "sequence"). The empty string otherwise. */
    generic: "";
    /** Boolean indicating whether this is a union type or not. */
    union: true;
    /**
     * In most cases, this will just be a string with the type name.
     * If the type is a union, then this contains an array of the types it unites.
     * If it is a generic type, it contains the IDL type description for the type in the sequence,
     * the eventual value of the promise, etc.
     */
    idlType: IDLTypeDescription[];
}

export interface AbstractContainer extends AbstractBase {
    /** The name of the container. */
    name: string;
    /** A boolean indicating whether this container is partial. */
    partial: boolean;
    /** An array of container members (attributes, operations, etc.). Empty if there are none. */
    members: AbstractBase[];
}

export interface CallbackInterfaceType extends AbstractContainer {
    type: "callback interface";
    members: IDLCallbackInterfaceMemberType[];
    inheritance: null;
    parent: null;
}

export interface InterfaceType extends AbstractContainer {
    type: "interface";
    members: IDLInterfaceMemberType[];
    /** A string giving the name of an interface this one inherits from, null otherwise. */
    inheritance: string | null;
    parent: null;
}

export interface InterfaceMixinType extends AbstractContainer {
    type: "interface mixin";
    members: IDLInterfaceMixinMemberType[];
    inheritance: null;
    parent: null;
}

export interface NamespaceType extends AbstractContainer {
    type: "namespace";
    members: IDLNamespaceMemberType[];
    inheritance: null;
    parent: null;
}

export interface CallbackType extends AbstractBase {
    type: "callback";
    /** The name of the callback. */
    name: string;
    /** An IDL Type describing what the callback returns. */
    idlType: IDLTypeDescription;
    /** A list of arguments, as in function paramters. */
    arguments: Argument[];
    parent: null;
}

export interface DictionaryType extends AbstractContainer {
    type: "dictionary";
    members: DictionaryMemberType[];
    /** A string giving the name of a dictionary this one inherits from, null otherwise. */
    inheritance: string | null;
    parent: null;
}

export type DictionaryMemberType = FieldType;

export interface FieldType extends AbstractBase {
    type: "field";
    /** The name of the field. */
    name: string;
    /** Boolean indicating whether this is a required field. */
    required: boolean;
    /** An IDL Type describing what field's type. */
    idlType: IDLTypeDescription;
    /** A default value, absent if there is none. */
    default: ValueDescription | null;
    parent: DictionaryType;
}

export interface EnumType extends AbstractBase {
    type: "enum";
    /** The enum's name. */
    name: string;
    /** An array of values (strings). */
    values: Array<{ type: "enum-value"; value: string; parent: EnumType }>;
    /** The container of this type. */
    parent: null;
}

export interface TypedefType extends AbstractBase {
    type: "typedef";
    /** The typedef's name. */
    name: string;
    /** An IDL Type describing what typedef's type. */
    idlType: IDLTypeDescription;
    parent: null;
}

export interface IncludesType extends AbstractBase {
    type: "includes";
    /** The interface that includes an interface mixin. */
    target: string;
    /** The interface mixin that is being included by the target. */
    includes: string;
    parent: null;
}

export interface ConstructorMemberType extends AbstractBase {
    type: "constructor";
    /** An array of arguments for the constructor operation. */
    arguments: Argument[];
    parent: InterfaceType;
}

export interface OperationMemberType extends AbstractBase {
    type: "operation";
    /** Special modifier if exists */
    special: "getter" | "setter" | "deleter" | "static" | "stringifier" | null;
    /** An IDL Type of what the operation returns. If a stringifier, may be absent. */
    idlType: IDLTypeDescription | null;
    /** The name of the operation. If a stringifier, may be null. */
    name: string | null;
    /** An array of arguments for the operation. */
    arguments: Argument[];
    parent: CallbackInterfaceType | InterfaceMixinType | InterfaceType | NamespaceType;
}

export interface AttributeMemberType extends AbstractBase {
    type: "attribute";
    /** The attribute's name. */
    name: string;
    /** Special modifier if exists */
    special: "static" | "stringifier" | null;
    /** True if it's an inherit attribute. */
    inherit: boolean;
    /** True if it's a read-only attribute. */
    readonly: boolean;
    /** An IDL Type for the attribute. */
    idlType: IDLTypeDescription;
    parent: InterfaceMixinType | InterfaceType | NamespaceType;
}

export interface ConstantMemberType extends AbstractBase {
    type: "const";
    /** Whether its type is nullable. */
    nullable: boolean;
    /** An IDL Type of the constant that represents a simple type, the type name. */
    idlType: IDLTypeDescription;
    /** The name of the constant. */
    name: string;
    /** The constant value */
    value: ValueDescription;
    parent: CallbackInterfaceType | InterfaceMixinType | InterfaceType;
}

interface AbstractDeclarationMemberType extends AbstractBase {
    type: DeclarationMemberType["type"];
    /** An array with one or more IDL Types representing the declared type arguments. */
    idlType: IDLTypeDescription[];
    /** Whether the iterable is declared as async. */
    async: boolean;
    /** Whether the maplike or setlike is declared as read only. */
    readonly: boolean;
    /** An array of arguments for the iterable declaration. */
    arguments: Argument[];
    parent: InterfaceMixinType | InterfaceType;
}

export type DeclarationMemberType =
    | IterableDeclarationMemberType
    | MaplikeDeclarationMemberType
    | SetlikeDeclarationMemberType;

export interface IterableDeclarationMemberType extends AbstractDeclarationMemberType {
    type: "iterable";
    idlType: [IDLTypeDescription] | [IDLTypeDescription, IDLTypeDescription];
    async: boolean;
    readonly: false;
}

interface AbstractCollectionLikeMemberType extends AbstractDeclarationMemberType {
    async: false;
    readonly: boolean;
    arguments: [];
}

export interface MaplikeDeclarationMemberType extends AbstractCollectionLikeMemberType {
    type: "maplike";
    idlType: [IDLTypeDescription, IDLTypeDescription];
}

export interface SetlikeDeclarationMemberType extends AbstractCollectionLikeMemberType {
    type: "setlike";
    idlType: [IDLTypeDescription];
}

export interface Argument extends AbstractBase {
    type: "argument";
    /** A default value, absent if there is none. */
    default: ValueDescription | null;
    /** True if the argument is optional. */
    optional: boolean;
    /** True if the argument is variadic. */
    variadic: boolean;
    /** An IDL Type describing the type of the argument. */
    idlType: IDLTypeDescription;
    /** The argument's name. */
    name: string;
    parent: CallbackType | ConstructorMemberType | ExtendedAttribute | OperationMemberType;
}

export interface ExtendedAttribute extends AbstractBase {
    type: "extended-attribute";
    /** The extended attribute's name. */
    name: string;
    /** If the extended attribute takes arguments or if its right-hand side does they are listed here. */
    arguments: Argument[];
    /** If there is a right-hand side, this will capture its type and value. */
    rhs: ExtendedAttributeRightHandSide | null;
    parent: IDLRootType | FieldType | IDLInterfaceMemberType;
}

// prettier-ignore
export type ExtendedAttributeRightHandSide =
    | ExtendedAttributeRightHandSideBase
    | ExtendedAttributeRightHandSideList;

export type ExtendedAttributeRightHandSideBase =
    | ExtendedAttributeRightHandSideIdentifier
    | ExtendedAttributeRightHandSideString
    | ExtendedAttributeRightHandSideDecimal
    | ExtendedAttributeRightHandSideInteger;

export type ExtendedAttributeRightHandSideList =
    | ExtendedAttributeRightHandSideIdentifierList
    | ExtendedAttributeRightHandSideStringList
    | ExtendedAttributeRightHandSideDecimalList
    | ExtendedAttributeRightHandSideIntegerList;

export interface ExtendedAttributeRightHandSideIdentifier {
    type: "identifier";
    value: string;
}

export interface ExtendedAttributeRightHandSideIdentifierList {
    type: "identifier-list";
    value: ExtendedAttributeRightHandSideIdentifier[];
}

export interface ExtendedAttributeRightHandSideString {
    type: "string";
    value: string;
}

export interface ExtendedAttributeRightHandSideStringList {
    type: "string-list";
    value: ExtendedAttributeRightHandSideString[];
}

export interface ExtendedAttributeRightHandSideDecimal {
    type: "decimal";
    value: string;
}

export interface ExtendedAttributeRightHandSideDecimalList {
    type: "decimal-list";
    value: ExtendedAttributeRightHandSideDecimal[];
}

export interface ExtendedAttributeRightHandSideInteger {
    type: "integer";
    value: string;
}

export interface ExtendedAttributeRightHandSideIntegerList {
    type: "integer-list";
    value: ExtendedAttributeRightHandSideInteger[];
}

export interface AbstractValueDescription extends AbstractBase {
    parent: Argument | ConstantMemberType | FieldType;
}

export type ValueDescription =
    | ValueDescriptionString
    | ValueDescriptionNumber
    | ValueDescriptionBoolean
    | ValueDescriptionNull
    | ValueDescriptionInfinity
    | ValueDescriptionNaN
    | ValueDescriptionSequence
    | ValueDescriptionDictionary;

export interface ValueDescriptionString extends AbstractValueDescription {
    type: "string";
    value: string;
}

export interface ValueDescriptionNumber extends AbstractValueDescription {
    type: "number";
    value: string;
}

export interface ValueDescriptionBoolean extends AbstractValueDescription {
    type: "boolean";
    value: boolean;
}

export interface ValueDescriptionNull extends AbstractValueDescription {
    type: "null";
}

export interface ValueDescriptionInfinity extends AbstractValueDescription {
    type: "Infinity";
    negative: boolean;
}

export interface ValueDescriptionNaN extends AbstractValueDescription {
    type: "NaN";
}

export interface ValueDescriptionSequence extends AbstractValueDescription {
    type: "sequence";
    value: [];
}

export interface ValueDescriptionDictionary extends AbstractValueDescription {
    type: "dictionary";
}
