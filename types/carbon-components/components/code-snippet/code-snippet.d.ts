interface CodeSnippetOptions {
    selectorInit: string;
    attribShowMoreText: string;
    attribShowLessText: string;
    minHeight: number;
    classExpanded: string;
    classExpandBtn: string;
    classExpandText: string;
    classHideExpand: string;
}

declare const CodeSnippet_base: any;
declare class CodeSnippet extends CodeSnippet_base {
    constructor(element: HTMLElement, options?: Partial<CodeSnippetOptions>);
    _handleClick(): void;
    _initCodeSnippet(): void;
    static components: WeakMap<object, any>;
    static get options(): CodeSnippetOptions;
}
export default CodeSnippet;
