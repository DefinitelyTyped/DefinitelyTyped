import Document from "../document";
import Operation from "./operation";

/**
 * Transforms operation `a` by operation `b`.
 */
export function transform(a: Operation, b: Operation, context?: TransformationContext): Operation[];

/**
 * Performs a transformation of two sets of operations - `operationsA` and `operationsB`. The transformation is two-way -
 * both transformed `operationsA` and transformed `operationsB` are returned.
 *
 * Note, that the first operation in each set should base on the same document state (
 * {@link module:engine/model/document~Document#version document version}).
 *
 * It is assumed that `operationsA` are "more important" during conflict resolution between two operations.
 *
 * New copies of both passed arrays and operations inside them are returned. Passed arguments are not altered.
 *
 * Base versions of the transformed operations sets are updated accordingly. For example, assume that base versions are `4`
 * and there are `3` operations in `operationsA` and `5` operations in `operationsB`. Then:
 *
 * * transformed `operationsA` will start from base version `9` (`4` base version + `5` operations B),
 * * transformed `operationsB` will start from base version `7` (`4` base version + `3` operations A).
 *
 * If no operation was broken into two during transformation, then both sets will end up with an operation that bases on version `11`:
 *
 * * transformed `operationsA` start from `9` and there are `3` of them, so the last will have `baseVersion` equal to `11`,
 * * transformed `operationsB` start from `7` and there are `5` of them, so the last will have `baseVersion` equal to `11`.
 */
export function transformSets(
    operationsA: Operation,
    operationsB: Operation,
    options: { document: Document | null; useRelations?: boolean; padWithNoOps?: boolean },
): {
    operationsA: Operation[];
    operationsB: Operation[];
    originalOperations: Map<Operation, Operation>;
};

interface TransformationContext {
    aIsStrong: boolean;
    aWasUndone: boolean;
    bWasUndone: boolean;
    abRelation: string | null;
    baRelation: string | null;
}

export {};
