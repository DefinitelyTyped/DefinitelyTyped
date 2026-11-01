import { Content, ImageDefinition, StyleDictionary } from "pdfmake/interfaces";

/**
 * This module will convert some basic and valid HTML code to its equivalent in pdfmake.
 * @see https://www.npmjs.com/package/html-to-pdfmake
 */
declare function htmlToPdfmake(
    html: string,
    options: htmlToPdfmake.Options & { imagesByReference: true },
): htmlToPdfmake.ResultWithImages;
declare function htmlToPdfmake(
    html: string,
    options?: htmlToPdfmake.Options & { imagesByReference?: false | undefined },
): Content;
declare function htmlToPdfmake(
    html: string,
    options?: htmlToPdfmake.Options,
): Content | htmlToPdfmake.ResultWithImages;

declare namespace htmlToPdfmake {
    /**
     * The part of a `window` object that html-to-pdfmake uses: its `DOMParser`.
     * Any DOM implementation fits, e.g. the window of jsdom, happy-dom or linkedom.
     */
    interface WindowLike {
        DOMParser: new() => {
            parseFromString(string: string, type: "text/html"): unknown;
        };
    }

    /**
     * The intermediate node html-to-pdfmake builds for an element, passed to `customTag`.
     * It becomes a pdfmake content element and carries extra properties such as `nodeName`.
     */
    type CustomTagNode = Record<string, any>;

    interface Options {
        /**
         * If you use Node, then you'll have to pass the window object
         */
        window?: WindowLike | undefined;
        /**
         * You can overwrite the default styles using defaultStyles.
         * Please, note that the above default styles are stronger than the ones defined in the style classes.
         */
        defaultStyles?: StyleDictionary | undefined;
        /**
         * In some cases, you may see some extra blank spaces in the PDF. Because removing them could be quite resource consuming, the option is false by default.
         */
        removeExtraBlanks?: boolean | undefined;
        /**
         * Collapse the vertical margins between sibling blocks like CSS does:
         * the gap becomes max(bottom, top) instead of bottom + top.
         */
        collapseMargins?: boolean | undefined;
        /**
         * By default the display:none elements won't be parsed. Set this option to true to display the hidden elements in the PDF.
         */
        showHidden?: boolean | undefined;
        /**
         * By default every node gets the class `html-TAG` (e.g. `html-p`) added to its style. Set this option to true to not add it.
         */
        removeTagClasses?: boolean | undefined;
        /**
         * You can define a list of style properties that should not be parsed.
         */
        ignoreStyles?: string[] | undefined;
        /**
         * If you're using html-to-pdfmake in a web browser with images, then you can set this option to true
         * and it will automatically load your images in your PDF using the {images} option of PDFMake.
         * Using this option will change the output of html-to-pdfmake that will return an object with {content, images}
         */
        imagesByReference?: boolean | undefined;
        /**
         * You can overwrite the default sizes for the old HTML4 tag <font> by using fontSizes. It must be an array with 7 values
         */
        fontSizes?: [number, number, number, number, number, number, number] | undefined;
        /**
         * By passing replaceText as a function with two parameters (text and nodes) you can modify the text of all the nodes in your HTML document.
         */
        replaceText?: ((text: string, nodes: HTMLElement[]) => string) | undefined;
        /**
         * By passing tableAutoSize with true, then the program will try to define widths and heights for the tables, based on CSS properties width and height that have been provided to TH or TD.
         */
        tableAutoSize?: boolean | undefined;
        /**
         * Handle custom HTML tags or change how a tag is converted. Called for every element; return the (modified) node.
         */
        customTag?:
            | ((params: { element: HTMLElement; parents: HTMLElement[]; ret: CustomTagNode }) => CustomTagNode)
            | undefined;
    }

    /**
     * The result when `imagesByReference` is `true`. Pass `images` to the `images` property of the document definition.
     */
    interface ResultWithImages {
        content: Content;
        images: Record<string, string | ImageDefinition>;
    }
}

export = htmlToPdfmake;
