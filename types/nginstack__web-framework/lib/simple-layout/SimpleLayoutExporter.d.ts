export = SimpleLayoutExporter;
declare function SimpleLayoutExporter(simpleLayout: SimpleLayout): void;
declare class SimpleLayoutExporter {
    constructor(simpleLayout: SimpleLayout);
    title: string;
    formatFieldGroupName(index: number): string;
}
declare namespace SimpleLayoutExporter {
    export { SimpleLayout };
}
type SimpleLayout = import('./SimpleLayout');
