declare function lescape(texString: string, options?: EscapeLatexOptions): string;
interface EscapeLatexOptions {
    preserveFormatting?: boolean;
    escapeMapFn?: (defaultEscapes: any, formattingEscapes: any) => any;
}
export = lescape;
