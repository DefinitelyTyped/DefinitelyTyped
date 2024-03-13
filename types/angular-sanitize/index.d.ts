declare var _: string;
export = _;

import * as angular from "angular";

declare module "angular" {
    ///////////////////////////////////////////////////////////////////////////////
    // ngSanitize module (angular-sanitize.js)
    // see https://code.angularjs.org/1.7.0/docs/api/ngSanitize
    ///////////////////////////////////////////////////////////////////////////////
    namespace sanitize {
        /**
         * Sanitizes an html string by stripping all potentially dangerous tokens.
         *
         * The input is sanitized by parsing the HTML into tokens.
         * All safe tokens (from a trusted list) are then serialized back to a properly
         * escaped HTML string.
         * This means that no unsafe input can make it into the returned string.
         *
         * URLs allowed in attribute values are configured using the methods aHrefSanitizationTrustedUrlList
         * and imgSrcSanitizationTrustedUrlList of $compileProvider.
         * The input may also contain SVG markup if this is enabled via $sanitizeProvider.
         *
         * @param html HTML input.
         */
        interface ISanitizeService {
            (html: string): string;
        }

        /**
         * Creates and configures $sanitize instance.
         */
        interface ISanitizeProvider {
            /**
             * Enables a subset of svg to be supported by the sanitizer.
             *
             * @see https://code.angularjs.org/1.7.0/docs/api/ngSanitize/provider/$sanitizeProvider#enableSvg
             * @param flag Enable or disable SVG support in the sanitizer.
             */
            enableSvg(): boolean;
            enableSvg(flag: boolean): ISanitizeProvider;
            enableSvg(flag?: boolean): boolean | ISanitizeProvider;

            /**
             * Extends the built-in lists of valid HTML/SVG elements, i.e. elements that are considered safe and are not stripped off during sanitization.
             *
             * You can extend the following lists of elements:
             * htmlElements: A list of elements (tag names) to extend the current list of safe HTML elements. HTML elements considered safe will not be removed during sanitization. All other elements will be stripped off.
             * htmlVoidElements: This is similar to htmlElements, but marks the elements as "void elements" (similar to HTML void elements). These elements have no end tag and cannot have content.
             * svgElements: This is similar to htmlElements, but for SVG elements. This list is only taken into account if SVG is enabled for $sanitize.
             *
             * @see https://code.angularjs.org/1.7.0/docs/api/ngSanitize/provider/$sanitizeProvider#addValidElements
             * @param elements A list of valid HTML elements or an object with one or more of the following properties: htmlElements, htmlVoidElements, svgElements
             */
            addValidElements(
                elements: string[] | {
                    htmlElements?: string[] | undefined;
                    htmlVoidElements?: string[] | undefined;
                    svgElements?: string[] | undefined;
                },
            ): ISanitizeProvider;

            /**
             * Extends the built-in list of valid attributes, i.e. attributes that are considered safe and are not stripped off during sanitization.
             *
             * Note: The new attributes will not be treated as URI attributes, which means their
             * values will not be sanitized as URIs using $compileProvider's
             * aHrefSanitizationTrustedUrlList and imgSrcSanitizationTrustedUrlList.
             * @see https://code.angularjs.org/1.7.0/docs/api/ngSanitize/provider/$sanitizeProvider#addValidAttrs
             * @param attrs A list of valid attributes.
             */
            addValidAttrs(attrs: string[]): ISanitizeProvider;
        }

        ///////////////////////////////////////////////////////////////////////////
        // Filters included with the ngSanitize
        // see https://github.com/angular/angular.js/tree/v1.2.0/src/ngSanitize/filter
        ///////////////////////////////////////////////////////////////////////////
        export namespace filter {
            /**
             * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and plain email address links.
             * @see https://code.angularjs.org/1.7.0/docs/api/ngSanitize/filter/linky
             * @param text Input text.
             * @param target ILinkyTargetType Window (_blank|_self|_parent|_top) or named frame to open links in.
             * @param attributes Add custom attributes to the link element.
             * @return Html-linkified and sanitized text.
             */
            interface ILinky {
                (
                    text: string,
                    target?: string,
                    attributes?: { [attribute: string]: string } | ((url: string) => { [attribute: string]: string }),
                ): string;
            }
        }

        ///////////////////////////////////////////////////////////////////////////////
        // Extend angular $filter declarations to include filters from angular.sanitize module
        ///////////////////////////////////////////////////////////////////////////////
        interface IFilterService {
            (name: "linky"): angular.sanitize.filter.ILinky;
        }
    }
}
