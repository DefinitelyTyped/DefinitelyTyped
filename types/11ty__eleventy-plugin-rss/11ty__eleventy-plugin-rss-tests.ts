import pluginRss = require("@11ty/eleventy-plugin-rss");
import { EleventyConfig } from "11ty.ts";
import { closingSingleTagOptionEnum } from "posthtml-render";

export default function(eleventyConfig: EleventyConfig) {
    eleventyConfig.addPlugin(pluginRss.feedPlugin, {
        type: "atom",
        outputPath: "/feed.xml",
        collection: {
            name: "posts",
            limit: 10,
        },
        metadata: {
            language: "en",
            title: "Blog Title",
            subtitle: "This is a longer description about your blog.",
            base: "https://example.com/",
            author: {
                name: "Your Name",
                email: "",
            },
        },
    });

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addPlugin(pluginRss, {
        posthtmlRenderOptions: {
            closingSingleTag: closingSingleTagOptionEnum.default,
        },
    });

    eleventyConfig.addLiquidFilter("getNewestCollectionItemDate", pluginRss.getNewestCollectionItemDate);
    eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
    eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
    eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);
    eleventyConfig.addLiquidFilter("htmlToAbsoluteUrls", pluginRss.htmlToAbsoluteUrls);
}
