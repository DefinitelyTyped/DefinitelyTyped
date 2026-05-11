import { Plugin } from "postcss";

declare namespace header {
    interface Options {
        /**
         * The string which will be put at the beginning of the css file.
         * @default ''
         */
        header?: string | undefined;
        /**
         * The string which will be put at the beginning of the css file.
         */
        banner?: string | undefined;
    }
    type Header = Plugin<Options>;
}

declare const header: header.Header;

export = header;
