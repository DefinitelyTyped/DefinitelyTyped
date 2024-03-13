import { Options as HtmlMinifierOptions } from "html-minifier";
import { Middleware } from "koa";

declare function koaHtmlMinifier(options?: koaHtmlMinifier.Options): Middleware;

declare namespace koaHtmlMinifier {
    type Options = HtmlMinifierOptions;
}

export = koaHtmlMinifier;
