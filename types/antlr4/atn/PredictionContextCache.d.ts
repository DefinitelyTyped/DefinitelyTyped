import PredictionContext from "../context/PredictionContext";
import HashMap from "../misc/HashMap";

/**
 * Used to cache {@link PredictionContext} objects. Its used for the shared
 * context cash associated with contexts in DFA states. This cache
 * can be used for both lexers and parsers.
 */
export default class PredictionContextCache {
    readonly cache: HashMap;

    /**
     * Add a context to the cache and return it. If the context already exists,
     * return that one instead and do not add a new context to the cache.
     * Protect shared cache from unsafe thread access.
     */
    add(ctx: PredictionContext): PredictionContext;

    get(ctx: PredictionContext): PredictionContext | null;

    get length(): number;
}
