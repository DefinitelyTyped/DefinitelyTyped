type Tag = {
    (chunks: TemplateStringsArray, ...args: any[]): string;
    global: (chunks: TemplateStringsArray, ...args: any[]) => string;
    resolve: (chunks: TemplateStringsArray, ...args: any[]) => { className: string; styles: string };
};

declare let css: Tag;
export = css;
