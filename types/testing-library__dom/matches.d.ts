export type MatcherFunction = (content: string, element: HTMLElement) => boolean;
export type Matcher = string | RegExp | MatcherFunction;

export type NormalizerFn = (text: string) => string;

export interface MatcherOptions {
    exact?: boolean;
    /** Use normalizer with getDefaultNormalizer instead */
    trim?: boolean;
    /** Use normalizer with getDefaultNormalizer instead */
    collapseWhitespace?: boolean;
    normalizer?: NormalizerFn;
}

export type Match = (
    textToMatch: string,
    node: HTMLElement | null,
    matcher: Matcher,
    options?: MatcherOptions,
) => boolean;

export interface DefaultNormalizerOptions {
    trim?: boolean;
    collapseWhitespace?: boolean;
}

export function getDefaultNormalizer(options?: DefaultNormalizerOptions): NormalizerFn;

// N.B. Don't expose fuzzyMatches + matches here: they're not public API
