interface htmlEscaperStatic {
    escape(str: string): string;
    unescape(str: string): string;
}

declare const htmlEscaper: htmlEscaperStatic;
export = htmlEscaper;
