export function getLangNameFromCode(langCode: string): { name: string; native: string; dir: "ltr" | "rtl" } | undefined;

export function getLangCodeList(): string[];

export const languageNameMap: { [key: string]: { name: string; native: string; dir: 0 | 1 } };
