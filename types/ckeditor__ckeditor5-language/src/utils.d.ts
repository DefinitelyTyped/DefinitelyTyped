export function stringifyLanguageAttribute(languageCode: string, textDirection?: 'ltr' | 'rtl'): string;

export function parseLanguageAttribute(str: string): { languageCode: string; textDirection: string };
