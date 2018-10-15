import Maybe from "../tsutils/Maybe";
import { DirectiveLocationEnum } from "../language/directiveLocation";

export interface IntrospectionOptions {
    // Whether to include descriptions in the introspection result.
    // Default: true
    descriptions: boolean;
}

export function getIntrospectionQuery(options?: IntrospectionOptions): string;

export const introspectionQuery: string;

export interface IntrospectionQuery {
    readonly __schema: IntrospectionSchema;
}

export interface IntrospectionSchema {
    readonly queryType: IntrospectionNamedTypeRef<IntrospectionObjectType>;
    readonly mutationType: Maybe<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
    readonly subscriptionType: Maybe<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
    readonly types: ReadonlyArray<IntrospectionType>;
    readonly directives: ReadonlyArray<IntrospectionDirective>;
}

export type IntrospectionType =
    | IntrospectionScalarType
    | IntrospectionObjectType
    | IntrospectionInterfaceType
    | IntrospectionUnionType
    | IntrospectionEnumType
    | IntrospectionInputObjectType;

export type IntrospectionOutputType =
    | IntrospectionScalarType
    | IntrospectionObjectType
    | IntrospectionInterfaceType
    | IntrospectionUnionType
    | IntrospectionEnumType;

export type IntrospectionInputType = IntrospectionScalarType | IntrospectionEnumType | IntrospectionInputObjectType;

export interface IntrospectionScalarType {
    readonly kind: "SCALAR";
    readonly name: string;
    readonly description?: Maybe<string>;
}

export interface IntrospectionObjectType {
    readonly kind: "OBJECT";
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly fields: ReadonlyArray<IntrospectionField>;
    readonly interfaces: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionInterfaceType>>;
}

export interface IntrospectionInterfaceType {
    readonly kind: "INTERFACE";
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly fields: ReadonlyArray<IntrospectionField>;
    readonly possibleTypes: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
}

export interface IntrospectionUnionType {
    readonly kind: "UNION";
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly possibleTypes: ReadonlyArray<IntrospectionNamedTypeRef<IntrospectionObjectType>>;
}

export interface IntrospectionEnumType {
    readonly kind: "ENUM";
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly enumValues: ReadonlyArray<IntrospectionEnumValue>;
}

export interface IntrospectionInputObjectType {
    readonly kind: "INPUT_OBJECT";
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly inputFields: ReadonlyArray<IntrospectionInputValue>;
}

export interface IntrospectionListTypeRef<T extends IntrospectionTypeRef = IntrospectionTypeRef> {
    readonly kind: "LIST";
    readonly ofType: T;
}

export interface IntrospectionNonNullTypeRef<T extends IntrospectionTypeRef = IntrospectionTypeRef> {
    readonly kind: "NON_NULL";
    readonly ofType: T;
}

export type IntrospectionTypeRef =
    | IntrospectionNamedTypeRef<IntrospectionType>
    | IntrospectionListTypeRef<any>
    | IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef<IntrospectionType> | IntrospectionListTypeRef<any>>;

export type IntrospectionOutputTypeRef =
    | IntrospectionNamedTypeRef<IntrospectionOutputType>
    | IntrospectionListTypeRef<any>
    | IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef<IntrospectionOutputType> | IntrospectionListTypeRef<any>>;

export type IntrospectionInputTypeRef =
    | IntrospectionNamedTypeRef<IntrospectionInputType>
    | IntrospectionListTypeRef<any>
    | IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef<IntrospectionInputType> | IntrospectionListTypeRef<any>>;

export interface IntrospectionNamedTypeRef<T extends IntrospectionType = IntrospectionType> {
    readonly kind: T["kind"];
    readonly name: string;
}

export interface IntrospectionField {
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly args: ReadonlyArray<IntrospectionInputValue>;
    readonly type: IntrospectionOutputTypeRef;
    readonly isDeprecated: boolean;
    readonly deprecationReason?: Maybe<string>;
}

export interface IntrospectionInputValue {
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly type: IntrospectionInputTypeRef;
    readonly defaultValue?: Maybe<string>;
}

export interface IntrospectionEnumValue {
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly isDeprecated: boolean;
    readonly deprecationReason?: Maybe<string>;
}

export interface IntrospectionDirective {
    readonly name: string;
    readonly description?: Maybe<string>;
    readonly locations: ReadonlyArray<DirectiveLocationEnum>;
    readonly args: ReadonlyArray<IntrospectionInputValue>;
}
