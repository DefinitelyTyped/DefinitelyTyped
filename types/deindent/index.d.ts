declare function deindent(
    tagFn: (template: TemplateStringsArray, ...substitutions: any[]) => string,
): (template: TemplateStringsArray, ...substitutions: any[]) => string;
declare function deindent(template: TemplateStringsArray, ...substitutions: any[]): string;
declare function deindent(input: string): string;

export = deindent;
