/// <reference types="node" />
import type { EleventyConfig, EleventyScope } from "11ty.ts";
import type { Options as PostHtmlRenderOptions } from "posthtml-render";

declare namespace pluginRss {
    namespace feedPlugin {
        interface Collection {
            /**
             * Collection entries to iterate over to populate your feed.
             */
            name?: string | undefined;

            /**
             * Number of entries to include (`0` means no limit).
             */
            limit?: number | undefined;
        }

        interface Metadata {
            language?: string | undefined;
            title?: string | undefined;
            subtitle?: string | undefined;
            base?: string | undefined;
            author?: {
                name: string;
                email?: string | undefined;
            } | undefined;
        }

        interface Options {
            /**
             * @default 'atom'
             */
            type?: "atom" | "rss" | "json" | undefined;

            /**
             * Where to write the template in the output directory.
             *
             * @default 'feed.xml'
             */
            outputPath?: string | undefined;

            /**
             * Change where the virtual template pretends to live on the file system (e.g. if you want project directory data files to apply via the [Data Cascade](https://www.11ty.dev/docs/data-cascade/)).
             */
            inputPath?: string | undefined;

            collection: Collection | undefined;

            /**
             * Content used to populate the feed boilerplate.
             */
            metadata?: Metadata | undefined;

            /**
             * URL to an XSL stylesheet to change how the feed is rendered in the browser (only for Atom and RSS feeds).
             */
            stylesheet?: string | undefined;

            /**
             * Additional data to apply to the template (e.g. to add your feed to the [Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)).
             */
            templateData?: Record<string, unknown> | undefined;
        }
    }

    /**
     * This method creates a feed template directly from your plugin configuration, without requiring additional files in your project. Read more about
     * [Virtual Templates](https://www.11ty.dev/docs/virtual-templates/).
     */
    function feedPlugin(config: EleventyConfig, options: feedPlugin.Options): void;

    /**
     * Gets the most recently updated content in the collection. Use with `dateToRfc3339` to properly format the Date for the top-level `<updated>` element.
     */
    function getNewestCollectionItemDate(this: EleventyScope): string;

    /**
     * format a Date for use in a `<entry><updated>` element. (Atom feeds)
     */
    function dateToRfc3339(this: EleventyScope): string;

    /**
     * format a Date for use in a `<pubDate>` element. (RSS feeds)
     */
    function dateToRfc822(this: EleventyScope): string;

    /**
     * Converts a single URL (relative or absolute path) to a full absolute URL including protocol, domain, full path.
     *
     * @deprecated
     * For performance reasons, the [`renderTransforms` filter](https://www.11ty.dev/docs/filters/render-transforms/) is recommended instead, making use of the HTML `<base>` plugin.
     */
    function absoluteUrl(this: EleventyScope): string;

    /**
     * Transforms all of the URLs in a block of HTML with `absoluteUrl` above. Uses [posthtml-urls](https://github.com/posthtml/posthtml-urls) with `a[href]`, `video[src]`, `audio[src]`, `source`,
     * `img[src]`, `[srcset]` and a whole bunch more.
     *
     * @deprecated
     * For performance reasons, the [`renderTransforms` filter](https://www.11ty.dev/docs/filters/render-transforms/) is recommended instead, making use of the HTML `<base>` plugin.
     */
    function htmlToAbsoluteUrls(this: EleventyScope): string;

    interface Options {
        posthtmlRenderOptions?: PostHtmlRenderOptions | undefined;
    }
}

declare function pluginRss(config: EleventyConfig, options: pluginRss.Options): void;

export = pluginRss;
