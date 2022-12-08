declare namespace CKEDITOR {

    interface CKEditorPluginsCore extends resourceManager {
        codesnippet?: codesnippet
    }

    class codesnippet {
        readonly highlighter: typeof plugins.codesnippet.highlighter
        setHighlighter(highlighter: plugins.codesnippet.highlighter): void
    }
    namespace plugins {
        namespace codesnippet {
            class highlighter {
                highlighter: (
                    code: string,
                    lang: string,
                    callback: (highlightedCode: string) => void
                ) => void
                init: (ready: () => void) => void
                languages: { [lang: string]: string }
                readonly queue: Array<
                    (
                        code: string,
                        lang: string,
                        callback: (highlightedCode: string) => void
                    ) => void
                    >
                readonly ready: boolean

                highlight(
                    code: string,
                    lang: string,
                    callback: (highlightedCode: string) => void
                ): void
            }
        }
    }
}
