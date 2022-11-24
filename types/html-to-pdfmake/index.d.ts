// Type definitions for html-to-pdfmake 2.1
// Project: https://github.com/Aymkdn/html-to-pdfmake#readme
// Definitions by: Martin Zloch <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

/**
 * This module will convert some basic and valid HTML code to its equivalent in pdfmake.
 * @see https://www.npmjs.com/package/html-to-pdfmake
 */
declare function htmlToPdfmake(
    html: string,
    options?: Partial<{
        /**
         * You can overwrite the default styles using defaultStyles.
         * Please, note that the above default styles are stronger than the ones defined in the style classes.
         */
        defaultStyles: import("pdfmake/interfaces").StyleDictionary;
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
        /**
         * If you use Node, then you'll have to pass the window object
         */
        window: import("jsdom").DOMWindow;
    }>,
): import("pdfmake/interfaces").Content;

export = htmlToPdfmake;
