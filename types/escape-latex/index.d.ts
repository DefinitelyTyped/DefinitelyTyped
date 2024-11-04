declare function lescape(texString: string, options?: EscapeLatexOptions): string;
interface EscapeLatexOptions {
  preseveFormatting?: boolean;
  escapeMapFn?: (defaultEscapes: any, formattingEscapes: any) => any;
}
export = lescape;
