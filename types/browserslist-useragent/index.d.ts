// Type definitions for browserslist-useragent 3.0
// Project: https://github.com/browserslist/browserslist-useragent (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: nju33 <https://github.com/nju33>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ResolvedUserAgent {
    family: string;
    version: string;
}

export interface BrowserslistUseragentOptions {
    browsers?: string[];
    env?: string;
    ignorePath?: boolean;
    ignoreMinor?: boolean;
    allowHigherVersions?: boolean;
}

export function matchesUA(
    uaString: string,
    opts?: BrowserslistUseragentOptions
): boolean;
export function resolveUserAgent(uaString: string): ResolvedUserAgent;
export function normalizeQuery(query: string): string;
