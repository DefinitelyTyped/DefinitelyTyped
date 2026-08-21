export = JSTokenWord;
declare function JSTokenWord(): void;
declare class JSTokenWord {
    str: any;
    specialWord: JSSpecialWord;
    tokenType: string;
    escapeChars: any;
}
declare namespace JSTokenWord {
    export { JSSpecialWord };
}
type JSSpecialWord = import('./JSSpecialWord');
