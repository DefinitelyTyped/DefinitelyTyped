export as namespace Diacritics;

interface DiacriticsStatic {
    map: Record<string, string>;
    clean(input?: string | null): string;
}

declare const diacritics: DiacriticsStatic;

export = diacritics;
