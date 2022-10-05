export default class PredictionContext {
    static readonly EMPTY: null;
    static readonly EMPTY_RETURN_STATE: 0x7fffffff;
    static readonly globalNodeCount: 1;
    static readonly id: number;

    constructor(cachedHashCode: any);

    /**
     * Stores the computed hash code of this {@link PredictionContext}.
     */
    isEmpty(): boolean;

    hasEmptyPath(): boolean;

    hashCode(): any;

    updateHashCode(hash: any): void;
}
