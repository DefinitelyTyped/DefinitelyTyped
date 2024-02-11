export interface LanguageNegotiationOptions {
    strategy?: "filtering" | "matching" | "lookup" | undefined;
    defaultLocale?: string | undefined;
}

export function negotiateLanguages(
    requestedLocales: readonly string[],
    availableLocales: readonly string[],
    options?: LanguageNegotiationOptions,
): string[];
