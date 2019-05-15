import { JsdocToMarkdown, StyleListFormat } from "jsdoc-to-markdown";

const jsdoc2md = new JsdocToMarkdown();

const JsdocDataOptions = {
    files: "file.js"
};

const RenderOptions = {
    data: [],
    plugin: "",
    helper: [""],
    moduleIndexFormat: "table" as StyleListFormat
};

jsdoc2md.render(JsdocDataOptions);
jsdoc2md.renderSync(RenderOptions);
jsdoc2md.getTemplateData(JsdocDataOptions);
jsdoc2md.getTemplateDataSync(JsdocDataOptions);
jsdoc2md.getJsdocData(JsdocDataOptions);
jsdoc2md.getJsdocDataSync(JsdocDataOptions);
jsdoc2md.clear();
jsdoc2md.getNamepaths(JsdocDataOptions);
