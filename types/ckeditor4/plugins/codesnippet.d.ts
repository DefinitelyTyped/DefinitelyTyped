declare namespace CKEDITOR {
    interface CKEditorPluginsCore extends resourceManager {
        codesnippet?: {
            highlighter: {
                new(
                    init?: (ready: () => void) => void,
                    highlighter?: (code: string, language: string, callback: (highlightedCode: string) => void) => void,
                ): plugins.codesnippet.highlighter;
            };
        } & codesnippet;
    }

    interface codesnippet {
        setHighlighter(highlighter: plugins.codesnippet.highlighter): void;
    }
    namespace plugins {
        namespace codesnippet {
            interface highlighter {
                highlighter: (code: string, lang: string, callback: (highlightedCode: string) => void) => void;
                init: (ready: () => void) => void;
                languages: { [lang: string]: string };
                readonly queue: Array<
                    (code: string, lang: string, callback: (highlightedCode: string) => void) => void
                >;
                readonly ready: boolean;

                highlight(code: string, lang: string, callback: (highlightedCode: string) => void): void;
            }
        }
    }
}
