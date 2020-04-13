import { ConnectionMetadata } from '../handlers/connection/ConnectionHandler';
import { ConcreteRequest } from './RelayConcreteNode';

export type ReaderArgument = ReaderLiteral | ReaderVariable;

export type ReaderArgumentDefinition = ReaderLocalArgument | ReaderRootArgument;

export type ReaderField = ReaderScalarField | ReaderLinkedField | ReaderMatchField;

export interface ReaderFragment {
    readonly kind: string; // 'Fragment';
    readonly name: string;
    readonly type: string;
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

export interface ReaderMatchField {
    readonly kind: string; // 'MatchField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey: string | null | undefined;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly matchesByType: {
        readonly [key: string]: {
            readonly fragmentPropName: string;
            readonly fragmentName: string;
        };
    };
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

export type ReaderSelection =
    | ReaderCondition
    | ReaderClientExtension
    | ReaderField
    | ReaderFragmentSpread
    | ReaderInlineFragment
    | ReaderMatchField;

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

export interface ReaderLocalArgument {
    readonly kind: string; // 'LocalArgument';
    readonly name: string;
    readonly type: string;
    readonly defaultValue: unknown;
}

export interface ReaderRootArgument {
    readonly kind: string; // 'RootArgument';
    readonly name: string;
    readonly type: string | null | undefined;
}

export interface ReaderRefetchMetadata {
    readonly connection: ReaderPaginationMetadata | null | undefined;
    readonly operation: string | ConcreteRequest;
    readonly fragmentPathInResult: ReadonlyArray<string>;
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
