import { EleventyConfig } from "11ty.ts";
import pluginTOC = require("eleventy-plugin-toc");

export default function(eleventyConfig: EleventyConfig) {
    eleventyConfig.addPlugin(pluginTOC);

    eleventyConfig.addPlugin(pluginTOC, {
        tags: ["h2", "h3"],
        wrapper: "div",
        wrapperClass: "cls",
        wrapperLabel: "Table of Contents",
        ul: true,
        flat: true,
    });
}
