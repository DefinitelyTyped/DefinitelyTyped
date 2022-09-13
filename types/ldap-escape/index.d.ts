// Type definitions for ldap-escape 2.0
// Project: https://github.com/tcort/ldap-escape
// Definitions by: Simone Corsi <https://github.com/simonecorsi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function filter(TemplateStringsArray: TemplateStringsArray, ...str: string[] | number[]): string;
export function dn(TemplateStringsArray: TemplateStringsArray, ...str: string[] | number[]): string;
