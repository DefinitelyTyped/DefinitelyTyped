import HashCode from "../misc/HashCode";

export default class PredictionContext {
    static readonly EMPTY: null;
    static readonly EMPTY_RETURN_STATE: 0x7fffffff;
    static readonly globalNodeCount: 1;
    static readonly id: number;

    constructor(cachedHashCode: number);

    /**
     * Stores the computed hash code of this {@link PredictionContext}.
     */
    isEmpty(): boolean;

    hasEmptyPath(): boolean;

    hashCode(): number;

    updateHashCode(hash: HashCode): void;
}
