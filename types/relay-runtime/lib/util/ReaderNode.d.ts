import type { ConnectionMetadata } from '../handlers/connection/ConnectionHandler';
import type { ConcreteRequest } from './RelayConcreteNode';

export interface ReaderFragmentSpread {
    readonly kind: string; // 'FragmentSpread';
    readonly name: string;
    readonly args?: ReadonlyArray<ReaderArgument> | null | undefined;
}

export interface ReaderInlineDataFragmentSpread {
    readonly kind: string; // 'InlineDataFragmentSpread';
    readonly name: string;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderFragment {
    readonly kind: string; // 'Fragment';
    readonly name: string;
    readonly type: string;
    readonly abstractKey?: string | null | undefined;
    readonly metadata?:
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

// Marker type for a @refetchable fragment
export interface ReaderRefetchableFragment extends ReaderFragment {
    readonly metadata: {
        readonly connection?: [ConnectionMetadata];
        readonly refetch: ReaderRefetchMetadata;
    };
}

// Marker Type for a @refetchable fragment with a single use of @connection
export interface ReaderPaginationFragment extends ReaderFragment {
    readonly metadata: {
        readonly connection: [ConnectionMetadata];
        readonly refetch: ReaderRefetchMetadata & {
            connection: ReaderPaginationMetadata;
        };
    };
}

export interface ReaderRefetchMetadata {
    readonly connection?: ReaderPaginationMetadata | null | undefined;
    readonly operation: string | ConcreteRequest;
    readonly fragmentPathInResult: string[];
    readonly identifierField?: string | null | undefined;
}

// Stricter form of ConnectionMetadata
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

export interface ReaderInlineDataFragment {
    readonly kind: string; // 'InlineDataFragment';
    readonly name: string;
}

export type ReaderArgument =
    | ReaderListValueArgument
    | ReaderLiteralArgument
    | ReaderObjectValueArgument
    | ReaderVariableArgument;

export type ReaderArgumentDefinition = ReaderLocalArgument | ReaderRootArgument;

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

export type ReaderField = ReaderScalarField | ReaderLinkedField | ReaderRelayResolver;

export interface ReaderRootArgument {
    readonly kind: string; // 'RootArgument';
    readonly name: string;
}

export interface ReaderInlineFragment {
    readonly kind: string; // 'InlineFragment';
    readonly selections: ReadonlyArray<ReaderSelection>;
    readonly type: string;
    readonly abstractKey?: string | null | undefined;
}

export interface ReaderLinkedField {
    readonly kind: string; // 'LinkedField';
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null | undefined;
    readonly args?: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly concreteType?: string | null | undefined;
    readonly plural: boolean;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderActorChange {
    readonly kind: string; // 'ActorChange';
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null | undefined;
    readonly args?: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly fragmentSpread: ReaderFragmentSpread;
}

export interface ReaderModuleImport {
    readonly args?: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly kind: string; // 'ModuleImport';
    readonly documentName: string;
    readonly fragmentPropName: string;
    readonly fragmentName: string;
}

export interface ReaderListValueArgument {
    readonly kind: string; // 'ListValue';
    readonly name: string;
    readonly items: ReadonlyArray<ReaderArgument | null>;
}

export interface ReaderLiteralArgument {
    readonly kind: string; // 'Literal';
    readonly name: string;
    readonly type?: string | null | undefined;
    readonly value: any;
}

export interface ReaderLocalArgument {
    readonly kind: string; // 'LocalArgument';
    readonly name: string;
    readonly defaultValue: any;
}

export interface ReaderObjectValueArgument {
    readonly kind: string; // 'ObjectValue';
    readonly name: string;
    readonly fields: ReadonlyArray<ReaderArgument>;
}

export type ReaderNode = ReaderCondition | ReaderLinkedField | ReaderFragment | ReaderInlineFragment;

export interface ReaderScalarField {
    readonly kind: string; // 'ScalarField';
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly storageKey?: string | null | undefined;
}

export interface ReaderFlightField {
    readonly kind: string; // 'FlightField';
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface ReaderDefer {
    readonly kind: string; // 'Defer';
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderStream {
    readonly kind: string; // 'Stream';
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export type RequiredFieldAction = 'NONE' | 'LOG' | 'THROW';

export interface ReaderRequiredField {
    readonly kind: string; // 'RequiredField';
    readonly field: ReaderField;
    readonly action: RequiredFieldAction;
    readonly path: string;
}

export interface ReaderRelayResolver {
    readonly kind: string; // 'RelayResolver';
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly fragment: ReaderFragmentSpread;
    readonly resolverModule: (rootKey: {
        readonly $data?: any;
        readonly $fragmentSpreads: any;
        readonly $fragmentRefs: any;
    }) => any;
}

export interface ReaderClientEdge {
    readonly kind: string; // 'ClientEdge';
    readonly linkedField: ReaderLinkedField;
    readonly operation: ConcreteRequest;
    readonly backingField: ReaderRelayResolver | ReaderClientExtension;
}

export type ReaderSelection =
    | ReaderCondition
    | ReaderClientEdge
    | ReaderClientExtension
    | ReaderDefer
    | ReaderField
    | ReaderActorChange
    | ReaderFlightField
    | ReaderFragmentSpread
    | ReaderInlineDataFragmentSpread
    | ReaderInlineFragment
    | ReaderModuleImport
    | ReaderStream
    | ReaderRequiredField
    | ReaderRelayResolver;

export interface ReaderVariableArgument {
    readonly kind: string; // 'Variable';
    readonly name: string;
    readonly type?: string | null | undefined;
    readonly variableName: string;
}
