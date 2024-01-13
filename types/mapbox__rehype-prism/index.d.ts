import { Root } from "hast";
import { Plugin } from "unified";

declare namespace rehypePrism {
    interface Options {
        /**
         * By default, if `{name}` does not correspond to a [language supported by refractor](https://github.com/wooorm/refractor#syntaxes) an error will be thrown.
         * If you would like to silently skip `<code>` elements with invalid languages, set this option to `true`.
         *
         * @default false
         */
        ignoreMissing?: boolean | undefined;

        /**
         * Provide [aliases](https://github.com/wooorm/refractor#refractoraliasname-alias) to refractor to register as alternative names for a language.
         *
         * @default undefined
         */
        alias?: Record<string, string | string[]> | undefined;
    }
}

/**
 * `rehype().use(rehypePrism, [options])`
 *
 * Syntax highlights `pre > code`.
 * Under the hood, it uses [refractor](https://github.com/wooorm/refractor), which is a virtual version of [Prism](http://prismjs.com/).
 *
 * The code language is configured by setting a `language-{name}` class on the `<code>` element.
 * You can use any [language supported by refractor](https://github.com/wooorm/refractor#syntaxes).
 *
 * If no `language-{name}` class is found on a `<code>` element, it will be skipped.
 */
declare const rehypePrism: Plugin<[rehypePrism.Options?], Root>;

export = rehypePrism;
