import { ConnectionMetadata } from '../handlers/connection/ConnectionHandler';
import { ConcreteRequest } from './RelayConcreteNode';

export type ReaderArgument = ReaderLiteral | ReaderVariable | ReaderObjectValue | ReaderListValue;

export type ReaderArgumentDefinition = ReaderLocalArgument | ReaderRootArgument;

export type ReaderField = ReaderScalarField | ReaderLinkedField;

export interface ReaderFragment {
    readonly kind: string; // 'Fragment';
    readonly name: string;
    readonly type: string;
    readonly abstractKey?: string | null;
    readonly metadata:
        | {
              readonly connection?: ReadonlyArray<ConnectionMetadata>;
              readonly mask?: boolean;
              readonly plural?: boolean;
              readonly refetch?: ReaderRefetchMetadata;
          }
        | null
        | undefined;
    readonly argumentDefinitions: ReadonlyArray<ReaderArgumentDefinition>;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderInlineDataFragment {
    readonly kind: 'InlineDataFragment';
    readonly name: string;
}

export interface ReaderLinkedField {
    readonly kind: string; // 'LinkedField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey: string | null | undefined;
    readonly args: ReadonlyArray<ReaderArgument>;
    readonly concreteType: string | null | undefined;
    readonly plural: boolean;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderPaginationMetadata {
    readonly backward: {
        readonly count: string;
        readonly cursor: string;
    } | null;
    readonly forward: {
        readonly count: string;
        readonly cursor: string;
    } | null;
    readonly path: ReadonlyArray<string>;
}

export interface ReaderRefetchableFragment extends ReaderFragment {
    readonly metadata: {
        readonly connection?: [ConnectionMetadata];
        readonly refetch: ReaderRefetchMetadata;
    };
}

export interface ReaderScalarField {
    readonly kind: string; // 'ScalarField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface ReaderFlightField {
    readonly kind: string; // 'FlightField',
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface ReaderDefer {
    readonly kind: string; // 'Defer',
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderStream {
    readonly kind: string; // 'Stream',
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export type RequiredFieldAction = 'NONE' | 'LOG' | 'THROW';

export interface ReaderRequiredField {
    readonly kind: string; // 'RequiredField'
    readonly field: ReaderField;
    readonly action: RequiredFieldAction;
    readonly path: string;
}

export type ReaderSelection =
    | ReaderCondition
    | ReaderClientExtension
    | ReaderDefer
    | ReaderField
    | ReaderFlightField
    | ReaderFragmentSpread
    | ReaderInlineDataFragmentSpread
    | ReaderInlineFragment
    | ReaderModuleImport
    | ReaderStream
    | ReaderRequiredField;

export interface ReaderSplitOperation {
    readonly kind: string; // 'SplitOperation';
    readonly name: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderLiteral {
    readonly kind: string; // 'Literal';
    readonly name: string;
    readonly value: unknown;
}

export interface ReaderVariable {
    readonly kind: string; // 'Variable';
    readonly name: string;
    readonly type?: string | null;
    readonly variableName: string;
}

export interface ReaderObjectValue {
    readonly kind: string; // 'ObjectValue';
    readonly name: string;
    readonly fields: ReadonlyArray<ReaderArgument>;
}

export interface ReaderListValue {
    readonly kind: string; // 'ListValue';
    readonly name: string;
    readonly items: ReadonlyArray<ReaderArgument | null>;
}

export interface ReaderLocalArgument {
    readonly kind: string; // 'LocalArgument';
    readonly name: string;
    readonly defaultValue: unknown;
}

export interface ReaderRootArgument {
    readonly kind: string; // 'RootArgument';
    readonly name: string;
}

export interface ReaderRefetchMetadata {
    readonly connection?: ReaderPaginationMetadata | null;
    readonly operation: string | ConcreteRequest;
    readonly fragmentPathInResult: ReadonlyArray<string>;
    readonly identifierField?: string | null;
}

export interface ReaderCondition {
    readonly kind: string; // 'Condition';
    readonly passingValue: boolean;
    readonly condition: string;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderClientExtension {
    readonly kind: string; // 'ClientExtension';
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderFragmentSpread {
    readonly kind: string; // 'FragmentSpread';
    readonly name: string;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
}

export interface ReaderInlineFragment {
    readonly kind: string; // 'InlineFragment';
    readonly selections: ReadonlyArray<ReaderSelection>;
    readonly type: string;
    readonly abstractKey?: string | null;
}

export type ReaderSelectableNode = ReaderFragment | ReaderSplitOperation;

export interface ReaderPaginationFragment extends ReaderFragment {
    readonly metadata: {
        readonly connection: [ConnectionMetadata];
        readonly refetch: ReaderRefetchMetadata & {
            connection: ReaderPaginationMetadata;
        };
    };
}

export interface ReaderConnection {
    readonly kind: string;
    readonly label: string;
    readonly name: string;
    readonly args: ReadonlyArray<ReaderArgument>;
    readonly edges: ReaderLinkedField;
    readonly pageInfo: ReaderLinkedField;
}

export interface ReaderInlineDataFragmentSpread {
    readonly kind: string;
    readonly name: string;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderModuleImport {
    readonly kind: string;
    readonly documentName: string;
    readonly fragmentPropName: string;
    readonly fragmentName: string;
}
