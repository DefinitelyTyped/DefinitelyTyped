declare function css(chunks: TemplateStringsArray, ...args: any[]): string;
declare namespace css {
    function global(chunks: TemplateStringsArray, ...args: any[]): string;
    function resolve(chunks: TemplateStringsArray, ...args: any[]): { className: string; styles: string };
}
export = css;
