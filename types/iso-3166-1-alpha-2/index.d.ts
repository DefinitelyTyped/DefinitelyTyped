export function getCountry(code: string): string | undefined;
export function getCode(country: string): string | null;
export function getCountries(): string[];
export function getCodes(): string[];
export function getData(): { [code: string]: string | undefined };
