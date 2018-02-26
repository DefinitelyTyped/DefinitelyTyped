type Tag = (chunks: TemplateStringsArray, ...args: any[]) => string;

declare let css: Tag;
export default css;
