export as namespace Diacritics;

interface DiacriticStatic {
    map: Record<string, string>;
    clean(input?: string | null): string;
}

declare const diacritic: DiacriticStatic;

export = diacritic;
