import * as Ejs from "ejs";
import * as Koa from "koa";

declare module "Koa" {
    interface ExtendableContext {
        /** Properties values can be of any format; e.g. string, number, boolean, or even nested objects of these types */
        render: (template: string, properties?: { [name: string]: any }) => Promise<string>;
    }
}

/**
 *  Adds render method to the app context.
 */
declare function koaEjs(app: Koa, settings: koaEjs.Settings): void;

declare namespace koaEjs {
    interface Settings {
        /** View root directory */
        root: string;
        /** Global layout file, default is layout, set false to disable layout. */
        layout?: string | false;
        /** Filename extension for the views. Defaults to html. */
        viewExt?: string;
        /** Cache compiled templates */
        cache?: boolean;
        /** Log debug messages. */
        debug?: boolean;
        /** Character to use with angle brackets for open / close (default %). */
        delimiter?: string;
        /** When true, EJS will use an async function for rendering. Depends on async/await support in the JS runtime */
        async?: boolean;
        /** When false, EJS  will only return the HTML, not write to the resposne. Defaults to true */
        writeResp?: boolean;
    }

    /**
     * The ejs API.
     */
    const ejs: typeof Ejs;
}

export = koaEjs;
