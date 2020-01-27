import {
    LinkedFieldTypeID,
    ScalarFieldTypeID,
    CompositeTypeID,
    InputTypeID,
    TypeID,
} from './Schema';
import { Source } from 'graphql';
import { TypeReferenceNode } from 'typescript';

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
    type?: InputTypeID;
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

export type Field = LinkedField | ScalarField;

export interface Fragment {
    argumentDefinitions: ReadonlyArray<ArgumentDefinition>;
    directives: ReadonlyArray<Directive>;
    kind: 'Fragment';
    loc: Location;
    metadata: Metadata;
    name: string;
    selections: ReadonlyArray<Selection>;
    type: CompositeTypeID;
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
    metadata:
        | {
            fragmentTypeCondition: string;
          }
        | null
        | undefined;
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
    useCustomizedBatch: ArgumentValue | null;
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
    name: string;
    type: InputTypeID;
}

export interface InlineFragment {
    directives: ReadonlyArray<Directive>;
    kind: 'InlineFragment';
    loc: Location;
    metadata: Metadata;
    selections: ReadonlyArray<Selection>;
    typeCondition: CompositeTypeID;
}

export interface Handle {
    name: string;
    key: string;
    dynamicKey: Variable | null;
    filters?: ReadonlyArray<string>;
}

export interface ClientExtension {
    kind: 'ClientExtension';
    loc: Location;
    metadata: Metadata;
    selections: ReadonlyArray<Selection>;
}

export interface LinkedField {
    alias: string;
    args: ReadonlyArray<Argument>;
    connection: boolean;
    directives: ReadonlyArray<Directive>;
    handles?: ReadonlyArray<Handle>;
    kind: 'LinkedField';
    loc: Location;
    metadata: Metadata;
    name: string;
    selections: ReadonlyArray<Selection>;
    type: LinkedFieldTypeID;
}

export interface ListValue {
    kind: 'ListValue';
    items: ReadonlyArray<ArgumentValue>;
    loc: Location;
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
    value: unknown;
}

export interface LocalArgumentDefinition {
    defaultValue: unknown;
    kind: 'LocalArgumentDefinition';
    loc: Location;
    metadata: Metadata;
    name: string;
    type: InputTypeID;
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
    name: string;
    value: ArgumentValue;
}

export interface ObjectValue {
    kind: 'ObjectValue';
    fields: ReadonlyArray<ObjectFieldValue>;
    loc: Location;
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
    type: CompositeTypeID;
}

export interface ScalarField {
    alias: string;
    args: ReadonlyArray<Argument>;
    directives: ReadonlyArray<Directive>;
    handles?: ReadonlyArray<Handle>;
    kind: 'ScalarField';
    loc: Location;
    metadata: Metadata;
    name: string;
    type: ScalarFieldTypeID;
}

export type Selection =
    | ClientExtension
    | Condition
    | Defer
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
    parentSources: Set<string>;
    type: TypeID;
}

export interface Variable {
    kind: 'Variable';
    loc: Location;
    variableName: string;
    type?: TypeID;
}
