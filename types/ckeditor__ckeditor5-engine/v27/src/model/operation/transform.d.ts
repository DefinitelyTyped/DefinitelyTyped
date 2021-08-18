import Document from "../document";
import Operation from "./operation";

export interface TransformationContext {
    aIsStrong: boolean;
    aWasUndone: boolean;
    abRelation: string | null;
    bWasUndone: boolean;
    baRelation: string | null;
}

export function transform(a: Operation, b: Operation, context: TransformationContext): Operation[];

export function transformSets(
    operationsA: Operation[],
    operationsB: Operation[],
    options?: { document: Document | null; useRelations?: boolean | undefined; padWithNoOps?: boolean | undefined },
): {
    operationsA: Operation[];
    operationsB: Operation[];
    originalOperations: Map<Operation, Operation>;
};
