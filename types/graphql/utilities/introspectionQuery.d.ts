import { DirectiveLocationEnum } from '../type/directives';

/*
query IntrospectionQuery {
    __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
        ...FullType
    }
    directives {
        name
        description
        locations
        args {
        ...InputValue
        }
    }
    }
}

fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
    name
    description
    args {
        ...InputValue
    }
    type {
        ...TypeRef
    }
    isDeprecated
    deprecationReason
    }
    inputFields {
    ...InputValue
    }
    interfaces {
    ...TypeRef
    }
    enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
    }
    possibleTypes {
    ...TypeRef
    }
}

fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
}

fragment TypeRef on __Type {
    kind
    name
    ofType {
    kind
    name
    ofType {
        kind
        name
        ofType {
        kind
        name
        ofType {
            kind
            name
            ofType {
            kind
            name
            ofType {
                kind
                name
                ofType {
                kind
                name
                }
            }
            }
        }
        }
    }
    }
}
*/
export const introspectionQuery: string;


export interface IntrospectionQuery {
    __schema: IntrospectionSchema
}

export interface IntrospectionSchema {
    queryType: IntrospectionNamedTypeRef;
    mutationType?: IntrospectionNamedTypeRef;
    subscriptionType?: IntrospectionNamedTypeRef;
    types: Array<IntrospectionType>;
    directives: Array<IntrospectionDirective>;
}

export type IntrospectionType =
    IntrospectionScalarType |
    IntrospectionObjectType |
    IntrospectionInterfaceType |
    IntrospectionUnionType |
    IntrospectionEnumType |
    IntrospectionInputObjectType;

export interface IntrospectionScalarType {
    kind: 'SCALAR';
    name: string;
    description?: string;
}

export interface IntrospectionObjectType {
    kind: 'OBJECT';
    name: string;
    description?: string;
    fields: Array<IntrospectionField>;
    interfaces: Array<IntrospectionNamedTypeRef>;
}

export interface IntrospectionInterfaceType {
    kind: 'INTERFACE';
    name: string;
    description?: string;
    fields: Array<IntrospectionField>;
    possibleTypes: Array<IntrospectionNamedTypeRef>;
}

export interface IntrospectionUnionType {
    kind: 'UNION';
    name: string;
    description?: string;
    possibleTypes: Array<IntrospectionNamedTypeRef>;
}

export interface IntrospectionEnumType {
    kind: 'ENUM';
    name: string;
    description?: string;
    enumValues: Array<IntrospectionEnumValue>;
}

export interface IntrospectionInputObjectType {
    kind: 'INPUT_OBJECT';
    name: string;
    description?: string;
    inputFields: Array<IntrospectionInputValue>;
}

export type IntrospectionTypeRef =
    IntrospectionNamedTypeRef |
    IntrospectionListTypeRef |
    IntrospectionNonNullTypeRef

export interface IntrospectionNamedTypeRef {
    kind: string;
    name: string;
}

export interface IntrospectionListTypeRef {
    kind: 'LIST';
    ofType?: IntrospectionTypeRef;
}

export interface IntrospectionNonNullTypeRef {
    kind: 'NON_NULL';
    ofType?: IntrospectionTypeRef;
}

export interface IntrospectionField {
    name: string;
    description?: string;
    args: Array<IntrospectionInputValue>;
    type: IntrospectionTypeRef;
    isDeprecated: boolean;
    deprecationReason?: string;
}

export interface IntrospectionInputValue {
    name: string;
    description?: string;
    type: IntrospectionTypeRef;
    defaultValue?: string;
}

export interface IntrospectionEnumValue {
    name: string;
    description?: string;
    isDeprecated: boolean;
    deprecationReason?: string;
}

export interface IntrospectionDirective {
    name: string;
    description?: string;
    locations: Array<DirectiveLocationEnum>;
    args: Array<IntrospectionInputValue>;
}
