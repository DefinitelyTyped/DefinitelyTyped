import { MatcherFn } from "./index";

export default function makeMatcher(
    makeRegexpFn?: (
        pattern: string,
        keys?: Array<{ name: string | number }>
    ) => RegExp
): MatcherFn;
