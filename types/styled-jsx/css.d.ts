declare function css(chunks: TemplateStringsArray, ...args: any[]): string;
declare namespace css {
    export function global(chunks: TemplateStringsArray, ...args: any[]): string;
    export function resolve(chunks: TemplateStringsArray, ...args: any[]): { className: string; styles: string };
}
export = css;
