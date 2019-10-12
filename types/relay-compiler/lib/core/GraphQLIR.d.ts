import {
    Source,
    GraphQLInputType,
    GraphQLOutputType,
    GraphQLCompositeType,
    GraphQLLeafType,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';

export type Metadata = { [key: string]: unknown } | undefined;

export interface SourceLocation {
    kind: 'Source';
    start: number;
    end: number;
    source: Source;
}

export interface GeneratedLocation {
    kind: 'Generated';
}

export interface DerivedLocation {
    kind: 'Derived';
    source: Location;
}
export interface UnknownLocation {
    kind: 'Unknown';
}

export type Location = SourceLocation | GeneratedLocation | DerivedLocation | UnknownLocation;

export interface Argument {
    kind: 'Argument';
    loc: Location;
    metadata: Metadata;
    name: string;
    type?: GraphQLInputType;
    value: ArgumentValue;
}

export type ArgumentDefinition = LocalArgumentDefinition | RootArgumentDefinition;

export type ArgumentValue = ListValue | Literal | ObjectValue | Variable;

export interface Condition {
    condition: Literal | Variable;
    kind: 'Condition';
    loc: Location;
    metadata: Metadata;
    passingValue: boolean;
    selections: ReadonlyArray<Selection>;
}

export interface Directive {
    args: ReadonlyArray<Argument>;
    kind: 'Directive';
    loc: Location;
    metadata: Metadata;
    name: string;
}

export type Field = LinkedField | ScalarField | ConnectionField;

export interface Fragment {
    argumentDefinitions: ReadonlyArray<ArgumentDefinition>;
    directives: ReadonlyArray<Directive>;
    kind: 'Fragment';
    loc: Location;
    metadata: Metadata;
    name: string;
    selections: ReadonlyArray<Selection>;
    type: GraphQLCompositeType;
}

export interface FragmentSpread {
    args: ReadonlyArray<Argument>;
    directives: ReadonlyArray<Directive>;
    kind: 'FragmentSpread';
    loc: Location;
    metadata: Metadata;
    name: string;
}

export interface Defer {
    kind: 'Defer';
    loc: Location;
    metadata: Metadata;
    selections: ReadonlyArray<Selection>;
    label: string;
    if: ArgumentValue | null;
}

export interface Stream {
    kind: 'Stream';
    loc: Location;
    metadata: Metadata;
    selections: ReadonlyArray<Selection>;
    label: string;
    if: ArgumentValue | null;
    initialCount: ArgumentValue;
}

export interface InlineDataFragmentSpread {
    kind: 'InlineDataFragmentSpread';
    loc: Location;
    metadata: Metadata;
    name: string;
    selections: ReadonlyArray<Selection>;
}

export type IR =
    | Argument
    | ClientExtension
    | Condition
    | Defer
    | ConnectionField
    | Directive
    | Fragment
    | FragmentSpread
    | InlineFragment
    | LinkedField
    | ListValue
    | Literal
    | LocalArgumentDefinition
    | ModuleImport
    | ObjectFieldValue
    | ObjectValue
    | Request
    | Root
    | RootArgumentDefinition
    | ScalarField
    | SplitOperation
    | Stream
    | InlineDataFragmentSpread
    | Variable;

export interface RootArgumentDefinition {
    kind: 'RootArgumentDefinition';
    loc: Location;
    metadata: Metadata;
    name: string;
    type: GraphQLInputType;
}

export interface InlineFragment {
    directives: ReadonlyArray<Directive>;
    kind: 'InlineFragment';
    loc: Location;
    metadata: Metadata;
    selections: ReadonlyArray<Selection>;
    typeCondition: GraphQLCompositeType;
}

export interface Handle {
    name: string;
    key: string;
    dynamicKey: Variable | null;
    filters?: Readonly<string>;
}

export interface ClientExtension {
    kind: 'ClientExtension';
    loc: Location;
    metadata: Metadata;
    selections: ReadonlyArray<Selection>;
}

export interface ConnectionField {
    alias: string;
    args: ReadonlyArray<Argument>;
    directives: ReadonlyArray<Directive>;
    kind: 'ConnectionField';
    label: string;
    loc: Location;
    metadata: Metadata;
    name: string;
    resolver: string;
    selections: ReadonlyArray<Selection>;
    type: GraphQLOutputType;
}

export interface LinkedField {
    alias: string;
    args: ReadonlyArray<Argument>;
    directives: ReadonlyArray<Directive>;
    handles?: ReadonlyArray<Handle>;
    kind: 'LinkedField';
    loc: Location;
    metadata: Metadata;
    name: string;
    selections: ReadonlyArray<Selection>;
    type: GraphQLOutputType;
}

export interface ListValue {
    kind: 'ListValue';
    items: ReadonlyArray<ArgumentValue>;
    loc: Location;
    metadata: Metadata;
}

export interface Literal {
    kind: 'Literal';
    loc: Location;
    metadata: Metadata;
    value: unknown;
}

export interface LocalArgumentDefinition {
    defaultValue: unknown;
    kind: 'LocalArgumentDefinition';
    loc: Location;
    metadata: Metadata;
    name: string;
    type: GraphQLInputType;
}

export interface ModuleImport {
    kind: 'ModuleImport';
    loc: Location;
    documentName: string;
    module: string;
    id: string;
    name: string;
    selections: ReadonlyArray<Selection>;
}

export type Node =
    | ClientExtension
    | Condition
    | Defer
    | ConnectionField
    | Fragment
    | InlineDataFragmentSpread
    | InlineFragment
    | LinkedField
    | ModuleImport
    | Root
    | SplitOperation
    | Stream;

export interface ObjectFieldValue {
    kind: 'ObjectFieldValue';
    loc: Location;
    metadata: Metadata;
    name: string;
    value: ArgumentValue;
}

export interface ObjectValue {
    kind: 'ObjectValue';
    fields: ReadonlyArray<ObjectFieldValue>;
    loc: Location;
    metadata: Metadata;
}

export interface Request {
    kind: 'Request';
    fragment: Fragment;
    id?: string;
    loc: Location;
    metadata: Metadata;
    name: string;
    root: Root;
    text?: string;
}

export interface Root {
    argumentDefinitions: ReadonlyArray<LocalArgumentDefinition>;
    directives: ReadonlyArray<Directive>;
    kind: 'Root';
    loc: Location;
    metadata: Metadata;
    name: string;
    operation: 'query' | 'mutation' | 'subscription';
    selections: Readonly<Selection>;
    type: GraphQLCompositeType;
}

// workaround for circular reference
// tslint:disable-next-line:no-empty-interface
export interface ScalarFieldTypeGraphQLList extends GraphQLList<ScalarFieldType> {}

export type ScalarFieldType =
    | GraphQLLeafType
    | ScalarFieldTypeGraphQLList
    | GraphQLNonNull<GraphQLLeafType | ScalarFieldTypeGraphQLList>;

export interface ScalarField {
    alias: string;
    args: ReadonlyArray<Argument>;
    directives: ReadonlyArray<Directive>;
    handles?: ReadonlyArray<Handle>;
    kind: 'ScalarField';
    loc: Location;
    metadata: Metadata;
    name: string;
    type: ScalarFieldType;
}

export type Selection =
    | ClientExtension
    | Condition
    | Defer
    | ConnectionField
    | FragmentSpread
    | InlineFragment
    | LinkedField
    | ModuleImport
    | ScalarField
    | InlineDataFragmentSpread
    | Stream;

export type Definition = Fragment | Root | SplitOperation;
export type GeneratedDefinition = Fragment | Request | SplitOperation;

export interface SplitOperation {
    kind: 'SplitOperation';
    name: string;
    selections: ReadonlyArray<Selection>;
    loc: Location;
    metadata: Metadata;
    type: GraphQLCompositeType;
}

export interface Variable {
    kind: 'Variable';
    loc: Location;
    metadata: Metadata;
    variableName: string;
    type?: GraphQLInputType;
}
