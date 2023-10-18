export interface LanguageNegotiationOptions {
    strategy?: "filtering" | "matching" | "lookup" | undefined;
    defaultLocale?: string | undefined;
}

export function negotiateLanguages(
    requestedLocales: ReadonlyArray<string>,
    availableLocales: ReadonlyArray<string>,
    options?: LanguageNegotiationOptions,
): string[];
