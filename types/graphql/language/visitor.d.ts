export const QueryDocumentKeys: {
    Name: any[];
    Document: string[];
    OperationDefinition: string[];
    VariableDefinition: string[];
    Variable: string[];
    SelectionSet: string[];
    Field: string[];
    Argument: string[];

    FragmentSpread: string[];
    InlineFragment: string[];
    FragmentDefinition: string[];

    IntValue: number[];
    FloatValue: number[];
    StringValue: string[];
    BooleanValue: boolean[];
    NullValue: null[],
    EnumValue: any[];
    ListValue: string[];
    ObjectValue: string[];
    ObjectField: string[];

    Directive: string[];

    NamedType: string[];
    ListType: string[];
    NonNullType: string[];

    ObjectTypeDefinition: string[];
    FieldDefinition: string[];
    InputValueDefinition: string[];
    InterfaceTypeDefinition: string[];
    UnionTypeDefinition: string[];
    ScalarTypeDefinition: string[];
    EnumTypeDefinition: string[];
    EnumValueDefinition: string[];
    InputObjectTypeDefinition: string[];
    TypeExtensionDefinition: string[];
}

export const BREAK: any;

export function visit(root: any, visitor: any, keyMap?: any): any;

export function visitInParallel(visitors: any): any;

export function visitWithTypeInfo(typeInfo: any, visitor: any): any;
