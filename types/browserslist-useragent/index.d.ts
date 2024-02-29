export interface ResolvedUserAgent {
    family: string;
    version: string;
}

export interface BrowserslistUseragentOptions {
    browsers?: string[] | undefined;
    env?: string | undefined;
    ignorePatch?: boolean | undefined;
    ignoreMinor?: boolean | undefined;
    allowHigherVersions?: boolean | undefined;
    /**
     * @default process.cwd()
     */
    path?: string | undefined;
}

export function matchesUA(
    uaString: string,
    opts?: BrowserslistUseragentOptions,
): boolean;
export function resolveUserAgent(uaString: string): ResolvedUserAgent;
export function normalizeQuery(query: string): string;
