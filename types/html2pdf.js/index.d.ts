/// <reference lib="dom" />

declare function html2pdf(
    source?: HTMLElement | string,
    options?: html2pdf.Options,
): html2pdf.Worker;

declare namespace html2pdf {
    // Type aliases using branded string pattern for keeping intelisense working
    type ImageType = "png" | "jpeg" | "webp" | (string & {});
    type PagebreakMode = "avoid-all" | "css" | "legacy" | (string & {});
    type FromType = "string" | "element" | "canvas" | "img" | (string & {});
    type ToTarget = "container" | "canvas" | "img" | "pdf" | (string & {});
    type OutputType = "pdf" | "img" | (string & {});
    type OutputImgType = "img" | "datauristring" | "dataurlstring" | "datauri" | "dataurl" | (string & {});

    /**
     * Worker class for Promise-based PDF generation
     */
    interface Worker extends Promise<any> {
        /**
         * Sets the source (HTML string or element) for the PDF
         */
        from(src: HTMLElement | string, type?: FromType): Worker;

        /**
         * Converts the source to the specified target
         */
        to(target: ToTarget): Worker;

        /**
         * Converts to container
         */
        toContainer(): Worker;

        /**
         * Converts to canvas
         */
        toCanvas(): Worker;

        /**
         * Converts to image
         */
        toImg(): Worker;

        /**
         * Converts to PDF
         */
        toPdf(): Worker;

        /**
         * Routes to appropriate output method
         */
        output(type?: OutputType, options?: any, src?: any): Worker;

        /**
         * Outputs PDF with specified type and options
         */
        outputPdf(type?: string, options?: any): Worker;

        /**
         * Outputs image with specified type and options
         */
        outputImg(type?: OutputImgType, options?: any): Worker;

        /**
         * Saves the PDF with optional filename
         */
        save(filename?: string): Worker;

        /**
         * Sets options and properties
         */
        set(options: Options | Partial<Options>): Worker;

        /**
         * Gets a property value
         */
        get(key: string, callback?: (value: any) => void): Worker;

        /**
         * Sets margin
         */
        setMargin(margin: number | number[]): Worker;

        /**
         * Sets page size
         */
        setPageSize(pageSize?: any): Worker;

        /**
         * Sets progress tracking
         */
        setProgress(val: number, state: any, n: number, stack: any[]): Worker;

        /**
         * Updates progress
         */
        updateProgress(val: number, state: any, n: number, stack: any[]): Worker;

        /**
         * Promise then with progress tracking
         */
        then<TResult1 = any, TResult2 = never>(
            onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
        ): Worker;

        /**
         * Promise then without progress tracking
         */
        thenCore<TResult1 = any, TResult2 = never>(
            onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
        ): Worker;

        /**
         * True Promise then - exits Worker chain
         */
        thenExternal<TResult1 = any, TResult2 = never>(
            onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
        ): Promise<TResult1 | TResult2>;

        /**
         * Promise catch with progress tracking
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
        ): Worker;

        /**
         * True Promise catch - exits Worker chain
         */
        catchExternal<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
        ): Promise<any>;

        /**
         * Throws an error in the Worker's Promise chain
         */
        error(msg: string): Worker;

        // Aliases
        saveAs(filename?: string): Worker;
        using(options: Options | Partial<Options>): Worker;
        export(type?: OutputType, options?: any, src?: any): Worker;
        run<TResult1 = any, TResult2 = never>(
            onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
        ): Worker;
    }

    /**
     * Options for html2pdf configuration
     */
    interface Options {
        /**
         * The default filename of the exported PDF
         * @default 'file.pdf'
         */
        filename?: string | undefined;

        /**
         * PDF margin (in jsPDF units). Can be a single number, [vMargin, hMargin], or [top, left, bottom, right]
         * @default [0,0,0,0]
         */
        margin?: number | number[] | undefined;

        /**
         * The image type and quality used to generate the PDF
         * @default { type: 'jpeg', quality: 0.95 }
         */
        image?: ImageOptions;

        /**
         * If enabled, PDF hyperlinks are automatically added ontop of all anchor tags
         * @default true
         */
        enableLinks?: boolean | undefined;

        /**
         * Controls the pagebreak behaviour on the page
         * @default { mode: ['css', 'legacy'] }
         */
        pagebreak?: PagebreakOptions | undefined;

        /**
         * Configuration options sent directly to html2canvas
         */
        html2canvas?: any;

        /**
         * Configuration options sent directly to jsPDF
         */
        jsPDF?: any;
    }

    /**
     * Image options for PDF generation
     */
    interface ImageOptions {
        /**
         * The image type. HTMLCanvasElement only supports 'png', 'jpeg', and 'webp' (on Chrome)
         * @default 'jpeg'
         */
        type?: ImageType | undefined;

        /**
         * The image quality, from 0 to 1. This setting is only used for jpeg/webp (not png)
         * @default 0.95
         */
        quality?: number | undefined;
    }

    /**
     * Pagebreak options for controlling page breaks
     */
    interface PagebreakOptions {
        /**
         * The mode(s) on which to automatically add page-breaks
         * @default ['css', 'legacy']
         */
        mode?: PagebreakMode | Array<PagebreakMode> | undefined;

        /**
         * CSS selectors for which to add page-breaks before each element
         * @default []
         */
        before?: string | string[] | undefined;

        /**
         * CSS selectors for which to add page-breaks after each element
         * @default []
         */
        after?: string | string[] | undefined;

        /**
         * CSS selectors for which to avoid page-breaks
         * @default []
         */
        avoid?: string | string[] | undefined;
    }
}

export = html2pdf;
export as namespace html2pdf;
