// Type definitions for webidl2 23.8
// Project: https://github.com/w3c/webidl2.js#readme
// Definitions by: Kagama Sascha Rosylight <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace WebIDL2;

export function parse(str: string, options?: ParseOptions): IDLRootType[];

export type IDLRootType = InterfaceType | InterfaceMixinType | NamespaceType | CallbackType | DictionaryType | EnumType | TypedefType | IncludesType;

export type IDLInterfaceMemberType = OperationMemberType | ConstructorMemberType | AttributeMemberType | ConstantMemberType | DeclarationMemberType;

export type IDLNamespaceMemberType = OperationMemberType | AttributeMemberType;

export interface ParseOptions {
    /** Boolean indicating whether the result should include EOF node or not. */
    concrete?: boolean;
    /** The source name, typically a filename. Errors and validation objects can indicate their origin if you pass a value. */
    sourceName?: string;
}

export interface WebIDLParseError {
    /** the error message */
    message: string;
    /** the line at which the error occurred. */
    line: number;
    /** a short peek at the text at the point where the error happened */
    input: string;
    /** the five tokens at the point of error, as understood by the tokeniser */
    tokens: ValueDescription[];

    toString(): string;
}

// tslint:disable-next-line interface-name
export interface IDLTypeDescription {
    /** String indicating where this type is used. Can be null if not applicable. */
    type: string | null;
    /** Boolean indicating if it is a sequence. Same as generic === "sequence" */
    sequence: boolean;
    /** String indicating the generic type (e.g. "Promise", "sequence"). null otherwise. */
    generic: string | null;
    /** Boolean indicating whether this is nullable or not. */
    nullable: boolean;
    /** Boolean indicating whether this is a union type or not. */
    union: boolean;
    /**
     * In most cases, this will just be a string with the type name.
     * If the type is a union, then this contains an array of the types it unites.
     * If it is a generic type, it contains the IDL type description for the type in the sequence,
     * the eventual value of the promise, etc.
     */
    idlType: string | IDLTypeDescription[];
}

export interface InterfaceType {
    type: "interface" | "callback interface";
    /** The name of the interface */
    name: string;
    /** A boolean indicating whether it's a partial interface. */
    partial: boolean;
    /** An array of interface members (attributes, operations, etc.). Empty if there are none. */
    members: IDLInterfaceMemberType[];
    /** A string giving the name of an interface this one inherits from, null otherwise. */
    inheritance: string | null;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface InterfaceMixinType {
    type: "interface mixin";
    /** The name of the interface mixin */
    name: string;
    /** A boolean indicating whether it's a partial interface mixin. */
    partial: boolean;
    /** An array of interface members (attributes, operations, etc.). Empty if there are none. */
    members: IDLInterfaceMemberType[];
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface NamespaceType {
    type: "namespace";
    /** A boolean indicating whether it's a partial namespace. */
    partial: boolean;
    /** The enum's name. */
    name: string;
    /** An array of namespace members (attributes, operations). Empty if there are none. */
    members: IDLNamespaceMemberType[];
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface CallbackType {
    type: "callback";
    /** The name of the callback. */
    name: string;
    /** An IDL Type describing what the callback returns. */
    idlType: IDLTypeDescription;
    /** A list of arguments, as in function paramters. */
    arguments: Argument[];
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface DictionaryType {
    type: "dictionary";
    /** The dictionary name. */
    name: string;
    /** Boolean indicating whether it's a partial dictionary. */
    partial: boolean;
    /** An array of members (see below). */
    members: DictionaryMemberType[];
    /** A string indicating which dictionary is being inherited from, null otherwise. */
    inheritance: string | null;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface DictionaryMemberType extends FieldType {
    /** Boolean indicating whether this is a required field. */
    required: boolean;
    /** A default value, absent if there is none. */
    default: ValueDescription | null;
}

export interface FieldType {
    type: "field";
    /** The name of the field. */
    name: string;
    /** An IDL Type describing what field's type. */
    idlType: IDLTypeDescription;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
    /** A default value, absent if there is none. */
    default: ValueDescription | null;
}

export interface EnumType {
    type: "enum";
    /** The enum's name. */
    name: string;
    /** An array of values (strings). */
    values: Array<{ type: "string", value: string }>;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface TypedefType {
    type: "typedef";
    /** The typedef's name. */
    name: string;
    /** An IDL Type describing what typedef's type. */
    idlType: IDLTypeDescription;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface IncludesType {
    type: "includes";
    /** The interface that includes an interface mixin. */
    target: string;
    /** The interface mixin that is being included by the target. */
    includes: string;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface ConstructorMemberType {
    type: "constructor";
    /** An array of arguments for the constructor operation. */
    arguments: Argument[];
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface OperationMemberType {
    type: "operation";
    /** Special modifier if exists */
    special: "getter" | "setter" | "deleter" | "static" | "stringifier";
    /** An IDL Type of what the operation returns. If a stringifier, may be absent. */
    idlType: IDLTypeDescription | null;
    /** The name of the operation. If a stringifier, may be null. */
    name: string | null;
    /** An array of arguments for the operation. */
    arguments: Argument[];
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface AttributeMemberType {
    type: "attribute";
    /** The attribute's name. */
    name: string;
    /** Special modifier if exists */
    special: "static" | "stringifier";
    /** True if it's an inherit attribute. */
    inherit: boolean;
    /** True if it's a read-only attribute. */
    readonly: boolean;
    /** An IDL Type for the attribute. */
    idlType: IDLTypeDescription;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface ConstantMemberType {
    type: "const";
    /** Whether its type is nullable. */
    nullable: boolean;
    /** An IDL Type of the constant that represents a simple type, the type name. */
    idlType: IDLTypeDescription;
    /** The name of the constant. */
    name: string;
    /** The constant value */
    value: ValueDescription;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface Argument {
    default: ValueDescription;
    /** True if the argument is optional. */
    optional: boolean;
    /** True if the argument is variadic. */
    variadic: boolean;
    /** An IDL Type describing the type of the argument. */
    idlType: IDLTypeDescription;
    /** The argument's name. */
    name: string;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}

export interface ExtendedAttribute {
    /** The extended attribute's name. */
    name: string;
    /** If the extended attribute takes arguments or if its right-hand side does they are listed here. */
    arguments: Argument[];
    /** If there is a right-hand side, this will capture its type ("identifier" or "identifier-list") and its value. */
    rhs: ExtendedAttributeRightHandSideIdentifier | ExtendedAttributeRightHandSideIdentifierList | null;
}

export interface Token {
    type: "float" | "integer" | "identifier" | "string" | "whitespace" | "other";
    value: string;
}

export interface ExtendedAttributeRightHandSideIdentifier {
    type: "identifier";
    value: string;
}

export interface ExtendedAttributeRightHandSideIdentifierList {
    type: "identifier-list";
    value: ExtendedAttributeRightHandSideIdentifier[];
}

export interface ValueDescription {
    type: "string" | "number" | "boolean" | "null" | "Infinity" | "NaN" | "sequence" | "dictionary";
    value: string | any[] | null;
    negative: boolean | null;
}

export interface DeclarationMemberType {
    type: "iterable" | "setlike" | "maplike";
    /** An array with one or more IDL Types representing the declared type arguments. */
    idlType: IDLTypeDescription[];
    /** Whether the maplike or setlike is declared as read only. */
    readonly: boolean;
    /** A list of extended attributes. */
    extAttrs: ExtendedAttribute[];
}
