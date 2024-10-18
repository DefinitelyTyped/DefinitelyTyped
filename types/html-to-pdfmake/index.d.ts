/**
 * This module will convert some basic and valid HTML code to its equivalent in pdfmake.
 * @see https://www.npmjs.com/package/html-to-pdfmake
 */
declare function htmlToPdfmake(
    html: string,
    options?: Partial<{
        /**
         * If you use Node, then you'll have to pass the window object
         */
        window: import("jsdom").DOMWindow;
        /**
         * You can overwrite the default styles using defaultStyles.
         * Please, note that the above default styles are stronger than the ones defined in the style classes.
         */
        defaultStyles: import("pdfmake/interfaces").StyleDictionary;
        /**
         * In some cases, you may see some extra blank spaces in the PDF. Because removing them could be quite resource consuming, the option is false by default.
         */
        removeExtraBlanks: boolean;
        /**
         * By default the display:none elements won't be parsed. Set this option to true to display the hidden elements in the PDF.
         */
        showhidden: boolean;
        /**
         * You can define a list of style properties that should not be parsed.
         */
        ignoreStyles: string[];
        /**
         * If you're using html-to-pdfmake in a web browser with images, then you can set this option to true
         * and it will automatically load your images in your PDF using the {images} option of PDFMake.
         * Using this option will change the output of html-to-pdfmake that will return an object with {content, images}
         */
        imagesByReference: boolean;
        /**
         * You can overwrite the default sizes for the old HTML4 tag <font> by using fontSizes. It must be an array with 7 values
         */
        fontSizes: [number, number, number, number, number, number, number];
        /**
         * By passing replaceText as a function with two parameters (text and nodes) you can modify the text of all the nodes in your HTML document.
         */
        replaceText: (text: string, nodes: HTMLElement[]) => string;
        /**
         * By passing tableAutoSize with true, then the program will try to define widths and heights for the tables, based on CSS properties width and height that have been provided to TH or TD.
         */
        tableAutoSize: boolean;
    }>,
): import("pdfmake/interfaces").Content;

export = htmlToPdfmake;
