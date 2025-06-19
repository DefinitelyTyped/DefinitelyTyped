import dirOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
import { EleventyConfig } from "11ty.ts";

export default function(eleventyConfig: EleventyConfig) {
    eleventyConfig.addPlugin(dirOutputPlugin);

    eleventyConfig.addPlugin(dirOutputPlugin, {
        columns: {
            filesize: true,
            benchmark: true,
        },
        warningFileSize: 400 * 1000,
    });
}
