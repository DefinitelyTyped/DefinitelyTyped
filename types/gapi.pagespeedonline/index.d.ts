/// <reference types="gapi" />

declare namespace gapi.client.pagespeedonline {
    export interface pagespeedapi {
        /**
         * Runs Page Speed analysis on the page at the specified URL, and returns a Page Speed score, a list of suggestions to make that page faster, and other information.
         */
        runpagespeed(object: {
            /**
             * The URL of the page for which the PageSpeed Insights API should generate results.
             */
            url: string;
            /**
             * The locale that results should be generated in.
             */
            locale?: string | undefined;
            /**
             * The PageSpeed rules to run. Can be specified multiple times
             */
            rule?: string[] | undefined;
            /**
             * Indicates if binary data containing a screenshot should be included
             */
            screenshot?: boolean | undefined;
            /**
             * The strategy to use when analyzing the page. Valid values are desktop and mobile.
             */
            stategy?: string | undefined;
            /**
             * Selector specifying which fields to include in a partial response.
             */
            fields?: string | undefined;
        }): HttpRequest<GoogleApiPageSpeedOnlineResource>;
    }
}

interface GoogleApiPageSpeedOnlineResource {
    /**
     * Kind of result.
     */
    kind: string;
    /**
     * Canonicalized and final URL for the document, after following page redirects (if any).
     */
    id: string;
    /**
     * Response code for the document. 200 indicates a normal page load. 4xx/5xx indicates an error.
     */
    responseCode: number;
    /**
     * Title of the page, as displayed in the browser's title bar.
     */
    title: string;
    /**
     * The PageSpeed Score (0-100), which indicates how much faster a page could be. A high score indicates little room for improvement, while a lower score indicates more room for improvement.
     */
    score: number;
    /**
     * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
     */
    pageStats: {
        /**
         * Number of HTTP resources loaded by the page.
         */
        numberResources: number;
        /**
         * Number of unique hosts referenced by the page.
         */
        numberHosts: number;
        /**
         * Total size of all request bytes sent by the page.
         */
        totalRequestBytes: string;
        /**
         * Number of static (that is, cacheable) resources on the page.
         */
        numberStaticResources: number;
        /**
         * Number of uncompressed response bytes for the main HTML document and all iframes on the page.
         */
        htmlResponseBytes: string;
        /**
         * Number of uncompressed response bytes for text resources on the page that aren't covered by other statistics; that is, non-HTML, non-script, non-CSS resources.
         */
        textResponseBytes: string;
        /**
         * Number of uncompressed response bytes for CSS resources on the page.
         */
        cssResponsebytes: string;
        /**
         * Number of response bytes for image resources on the page.
         */
        imageResponseBytes: string;
        /**
         * Number of uncompressed response bytes for JS resources on the page.
         */
        javascriptResponsebytes: string;
        /**
         * Number of response bytes for Flash resources on the page.
         */
        flashResponseBytes: string;
        /**
         * Number of response bytes for other resources on the page.
         */
        otherResponsebytes: string;
        /**
         * Number of JavaScript resources referenced by the page.
         */
        numberJsResources: number;
        /**
         * Number of CSS resources referenced by the page.
         */
        numberCssResources: number;
    };
    /**
     * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
     */
    formattedResults: {
        /**
         * The locale of the formattedResults, such as en_US.
         */
        locale: string;
        /**
         * Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server.
         */
        ruleResults: {
            AvoidBadRequests: GoogleApiPageSpeedOnlineRuleResource;
            AvoidCharsetInMetaTag: GoogleApiPageSpeedOnlineRuleResource;
            AvoidCssImport: GoogleApiPageSpeedOnlineRuleResource;
            AvoidLandingPageRedirects: GoogleApiPageSpeedOnlineRuleResource;
            AvoidLongRunningScripts: GoogleApiPageSpeedOnlineRuleResource;
            DeferParsingJavaScript: GoogleApiPageSpeedOnlineRuleResource;
            EnableGzipCompression: GoogleApiPageSpeedOnlineRuleResource;
            InlineSmallCss: GoogleApiPageSpeedOnlineRuleResource;
            InlineSmallJavaScript: GoogleApiPageSpeedOnlineRuleResource;
            LeverageBrowserCaching: GoogleApiPageSpeedOnlineRuleResource;
            MinifyCss: GoogleApiPageSpeedOnlineRuleResource;
            MinifyHTML: GoogleApiPageSpeedOnlineRuleResource;
            MinifyJavaScript: GoogleApiPageSpeedOnlineRuleResource;
            MinimizeRedirects: GoogleApiPageSpeedOnlineRuleResource;
            MinimizeRequestSize: GoogleApiPageSpeedOnlineRuleResource;
            OptimizeImages: GoogleApiPageSpeedOnlineRuleResource;
            OptimizeTheOrderOfStylesAndScripts: GoogleApiPageSpeedOnlineRuleResource;
            PreferAsyncResources: GoogleApiPageSpeedOnlineRuleResource;
            PutCssInTheDocumentHead: GoogleApiPageSpeedOnlineRuleResource;
            RemoveQueryStringsFromStaticResources: GoogleApiPageSpeedOnlineRuleResource;
            ServerResourcesFromAConsistentUrl: GoogleApiPageSpeedOnlineRuleResource;
            ServerScaledImages: GoogleApiPageSpeedOnlineRuleResource;
            ServeResponseTime: GoogleApiPageSpeedOnlineRuleResource;
            SpecifyACacheValidator: GoogleApiPageSpeedOnlineRuleResource;
            SpecifyAVaryAcceptEncodingHeader: GoogleApiPageSpeedOnlineRuleResource;
            SpecifyCharsetEarly: GoogleApiPageSpeedOnlineRuleResource;
            SpecifyImageDimensions: GoogleApiPageSpeedOnlineRuleResource;
            SpriteImages: GoogleApiPageSpeedOnlineRuleResource;
        };
    };
    /**
     * The version of the PageSpeed SDK used to generate these results.
     */
    version: {
        /**
         * The major version number of the PageSpeed SDK used to generate these results.
         */
        major: number;
        /**
         * The minor version number of the PageSpeed SDK used to generate these results.
         */
        minor: number;
    };
    /**
     * List of rules that were specified in the request, but which the server did not know how to instantiate.
     */
    invalidRules: string[];
}

interface GoogleApiPageSpeedOnlineRuleResource {
    /**
     * Localized name of the rule, intended for presentation to a user.
     */
    localizedRuleName: string;
    /**
     * The score (0-100) for this rule. The rule score indicates how well a page implements the recommendations for the given rule.
     */
    ruleScore: number;
    /**
     * The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster.
     */
    ruleImpact: number;
    /**
     * List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details.
     */
    urlBlocks: {
        /**
         * Heading to be displayed with the list of URLs.
         */
        header: {
            /**
             * A localized format string with $N placeholders, where N is the 1-indexed argument number.
             */
            format: string;
            /**
             * List of arguments for the format string.
             */
            args: {
                /**
                 * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
                 */
                type: string;
                /**
                 * Argument value, as a localized string.
                 */
                value: string;
            }[];
        };
        /**
         * List of entries that provide information about URLs in the URL block. Optional.
         */
        urls: {
            /**
             * A format string that gives information about the URL, and a list of arguments for that format string.
             */
            result: {
                /**
                 * A localized format string with $N placeholders, where N is the 1-indexed argument number. For example: 'Minifying the resource at URL $1 can save $2 bytes'.
                 */
                format: string;
                /**
                 * List of arguments for the format string.
                 */
                args: {
                    /**
                     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
                     */
                    type: string;
                    /**
                     * Argument value, as a localized string.
                     */
                    value: string;
                }[];
            };
            /**
             * List of entries that provide additional details about a single URL. Optional.
             */
            details: {
                /**
                 * A localized format string with $N placeholders, where N is the 1-indexed argument number.
                 */
                format: string;
                /**
                 * List of arguments for the format string.
                 */
                args: {
                    /**
                     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
                     */
                    type: string;
                    /**
                     * Argument value, as a localized string.
                     */
                    value: string;
                }[];
            }[];
        }[];
    }[];
}

/** */
