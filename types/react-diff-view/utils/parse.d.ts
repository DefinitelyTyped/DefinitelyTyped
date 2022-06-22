import { File } from "gitdiff-parser";

interface ParseDiffOptions {
    nearbySequences?: "zip";
}

/**
 *  A wrap of {@link https://www.npmjs.com/package/gitdiff-parser gitdiff-parser} package with some extra options:
 *
 * - `{string} nearbySequences`: The action to take when meet nearby sequences, only the `"zip"` value has its own behavior.
 *
 * Read more:
 * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#parse-diff-text README/Parse diff text}
 *
 * ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/parse.js#L78-L84 Source})
 */
export declare const parseDiff: (
    diffText: string,
    /**
     * - `{string} nearbySequences`: The action to take when meet nearby sequences, only the `"zip"` value has its own behavior.
     *
     * Read more:
     * {@link https://github.com/otakustay/react-diff-view/tree/v2.4.10#parse-diff-text README/Parse diff text}
     */
    options?: ParseDiffOptions,
) => File[];
