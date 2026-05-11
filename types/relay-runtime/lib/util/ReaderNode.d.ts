import type { ConnectionMetadata } from "../handlers/connection/ConnectionHandler";
import type { ConcreteRequest } from "./RelayConcreteNode";

export interface ReaderFragmentSpread {
    readonly kind: "FragmentSpread";
    readonly name: string;
    readonly args?: readonly ReaderArgument[] | null | undefined;
}

export interface ReaderInlineDataFragmentSpread {
    readonly kind: "InlineDataFragmentSpread";
    readonly name: string;
    readonly selections: readonly ReaderSelection[];
}

export interface ReaderLinkedField {
    readonly kind: "LinkedField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null | undefined;
    readonly args?: readonly ReaderArgument[] | null | undefined;
    readonly concreteType?: string | null | undefined;
    readonly plural: boolean;
    readonly selections: readonly ReaderSelection[];
}

export interface ReaderFragment {
    readonly kind: "Fragment";
    readonly name: string;
    readonly type: string;
    readonly abstractKey?: string | null | undefined;
    readonly metadata?:
        | {
            readonly connection?: readonly ConnectionMetadata[];
            readonly mask?: boolean;
            readonly plural?: boolean;
            readonly refetch?: ReaderRefetchMetadata;
        }
        | null
        | undefined;
    readonly argumentDefinitions: readonly ReaderArgumentDefinition[];
    readonly selections: readonly ReaderSelection[];
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

export interface RefetchableIdentifierInfo {
    readonly identifierField: string;
    readonly identifierQueryVariableName: string;
}

export interface ReaderRefetchMetadata {
    readonly connection?: ReaderPaginationMetadata | null | undefined;
    readonly operation: string | ConcreteRequest;
    readonly fragmentPathInResult: string[];
    readonly identifierInfo?: RefetchableIdentifierInfo | null | undefined;
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
    readonly path: readonly string[];
}

export interface ReaderInlineDataFragment {
    readonly kind: "InlineDataFragment";
    readonly name: string;
}

export type ReaderArgument =
    | ReaderListValueArgument
    | ReaderLiteralArgument
    | ReaderObjectValueArgument
    | ReaderVariableArgument;

export type ReaderArgumentDefinition = ReaderLocalArgument | ReaderRootArgument;

export interface ReaderCondition {
    readonly kind: "Condition";
    readonly passingValue: boolean;
    readonly condition: string;
    readonly selections: readonly ReaderSelection[];
}

export interface ReaderClientExtension {
    readonly kind: "ClientExtension";
    readonly selections: readonly ReaderSelection[];
}

export type ReaderField = ReaderScalarField | ReaderLinkedField | ReaderRelayResolver;

export interface ReaderRootArgument {
    readonly kind: "RootArgument";
    readonly name: string;
}

export interface ReaderInlineFragment {
    readonly kind: "InlineFragment";
    readonly selections: readonly ReaderSelection[];
    readonly type: string;
    readonly abstractKey?: string | null | undefined;
}

export interface ReaderLinkedField {
    readonly kind: "LinkedField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null | undefined;
    readonly args?: readonly ReaderArgument[] | null | undefined;
    readonly concreteType?: string | null | undefined;
    readonly plural: boolean;
    readonly selections: readonly ReaderSelection[];
}

export interface ReaderActorChange {
    readonly kind: "ActorChange";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null | undefined;
    readonly args?: readonly ReaderArgument[] | null | undefined;
    readonly fragmentSpread: ReaderFragmentSpread;
}

export interface ReaderModuleImport {
    readonly args?: readonly ReaderArgument[] | null | undefined;
    readonly kind: "ModuleImport";
    readonly documentName: string;
    readonly fragmentPropName: string;
    readonly fragmentName: string;
}

export interface ReaderListValueArgument {
    readonly kind: "ListValue";
    readonly name: string;
    readonly items: ReadonlyArray<ReaderArgument | null>;
}

export interface ReaderLiteralArgument {
    readonly kind: "Literal";
    readonly name: string;
    readonly type?: string | null | undefined;
    readonly value: any;
}

export interface ReaderLocalArgument {
    readonly kind: "LocalArgument";
    readonly name: string;
    readonly defaultValue: any;
}

export interface ReaderObjectValueArgument {
    readonly kind: "ObjectValue";
    readonly name: string;
    readonly fields: readonly ReaderArgument[];
}

export type ReaderNode = ReaderCondition | ReaderLinkedField | ReaderFragment | ReaderInlineFragment;

export interface ReaderScalarField {
    readonly kind: "ScalarField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: readonly ReaderArgument[] | null | undefined;
    readonly storageKey?: string | null | undefined;
}

export interface ReaderFlightField {
    readonly kind: "FlightField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: readonly ReaderArgument[] | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface ReaderDefer {
    readonly kind: "Defer";
    readonly selections: readonly ReaderSelection[];
}

export interface ReaderStream {
    readonly kind: "Stream";
    readonly selections: readonly ReaderSelection[];
}

export type RequiredFieldAction = "NONE" | "LOG" | "THROW";

export interface ReaderRequiredField {
    readonly kind: "RequiredField";
    readonly field: ReaderField;
    readonly action: RequiredFieldAction;
    readonly path: string;
}

export interface ReaderRelayResolver {
    readonly kind: "RelayResolver";
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
    readonly kind: "ClientEdge";
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
    readonly kind: "Variable";
    readonly name: string;
    readonly type?: string | null | undefined;
    readonly variableName: string;
}
