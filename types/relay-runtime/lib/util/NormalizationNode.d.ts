import type { ConcreteRequest } from './RelayConcreteNode';
import type { JSResourceReference } from './JSResourceReference';

/**
 * Represents a single operation used to processing and normalize runtime
 * request results.
 */
export interface NormalizationOperation {
    readonly kind: string; // "Operation";
    readonly name: string;
    readonly argumentDefinitions: ReadonlyArray<NormalizationLocalArgumentDefinition>;
    readonly selections: ReadonlyArray<NormalizationSelection>;
    readonly clientAbstractTypes?: {
        readonly [key: string]: ReadonlyArray<string>;
    };
}

export type NormalizationHandle = NormalizationScalarHandle | NormalizationLinkedHandle;

export interface NormalizationLinkedHandle {
    readonly kind: string; // "LinkedHandle";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly handle: string;
    readonly key: string;
    // NOTE: this property is optional because it's expected to be rarely used
    readonly dynamicKey?: NormalizationArgument | null | undefined;
    readonly filters?: ReadonlyArray<string> | null | undefined;
    readonly handleArgs?: ReadonlyArray<NormalizationArgument>;
}

export interface NormalizationScalarHandle {
    readonly kind: string; // "ScalarHandle";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly handle: string;
    readonly key: string;
    // NOTE: this property is optional because it's expected to be rarely used
    readonly dynamicKey?: NormalizationArgument | null | undefined;
    readonly filters?: ReadonlyArray<string> | null | undefined;
    readonly handleArgs?: ReadonlyArray<NormalizationArgument>;
}

export type NormalizationArgument =
    | NormalizationListValueArgument
    | NormalizationLiteralArgument
    | NormalizationObjectValueArgument
    | NormalizationVariableArgument;

export interface NormalizationCondition {
    readonly kind: string; // "Condition";
    readonly passingValue: boolean;
    readonly condition: string;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationClientExtension {
    readonly kind: string; // "ClientExtension";
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export type NormalizationField = NormalizationFlightField | NormalizationScalarField | NormalizationLinkedField;

export interface NormalizationInlineFragment {
    readonly kind: string; // "InlineFragment";
    readonly selections: ReadonlyArray<NormalizationSelection>;
    readonly type: string;
    readonly abstractKey?: string | null | undefined;
}

export interface NormalizationFragmentSpread {
    readonly kind: string; // "FragmentSpread";
    readonly fragment: NormalizationSplitOperation;
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
}

export interface NormalizationLinkedField {
    readonly kind: string; // "LinkedField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly storageKey?: string | null | undefined;
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly concreteType?: string | null | undefined;
    readonly plural: boolean;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationActorChange {
    readonly kind: string; // "ActorChange";
    readonly linkedField: NormalizationLinkedField;
}

export interface NormalizationModuleImport {
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly kind: string; // "ModuleImport";
    readonly documentName: string;
    readonly fragmentPropName: string;
    readonly fragmentName: string;
    readonly componentModuleProvider?: () => unknown | Promise<unknown> | JSResourceReference<unknown>;
    readonly operationModuleProvider?: () =>
        | NormalizationRootNode
        | Promise<NormalizationRootNode>
        | JSResourceReference<NormalizationRootNode>;
}

export interface NormalizationListValueArgument {
    readonly kind: string; // "ListValue";
    readonly name: string;
    readonly items: ReadonlyArray<NormalizationArgument | null>;
}

export interface NormalizationLiteralArgument {
    readonly kind: string; // "Literal";
    readonly name: string;
    readonly type?: string | null | undefined;
    readonly value: any;
}

export interface NormalizationLocalArgumentDefinition {
    readonly kind: string; // "LocalArgument";
    readonly name: string;
    readonly defaultValue: any;
}

export type NormalizationNode =
    | NormalizationClientExtension
    | NormalizationCondition
    | NormalizationDefer
    | NormalizationInlineFragment
    | NormalizationLinkedField
    | NormalizationOperation
    | NormalizationSplitOperation
    | NormalizationStream;

export interface NormalizationScalarField {
    readonly kind: string; // "ScalarField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly storageKey?: string | null | undefined;
}

export interface NormalizationFlightField {
    readonly kind: string; // "FlightField";
    readonly alias?: string | null | undefined;
    readonly name: string;
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export interface NormalizationClientComponent {
    readonly args?: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly kind: string; // "ClientComponent";
    readonly fragment: NormalizationNode;
}

export interface NormalizationTypeDiscriminator {
    readonly kind: string; // "TypeDiscriminator";
    readonly abstractKey: string;
}

export type NormalizationSelection =
    | NormalizationCondition
    | NormalizationClientComponent
    | NormalizationClientExtension
    | NormalizationDefer
    | NormalizationField
    | NormalizationFlightField
    | NormalizationFragmentSpread
    | NormalizationHandle
    | NormalizationInlineFragment
    | NormalizationModuleImport
    | NormalizationStream
    | NormalizationActorChange
    | NormalizationTypeDiscriminator;

export interface NormalizationSplitOperation {
    readonly argumentDefinitions?: ReadonlyArray<NormalizationLocalArgumentDefinition>;
    readonly kind: string; // "SplitOperation";
    readonly name: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationStream {
    readonly if: string | null;
    readonly kind: string; // "Stream";
    readonly label: string;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationDefer {
    readonly if: string | null;
    readonly kind: string; // "Defer";
    readonly label: string;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationVariableArgument {
    readonly kind: string; // "Variable";
    readonly name: string;
    readonly type?: string | null | undefined;
    readonly variableName: string;
}

export interface NormalizationObjectValueArgument {
    readonly kind: string; // "ObjectValue";
    readonly name: string;
    readonly fields: ReadonlyArray<NormalizationArgument>;
}

export type NormalizationSelectableNode =
    | NormalizationDefer
    | NormalizationLinkedField
    | NormalizationOperation
    | NormalizationSplitOperation
    | NormalizationStream;

export type NormalizationRootNode = ConcreteRequest | NormalizationSplitOperation;
