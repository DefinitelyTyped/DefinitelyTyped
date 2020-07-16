// Type definitions for deindent 0.1
// Project: https://github.com/deanlandolt/deindent
// Definitions by: Avi Vahl <https://github.com/AviVahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function deindent(
    tagFn: (template: TemplateStringsArray, ...substitutions: any[]) => string
): (template: TemplateStringsArray, ...substitutions: any[]) => string;
declare function deindent(template: TemplateStringsArray, ...substitutions: any[]): string;
declare function deindent(input: string): string;

export = deindent;
